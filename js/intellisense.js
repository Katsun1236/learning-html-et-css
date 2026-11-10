// =============================================================================
// AUTOCOMPLÉTION INTELLISENSE STYLE VS CODE (HTML & CSS)
// Ancrage directement sous le curseur, navigation flèches, Tab/Entrée
// =============================================================================

export const HTML_SUGGESTIONS = [
  { label: 'html:5', detail: 'Structure complète HTML5', insert: '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sanctuaire</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  $0\n</body>\n</html>', type: 'snippet' },
  { label: '!DOCTYPE', detail: 'Déclaration du doctype HTML5', insert: '<!DOCTYPE html>\n$0', type: 'snippet' },
  { label: 'html', detail: 'Balise racine <html lang="fr">', insert: '<html lang="fr">\n  $0\n</html>', type: 'tag' },
  { label: 'head', detail: 'En-tête de métadonnées <head>', insert: '<head>\n  $0\n</head>', type: 'tag' },
  { label: 'body', detail: 'Corps du document visible <body>', insert: '<body>\n  $0\n</body>', type: 'tag' },
  { label: 'meta:charset', detail: 'Encodage universel UTF-8', insert: '<meta charset="UTF-8">\n$0', type: 'snippet' },
  { label: 'meta:vp', detail: 'Viewport responsive pour mobile', insert: '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n$0', type: 'snippet' },
  { label: 'title', detail: 'Titre de l\'onglet dans le navigateur', insert: '<title>$0</title>', type: 'tag' },
  { label: 'link:css', detail: 'Liaison de la feuille de style CSS', insert: '<link rel="stylesheet" href="style.css">\n$0', type: 'snippet' },
  { label: 'header', detail: 'En-tête sémantique <header>', insert: '<header>\n  $0\n</header>', type: 'tag' },
  { label: 'nav', detail: 'Zone de navigation principale <nav>', insert: '<nav>\n  $0\n</nav>', type: 'tag' },
  { label: 'main', detail: 'Contenu principal de la page <main>', insert: '<main>\n  $0\n</main>', type: 'tag' },
  { label: 'section', detail: 'Section thématique distincte <section>', insert: '<section id="$1">\n  $0\n</section>', type: 'tag' },
  { label: 'article', detail: 'Contenu autonome réutilisable <article>', insert: '<article>\n  $0\n</article>', type: 'tag' },
  { label: 'footer', detail: 'Pied de page sémantique <footer>', insert: '<footer>\n  $0\n</footer>', type: 'tag' },
  { label: 'h1', detail: 'Titre principal de premier niveau (unique)', insert: '<h1>$0</h1>', type: 'tag' },
  { label: 'h2', detail: 'Sous-titre de second niveau', insert: '<h2>$0</h2>', type: 'tag' },
  { label: 'h3', detail: 'Sous-titre de troisième niveau', insert: '<h3>$0</h3>', type: 'tag' },
  { label: 'p', detail: 'Paragraphe de texte courant', insert: '<p>$0</p>', type: 'tag' },
  { label: 'a', detail: 'Lien hypertexte avec attribut href', insert: '<a href="$1">$0</a>', type: 'tag' },
  { label: 'img', detail: 'Image avec attributs src et alt', insert: '<img src="$1" alt="$0">', type: 'tag' },
  { label: 'ul', detail: 'Liste non ordonnée à puces <ul>', insert: '<ul>\n  <li>$0</li>\n</ul>', type: 'tag' },
  { label: 'ol', detail: 'Liste ordonnée numérotée <ol>', insert: '<ol>\n  <li>$0</li>\n</ol>', type: 'tag' },
  { label: 'li', detail: 'Élément de liste <li>', insert: '<li>$0</li>', type: 'tag' },
  { label: 'button', detail: 'Bouton interactif accessible', insert: '<button type="button">$0</button>', type: 'tag' },
  { label: 'div', detail: 'Conteneur générique de mise en page', insert: '<div class="$1">\n  $0\n</div>', type: 'tag' },
  { label: 'span', detail: 'Conteneur générique en ligne', insert: '<span>$0</span>', type: 'tag' },
  { label: 'table', detail: 'Tableau de données structurées', insert: '<table>\n  <thead>\n    <tr>\n      <th>$0</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td></td>\n    </tr>\n  </tbody>\n</table>', type: 'tag' },
  { label: 'form', detail: 'Formulaire de saisie utilisateur', insert: '<form action="#" method="POST">\n  $0\n</form>', type: 'tag' },
  { label: 'input:text', detail: 'Champ de texte sur une seule ligne', insert: '<input type="text" id="$1" name="$1" placeholder="$0">', type: 'snippet' },
  { label: 'input:email', detail: 'Champ d\'adresse e-mail validée', insert: '<input type="email" id="$1" name="$1" placeholder="$0">', type: 'snippet' },
  { label: 'textarea', detail: 'Zone de texte multiligne', insert: '<textarea id="$1" name="$1" rows="4">$0</textarea>', type: 'tag' },
  { label: 'label', detail: 'Étiquette de champ avec attribut for', insert: '<label for="$1">$0</label>', type: 'tag' }
];

