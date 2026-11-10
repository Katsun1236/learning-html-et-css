// =============================================================================
// LINTER ET DIAGNOSTIC INTELLIGENT DU CODE (HTML & CSS)
// Détection en temps réel des balises orphelines, erreurs de syntaxe et accessibilité
// =============================================================================

export function analyzeCode(code, fileName = 'index.html') {
  if (!code || !code.trim()) {
    return { issues: [], status: 'empty' };
  }

  const isCss = fileName.toLowerCase().endsWith('.css');
  return isCss ? analyzeCSS(code) : analyzeHTML(code);
}

function analyzeHTML(code) {
  const issues = [];
  const lines = code.split('\n');

  // Balises auto-fermantes qui ne nécessitent pas de balise fermante
  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'
  ]);

  // Pile pour vérifier l'imbrication des balises
  const stack = [];

  // Expression régulière pour extraire les balises HTML
  const tagRegex = /<\/?([a-zA-Z0-9\-]+)(?:\s+[^>]*)?\/?>/g;
  let match;

  while ((match = tagRegex.exec(code)) !== null) {
    const fullTag = match[0];
    const tagName = match[1].toLowerCase();

    // Ignorer doctype et commentaires
    if (tagName === '!doctype' || fullTag.startsWith('<!--')) continue;
    if (voidTags.has(tagName)) {
      // Vérification d'accessibilité : img sans alt
      if (tagName === 'img' && !fullTag.toLowerCase().includes('alt=')) {
        const lineNum = code.substring(0, match.index).split('\n').length;
        issues.push({
          line: lineNum,
          type: 'warning',
          message: "L'image <img> n'a pas d'attribut 'alt' (recommandé pour l'accessibilité)."
        });
      }
      continue;
    }

    // Déterminer le numéro de ligne
    const lineNum = code.substring(0, match.index).split('\n').length;

    // Balise fermante </tag>
    if (fullTag.startsWith('</')) {
      if (stack.length === 0) {
        issues.push({
          line: lineNum,
          type: 'error',
          message: `Balise fermante </${tagName}> trouvée sans balise ouvrante correspondante.`
        });
      } else {
        const last = stack.pop();
        if (last.name !== tagName) {
          issues.push({
            line: lineNum,
            type: 'error',
            message: `Imbrication incorrecte : attendu </${last.name}> (ouvert ligne ${last.line}), mais trouvé </${tagName}>.`
          });
        }
      }
    } else if (!fullTag.endsWith('/>')) {
      // Balise ouvrante <tag>
      stack.push({ name: tagName, line: lineNum });
    }
  }

  // Balises restées ouvertes à la fin du document
  while (stack.length > 0) {
    const unclosed = stack.pop();
    issues.push({
      line: unclosed.line,
      type: 'warning',
      message: `La balise <${unclosed.name}> ouverte à la ligne ${unclosed.line} n'est pas fermée.`
    });
  }

  return {
    issues,
    status: issues.length === 0 ? 'valid' : issues.some(i => i.type === 'error') ? 'error' : 'warning'
  };
}

function analyzeCSS(code) {
  const issues = [];
  const lines = code.split('\n');

  let openBraces = 0;
  let lastOpenLine = 1;

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // Ignorer les commentaires
    if (trimmed.startsWith('/*') && trimmed.endsWith('*/')) continue;

    for (let c of line) {
      if (c === '{') {
        openBraces++;
        lastOpenLine = lineNum;
      } else if (c === '}') {
        openBraces--;
        if (openBraces < 0) {
          issues.push({
            line: lineNum,
            type: 'error',
            message: "Accolade fermante '}' en trop sans bloc correspondant."
          });
          openBraces = 0;
        }
      }
    }
  }

  if (openBraces > 0) {
    issues.push({
      line: lastOpenLine,
      type: 'error',
      message: `Accolade ouvrante '{' ligne ${lastOpenLine} non refermée.`
    });
  }

  return {
    issues,
    status: issues.length === 0 ? 'valid' : 'error'
  };
}
