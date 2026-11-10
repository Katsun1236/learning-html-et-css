// =============================================================================
// ÉDITEUR PRO STYLE VS CODE MULTI-FICHIERS (HTML & CSS)
// Création manuelle de fichiers, autocomplétion IntelliSense, routage virtuel
// =============================================================================

import { IntelliSenseEngine } from './intellisense.js';
import { highlightCode } from './syntax-highlighter.js';
import { analyzeCode } from './linter.js';

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

    // État de recherche Ctrl+F
    this.currentSearchMatches = [];
    this.searchMatchIndex = -1;

    this.initEditor();
    this.initSearchWidget();
    this.intellisense = new IntelliSenseEngine(this);
  }

  initEditor() {
    if (!this.textarea) return;

    this.highlightPre = document.getElementById('editor-highlight');
    this.highlightCode = document.getElementById('editor-highlight-code');

    this.updateLineNumbers();
    this.updateHighlight();

    // Scroll synchronisé entre textarea, coloration et numéros de ligne
    this.textarea.addEventListener('scroll', () => {
      if (this.highlightPre) {
        this.highlightPre.scrollTop = this.textarea.scrollTop;
        this.highlightPre.scrollLeft = this.textarea.scrollLeft;
      }
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
      this.updateHighlight();
      this.recordHistorySnapshot(false);
      this.triggerChange();
    });
  }

  updateHighlight() {
    if (!this.highlightCode || !this.textarea) return;
    const val = this.textarea.value || '';
    const highlighted = highlightCode(val, this.activeFile || 'index.html');
    this.highlightCode.innerHTML = highlighted + (val.endsWith('\n') ? ' ' : '');
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
      this.updateHighlight();
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
      this.updateHighlight();
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
    this.updateHighlight();
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
    const val = this.textarea.value;
    const linesCount = val.split('\n').length;

    // Détection des erreurs syntaxiques en temps réel (linter)
    const lintResult = analyzeCode(val, this.activeFile);
    const errorLines = new Set(lintResult.issues.map(i => i.line));

    let numbers = '';
    for (let i = 1; i <= linesCount; i++) {
      const errClass = errorLines.has(i) ? ' has-error' : '';
      numbers += `<span class="line-num${errClass}" data-line="${i}">${i}</span>\n`;
    }
    this.lineNumbers.innerHTML = numbers;

    this.updateDiagnostic(lintResult);
    this.highlightActiveLine();
  }

  updateDiagnostic(lintResult) {
    const diagEl = document.getElementById('editor-diagnostic');
    if (!diagEl) return;

    if (!lintResult || lintResult.status === 'valid' || lintResult.issues.length === 0) {
      diagEl.className = 'editor-diagnostic-valid';
      diagEl.innerHTML = '<span>✓ Code valide</span>';
      diagEl.title = 'Toutes les balises et règles syntaxiques sont bien formées.';
    } else if (lintResult.status === 'error') {
      const first = lintResult.issues.find(i => i.type === 'error');
      diagEl.className = 'editor-diagnostic-error';
      diagEl.innerHTML = `<span>✕ L.${first.line} : ${first.message}</span>`;
      diagEl.title = lintResult.issues.map(i => `L.${i.line}: ${i.message}`).join('\n');
    } else {
      const first = lintResult.issues[0];
      diagEl.className = 'editor-diagnostic-warning';
      diagEl.innerHTML = `<span>▲ L.${first.line} : ${first.message}</span>`;
      diagEl.title = lintResult.issues.map(i => `L.${i.line}: ${i.message}`).join('\n');
    }
  }

  updateCursorPosition() {
    if (!this.textarea) return;
    const start = this.textarea.selectionStart;
    const val = this.textarea.value.substring(0, start);
    const lines = val.split('\n');
    const currentLine = lines.length;
    const col = lines[lines.length - 1].length + 1;

    const cursorPosEl = document.getElementById('editor-cursor-pos');
    if (cursorPosEl) {
      cursorPosEl.textContent = `Ln ${currentLine}, Col ${col}`;
    }
    const fileBadgeEl = document.getElementById('editor-file-badge');
    if (fileBadgeEl) {
      fileBadgeEl.textContent = this.activeFile || 'Aucun fichier';
    }

    this.highlightActiveLine(currentLine);
  }

  highlightActiveLine(targetLine = null) {
    if (!this.lineNumbers || !this.textarea) return;
    let line = targetLine;
    if (!line) {
      const start = this.textarea.selectionStart;
      line = this.textarea.value.substring(0, start).split('\n').length;
    }
    const lineEls = this.lineNumbers.querySelectorAll('.line-num');
    lineEls.forEach((el, idx) => {
      if (idx + 1 === line) {
        el.classList.add('active-line');
      } else {
        el.classList.remove('active-line');
      }
    });
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
      if (k === 'f') {
        e.preventDefault();
        this.toggleSearch(true);
        return;
      }
    }

    if (e.key === 'Escape' && this.searchWidget && !this.searchWidget.classList.contains('hidden')) {
      e.preventDefault();
      this.closeSearch();
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const mode = this.getMode();

    // 1. Touche Tab (Emmet ou indentation 2 espaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      if (!e.shiftKey && this.tryExpandEmmet()) {
        return;
      }
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
    this.updateHighlight();
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

  // =========================================================================
  // MODULE EMMET INTELLIGENT (EXPANSION RAPIDE SUR TOUCHE TAB)
  // =========================================================================
  tryExpandEmmet() {
    if (this.getMode() !== 'html' || !this.textarea) return false;
    const textarea = this.textarea;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end) return false;

    const value = textarea.value;
    const match = value.substring(0, start).match(/([a-zA-Z0-9:\-_!]+)$/);
    if (!match) return false;

    const word = match[1].toLowerCase();
    const wordStart = start - word.length;

    const snippets = {
      '!': '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>',
      'html:5': '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>',
      'a': '<a href=""></a>',
      'img': '<img src="" alt="">',
      'link': '<link rel="stylesheet" href="style.css">',
      'link:css': '<link rel="stylesheet" href="style.css">',
      'meta:vp': '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      'meta:utf': '<meta charset="UTF-8">',
      'input': '<input type="text">',
      'input:text': '<input type="text">',
      'input:email': '<input type="email">',
      'input:password': '<input type="password">',
      'input:submit': '<input type="submit" value="Envoyer">',
      'btn': '<button type="button"></button>',
      'button': '<button type="button"></button>',
      'ul': '<ul>\n  <li></li>\n</ul>',
      'ol': '<ol>\n  <li></li>\n</ol>',
      'li': '<li></li>',
      'form': '<form action="" method="post">\n  \n</form>',
      'style': '<style>\n  \n</style>',
      'script': '<script>\n  \n</script>'
    };

    let expansion = null;
    let cursorOffset = null;

    if (snippets[word]) {
      expansion = snippets[word];
      if (word === 'a') cursorOffset = 9;
      else if (word === 'img') cursorOffset = 10;
      else if (word === '!' || word === 'html:5') cursorOffset = expansion.indexOf('<body>\n  ') + 10;
      else if (word === 'ul' || word === 'ol') cursorOffset = expansion.indexOf('<li>') + 4;
      else if (word === 'form') cursorOffset = expansion.indexOf('post">\n  ') + 8;
      else if (word === 'btn' || word === 'button') cursorOffset = expansion.indexOf('></') + 1;
      else if (word === 'style' || word === 'script') cursorOffset = expansion.indexOf('\n  ') + 3;
    } else {
      const knownTags = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'b', 'strong',
        'i', 'em', 'header', 'footer', 'nav', 'main', 'section', 'article',
        'aside', 'title', 'head', 'body', 'table', 'tr', 'td', 'th',
        'tbody', 'thead', 'label', 'textarea', 'select', 'option'
      ];
      if (knownTags.includes(word)) {
        expansion = `<${word}></${word}>`;
        cursorOffset = word.length + 2;
      }
    }

    if (expansion) {
      this.recordHistorySnapshot(true);
      textarea.value = value.substring(0, wordStart) + expansion + value.substring(start);
      const finalCursor = wordStart + (cursorOffset !== null ? cursorOffset : expansion.length);
      textarea.selectionStart = textarea.selectionEnd = finalCursor;
      this.syncActiveBuffer();
      this.updateLineNumbers();
      this.triggerChange();
      this.recordHistorySnapshot(true);
      return true;
    }

    return false;
  }

  // =========================================================================
  // RECHERCHE DANS LE CODE (CTRL + F / WIDGET INTÉGRÉ)
  // =========================================================================
  initSearchWidget() {
    this.searchWidget = document.getElementById('editor-search-widget');
    this.searchInput = document.getElementById('editor-search-input');
    this.searchCount = document.getElementById('editor-search-count');
    this.searchPrevBtn = document.getElementById('editor-search-prev');
    this.searchNextBtn = document.getElementById('editor-search-next');
    this.searchCloseBtn = document.getElementById('editor-search-close');

    if (!this.searchWidget || !this.searchInput) return;

    this.searchInput.addEventListener('input', () => {
      this.runSearch(this.searchInput.value);
    });

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (e.shiftKey) {
          this.navigateSearch(-1);
        } else {
          this.navigateSearch(1);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.closeSearch();
      }
    });

    if (this.searchPrevBtn) {
      this.searchPrevBtn.addEventListener('click', () => this.navigateSearch(-1));
    }
    if (this.searchNextBtn) {
      this.searchNextBtn.addEventListener('click', () => this.navigateSearch(1));
    }
    if (this.searchCloseBtn) {
      this.searchCloseBtn.addEventListener('click', () => this.closeSearch());
    }
  }

  toggleSearch(openOnly = false) {
    if (!this.searchWidget) return;
    const isHidden = this.searchWidget.classList.contains('hidden');

    if (openOnly || isHidden) {
      this.searchWidget.classList.remove('hidden');
      if (this.textarea) {
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        if (start !== end) {
          const selected = this.textarea.value.substring(start, end);
          if (selected.trim().length > 0 && !selected.includes('\n')) {
            this.searchInput.value = selected;
          }
        }
      }
      this.searchInput.focus();
      this.searchInput.select();
      this.runSearch(this.searchInput.value);
    } else {
      this.closeSearch();
    }
  }

  closeSearch() {
    if (!this.searchWidget) return;
    this.searchWidget.classList.add('hidden');
    this.currentSearchMatches = [];
    this.searchMatchIndex = -1;
    if (this.textarea) {
      this.textarea.focus();
    }
  }

  runSearch(query) {
    if (!this.textarea) return;
    const val = this.textarea.value;
    this.currentSearchMatches = [];
    this.searchMatchIndex = -1;

    if (!query || query.length === 0) {
      if (this.searchCount) this.searchCount.textContent = '0/0';
      return;
    }

    const lowerVal = val.toLowerCase();
    const lowerQuery = query.toLowerCase();
    let pos = 0;
    while ((pos = lowerVal.indexOf(lowerQuery, pos)) !== -1) {
      this.currentSearchMatches.push({ start: pos, end: pos + query.length });
      pos += lowerQuery.length;
    }

    if (this.currentSearchMatches.length > 0) {
      const cursor = this.textarea.selectionStart;
      let closestIdx = 0;
      for (let i = 0; i < this.currentSearchMatches.length; i++) {
        if (this.currentSearchMatches[i].start >= cursor) {
          closestIdx = i;
          break;
        }
      }
      this.searchMatchIndex = closestIdx;
      this.goToMatch(this.searchMatchIndex);
    } else {
      if (this.searchCount) this.searchCount.textContent = '0/0';
    }
  }

  navigateSearch(delta) {
    if (!this.currentSearchMatches.length) return;
    this.searchMatchIndex = (this.searchMatchIndex + delta + this.currentSearchMatches.length) % this.currentSearchMatches.length;
    this.goToMatch(this.searchMatchIndex);
  }

  goToMatch(index) {
    if (!this.currentSearchMatches[index] || !this.textarea) return;
    const match = this.currentSearchMatches[index];
    this.textarea.focus();
    this.textarea.setSelectionRange(match.start, match.end);

    const textBefore = this.textarea.value.substring(0, match.start);
    const lineIndex = textBefore.split('\n').length - 1;
    const approxLineHeight = 22;
    this.textarea.scrollTop = Math.max(0, (lineIndex - 4) * approxLineHeight);

    if (this.searchCount) {
      this.searchCount.textContent = `${index + 1}/${this.currentSearchMatches.length}`;
    }
  }
}
