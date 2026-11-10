// =============================================================================
// ÉDITEUR PRO STYLE VS CODE MULTI-FICHIERS (HTML & CSS)
// Création manuelle de fichiers, autocomplétion IntelliSense, routage virtuel
// =============================================================================

import { IntelliSenseEngine } from './intellisense.js';

export class VSCodeEditor {
  constructor({
    textarea,
    lineNumbers,
    previewIframe,
    statusBarInfo,
    onCodeChange,
    onFileSwitchRequested,
    onPreviewPageChanged,
    onFilesUpdated
  }) {
    this.textarea = textarea;
    this.lineNumbers = lineNumbers;
    this.previewIframe = previewIframe;
    this.statusBarInfo = statusBarInfo;
    this.onCodeChange = onCodeChange;
    this.onFileSwitchRequested = onFileSwitchRequested;
    this.onPreviewPageChanged = onPreviewPageChanged;
    this.onFilesUpdated = onFilesUpdated;

    this.files = {};
    this.activeFile = null;
    this.activePreviewPage = 'index.html';
    this.debounceTimer = null;

    // Pile d'historique Undo / Redo (Ctrl+Z / Ctrl+Y)
    this.history = {};
    this.isUndoingOrRedoing = false;
    this.historyDebounce = null;

    this.initEditor();
    this.intellisense = new IntelliSenseEngine(this);
  }