export const CSS_SUGGESTIONS = [
  { label: 'display: flex', detail: 'Mise en page flexible 1D', insert: 'display: flex;\n$0', type: 'snippet' },
  { label: 'display: grid', detail: 'Grille bidimensionnelle moderne', insert: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 24px;\n$0', type: 'snippet' },
  { label: 'justify-content: center', detail: 'Alignement sur l\'axe principal', insert: 'justify-content: center;\n$0', type: 'snippet' },
  { label: 'justify-content: space-between', detail: 'Espacement égal sur les bords', insert: 'justify-content: space-between;\n$0', type: 'snippet' },
  { label: 'align-items: center', detail: 'Alignement sur l\'axe secondaire', insert: 'align-items: center;\n$0', type: 'snippet' },
  { label: 'gap', detail: 'Espacement entre éléments flex ou grid', insert: 'gap: 16px;\n$0', type: 'prop' },
  { label: 'margin', detail: 'Marge extérieure de la boîte', insert: 'margin: 0;\n$0', type: 'prop' },
  { label: 'margin: auto', detail: 'Centrage horizontal de bloc', insert: 'margin: 0 auto;\n$0', type: 'snippet' },
  { label: 'padding', detail: 'Marge intérieure sous la bordure', insert: 'padding: 16px;\n$0', type: 'prop' },
  { label: 'background-color', detail: 'Couleur d\'arrière-plan', insert: 'background-color: $0;', type: 'prop' },
  { label: 'color', detail: 'Couleur de police du texte', insert: 'color: $0;', type: 'prop' },
  { label: 'font-family', detail: 'Famille typographique', insert: 'font-family: \'Inter\', sans-serif;\n$0', type: 'prop' },
  { label: 'font-size', detail: 'Taille du texte', insert: 'font-size: 1rem;\n$0', type: 'prop' },
  { label: 'font-weight', detail: 'Graisse du texte (400, 700)', insert: 'font-weight: 700;\n$0', type: 'prop' },
  { label: 'text-align: center', detail: 'Centrage du texte en ligne', insert: 'text-align: center;\n$0', type: 'prop' },
  { label: 'text-decoration: none', detail: 'Supprime le soulignement par défaut', insert: 'text-decoration: none;\n$0', type: 'prop' },
  { label: 'border', detail: 'Bordure avec épaisseur, style et couleur', insert: 'border: 1px solid rgba(255, 255, 255, 0.1);\n$0', type: 'prop' },
  { label: 'border-radius', detail: 'Rayon d\'arrondi des angles', insert: 'border-radius: 12px;\n$0', type: 'prop' },
  { label: 'box-shadow', detail: 'Ombre portée de la boîte', insert: 'box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);\n$0', type: 'prop' },
  { label: 'transition', detail: 'Animation fluide des transitions', insert: 'transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n$0', type: 'prop' },
  { label: 'transform: translateY', detail: 'Élévation 2D au survol', insert: 'transform: translateY(-4px);\n$0', type: 'prop' },
  { label: '@media (max-width: 768px)', detail: 'Règle responsive pour mobile', insert: '@media (max-width: 768px) {\n  $0\n}', type: 'snippet' }
];

export class IntelliSenseEngine {
  constructor(editor) {
    this.editor = editor;
    this.textarea = editor.textarea;
    this.selectedIndex = 0;
    this.currentMatches = [];
    this.prefix = '';
    this.active = false;

    this.createPopupElement();
    this.bindEvents();
  }

  createPopupElement() {
    this.popup = document.createElement('div');
    this.popup.className = 'intellisense-popup hidden';
    this.popup.id = 'intellisense-popup';
    this.popup.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.popup);
  }

  bindEvents() {
    if (!this.textarea) return;

    this.textarea.addEventListener('input', () => {
      this.checkTrigger();
    });

    this.textarea.addEventListener('keydown', (e) => {
      if (this.active) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.moveSelection(1);
          return;
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.moveSelection(-1);
          return;
        }
        // TOUCHE TAB : DÉFILER LES PROPOSITIONS COMME DEMANDÉ PAR L'UTILISATEUR
        if (e.key === 'Tab') {
          e.preventDefault();
          if (e.shiftKey) {
            this.moveSelection(-1); // Revenir en arrière avec Shift+Tab
          } else {
            this.moveSelection(1);  // Défiler vers l'avant avec Tab
          }
          return;
        }
        // ENTRÉE : CHOISIR ET APPLIQUER LA PROPOSITION SÉLECTIONNÉE
        if (e.key === 'Enter') {
          if (this.currentMatches.length > 0) {
            e.preventDefault();
            this.applySelection();
            return;
          }
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          this.hide();
          return;
        }
      }
    });

    this.textarea.addEventListener('scroll', () => {
      if (this.active) {
        this.positionPopup();
      }
    });

    this.textarea.addEventListener('blur', () => {
      setTimeout(() => this.hide(), 160);
    });
  }

  checkTrigger() {
    if (!this.textarea || !this.editor.activeFile) {
      this.hide();
      return;
    }

    const start = this.textarea.selectionStart;
    const val = this.textarea.value;
    const mode = this.editor.getMode();

    // Récupérer le mot ou tag en cours de frappe juste avant le curseur
    const beforeCursor = val.substring(0, start);
    const match = beforeCursor.match(/([<a-zA-Z0-9\-:!]+)$/);

    if (!match || match[1].length < 1) {
      this.hide();
      return;
    }

    let rawPrefix = match[1].toLowerCase();
    // Normaliser si précédé d'un chevron '<'
    if (rawPrefix.startsWith('<')) {
      rawPrefix = rawPrefix.substring(1);
    }

    if (!rawPrefix) {
      this.hide();
      return;
    }

    this.prefix = rawPrefix;
    const list = mode === 'html' ? HTML_SUGGESTIONS : CSS_SUGGESTIONS;

    this.currentMatches = list.filter(item => {
      const l = item.label.toLowerCase();
      return l.startsWith(this.prefix) || (this.prefix.length > 1 && l.includes(this.prefix));
    }).slice(0, 7);

    if (this.currentMatches.length === 0) {
      this.hide();
      return;
    }

    this.selectedIndex = 0;
    this.renderSuggestions();
    this.positionPopup();
    this.show();
  }

  getCaretCoordinates() {
    if (!this.textarea) return { left: 100, top: 100, lineHeight: 24 };

    const position = this.textarea.selectionStart;
    const computed = window.getComputedStyle(this.textarea);

    const textBefore = this.textarea.value.substring(0, position);
    const lines = textBefore.split('\n');
    const lineIndex = lines.length - 1;
    const currentLine = lines[lineIndex];

    // Mesure exacte de la police à chasse fixe (monospace)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;
    const charWidth = ctx.measureText('M').width || 8.5;
    const lineHeight = parseFloat(computed.lineHeight) || (parseFloat(computed.fontSize) * 1.6);
    const padLeft = parseFloat(computed.paddingLeft) || 16;
    const padTop = parseFloat(computed.paddingTop) || 16;

    let col = 0;
    for (let i = 0; i < currentLine.length; i++) {
      if (currentLine[i] === '\t') {
        col += 2;
      } else {
        col += 1;
      }
    }

    const textareaRect = this.textarea.getBoundingClientRect();
    const left = textareaRect.left + padLeft + (col * charWidth) - this.textarea.scrollLeft;
    const top = textareaRect.top + padTop + (lineIndex * lineHeight) - this.textarea.scrollTop;

    return { left, top, lineHeight, charWidth };
  }

  positionPopup() {
    if (!this.textarea || !this.popup) return;

    const coords = this.getCaretCoordinates();
    const textareaRect = this.textarea.getBoundingClientRect();

    let targetLeft = coords.left;
    let targetTop = coords.top + coords.lineHeight + 4; // Juste sous le mot tapé comme sur VS Code

    const popupWidth = 320;
    const popupHeight = 220;

    // Éviter de déborder de l'éditeur sur la droite
    if (targetLeft + popupWidth > textareaRect.right - 12) {
      targetLeft = Math.max(textareaRect.left + 16, textareaRect.right - popupWidth - 12);
    }
    // Ne pas chevaucher le bord gauche
    if (targetLeft < textareaRect.left + 12) {
      targetLeft = textareaRect.left + 16;
    }

    // Si le curseur est trop bas près du bas de l'écran, afficher au-dessus
    if (targetTop + popupHeight > window.innerHeight - 30) {
      targetTop = Math.max(10, coords.top - popupHeight - 4);
    }

    this.popup.style.left = `${Math.round(targetLeft)}px`;
    this.popup.style.top = `${Math.round(targetTop)}px`;
  }

  renderSuggestions() {
    this.popup.innerHTML = this.currentMatches.map((m, idx) => `
      <div class="intellisense-item ${idx === this.selectedIndex ? 'selected' : ''}" data-idx="${idx}">
        <span class="intellisense-type ${m.type}">${m.type === 'tag' ? '<>' : m.type === 'snippet' ? '{}' : '#'}</span>
        <span class="intellisense-label">${this.escapeHtml(m.label)}</span>
        <span class="intellisense-detail">${this.escapeHtml(m.detail)}</span>
      </div>
    `).join('');

    this.popup.querySelectorAll('.intellisense-item').forEach(el => {
      el.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.selectedIndex = parseInt(el.getAttribute('data-idx'), 10);
        this.applySelection();
      });
    });
  }

  moveSelection(delta) {
    if (this.currentMatches.length === 0) return;
    this.selectedIndex = (this.selectedIndex + delta + this.currentMatches.length) % this.currentMatches.length;
    this.popup.querySelectorAll('.intellisense-item').forEach((item, idx) => {
      item.classList.toggle('selected', idx === this.selectedIndex);
      if (idx === this.selectedIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  applySelection() {
    if (this.currentMatches.length === 0) return;
    const selected = this.currentMatches[this.selectedIndex];
    if (!selected) return;

    const start = this.textarea.selectionStart;
    const val = this.textarea.value;

    const beforeCursor = val.substring(0, start);
    const afterCursor = val.substring(start);

    // Trouver le token à remplacer (avec ou sans le chevron '<')
    const match = beforeCursor.match(/([<a-zA-Z0-9\-:!]+)$/);
    if (!match) return;

    const tokenLen = match[0].length;
    const cleanBefore = beforeCursor.substring(0, beforeCursor.length - tokenLen);

    if (this.editor && typeof this.editor.recordHistorySnapshot === 'function') {
      this.editor.recordHistorySnapshot(true);
    }

    let snippet = selected.insert;
    let targetOffset = snippet.indexOf('$0');
    if (targetOffset !== -1) {
      snippet = snippet.replace('$0', '');
    } else {
      targetOffset = snippet.length;
    }

    snippet = snippet.replace(/\$[0-9]+/g, '');

    const nextValue = cleanBefore + snippet + afterCursor;
    this.textarea.value = nextValue;

    const newCursorPos = cleanBefore.length + targetOffset;
    this.textarea.selectionStart = newCursorPos;
    this.textarea.selectionEnd = newCursorPos;

    if (this.editor && typeof this.editor.recordHistorySnapshot === 'function') {
      this.editor.recordHistorySnapshot(true);
    }

    this.hide();

    // Déclencher l'événement input pour synchroniser le code et l'aperçu
    this.textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  show() {
    this.popup.classList.remove('hidden');
    this.popup.setAttribute('aria-hidden', 'false');
    this.active = true;
  }

  hide() {
    this.popup.classList.add('hidden');
    this.popup.setAttribute('aria-hidden', 'true');
    this.active = false;
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
