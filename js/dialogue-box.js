// =============================================================================
// COMPAGNON D'APPRENTISSAGE : MAÎTRE BODHI (STYLE VISUAL NOVEL & SLIME RANCHER)
// Arbres de dialogues à fins multiples, badge d'alerte & progression secrète
// =============================================================================

import { sound } from './audio.js';
import { BODHI_QUESTIONS } from './bodhi-lore.js';
import { storage } from './storage.js';
import { enrichWithGlossary, getGlossaryItem } from './glossary-data.js';

export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const BODHI_POSES = {
  neutral: 'assets/characters/bodhi_neutral.jpg',
  thinking: 'assets/characters/bodhi_thinking.jpg',
  secret: 'assets/characters/bodhi_secret.jpg',
  thumbs_up: 'assets/characters/bodhi_thumbs_up.jpg',
  shocked: 'assets/characters/bodhi_shocked.jpg',
  code_magic: 'assets/characters/bodhi_code_magic.jpg',
  pointing: 'assets/characters/bodhi_pointing.jpg',
  scroll: 'assets/characters/bodhi_scroll.jpg',
  zen: 'assets/characters/bodhi_zen.jpg',
  emotional: 'assets/characters/bodhi_emotional.jpg',
  sleeping: 'assets/characters/bodhi_sleeping.jpg',
  laughing: 'assets/characters/bodhi_laughing.jpg',
  weak: 'assets/characters/bodhi_weak.jpg',
  glitch: 'assets/characters/bodhi_glitch.jpg',
  ascended: 'assets/characters/bodhi_ascended.jpg'
};

export const NULL_POSES = {
  neutral: 'assets/characters/null_neutral.jpg',
  action: 'assets/characters/null_action.jpg',
  purge: 'assets/characters/null_action.jpg',
  inspect: 'assets/characters/null_inspect.jpg',
  relieved: 'assets/characters/null_relieved.jpg'
};

export const ADA_POSES = {
  neutral: 'assets/characters/ada_neutral.jpg',
  serious: 'assets/characters/ada_serious.jpg',
  shocked: 'assets/characters/ada_shocked.jpg',
  thinking: 'assets/characters/ada_thinking.jpg',
  smile: 'assets/characters/ada_smile.jpg'
};

export const ALL_CHARACTERS = {
  bodhi: { name: 'MAÎTRE BODHI', poses: BODHI_POSES },
  null: { name: 'NULL', poses: NULL_POSES },
  ada: { name: 'ADA (INGÉNIEURE RUNTIME)', poses: ADA_POSES }
};

export class BodhiDialogueEngine {
  constructor({
    widgetContainer,
    avatarContainer,
    nameBadge,
    stepBadge,
    speechContainer,
    validateBtn,
    hintBtn,
    askBtn,
    grimoireBtn,
    solutionBtn,
    prevBtn,
    nextBtn,
    minimizeBtn,
    sizeBtn,
    resizeHandle,
    qaDrawer,
    qaQuestionsList,
    closeQaBtn,
    onValidate,
    onOpenGrimoire,
    onResetStep,
    onStepChange,
    onTargetFileClicked
  }) {
    this.widgetContainer = widgetContainer || document.getElementById('bodhi-widget');
    this.avatarContainer = avatarContainer;
    this.nameBadge = nameBadge;
    this.stepBadge = stepBadge;
    this.speechContainer = speechContainer;
    this.validateBtn = validateBtn;
    this.hintBtn = hintBtn;
    this.askBtn = askBtn;
    this.grimoireBtn = grimoireBtn;
    this.solutionBtn = solutionBtn;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.minimizeBtn = minimizeBtn;
    this.sizeBtn = sizeBtn;
    this.resizeHandle = resizeHandle;
    this.onTargetFileClicked = onTargetFileClicked;
    this.qaDrawer = qaDrawer;
    this.qaQuestionsList = qaQuestionsList;
    this.closeQaBtn = closeQaBtn;

    this.onValidate = onValidate;
    this.onOpenGrimoire = onOpenGrimoire;
    this.onResetStep = onResetStep;
    this.onStepChange = onStepChange;

    this.currentPose = 'neutral';
    this.currentStep = null;
    this.highestUnlockedStep = 0;
    this.totalStepsCount = 36;
    this.showingHint = false;
    this.isMinimized = false;
    this.sizeIndex = 1;
    this.sizePresets = [460, 560, 720];

    // Éléments du Glossaire Vivant
    this.glossaryPopover = document.getElementById('glossary-popover');
    this.glossaryBadge = document.getElementById('glossary-popover-badge');
    this.glossaryTitle = document.getElementById('glossary-popover-title');
    this.glossaryDesc = document.getElementById('glossary-popover-desc');
    this.glossaryCode = document.getElementById('glossary-popover-code');
    this.glossaryTip = document.getElementById('glossary-popover-tip-text');
    this.closeGlossaryBtn = document.getElementById('close-glossary-btn');
    this.viewGrimoireBtn = document.getElementById('glossary-view-grimoire-btn');
    this.currentGlossaryTerm = null;

    // Suivi des questions déjà vues
    try {
      const stored = localStorage.getItem('learning_html_css_seen_questions');
      this.seenQuestions = new Set(stored ? JSON.parse(stored) : []);
    } catch {
      this.seenQuestions = new Set();
    }

    this.bindEvents();
    this.initResizable();
    this.setPose('neutral');
  }