  initEditor() {
    if (!this.textarea) return;

    this.updateLineNumbers();

    // Scroll synchronisé entre textarea et numéros de ligne
    this.textarea.addEventListener('scroll', () => {
      if (this.lineNumbers) {
        this.lineNumbers.scrollTop = this.textarea.scrollTop;
      }
    });

    // Écoute de curseur (Ln, Col)
    ['keyup', 'click', 'input'].forEach(evt => {
      this.textarea.addEventListener(evt, () => {
        this.updateCursorPosition();
      });
    });

    // Raccourcis clavier IDE
    this.textarea.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    });

    // Saisie en direct avec historique
    this.textarea.addEventListener('input', () => {
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.recordHistorySnapshot(false);
      this.triggerChange();
    });
  }

  getMode() {
    if (!this.activeFile) return 'html';
    return this.activeFile.endsWith('.css') ? 'css' : 'html';
  }

  syncActiveBuffer() {
    if (this.textarea && this.activeFile) {
      this.files[this.activeFile] = this.textarea.value;
    }
  }

  getFiles() {
    this.syncActiveBuffer();
    return { ...this.files };
  }

  setFiles(files, targetActiveFile = null) {
    this.files = files ? { ...files } : {};

    const fileKeys = Object.keys(this.files);
    let nextFile = null;

    if (targetActiveFile && this.files[targetActiveFile] !== undefined) {
      nextFile = targetActiveFile;
    } else if (this.activeFile && this.files[this.activeFile] !== undefined) {
      nextFile = this.activeFile;
    } else if (fileKeys.length > 0) {
      nextFile = fileKeys[0];
    }

    if (nextFile) {
      this.switchFile(nextFile);
    } else {
      this.activeFile = null;
      if (this.textarea) {
        this.textarea.value = '';
        this.textarea.disabled = true;
        this.textarea.placeholder = "Aucun fichier ouvert. Clique sur '+ Nouveau fichier' pour créer index.html.";
      }
      this.updateLineNumbers();
      this.updateCursorPosition();
      this.updatePreview();
    }

    if (typeof this.onFilesUpdated === 'function') {
      this.onFilesUpdated(Object.keys(this.files), this.activeFile);
    }
  }

  createFile(rawName) {
    if (!rawName) return { success: false, message: "Le nom du fichier ne peut pas être vide." };
    const name = rawName.trim().toLowerCase();

    if (!name.endsWith('.html') && !name.endsWith('.css')) {
      return { success: false, message: "L'extension doit être .html (page web) ou .css (feuille de style)." };
    }

    if (this.files[name] !== undefined) {
      return { success: false, message: `Le fichier ${name} existe déjà dans ton projet.` };
    }

    this.syncActiveBuffer();
    this.files[name] = '';
    this.switchFile(name);

    if (typeof this.onFilesUpdated === 'function') {
      this.onFilesUpdated(Object.keys(this.files), this.activeFile);
    }

    this.triggerChange();
    return { success: true, name };
  }

  deleteFile(name) {
    if (!name || this.files[name] === undefined) return;
    delete this.files[name];

    const fileKeys = Object.keys(this.files);
    const nextFile = fileKeys.length > 0 ? fileKeys[0] : null;

    if (nextFile) {
      this.switchFile(nextFile);
    } else {
      this.activeFile = null;
      if (this.textarea) {
        this.textarea.value = '';
        this.textarea.disabled = true;
        this.textarea.placeholder = "Aucun fichier ouvert. Clique sur '+ Nouveau fichier' pour créer index.html.";
      }
      this.updateLineNumbers();
      this.updateCursorPosition();
      this.updatePreview();
    }

    if (typeof this.onFilesUpdated === 'function') {
      this.onFilesUpdated(Object.keys(this.files), this.activeFile);
    }

    this.triggerChange();
  }

  switchFile(fileName) {
    if (!fileName || this.files[fileName] === undefined) return;

    // 1. Sauvegarder le fichier actif actuel
    this.syncActiveBuffer();

    // 2. Basculer vers le nouveau fichier
    this.activeFile = fileName;
    if (this.textarea) {
      this.textarea.disabled = false;
      this.textarea.value = this.files[fileName] || '';
      this.textarea.placeholder = fileName.endsWith('.css')
        ? "/* Rédige tes règles CSS ici pour styliser le Sanctuaire... */"
        : `<!-- Rédige le balisage HTML de ${fileName} ici... -->`;
    }

    // Si on ouvre un fichier HTML, on synchronise aussi la page de preview
    if (fileName.endsWith('.html')) {
      this.activePreviewPage = fileName;
      if (typeof this.onPreviewPageChanged === 'function') {
        this.onPreviewPageChanged(fileName);
      }
    }

    this.updateLineNumbers();
    this.updateCursorPosition();
    this.updatePreview();

    // Enregistrer le premier instantané d'historique pour ce fichier
    this.recordHistorySnapshot(true);

    if (typeof this.onFilesUpdated === 'function') {
      this.onFilesUpdated(Object.keys(this.files), this.activeFile);
    }
  }

  switchPreviewPage(pageName) {
    if (!pageName || this.files[pageName] === undefined) return;
    this.activePreviewPage = pageName;
    this.updatePreview();
    if (typeof this.onPreviewPageChanged === 'function') {
      this.onPreviewPageChanged(pageName);
    }
  }

  updateLineNumbers() {
    if (!this.textarea || !this.lineNumbers) return;
    if (!this.activeFile) {
      this.lineNumbers.innerHTML = '<span class="line-num">1</span>\n';
      return;
    }
    const linesCount = this.textarea.value.split('\n').length;
    let numbers = '';
    for (let i = 1; i <= linesCount; i++) {
      numbers += `<span class="line-num">${i}</span>\n`;
    }
    this.lineNumbers.innerHTML = numbers;
  }

  updateCursorPosition() {
    if (!this.statusBarInfo || !this.textarea) return;
    if (!this.activeFile) {
      this.statusBarInfo.textContent = "Aucun fichier • Création requise";
      return;
    }
    const start = this.textarea.selectionStart;
    const val = this.textarea.value.substring(0, start);
    const lines = val.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    const modeLabel = this.getMode().toUpperCase();
    this.statusBarInfo.textContent = `${this.activeFile} • Ln ${line}, Col ${col} • Espaces: 2 • ${modeLabel} (UTF-8)`;
  }

  recordHistorySnapshot(force = false) {
    if (!this.activeFile || this.isUndoingOrRedoing || !this.textarea) return;

    if (!this.history[this.activeFile]) {
      this.history[this.activeFile] = {
        stack: [],
        index: -1
      };
    }

    const hist = this.history[this.activeFile];
    const val = this.textarea.value;
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;

    const commit = () => {
      if (hist.index >= 0 && hist.stack[hist.index] && hist.stack[hist.index].value === val) {
        return;
      }
      hist.stack = hist.stack.slice(0, hist.index + 1);
      hist.stack.push({ value: val, start, end });
      if (hist.stack.length > 80) hist.stack.shift();
      hist.index = hist.stack.length - 1;
    };

    if (force) {
      if (this.historyDebounce) clearTimeout(this.historyDebounce);
      commit();
    } else {
      if (this.historyDebounce) clearTimeout(this.historyDebounce);
      this.historyDebounce = setTimeout(commit, 280);
    }
  }

  undo() {
    if (!this.activeFile || !this.textarea) return;
    const hist = this.history[this.activeFile];
    if (!hist || hist.index <= 0) return;

    this.isUndoingOrRedoing = true;
    hist.index--;
    const state = hist.stack[hist.index];
    this.textarea.value = state.value;
    this.textarea.selectionStart = state.start;
    this.textarea.selectionEnd = state.end;
    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.updateCursorPosition();
    this.triggerChange();
    this.isUndoingOrRedoing = false;
  }

  redo() {
    if (!this.activeFile || !this.textarea) return;
    const hist = this.history[this.activeFile];
    if (!hist || hist.index >= hist.stack.length - 1) return;

    this.isUndoingOrRedoing = true;
    hist.index++;
    const state = hist.stack[hist.index];
    this.textarea.value = state.value;
    this.textarea.selectionStart = state.start;
    this.textarea.selectionEnd = state.end;
    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.updateCursorPosition();
    this.triggerChange();
    this.isUndoingOrRedoing = false;
  }

  toggleComment() {
    if (!this.textarea || !this.activeFile) return;
    this.recordHistorySnapshot(true);
    const start = this.textarea.selectionStart;
    const value = this.textarea.value;
    const mode = this.getMode();

    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    let lineEnd = value.indexOf('\n', start);
    if (lineEnd === -1) lineEnd = value.length;

    const line = value.substring(lineStart, lineEnd);
    let newLine = '';

    if (mode === 'html') {
      if (line.trim().startsWith('<!--') && line.trim().endsWith('-->')) {
        newLine = line.replace(/^\s*<!--\s?/, '').replace(/\s?-->\s*$/, '');
      } else {
        const indentMatch = line.match(/^\s*/);
        const indent = indentMatch ? indentMatch[0] : '';
        newLine = `${indent}<!-- ${line.trim()} -->`;
      }
    } else {
      if (line.trim().startsWith('/*') && line.trim().endsWith('*/')) {
        newLine = line.replace(/^\s*\/\*\s?/, '').replace(/\s?\*\/\s*$/, '');
      } else {
        const indentMatch = line.match(/^\s*/);
        const indent = indentMatch ? indentMatch[0] : '';
        newLine = `${indent}/* ${line.trim()} */`;
      }
    }

    this.textarea.value = value.substring(0, lineStart) + newLine + value.substring(lineEnd);
    this.textarea.selectionStart = this.textarea.selectionEnd = lineStart + newLine.length;
    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.triggerChange();
    this.recordHistorySnapshot(true);
  }

  duplicateCurrentLine() {
    if (!this.textarea || !this.activeFile) return;
    this.recordHistorySnapshot(true);
    const start = this.textarea.selectionStart;
    const value = this.textarea.value;

    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
    let lineEnd = value.indexOf('\n', start);
    if (lineEnd === -1) lineEnd = value.length;

    const line = value.substring(lineStart, lineEnd);
    const insert = '\n' + line;

    this.textarea.value = value.substring(0, lineEnd) + insert + value.substring(lineEnd);
    this.textarea.selectionStart = this.textarea.selectionEnd = start + line.length + 1;
    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.triggerChange();
    this.recordHistorySnapshot(true);
  }

  handleKeyDown(e) {
    // Si l'autocomplétion est active et capture Entrée/Tab/Flèches, ne pas interférer
    if (this.intellisense && this.intellisense.active) {
      if (['ArrowUp', 'ArrowDown', 'Enter', 'Tab', 'Escape'].includes(e.key)) {
        return;
      }
    }

    const textarea = this.textarea;
    if (!textarea || !this.activeFile) return;

    // Raccourcis IDE : Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z, Ctrl+/, Ctrl+D
    if (e.ctrlKey || e.metaKey) {
      const k = e.key.toLowerCase();
      if (k === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          this.redo();
        } else {
          this.undo();
        }
        return;
      }
      if (k === 'y') {
        e.preventDefault();
        this.redo();
        return;
      }
      if (k === '/' || e.key === '/') {
        e.preventDefault();
        this.toggleComment();
        return;
      }
      if (k === 'd') {
        e.preventDefault();
        this.duplicateCurrentLine();
        return;
      }
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const mode = this.getMode();

    // 1. Touche Tab (Indentation 2 espaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      this.recordHistorySnapshot(true);
      if (!e.shiftKey) {
        textarea.value = value.substring(0, start) + '  ' + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      } else {
        if (start >= 2 && value.substring(start - 2, start) === '  ') {
          textarea.value = value.substring(0, start - 2) + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start - 2;
        }
      }
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.triggerChange();
      this.recordHistorySnapshot(true);
      return;
    }

    // 2. Touche Entrée (Indentation intelligente)
    if (e.key === 'Enter') {
      const lines = value.substring(0, start).split('\n');
      const currentLine = lines[lines.length - 1];
      const indentMatch = currentLine.match(/^\s+/);
      const prevChar = value.charAt(start - 1);

      if (indentMatch || prevChar === '{' || prevChar === '>') {
        e.preventDefault();
        this.recordHistorySnapshot(true);
        let indent = indentMatch ? indentMatch[0] : '';
        let extraIndent = '';

        if (prevChar === '{' || prevChar === '>') {
          extraIndent = '  ';
        }

        const nextChar = value.charAt(start);
        if ((prevChar === '{' && nextChar === '}') || (prevChar === '>' && nextChar === '<')) {
          const insertText = '\n' + indent + extraIndent + '\n' + indent;
          textarea.value = value.substring(0, start) + insertText + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length + extraIndent.length;
        } else {
          textarea.value = value.substring(0, start) + '\n' + indent + extraIndent + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 1 + indent.length + extraIndent.length;
        }
        this.syncActiveBuffer();
        this.updateLineNumbers();
        this.triggerChange();
        this.recordHistorySnapshot(true);
        return;
      }
    }

    // 3. Auto-fermeture accolades / guillemets
    const autoPairs = {
      '{': '}',
      '[': ']',
      '(': ')',
      '"': '"',
      "'": "'"
    };
    if (autoPairs[e.key] && start === end) {
      e.preventDefault();
      this.recordHistorySnapshot(true);
      const closeChar = autoPairs[e.key];
      textarea.value = value.substring(0, start) + e.key + closeChar + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
      this.syncActiveBuffer();
      this.triggerChange();
      this.recordHistorySnapshot(true);
      return;
    }

    // 4. Auto-fermeture balises HTML (<tag> -> </tag>)
    if (mode === 'html' && e.key === '>') {
      const beforeCursor = value.substring(0, start);
      const match = beforeCursor.match(/<([a-zA-Z0-9\-]+)(?:\s+[^>]*)?$/);
      if (match) {
        const tagName = match[1];
        const voidTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'source', '!doctype'];
        if (!voidTags.includes(tagName.toLowerCase())) {
          e.preventDefault();
          const insert = `></${tagName}>`;
          textarea.value = value.substring(0, start) + insert + value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          this.syncActiveBuffer();
          this.triggerChange();
          return;
        }
      }
    }

    // 5. Ctrl + / (Commentaires)
    if ((e.ctrlKey || e.metaKey) && (e.key === '/' || e.key === ':')) {
      e.preventDefault();
      this.toggleComment(mode);
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.triggerChange();
      return;
    }

    // 6. Shift + Alt + Down (Dupliquer)
    if (e.shiftKey && e.altKey && e.key === 'ArrowDown') {
      e.preventDefault();
      this.duplicateLine();
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.triggerChange();
      return;
    }

    // 7. Alt + Up / Down (Déplacer)
    if (e.altKey && !e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      this.moveLine(e.key === 'ArrowUp' ? -1 : 1);
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.triggerChange();
      return;
    }
  }

  moveLine(direction) {
    const textarea = this.textarea;
    if (!textarea || !this.activeFile) return;
    this.recordHistorySnapshot(true);
    const start = textarea.selectionStart;
    const lines = textarea.value.split('\n');

    let currentPos = 0;
    let targetIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const len = lines[i].length + 1;
      if (start >= currentPos && start < currentPos + len) {
        targetIndex = i;
        break;
      }
      currentPos += len;
    }

    const newIndex = targetIndex + direction;
    if (newIndex < 0 || newIndex >= lines.length) return;

    const [removed] = lines.splice(targetIndex, 1);
    lines.splice(newIndex, 0, removed);
    textarea.value = lines.join('\n');
    textarea.selectionStart = textarea.selectionEnd = start + (direction * (removed.length + 1));
    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.triggerChange();
    this.recordHistorySnapshot(true);
  }

  formatCurrentFile() {
    if (!this.textarea || !this.activeFile) return;
    this.recordHistorySnapshot(true);
    this.syncActiveBuffer();
    const mode = this.getMode();
    const raw = this.textarea.value;

    if (mode === 'html') {
      this.textarea.value = this.prettifyHtml(raw);
    } else {
      this.textarea.value = this.prettifyCss(raw);
    }

    this.syncActiveBuffer();
    this.updateLineNumbers();
    this.triggerChange();
    this.recordHistorySnapshot(true);
  }

  prettifyHtml(html) {
    let formatted = '';
    let indent = 0;
    const tokens = html.replace(/>\s*</g, '><').split(/(?=<)|(?<=>)/);

    tokens.forEach(tok => {
      tok = tok.trim();
      if (!tok) return;

      if (tok.startsWith('</')) {
        indent = Math.max(0, indent - 1);
      }

      formatted += '  '.repeat(indent) + tok + '\n';

      if (tok.startsWith('<') && !tok.startsWith('</') && !tok.endsWith('/>') && !tok.startsWith('<!--')) {
        const tagMatch = tok.match(/<([a-zA-Z0-9\-]+)/);
        const voidTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
        if (tagMatch && !voidTags.includes(tagMatch[1].toLowerCase()) && !tok.includes('</')) {
          indent++;
        }
      }
    });

    return formatted.trim();
  }

  prettifyCss(css) {
    let formatted = '';
    let indent = 0;
    const lines = css.split('\n');

    lines.forEach(l => {
      let trimmed = l.trim();
      if (!trimmed) return;

      if (trimmed.includes('}')) {
        indent = Math.max(0, indent - 1);
      }

      formatted += '  '.repeat(indent) + trimmed + '\n';

      if (trimmed.includes('{')) {
        indent++;
      }
    });

    return formatted.trim();
  }

  triggerChange() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.updatePreview();
      if (typeof this.onCodeChange === 'function') {
        this.onCodeChange(this.getFiles());
      }
    }, 120);
  }

  updatePreview() {
    if (!this.previewIframe) return;

    this.syncActiveBuffer();
    const pageHtml = this.files[this.activePreviewPage] || '';
    const globalCss = this.files['style.css'] || '';

    // Extraction du titre pour le mini-navigateur
    const titleMatch = pageHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const extractedTitle = titleMatch ? titleMatch[1].trim() : '';

    const tabTitleEl = document.getElementById('preview-browser-tab-title');
    if (tabTitleEl) {
      tabTitleEl.textContent = extractedTitle || this.activePreviewPage || 'index.html';
      tabTitleEl.title = extractedTitle || this.activePreviewPage || 'index.html';
    }
    const urlEl = document.getElementById('preview-browser-url');
    if (urlEl) {
      urlEl.textContent = `https://sanctuaire.web/${this.activePreviewPage || 'index.html'}`;
    }

    let documentContent = '';
    const hasHtmlTag = pageHtml.toLowerCase().includes('<html');

    if (hasHtmlTag) {
      // Vérifier si le body contient du contenu visible
      const hasBodyTag = /<body[^>]*>/i.test(pageHtml);
      let bodyInner = '';
      if (hasBodyTag) {
        const bMatch = pageHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        bodyInner = bMatch ? bMatch[1].replace(/<script[\s\S]*?<\/script>/gi, '').trim() : '';
      }
      const isBodyEmpty = !hasBodyTag || bodyInner.length === 0;

      let processedHtml = pageHtml;
      if (isBodyEmpty) {
        const safeTitle = extractedTitle
          ? extractedTitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
          : 'Sans titre';

        const emptyBodyNotice = `
<div class="empty-body-helper" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:65vh; padding:28px 16px; font-family:system-ui,-apple-system,sans-serif; text-align:center; color:#334155; user-select:none;">
  <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:24px 28px; max-width:460px; box-shadow:0 8px 24px rgba(0,0,0,0.06);">
    <div style="display:inline-block; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#0284c7; background:#e0f2fe; padding:4px 10px; border-radius:20px; margin-bottom:12px;">En attente de la balise &lt;body&gt;</div>
    <h3 style="margin:0 0 8px 0; font-size:1.1rem; color:#0f172a; font-weight:700;">L'en-tête (&lt;head&gt;) est actif !</h3>
    <p style="margin:0 0 12px 0; font-size:0.9rem; color:#475569; line-height:1.5;">
      Ton titre <strong>« ${safeTitle} »</strong> est bien visible dans l'onglet du navigateur au-dessus.
    </p>
    <p style="margin:0 0 14px 0; font-size:0.85rem; color:#64748b; line-height:1.4;">
      Dans le Web, la balise &lt;head&gt; ne s'affiche jamais sur la page blanche. Tout ce qui est visible habite dans le corps du document.
    </p>
    <div style="font-size:0.85rem; color:#b45309; background:#fef3c7; border:1px solid #fde68a; padding:10px 14px; border-radius:8px; line-height:1.4; font-weight:600;">
      Ouvre la balise <strong>&lt;body&gt;</strong> pour faire apparaître tes textes et tes images !
    </div>
  </div>
</div>`;

        if (!hasBodyTag) {
          if (processedHtml.includes('</html>')) {
            processedHtml = processedHtml.replace('</html>', `<body>${emptyBodyNotice}</body>\n</html>`);
          } else {
            processedHtml += `\n<body>${emptyBodyNotice}</body>`;
          }
        } else {
          processedHtml = processedHtml.replace(/<body([^>]*)>([\s\S]*?)<\/body>/i, `<body$1>${emptyBodyNotice}</body>`);
        }
      }

      if (processedHtml.includes('</head>')) {
        documentContent = processedHtml.replace('</head>', `<style id="virtual-style">\n${globalCss}\n</style></head>`);
      } else {
        documentContent = `<style id="virtual-style">\n${globalCss}\n</style>\n` + processedHtml;
      }
    } else {
      documentContent = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
    }
  </style>
  <style id="virtual-style">
${globalCss}
  </style>
</head>
<body>
${pageHtml}
</body>
</html>`;
    }

    try {
      const iframeDoc = this.previewIframe.contentDocument || this.previewIframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(documentContent);
      iframeDoc.close();

      iframeDoc.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) {
          const href = a.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            const cleanHref = href.replace(/^\.\//, '');
            if (this.files[cleanHref] !== undefined) {
              e.preventDefault();
              this.switchPreviewPage(cleanHref);
              if (typeof this.onFileSwitchRequested === 'function') {
                this.onFileSwitchRequested(cleanHref);
              }
            }
          }
        }
      });
    } catch {
      this.previewIframe.srcdoc = documentContent;
    }
  }
}
