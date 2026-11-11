// =============================================================================
// COLORATEUR SYNTAXIQUE ULTRA-RAPIDE STYLE VS CODE (DARK+)
// Zéro dépendance, synchronisé avec le textarea transparent
// Sécurisé contre toute boucle infinie ou blocage du runtime
// =============================================================================

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function highlightCode(code, fileName = 'index.html') {
  if (!code) return '';
  const lower = fileName.toLowerCase();
  if (lower.endsWith('.css')) return highlightCSS(code);
  if (lower.endsWith('.js')) return highlightJS(code);
  if (lower.endsWith('.txt') || lower.endsWith('.xml')) return escapeHtml(code);
  return highlightHTML(code);
}

function highlightHTML(code) {
  let result = '';
  let i = 0;
  const len = code.length;

  while (i < len) {
    const prevI = i;

    // 1. Commentaires HTML <!-- ... -->
    if (code.startsWith('<!--', i)) {
      const end = code.indexOf('-->', i);
      const comment = end !== -1 ? code.slice(i, end + 3) : code.slice(i);
      result += `<span class="token-comment">${escapeHtml(comment)}</span>`;
      i += comment.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 2. Déclaration DOCTYPE <!DOCTYPE ...>
    if (code.slice(i, i + 9).toLowerCase() === '<!doctype') {
      const end = code.indexOf('>', i);
      const doctype = end !== -1 ? code.slice(i, end + 1) : code.slice(i);
      result += `<span class="token-doctype">${escapeHtml(doctype)}</span>`;
      i += doctype.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 3. Balises HTML <tag attr="val"> ou </tag>
    if (code[i] === '<') {
      const end = code.indexOf('>', i);
      if (end !== -1) {
        const fullTag = code.slice(i, end + 1);
        let tagInner = fullTag.slice(1, -1);
        let tagHtml = '<span class="token-bracket">&lt;</span>';

        if (tagInner.startsWith('/')) {
          tagHtml += '<span class="token-bracket">/</span>';
          tagInner = tagInner.slice(1);
        }

        const nameMatch = tagInner.match(/^([a-zA-Z0-9_-]+)/);
        if (nameMatch) {
          const tagName = nameMatch[1];
          tagHtml += `<span class="token-tag">${escapeHtml(tagName)}</span>`;
          tagInner = tagInner.slice(tagName.length);

          // Attributs à l'intérieur de la balise
          const attrRegex = /([a-zA-Z0-9_-]+)(?:(=)(".*?"|'.*?'|[^\s>]+))?/g;
          let lastIndex = 0;
          let match;

          while ((match = attrRegex.exec(tagInner)) !== null) {
            tagHtml += escapeHtml(tagInner.slice(lastIndex, match.index));
            // Nom de l'attribut (class, id, href, src, lang...)
            tagHtml += `<span class="token-attr-name">${escapeHtml(match[1])}</span>`;
            if (match[2]) {
              tagHtml += `<span class="token-operator">=</span>`;
              if (match[3]) {
                tagHtml += `<span class="token-attr-value">${escapeHtml(match[3])}</span>`;
              }
            }
            lastIndex = attrRegex.lastIndex;
          }
          tagHtml += escapeHtml(tagInner.slice(lastIndex));
        } else {
          tagHtml += escapeHtml(tagInner);
        }

        tagHtml += '<span class="token-bracket">&gt;</span>';
        result += tagHtml;
        i += fullTag.length;
        if (i <= prevI) i = prevI + 1;
        continue;
      } else {
        // Balise non fermée (ex: '<div' ou '<p class="') en cours de frappe
        const rest = code.slice(i);
        result += `<span class="token-bracket">&lt;</span>${escapeHtml(rest.slice(1))}`;
        i = len;
        break;
      }
    }

    // 4. Texte ordinaire
    const nextBracket = code.indexOf('<', i + 1);
    const chunk = nextBracket !== -1 ? code.slice(i, nextBracket) : code.slice(i);
    result += escapeHtml(chunk);
    i += Math.max(1, chunk.length);

    if (i <= prevI) {
      result += escapeHtml(code[prevI]);
      i = prevI + 1;
    }
  }

  return result;
}

function highlightCSS(code) {
  let result = '';
  let i = 0;
  const len = code.length;

  while (i < len) {
    const prevI = i;

    // 1. Commentaires CSS /* ... */
    if (code.startsWith('/*', i)) {
      const end = code.indexOf('*/', i);
      const comment = end !== -1 ? code.slice(i, end + 2) : code.slice(i);
      result += `<span class="token-comment">${escapeHtml(comment)}</span>`;
      i += comment.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 2. Chaînes de caractères "..." ou '...'
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let end = i + 1;
      while (end < len && code[end] !== q) {
        if (code[end] === '\\') end++;
        end++;
      }
      const str = code.slice(i, end + 1);
      result += `<span class="token-string">${escapeHtml(str)}</span>`;
      i += str.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 3. Couleurs Hex (#f59e0b, #fff, etc.)
    const hexMatch = code.slice(i).match(/^#([0-9a-fA-F]{3,8})\b/);
    if (hexMatch) {
      result += `<span class="token-color">${hexMatch[0]}</span>`;
      i += hexMatch[0].length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 4. Nombres avec unités (10px, 2.5rem, 100%, 0.4s)
    const numMatch = code.slice(i).match(/^([0-9]*\.?[0-9]+(px|rem|em|%|vh|vw|s|ms|deg|fr)?)/i);
    if (numMatch && (i === 0 || /[\s:,(]/.test(code[i - 1]))) {
      result += `<span class="token-number">${escapeHtml(numMatch[1])}</span>`;
      i += numMatch[1].length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 5. Directives @media, @keyframes, @import
    if (code[i] === '@') {
      const atMatch = code.slice(i).match(/^@[a-zA-Z0-9_-]+/);
      if (atMatch) {
        result += `<span class="token-keyword">${escapeHtml(atMatch[0])}</span>`;
        i += atMatch[0].length;
        if (i <= prevI) i = prevI + 1;
        continue;
      }
    }

    // 6. Ponctuation CSS
    if (/[{};:,]/.test(code[i])) {
      result += `<span class="token-punctuation">${code[i]}</span>`;
      i++;
      continue;
    }

    // 7. Mots-clés / Propriétés / Sélecteurs
    const wordMatch = code.slice(i).match(/^[a-zA-Z_\-][a-zA-Z0-9_\-]*/);
    if (wordMatch) {
      const word = wordMatch[0];
      const after = code.slice(i + word.length).trimStart();

      if (after.startsWith(':') && !after.startsWith('::')) {
        // Propriété CSS (ex: color, padding, display, background)
        result += `<span class="token-property">${escapeHtml(word)}</span>`;
      } else if (['flex', 'grid', 'none', 'auto', 'inherit', 'initial', 'unset', 'block', 'inline', 'relative', 'absolute', 'sticky', 'fixed', 'center', 'solid', 'dashed', 'ease', 'infinite', 'bold', 'italic'].includes(word.toLowerCase())) {
        // Valeur CSS standard
        result += `<span class="token-value">${escapeHtml(word)}</span>`;
      } else if (word.startsWith('--')) {
        // Variable CSS (--gold-primary)
        result += `<span class="token-variable">${escapeHtml(word)}</span>`;
      } else {
        // Sélecteur ou mot ordinaire
        result += `<span class="token-selector">${escapeHtml(word)}</span>`;
      }
      i += word.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 8. Espaces ou autres caractères
    result += escapeHtml(code[i]);
    i++;

    if (i <= prevI) {
      result += escapeHtml(code[prevI]);
      i = prevI + 1;
    }
  }

  return result;
}

function highlightJS(code) {
  let result = '';
  let i = 0;
  const len = code.length;

  const JS_KEYWORDS = new Set([
    'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
    'try', 'catch', 'finally', 'async', 'await', 'import', 'export', 'default',
    'class', 'new', 'this', 'typeof', 'instanceof', 'void', 'switch', 'case', 'break'
  ]);

  const JS_BUILTINS = new Set([
    'document', 'window', 'localStorage', 'sessionStorage', 'console', 'Math',
    'JSON', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Promise', 'fetch', 'setTimeout'
  ]);

  while (i < len) {
    const prevI = i;

    // 1. Commentaires // ... ou /* ... */
    if (code.startsWith('//', i)) {
      const end = code.indexOf('\n', i);
      const comment = end !== -1 ? code.slice(i, end) : code.slice(i);
      result += `<span class="token-comment">${escapeHtml(comment)}</span>`;
      i += comment.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }
    if (code.startsWith('/*', i)) {
      const end = code.indexOf('*/', i);
      const comment = end !== -1 ? code.slice(i, end + 2) : code.slice(i);
      result += `<span class="token-comment">${escapeHtml(comment)}</span>`;
      i += comment.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 2. Chaînes de caractères ("...", '...', `...`)
    if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
      const q = code[i];
      let end = i + 1;
      while (end < len && code[end] !== q) {
        if (code[end] === '\\') end++;
        end++;
      }
      const str = code.slice(i, end + 1);
      result += `<span class="token-string">${escapeHtml(str)}</span>`;
      i += str.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 3. Nombres (123, 0.5, etc.)
    const numMatch = code.slice(i).match(/^([0-9]*\.?[0-9]+)\b/);
    if (numMatch && (i === 0 || /[\s:,(=\-+*\/]/.test(code[i - 1]))) {
      result += `<span class="token-number">${escapeHtml(numMatch[1])}</span>`;
      i += numMatch[1].length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 4. Opérateurs et ponctuation
    if (/[{}();:,.[\]]/.test(code[i])) {
      result += `<span class="token-punctuation">${code[i]}</span>`;
      i++;
      continue;
    }

    if (/[=+\-*\/%&|!<>?]/.test(code[i])) {
      result += `<span class="token-operator">${escapeHtml(code[i])}</span>`;
      i++;
      continue;
    }

    // 5. Identifiants & mots-clés
    const idMatch = code.slice(i).match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
    if (idMatch) {
      const word = idMatch[0];
      const after = code.slice(i + word.length).trimStart();

      if (JS_KEYWORDS.has(word)) {
        result += `<span class="token-keyword">${escapeHtml(word)}</span>`;
      } else if (JS_BUILTINS.has(word)) {
        result += `<span class="token-variable">${escapeHtml(word)}</span>`;
      } else if (word === 'true' || word === 'false' || word === 'null' || word === 'undefined') {
        result += `<span class="token-value">${escapeHtml(word)}</span>`;
      } else if (after.startsWith('(')) {
        // Appel de fonction / méthode
        result += `<span class="token-function">${escapeHtml(word)}</span>`;
      } else {
        result += `<span class="token-attr-name">${escapeHtml(word)}</span>`;
      }
      i += word.length;
      if (i <= prevI) i = prevI + 1;
      continue;
    }

    // 6. Autres
    result += escapeHtml(code[i]);
    i++;

    if (i <= prevI) {
      result += escapeHtml(code[prevI]);
      i = prevI + 1;
    }
  }

  return result;
}