  bindEvents() {
    if (this.validateBtn) {
      this.validateBtn.addEventListener('click', () => {
        if (typeof this.onValidate === 'function') {
          this.onValidate();
        }
      });
    }

    if (this.hintBtn) {
      this.hintBtn.addEventListener('click', () => {
        sound.playClick();
        this.toggleHint();
      });
    }

    if (this.askBtn) {
      this.askBtn.addEventListener('click', () => {
        sound.playClick();
        this.toggleQADrawer();
      });
    }

    if (this.closeQaBtn) {
      this.closeQaBtn.addEventListener('click', () => {
        sound.playClick();
        this.closeQADrawer();
      });
    }

    if (this.grimoireBtn) {
      this.grimoireBtn.addEventListener('click', () => {
        sound.playClick();
        if (typeof this.onOpenGrimoire === 'function') {
          this.onOpenGrimoire();
        }
      });
    }

    if (this.solutionBtn) {
      this.solutionBtn.addEventListener('click', () => {
        sound.playClick();
        if (typeof this.onResetStep === 'function') {
          this.onResetStep();
        }
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        sound.playClick();
        if (typeof this.onStepChange === 'function') {
          this.onStepChange(-1);
        }
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        if (this.nextBtn.disabled) return;
        sound.playClick();
        if (typeof this.onStepChange === 'function') {
          this.onStepChange(1);
        }
      });
    }

    if (this.minimizeBtn) {
      this.minimizeBtn.addEventListener('click', () => {
        sound.playClick();
        this.toggleMinimize();
      });
    }

    if (this.sizeBtn) {
      this.sizeBtn.addEventListener('click', () => {
        sound.playClick();
        this.cycleSizePreset();
      });
    }

    // Gestionnaires d'événements du Glossaire
    if (this.closeGlossaryBtn) {
      this.closeGlossaryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideGlossaryPopover();
      });
    }

    if (this.viewGrimoireBtn) {
      this.viewGrimoireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const termName = this.currentGlossaryTerm ? this.currentGlossaryTerm.name : '';
        this.hideGlossaryPopover();
        if (typeof this.onOpenGrimoire === 'function') {
          this.onOpenGrimoire(termName);
        }
      });
    }

    // Clic global : ouvrir la définition quand on clique sur n'importe quel mot enrichi
    document.addEventListener('click', (e) => {
      const termBtn = e.target.closest('.glossary-term-btn');
      if (termBtn) {
        e.preventDefault();
        e.stopPropagation();
        const termId = termBtn.getAttribute('data-glossary-id');
        if (termId) {
          storage.discoverTerm(termId);
        }
        this.showGlossaryPopover(termId);
        return;
      }

      if (this.glossaryPopover && !this.glossaryPopover.classList.contains('hidden')) {
        if (!this.glossaryPopover.contains(e.target)) {
          this.hideGlossaryPopover();
        }
      }
    });
  }

  showGlossaryPopover(termId) {
    if (!termId || !this.glossaryPopover) return;
    const item = getGlossaryItem(termId);
    if (!item) return;

    this.currentGlossaryTerm = item;
    if (this.glossaryBadge) this.glossaryBadge.textContent = item.category;
    if (this.glossaryTitle) this.glossaryTitle.textContent = item.name;
    if (this.glossaryDesc) this.glossaryDesc.textContent = item.desc;
    if (this.glossaryCode) this.glossaryCode.textContent = item.code;
    if (this.glossaryTip) this.glossaryTip.textContent = item.bodhiTip;

    if (this.glossaryPopover) {
      const tipLabel = this.glossaryPopover.querySelector('.glossary-tip-label');
      if (tipLabel) {
        tipLabel.textContent = (this.currentCharacter === 'ada') ? "Conseil d'Ada :" : "Conseil de Bodhi :";
      }
    }

    this.glossaryPopover.classList.remove('hidden');
    this.glossaryPopover.setAttribute('aria-hidden', 'false');
    sound.playClick();
  }

  hideGlossaryPopover() {
    if (!this.glossaryPopover) return;
    this.glossaryPopover.classList.add('hidden');
    this.glossaryPopover.setAttribute('aria-hidden', 'true');
    this.currentGlossaryTerm = null;
  }

  initResizable() {
    this.speechContainer = document.getElementById('bodhi-speech-container');
    this.resizeHandle = document.getElementById('bodhi-resize-handle');
    this.resizeTop = document.getElementById('bodhi-resize-top');
    this.resizeLeft = document.getElementById('bodhi-resize-left');

    // Restaurer les dimensions personnalisées de la boîte de dialogue
    const savedWidth = localStorage.getItem('bodhi_dialogue_width');
    const savedHeight = localStorage.getItem('bodhi_dialogue_height');
    if (savedWidth && this.widgetContainer) {
      this.widgetContainer.style.width = `${savedWidth}px`;
    }
    if (savedHeight && this.speechContainer) {
      this.speechContainer.style.height = `${savedHeight}px`;
      this.speechContainer.style.maxHeight = 'none';
    }

    const setupDrag = (handleEl, mode, cursorStyle) => {
      if (!handleEl || !this.widgetContainer) return;

      handleEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(f => f.style.pointerEvents = 'none');
        document.body.classList.add('dialogue-resizing');
        document.body.style.cursor = cursorStyle;

        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = this.widgetContainer.getBoundingClientRect().width;
        const startSpeechHeight = this.speechContainer
          ? this.speechContainer.getBoundingClientRect().height
          : 180;

        let latestX = startX;
        let latestY = startY;
        let isDragging = true;
        let rafPending = false;

        const onMouseMove = (moveEvt) => {
          if (!isDragging) return;
          latestX = moveEvt.clientX;
          latestY = moveEvt.clientY;

          if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => {
              rafPending = false;
              if (!isDragging) return;

              if (mode === 'both' || mode === 'horizontal') {
                const deltaX = startX - latestX;
                const newWidth = Math.min(Math.max(startWidth + deltaX, 320), window.innerWidth - 32);
                this.widgetContainer.style.width = `${newWidth}px`;
              }

              if (mode === 'both' || mode === 'vertical') {
                const deltaY = startY - latestY;
                const newHeight = Math.min(Math.max(startSpeechHeight + deltaY, 90), window.innerHeight - 180);
                if (this.speechContainer) {
                  this.speechContainer.style.height = `${newHeight}px`;
                  this.speechContainer.style.maxHeight = 'none';
                }
              }
            });
          }
        };

        const onMouseUp = () => {
          if (!isDragging) return;
          isDragging = false;
          rafPending = false;
          document.body.classList.remove('dialogue-resizing');
          document.body.style.cursor = '';
          iframes.forEach(f => f.style.pointerEvents = '');

          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);

          if (this.widgetContainer) {
            localStorage.setItem('bodhi_dialogue_width', parseInt(this.widgetContainer.style.width, 10));
          }
          if (this.speechContainer && this.speechContainer.style.height) {
            localStorage.setItem('bodhi_dialogue_height', parseInt(this.speechContainer.style.height, 10));
          }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });

      // Double-clic pour restaurer les dimensions d'origine
      handleEl.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.resetDialogueSize();
      });
    };

    setupDrag(this.resizeHandle, 'both', 'nwse-resize');
    setupDrag(this.resizeTop, 'vertical', 'ns-resize');
    setupDrag(this.resizeLeft, 'horizontal', 'ew-resize');

    // Initialisation du redimensionnement libre de l'avatar de Bodhi
    this.initAvatarResizable();
  }

  resetDialogueSize() {
    if (this.widgetContainer) {
      this.widgetContainer.style.width = '';
      localStorage.removeItem('bodhi_dialogue_width');
    }
    if (this.speechContainer) {
      this.speechContainer.style.height = '';
      this.speechContainer.style.maxHeight = '';
      localStorage.removeItem('bodhi_dialogue_height');
    }
  }

  initAvatarResizable() {
    this.avatarResizer = document.getElementById('bodhi-avatar-resizer');

    // Restaurer la taille d'avatar enregistrée
    const savedAvatarSize = localStorage.getItem('bodhi_avatar_size');
    const initialSize = savedAvatarSize ? parseInt(savedAvatarSize, 10) : 200;
    this.setAvatarSize(initialSize);

    // Boutons de zoom dédiés
    const btnIn = document.getElementById('bodhi-avatar-zoom-in');
    const btnOut = document.getElementById('bodhi-avatar-zoom-out');
    const btnReset = document.getElementById('bodhi-avatar-zoom-reset');

    if (btnIn) {
      btnIn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setAvatarSize(this.currentAvatarSize + 35);
      });
    }

    if (btnOut) {
      btnOut.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setAvatarSize(this.currentAvatarSize - 35);
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setAvatarSize(200);
      });
    }

    // Glisser-déposer fluide sur le haut du buste de Bodhi
    if (this.avatarResizer) {
      this.avatarResizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(f => f.style.pointerEvents = 'none');
        document.body.classList.add('dialogue-resizing');
        document.body.style.cursor = 'ns-resize';

        const startY = e.clientY;
        const startSize = this.currentAvatarSize || 200;
        let latestY = startY;
        let isDragging = true;
        let rafPending = false;

        const onMouseMove = (moveEvt) => {
          if (!isDragging) return;
          latestY = moveEvt.clientY;

          if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => {
              rafPending = false;
              if (!isDragging) return;
              const deltaY = startY - latestY;
              const newSize = Math.max(100, Math.min(550, startSize + deltaY));
              this.setAvatarSize(newSize);
            });
          }
        };

        const onMouseUp = () => {
          if (!isDragging) return;
          isDragging = false;
          rafPending = false;
          document.body.classList.remove('dialogue-resizing');
          document.body.style.cursor = '';
          iframes.forEach(f => f.style.pointerEvents = '');

          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
          localStorage.setItem('bodhi_avatar_size', this.currentAvatarSize);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    }
  }

  setAvatarSize(sizePx) {
    const clamped = Math.max(100, Math.min(550, sizePx));
    this.currentAvatarSize = clamped;
    document.documentElement.style.setProperty('--bodhi-avatar-size', `${clamped}px`);
    localStorage.setItem('bodhi_avatar_size', clamped);
  }

  cycleSizePreset() {
    this.sizeIndex = (this.sizeIndex + 1) % this.sizePresets.length;
    const targetWidth = this.sizePresets[this.sizeIndex];
    if (this.widgetContainer) {
      this.widgetContainer.style.width = `${targetWidth}px`;
    }
    if (this.sizeBtn) {
      const labels = ['Taille : Compact', 'Taille : Confort', 'Taille : Large'];
      this.sizeBtn.title = labels[this.sizeIndex];
    }
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
    if (this.widgetContainer) {
      this.widgetContainer.classList.toggle('minimized', this.isMinimized);
    }
    if (this.minimizeBtn) {
      this.minimizeBtn.textContent = this.isMinimized ? '+' : '—';
      this.minimizeBtn.title = this.isMinimized ? 'Déployer les conseils de Bodhi' : 'Réduire la fenêtre';
    }
  }

  getCurrentLevel() {
    return Math.max((this.currentStep ? this.currentStep.number : 1), (this.highestUnlockedStep + 1));
  }

  updateAskButtonBadge() {
    if (!this.askBtn) return;
    const char = this.currentCharacter || 'bodhi';
    if (char === 'null') {
      let badge = this.askBtn.querySelector('.ask-btn-badge');
      if (badge) badge.remove();
      return;
    }
    const currentLevel = this.getCurrentLevel();
    const hasUnseen = BODHI_QUESTIONS.some(q => {
      const matchChar = (char === 'ada') ? (q.character === 'ada') : (!q.character || q.character === 'bodhi');
      return matchChar && (q.unlockStep || 1) <= currentLevel && !this.seenQuestions.has(q.id);
    });

    let badge = this.askBtn.querySelector('.ask-btn-badge');
    if (hasUnseen) {
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'ask-btn-badge';
        badge.innerHTML = `<img src="assets/icons/alert.png" alt="!" class="alert-badge-img">`;
        this.askBtn.appendChild(badge);
      }
    } else if (badge) {
      badge.remove();
    }
  }

  renderQAList() {
    if (!this.qaQuestionsList) return;

    const char = this.currentCharacter || 'bodhi';
    const currentLevel = this.getCurrentLevel();
    const availableQuestions = BODHI_QUESTIONS.filter(q => {
      const matchChar = (char === 'ada') ? (q.character === 'ada') : (!q.character || q.character === 'bodhi');
      return matchChar && (q.unlockStep || 1) <= currentLevel;
    });
    const defaultCategory = (char === 'ada') ? "L'Atelier d'Ada & Confidences du Runtime" : "Sagesse de Bodhi";
    const categoryNames = Array.from(new Set(availableQuestions.map(q => q.category || defaultCategory)));

    let html = '';
    categoryNames.forEach(catName => {
      const unlockedList = availableQuestions.filter(q => (q.category || defaultCategory) === catName);
      if (unlockedList.length === 0) return;

      html += `
        <div class="qa-category-group">
          <div class="qa-category-title">${catName}</div>
          <div class="qa-category-items">
            ${unlockedList.map(q => {
              const isNew = !this.seenQuestions.has(q.id);
              return `
                <button class="qa-question-pill ${isNew ? 'is-new' : ''}" data-qid="${q.id}">
                  <span class="qa-q-text">${escapeHtml(q.question)}</span>
                  ${isNew ? '<span class="qa-new-badge">!</span>' : ''}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    if (!html) {
      const emptyMsg = (char === 'ada')
        ? "Poursuis tes découvertes dans script.js pour débloquer de nouveaux échanges avec Ada."
        : "Poursuis ta construction dans l'éditeur pour inspirer de nouveaux dialogues avec Maître Bodhi.";
      html = `
        <div class="qa-empty-state" style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          <p>${emptyMsg}</p>
        </div>
      `;
    }

    this.qaQuestionsList.innerHTML = html;

    this.qaQuestionsList.querySelectorAll('button.qa-question-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        const qData = BODHI_QUESTIONS.find(q => q.id === qid);
        if (qData) {
          this.seenQuestions.add(qid);
          try {
            localStorage.setItem('learning_html_css_seen_questions', JSON.stringify(Array.from(this.seenQuestions)));
          } catch (e) {
            console.warn(e);
          }
          this.updateAskButtonBadge();
          this.startConversation(qData);
        }
      });
    });
  }

  toggleQADrawer() {
    if (!this.qaDrawer) return;
    const isHidden = this.qaDrawer.classList.contains('hidden');
    if (isHidden) {
      const drawerTitle = this.qaDrawer.querySelector('.qa-drawer-title');
      if (drawerTitle) {
        drawerTitle.textContent = (this.currentCharacter === 'ada') ? "Échanger avec Ada" : "Interroger Maître Bodhi";
      }
      this.renderQAList();
      this.qaDrawer.classList.remove('hidden');
      if (this.speechContainer) this.speechContainer.classList.add('hidden');
      const thinkPose = (this.currentCharacter === 'ada') ? 'thinking' : 'thinking';
      this.setPose(thinkPose, this.currentCharacter);
    } else {
      this.closeQADrawer();
    }
  }

  closeQADrawer() {
    if (!this.qaDrawer) return;
    this.qaDrawer.classList.add('hidden');
    if (this.speechContainer) this.speechContainer.classList.remove('hidden');
    const normalPose = (this.currentStep && this.currentStep.pose) || 'neutral';
    this.setPose(normalPose, this.currentCharacter);
  }

  startConversation(questionData) {
    this.closeQADrawer();
    sound.playClick();

    if (!this.speechContainer) return;

    const char = questionData.character || this.currentCharacter || 'bodhi';
    this.activeQuestionCharacter = char;

    const tree = questionData.dialogueTree;
    this.currentDialogueTree = tree;
    const pose = tree.pose || questionData.pose || 'neutral';
    this.setPose(pose, char);

    this.conversationHistory = [
      { role: 'user', text: questionData.question },
      { role: char, text: tree.text, pose: pose }
    ];

    this.renderConversationNode(tree);
  }

  renderConversationNode(node) {
    if (!this.speechContainer) return;

    const activeChar = this.activeQuestionCharacter || this.currentCharacter || 'bodhi';
    const isAda = (activeChar === 'ada');
    const endTagText = isAda
      ? "Ada te fait un clin d'œil complice en buvant une gorgée de son mug '>_'. L'échange est gravé dans le runtime."
      : "Bodhi te sourit avec bienveillance. L'échange est gravé dans ton esprit.";

    const historyHtml = this.conversationHistory.map(entry => {
      if (entry.role === 'user') {
        return `
          <div class="qa-user-bubble">
            <span class="qa-label">Toi :</span>
            <p>« ${enrichWithGlossary(entry.text)} »</p>
          </div>
        `;
      }

      const role = entry.role || 'bodhi';
      let bubbleClass = 'qa-bodhi-bubble';
      let speakerLabel = 'Maître Bodhi :';
      if (role === 'ada') {
        bubbleClass = 'qa-bodhi-bubble qa-ada-bubble';
        speakerLabel = 'Ada (Ingénieure Runtime) :';
      } else if (role === 'null') {
        bubbleClass = 'qa-bodhi-bubble qa-null-bubble';
        speakerLabel = 'NULL :';
      }

      return `
        <div class="${bubbleClass}">
          <span class="qa-label">${speakerLabel}</span>
          <p>« ${enrichWithGlossary(entry.text)} »</p>
        </div>
      `;
    }).join('');

    let choicesHtml = '';
    if (node.choices && node.choices.length > 0) {
      choicesHtml = `
        <div class="qa-choices-container">
          <span class="qa-choices-label">Choisis ta réplique :</span>
          <div class="qa-choices-list">
            ${node.choices.map((c, idx) => `
              <button class="btn-qa-choice" data-idx="${idx}">
                ${escapeHtml(c.text)}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      choicesHtml = `
        <div class="qa-end-dialogue-tag">
          ${endTagText}
        </div>
      `;
    }

    this.speechContainer.innerHTML = `
      <div class="bodhi-qa-conversation-flow">
        ${historyHtml}
        ${choicesHtml}
        <div class="qa-return-bar">
          <button id="return-to-mission-btn" class="btn-return-mission">
            Terminer l'échange et reprendre la mission
          </button>
        </div>
      </div>
    `;

    this.speechContainer.scrollTop = this.speechContainer.scrollHeight;

    // Écouteurs sur les choix de répliques
    this.speechContainer.querySelectorAll('.btn-qa-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const choice = node.choices[idx];
        if (choice && choice.next) {
          sound.playClick();

          // Sauvegarde du karma et de l'alignement philosophique choisi par le joueur
          if (choice.karma) {
            storage.addKarma(choice.karma);
            storage.setArchitectAlignment(storage.getDominantKarma());
          }
          if (choice.alignment) {
            storage.setArchitectAlignment(choice.alignment);
          }
          if (choice.next.ending) {
            storage.setArchitectAlignment(choice.next.ending);
          }

          const nextChar = choice.next.character || (choice.next.role ? choice.next.role : activeChar);
          this.conversationHistory.push({ role: 'user', text: choice.text });
          this.conversationHistory.push({ role: nextChar, text: choice.next.text, pose: choice.next.pose || 'neutral' });
          this.setPose(choice.next.pose || 'neutral', nextChar);
          this.renderConversationNode(choice.next);
        }
      });
    });

    const returnBtn = document.getElementById('return-to-mission-btn');
    if (returnBtn) {
      returnBtn.addEventListener('click', () => {
        sound.playClick();
        if (this.currentStep) {
          this.loadStep(this.currentStep, this.totalStepsCount, this.highestUnlockedStep);
        }
      });
    }
  }

  setPose(poseName, character = null) {
    if (!this.avatarContainer) return;
    if (character) {
      this.currentCharacter = character;
    }
    const charKey = this.currentCharacter || 'bodhi';
    const charData = ALL_CHARACTERS[charKey] || ALL_CHARACTERS.bodhi;
    let src = charData.poses[poseName];

    // Fallback intelligent selon le personnage actif pour ne jamais afficher Bodhi à la place d'Ada ou de NULL
    if (!src) {
      if (charKey === 'ada') {
        src = charData.poses.thinking || charData.poses.smile || charData.poses.neutral;
      } else if (charKey === 'null') {
        src = charData.poses.inspect || charData.poses.neutral;
      } else {
        src = charData.poses.neutral;
      }
    }

    this.currentPose = poseName;

    let img = this.avatarContainer.querySelector('.bodhi-avatar-img');
    if (!img) {
      this.avatarContainer.innerHTML = `<img src="${src}" alt="${charData.name}" class="bodhi-avatar-img">`;
    } else {
      img.src = src;
      img.setAttribute('src', src);
      img.alt = charData.name;
    }

    this.avatarContainer.classList.remove('bodhi-pop');
    void this.avatarContainer.offsetWidth; // reflow
    this.avatarContainer.classList.add('bodhi-pop');
  }

  setSpeaker(name, poseName, character = null) {
    if (character) {
      this.currentCharacter = character;
    } else if (name && name.toLowerCase().includes('ada')) {
      this.currentCharacter = 'ada';
    } else if (name && (name.toLowerCase().includes('null') || name.toLowerCase().includes('système') || name.toLowerCase().includes('alerte'))) {
      this.currentCharacter = 'null';
    } else if (name && name.toLowerCase().includes('bodhi')) {
      this.currentCharacter = 'bodhi';
    } else if (!this.currentCharacter) {
      this.currentCharacter = 'bodhi';
    }

    if (this.nameBadge && name) {
      this.nameBadge.textContent = name;
    }
    this.setPose(poseName, this.currentCharacter);

    // Visibilité des boutons selon le personnage actif
    if (this.currentCharacter === 'null') {
      if (this.hintBtn) this.hintBtn.style.display = 'none';
      if (this.askBtn) this.askBtn.style.display = 'none';
    } else if (this.currentCharacter === 'ada') {
      if (this.hintBtn) {
        this.hintBtn.style.display = '';
        this.hintBtn.textContent = "Conseil d'Ada";
      }
      if (this.askBtn) {
        this.askBtn.style.display = '';
        this.askBtn.textContent = "Discuter avec Ada";
      }
    } else {
      if (this.hintBtn) {
        this.hintBtn.style.display = '';
        this.hintBtn.textContent = "Conseil secret";
      }
      if (this.askBtn) {
        this.askBtn.style.display = '';
        this.askBtn.textContent = "Poser une question";
      }
    }
  }

  loadStep(step, totalSteps, highestUnlockedStep = 0) {
    this.currentStep = step;
    this.totalStepsCount = totalSteps;
    this.highestUnlockedStep = highestUnlockedStep;
    this.showingHint = false;

    const char = step.character || 'bodhi';
    const pose = step.pose || 'neutral';
    const speaker = step.speaker || (ALL_CHARACTERS[char] ? ALL_CHARACTERS[char].name : "MAÎTRE BODHI");

    this.setSpeaker(speaker, pose, char);

    // Visibilité des boutons d'interaction selon le personnage
    if (char === 'null') {
      // NULL ne donne aucun conseil et ne répond à aucune question
      if (this.hintBtn) this.hintBtn.style.display = 'none';
      if (this.askBtn) this.askBtn.style.display = 'none';
    } else if (char === 'ada') {
      // Ada donne des conseils techniques sur le runtime ET on peut lui poser des questions pour mieux la connaître
      if (this.hintBtn) {
        this.hintBtn.style.display = '';
        this.hintBtn.textContent = "Conseil d'Ada";
      }
      if (this.askBtn) {
        this.askBtn.style.display = '';
        this.askBtn.textContent = "Discuter avec Ada";
      }
    } else {
      // Bodhi propose ses conseils secrets et ses questions
      if (this.hintBtn) {
        this.hintBtn.style.display = '';
        this.hintBtn.textContent = "Conseil secret";
      }
      if (this.askBtn) {
        this.askBtn.style.display = '';
        this.askBtn.textContent = "Poser une question";
      }
    }

    if (this.stepBadge) {
      this.stepBadge.style.display = 'none';
      this.stepBadge.textContent = '';
    }

    if (this.qaDrawer) {
      this.qaDrawer.classList.add('hidden');
    }

    this.updateAskButtonBadge();

    if (this.speechContainer) {
      this.speechContainer.classList.remove('hidden');

      const instructionsHtml = step.instructions.map(inst => `
        <li>${enrichWithGlossary(inst)}</li>
      `).join('');

      this.speechContainer.innerHTML = `
        <div class="bodhi-speech-bubble">
          <p class="bodhi-speech-intro">« ${enrichWithGlossary(step.mentorSpeech)} »</p>
        </div>

        ${step.proverb ? `
          <div class="bodhi-proverb">
            ${enrichWithGlossary(step.proverb)}
          </div>
        ` : ''}

        <div class="bodhi-task-box">
          <div class="bodhi-task-header">
            <span class="bodhi-task-label">Mission :</span>
            <span class="bodhi-target-badge" id="bodhi-target-badge" title="Cliquer pour basculer vers ${step.targetFile || 'index.html'} dans l'éditeur">${step.targetFile || 'index.html'}</span>
          </div>
          <ul class="bodhi-task-list">
            ${instructionsHtml}
          </ul>
        </div>
      `;

      const targetBadgeEl = this.speechContainer.querySelector('#bodhi-target-badge');
      if (targetBadgeEl) {
        targetBadgeEl.addEventListener('click', () => {
          if (typeof this.onTargetFileClicked === 'function') {
            this.onTargetFileClicked(step.targetFile || 'index.html');
          }
        });
      }
    }
  }

  formatInstructionTags(text) {
    return enrichWithGlossary(text);
  }

  toggleHint() {
    if (!this.currentStep || !this.speechContainer) return;
    const char = this.currentCharacter || 'bodhi';
    if (char === 'null') return; // NULL ne donne aucun conseil

    this.showingHint = !this.showingHint;

    const existingHint = this.speechContainer.querySelector('.bodhi-hint-bubble');
    if (existingHint) existingHint.remove();

    if (this.showingHint) {
      const hintPose = (char === 'ada') ? 'thinking' : 'secret';
      this.setPose(hintPose, char);
      
      const hintLabel = (char === 'ada') ? "Conseil d'experte d'Ada :" : "Conseil d'initié de Maître Bodhi :";
      const hintText = this.currentStep.secretTip || this.currentStep.riddle || 'Observe attentivement les balises et leur imbrication.';
      const hintHtml = `
        <div class="bodhi-hint-bubble">
          <span class="bodhi-hint-label">${hintLabel}</span>
          <p class="bodhi-hint-text">${enrichWithGlossary(hintText)}</p>
        </div>
      `;
      this.speechContainer.insertAdjacentHTML('beforeend', hintHtml);
      if (this.hintBtn) this.hintBtn.textContent = "Masquer le conseil";
      this.speechContainer.scrollTop = this.speechContainer.scrollHeight;
    } else {
      const normalPose = this.currentStep.pose || 'neutral';
      this.setPose(normalPose, char);
      if (this.hintBtn) {
        this.hintBtn.textContent = (char === 'ada') ? "Conseil d'Ada" : "Conseil secret";
      }
    }
  }

  onValidationSuccess(nextStepTitle, isFinal = false) {
    sound.playSuccess();
    this.updateAskButtonBadge();

    if (this.speechContainer) {
      if (isFinal) {
        const alignment = storage.getDominantKarma() || storage.getArchitectAlignment() || 'phare';
        let endingTitle = "";
        let endingDesc = "";
        let endingImg = "assets/backgrounds/ending_phare.jpg";

        if (alignment === 'gardien') {
          this.setPose('sleeping');
          endingTitle = "Fin : Le Sanctuaire Éternel (L'Artisan Puriste)";
          endingDesc = "« Le temple se dresse comme un diamant brut taillé dans le marbre du CSS. Pas un seul octet superflu. Bodhi contemple l'œuvre avec vénération : « Tu n'es plus mon élève, tu es devenu le Maître. Chaque fois que quelqu'un chargera cette feuille de style, mon cœur battra à 60 images par seconde. » Une douce lueur dorée et violette enveloppe l'autel tandis que Bodhi s'endort en paix, laissant sa sacoche de scribe sur le pupitre de marbre. »";
          endingImg = "assets/backgrounds/ending_gardien.jpg";
        } else if (alignment === 'rebelle') {
          this.setPose('laughing');
          endingTitle = "Fin : Le Grand Bazar Étoilé (L'Esprit Sauvage & Joyeux)";
          endingDesc = "« Le Sanctuaire vibre de couleurs éclatantes, de lanternes multicolores et de feux d'artifice dans la nuit ! Bodhi regarde le résultat, bouche bée... puis éclate du rire le plus libérateur de son existence. Il jette ses parchemins en l'air comme des confettis : « C'est chaotique, c'est indomptable... et bon sang, qu'est-ce que c'est vivant ! J'avais oublié que le Web était une fête. Viens là, sale garnement ! » »";
          endingImg = "assets/backgrounds/ending_rebelle.jpg";
        } else {
          this.setPose('emotional');
          endingTitle = "Fin : Le Phare Universel (L'Âme Ouverte & Altruiste)";
          endingDesc = "« Le Sanctuaire est rebâti au milieu de l'océan infini. Bodhi retire ses lunettes embuées, les mains tremblantes d'émotion. Il clique sur l'interrupteur du domaine : un rayon de lumière céleste s'élance vers le zénith et les ponts s'ouvrent à perte de vue. Des milliers de voyageurs s'y rassemblent pour partager le savoir librement. Bodhi sourit paisiblement : « Mon cache peut bien s'effacer... vous êtes des milliers pour vous en souvenir à ma place. » »";
          endingImg = "assets/backgrounds/ending_phare.jpg";
        }

        this.speechContainer.innerHTML = `
          <div class="bodhi-feedback success ending-feedback">
            <p class="bodhi-feedback-title">Apothéose de l'Apprenti !</p>
            <div class="bodhi-grand-revelation">
              <div class="bodhi-ending-artwork-wrap">
                <img src="${endingImg}" alt="${endingTitle}" class="bodhi-ending-artwork">
              </div>
              <p class="revelation-text">${endingDesc}</p>
              <p class="revelation-gold">${endingTitle}</p>
            </div>
          </div>
        `;
      } else {
        this.setPose('thumbs_up');
        this.speechContainer.innerHTML = `
          <div class="bodhi-feedback success">
            <p class="bodhi-feedback-title">Excellente construction !</p>
            <p>« Ton esprit s'aligne avec la pureté du code. La structure est solide et respecte l'art des anciens. »</p>
            ${nextStepTitle ? `
              <div class="bodhi-next-banner">
                <span>Étape suivante débloquée :</span>
                <strong>${enrichWithGlossary(nextStepTitle)}</strong>
              </div>
            ` : ''}
          </div>
        `;
      }
    }
  }

  onValidationFailure(errorMessage) {
    this.setPose('thinking');
    sound.playError();

    if (this.speechContainer) {
      const existingFeedback = this.speechContainer.querySelector('.bodhi-feedback.error');
      if (existingFeedback) existingFeedback.remove();

      const errorHtml = `
        <div class="bodhi-feedback error">
          <p class="bodhi-feedback-title">Regardons cela ensemble :</p>
          <p>${enrichWithGlossary(errorMessage)}</p>
        </div>
      `;
      this.speechContainer.insertAdjacentHTML('afterbegin', errorHtml);
      this.speechContainer.scrollTop = 0;
    }
  }
}
