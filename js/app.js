// =============================================================================
// CONTRÔLEUR PRINCIPAL : EXPÉRIENCE MULTI-PAGES AVEC MAÎTRE BODHI
// Création manuelle de fichiers, autocomplétion IntelliSense, dialogues interactifs
// =============================================================================

import { MULTIPAGE_STEPS } from './continuous-steps.js';
import { CHEATSHEET } from './cheatsheet-data.js';
import { GLOSSARY_ITEMS } from './glossary-data.js';
import { VSCodeEditor } from './editor-pro.js';
import { storage } from './storage.js';
import { fireConfetti } from './confetti.js';
import { sound } from './audio.js';
import { CinematicIntro } from './cinematic.js';
import { BodhiDialogueEngine } from './dialogue-box.js';
import { NotableEventsEngine, NOTABLE_EVENTS } from './notable-events.js';

export class SanctuaireApp {
  constructor() {
    this.currentStepIndex = 0;
    this.highestUnlockedStep = 0;
    this.selectedInternetCategory = 'all';

    // Sous-systèmes fondamentaux pré-initialisés sans risque
    try {
      this.notableEvents = new NotableEventsEngine(this);
    } catch (e) {
      console.warn("NotableEventsEngine initialisation différée :", e);
    }

    try { this.cacheElements(); } catch (e) { console.error("Erreur cacheElements:", e); }
    try { this.initTheme(); } catch (e) { console.error("Erreur initTheme:", e); }
    try { this.initSound(); } catch (e) { console.error("Erreur initSound:", e); }
    try { this.initEditor(); } catch (e) { console.error("Erreur initEditor:", e); }
    try { this.initBodhi(); } catch (e) { console.error("Erreur initBodhi:", e); }
    try { this.initSplitResizer(); } catch (e) { console.error("Erreur initSplitResizer:", e); }
    try { this.initCinematic(); } catch (e) { console.error("Erreur initCinematic:", e); }
    try { this.initCheatsheet(); } catch (e) { console.error("Erreur initCheatsheet:", e); }
    try { this.initNotableEvents(); } catch (e) { console.error("Erreur initNotableEvents:", e); }
    try { this.initExportSystem(); } catch (e) { console.error("Erreur initExportSystem:", e); }
    try { this.initSecretCodes(); } catch (e) { console.error("Erreur initSecretCodes:", e); }
    try { this.bindEvents(); } catch (e) { console.error("Erreur bindEvents:", e); }

    try { this.loadSavedProgress(); } catch (e) { console.error("Erreur loadSavedProgress:", e); }

    // Lancer la cinématique uniquement la première fois
    try {
      if (this.cinematic && !storage.hasSeenPrologue()) {
        this.cinematic.start();
      }
    } catch (e) {
      console.error("Erreur cinematic:", e);
    }
  }

  cacheElements() {
    this.el = {
      // Header
      themeToggle: document.getElementById('theme-toggle'),
      themeIconText: document.getElementById('theme-icon-text'),
      soundToggle: document.getElementById('sound-toggle'),
      soundIconText: document.getElementById('sound-icon-text'),
      currentStepLabel: document.getElementById('current-step-label'),
      stepProgressBar: document.getElementById('step-progress-bar'),

      // Workspace & Splitter
      workspaceMain: document.getElementById('workspace-main'),
      editorSection: document.getElementById('editor-section'),
      previewSection: document.getElementById('preview-section'),
      splitResizer: document.getElementById('split-resizer'),

      // Onglets & Création de fichiers
      projectFileTabsContainer: document.getElementById('project-file-tabs'),
      createFileBtn: document.getElementById('create-file-btn'),
      createFileModal: document.getElementById('create-file-modal'),
      newFileInput: document.getElementById('new-file-input'),
      confirmCreateFileBtn: document.getElementById('confirm-create-file-btn'),
      cancelCreateFileBtn: document.getElementById('cancel-create-file-btn'),
      closeCreateFileBtn: document.getElementById('close-create-file-btn'),

      // Éditeur Multi-fichiers
      editorTextarea: document.getElementById('editor-textarea'),
      editorLineNumbers: document.getElementById('editor-line-numbers'),
      editorStatusBar: document.getElementById('editor-status-bar'),
      formatCodeBtn: document.getElementById('format-code-btn'),
      resetCodeBtn: document.getElementById('reset-code-btn'),

      // Prévisualisation
      previewIframe: document.getElementById('preview-iframe'),
      previewWrapper: document.getElementById('preview-wrapper'),
      previewActivePageName: document.getElementById('preview-active-page-name'),
      viewportBtns: document.querySelectorAll('.viewport-btn'),
      reloadPreviewBtn: document.getElementById('reload-preview-btn'),

      // Maître Bodhi Widget (Style Slime Rancher)
      bodhiWidget: document.getElementById('bodhi-widget'),
      bodhiResizeHandle: document.getElementById('bodhi-resize-handle'),
      bodhiBust: document.getElementById('bodhi-bust'),
      bodhiNameBadge: document.getElementById('bodhi-name-badge'),
      bodhiStepBadge: document.getElementById('bodhi-step-badge'),
      bodhiSpeechContainer: document.getElementById('bodhi-speech-container'),
      bodhiValidateBtn: document.getElementById('bodhi-validate-btn'),
      bodhiHintBtn: document.getElementById('bodhi-hint-btn'),
      bodhiAskBtn: document.getElementById('bodhi-ask-btn'),
      bodhiGrimoireBtn: document.getElementById('bodhi-grimoire-btn'),
      bodhiPrevBtn: document.getElementById('bodhi-prev-btn'),
      bodhiNextBtn: document.getElementById('bodhi-next-btn'),
      bodhiMinimizeBtn: document.getElementById('bodhi-minimize-btn'),
      bodhiSizeBtn: document.getElementById('bodhi-size-btn'),
      bodhiQaDrawer: document.getElementById('bodhi-qa-drawer'),
      qaQuestionsList: document.getElementById('qa-questions-list'),
      closeQaBtn: document.getElementById('close-qa-btn'),

      // Modales & Cinématique
      cinematicContainer: document.getElementById('cinematic-container'),
      cinematicNextBtn: document.getElementById('cinematic-next-btn'),
      cinematicSkipBtn: document.getElementById('cinematic-skip-btn'),

      // L'Internet de Bodhi
      cheatsheetModal: document.getElementById('cheatsheet-modal'),
      closeCheatsheetBtn: document.getElementById('close-cheatsheet-btn'),
      cheatsheetSearch: document.getElementById('cheatsheet-search'),
      cheatsheetContent: document.getElementById('cheatsheet-content'),
      cheatsheetCounter: document.getElementById('cheatsheet-counter'),
      internetCategoryPills: document.getElementById('internet-category-pills'),

      // Codes Secrets
      secretCodesBtn: document.getElementById('secret-codes-btn'),
      secretCodesModal: document.getElementById('secret-codes-modal'),
      closeSecretsBtn: document.getElementById('close-secrets-btn'),
      secretCodeInput: document.getElementById('secret-code-input'),
      submitSecretCodeBtn: document.getElementById('submit-secret-code-btn'),
      secretCodeFeedback: document.getElementById('secret-code-feedback'),

      toast: document.getElementById('toast')
    };
  }

  initTheme() {
    const saved = storage.getTheme();
    document.documentElement.setAttribute('data-theme', saved);
    if (this.el.themeIconText) {
      this.el.themeIconText.textContent = saved === 'light' ? 'Thème sombre' : 'Thème clair';
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    storage.setTheme(next);
    if (this.el.themeIconText) {
      this.el.themeIconText.textContent = next === 'light' ? 'Thème sombre' : 'Thème clair';
    }
    sound.playClick();
  }

  initSound() {
    const enabled = storage.getSoundEnabled();
    sound.enabled = enabled;
    if (this.el.soundIconText) {
      this.el.soundIconText.textContent = enabled ? 'Son activé' : 'Son coupé';
    }
  }

  toggleSound() {
    const newState = sound.toggle();
    storage.setSoundEnabled(newState);
    if (this.el.soundIconText) {
      this.el.soundIconText.textContent = newState ? 'Son activé' : 'Son coupé';
    }
    if (newState) sound.playClick();
  }

  initEditor() {
    this.editor = new VSCodeEditor({
      textarea: this.el.editorTextarea,
      lineNumbers: this.el.editorLineNumbers,
      previewIframe: this.el.previewIframe,
      statusBarInfo: this.el.editorStatusBar,
      onCodeChange: (files) => {
        storage.saveProjectFiles(files);
      },
      onFileSwitchRequested: (fileName) => {
        this.editor.switchFile(fileName);
      },
      onPreviewPageChanged: (pageName) => {
        if (this.el.previewActivePageName) {
          this.el.previewActivePageName.textContent = pageName;
        }
      },
      onFilesUpdated: (fileList, activeFile) => {
        this.renderProjectTabs(fileList, activeFile);
      }
    });
  }

  renderProjectTabs(fileList, activeFile) {
    if (!this.el.projectFileTabsContainer) return;

    if (!fileList || fileList.length === 0) {
      this.el.projectFileTabsContainer.innerHTML = '<span class="empty-tabs-hint">Aucun fichier créé</span>';
      return;
    }

    this.el.projectFileTabsContainer.innerHTML = fileList.map(file => `
      <div class="code-tab ${file === activeFile ? 'active' : ''}" data-file="${file}">
        <span class="file-name">${file}</span>
        <button class="tab-close-btn" data-close="${file}" title="Supprimer ${file}">×</button>
      </div>
    `).join('');

    this.el.projectFileTabsContainer.querySelectorAll('.code-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (e.target.closest('.tab-close-btn')) return;
        sound.playClick();
        const fileName = tab.getAttribute('data-file');
        this.editor.switchFile(fileName);
      });
    });

    this.el.projectFileTabsContainer.querySelectorAll('.tab-close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const fileName = btn.getAttribute('data-close');
        if (confirm(`Souhaites-tu vraiment supprimer le fichier ${fileName} ?`)) {
          sound.playClick();
          this.editor.deleteFile(fileName);
          this.showToast(`Fichier ${fileName} supprimé.`, 'info');
        }
      });
    });
  }

  openCreateFileModal() {
    if (!this.el.createFileModal) return;
    this.el.createFileModal.classList.remove('hidden');
    if (this.el.newFileInput) {
      this.el.newFileInput.value = '';
      setTimeout(() => this.el.newFileInput.focus(), 60);
    }
  }

  closeCreateFileModal() {
    if (this.el.createFileModal) {
      this.el.createFileModal.classList.add('hidden');
    }
  }

  submitCreateFile() {
    if (!this.el.newFileInput) return;
    const name = this.el.newFileInput.value.trim();
    const res = this.editor.createFile(name);

    if (res.success) {
      this.closeCreateFileModal();
      sound.playSuccess();
      this.showToast(`Fichier ${res.name} créé avec succès !`, 'success');
    } else {
      sound.playError();
      this.showToast(res.message, 'error');
    }
  }

  initBodhi() {
    this.bodhi = new BodhiDialogueEngine({
      widgetContainer: this.el.bodhiWidget,
      resizeHandle: this.el.bodhiResizeHandle,
      avatarContainer: this.el.bodhiBust,
      nameBadge: this.el.bodhiNameBadge,
      stepBadge: this.el.bodhiStepBadge,
      speechContainer: this.el.bodhiSpeechContainer,
      validateBtn: this.el.bodhiValidateBtn,
      hintBtn: this.el.bodhiHintBtn,
      askBtn: this.el.bodhiAskBtn,
      grimoireBtn: this.el.bodhiGrimoireBtn,
      solutionBtn: this.el.resetCodeBtn,
      prevBtn: this.el.bodhiPrevBtn,
      nextBtn: this.el.bodhiNextBtn,
      minimizeBtn: this.el.bodhiMinimizeBtn,
      sizeBtn: this.el.bodhiSizeBtn,
      qaDrawer: this.el.bodhiQaDrawer,
      qaQuestionsList: this.el.qaQuestionsList,
      closeQaBtn: this.el.closeQaBtn,
      onValidate: () => this.validateCurrentStep(),
      onOpenGrimoire: (term = '') => this.openCheatsheet(term),
      onResetStep: () => this.resetStepBaseline(),
      onStepChange: (delta) => this.navigateStep(delta),
      onTargetFileClicked: (fileName) => {
        if (!fileName) return;
        if (this.editor.files[fileName] === undefined) {
          this.editor.createFile(fileName);
        } else {
          this.editor.switchFile(fileName);
        }
        this.showToast(`Édition de ${fileName}`, 'info');
      }
    });
  }

  initSplitResizer() {
    const resizer = this.el.splitResizer;
    const editor = this.el.editorSection;
    const iframe = this.el.previewIframe;
    const workspace = this.el.workspaceMain;

    if (!resizer || !editor || !workspace) return;

    const savedWidth = localStorage.getItem('learning_html_css_editor_width');
    if (savedWidth) {
      editor.style.width = savedWidth;
    }

    let isDragging = false;

    const onMouseDown = (e) => {
      isDragging = true;
      resizer.classList.add('dragging');
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
      if (iframe) iframe.style.pointerEvents = 'none';

      const onMouseMove = (moveEvt) => {
        if (!isDragging) return;
        const rect = workspace.getBoundingClientRect();
        const rawPct = ((moveEvt.clientX - rect.left) / rect.width) * 100;
        const clampedPct = Math.min(Math.max(rawPct, 22), 78);
        editor.style.width = `${clampedPct}%`;
      };

      const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        resizer.classList.remove('dragging');
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (iframe) iframe.style.pointerEvents = '';
        localStorage.setItem('learning_html_css_editor_width', editor.style.width);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    resizer.addEventListener('mousedown', onMouseDown);
  }

  initCinematic() {
    this.cinematic = new CinematicIntro({
      container: this.el.cinematicContainer,
      onComplete: () => {
        this.editor.updatePreview();
      }
    });
  }

  loadSavedProgress() {
    this.highestUnlockedStep = storage.getHighestUnlockedStep();
    const savedStep = storage.getCurrentStep();
    const initialIndex = Math.min(savedStep, this.highestUnlockedStep, MULTIPAGE_STEPS.length - 1);

    const savedFiles = storage.getProjectFiles();
    const step = MULTIPAGE_STEPS[initialIndex];

    if (savedFiles && Object.keys(savedFiles).length > 0) {
      this.editor.setFiles(savedFiles, step.targetFile);
    } else {
      // Démarrage initial : aucun fichier pré-rempli, le joueur doit créer index.html lui-même
      this.editor.setFiles({}, null);
    }

    this.loadStep(initialIndex);
  }

  loadStep(index) {
    if (index < 0 || index >= MULTIPAGE_STEPS.length) return;
    if (this.notableEvents && this.notableEvents.activeEvent) {
      this.notableEvents.cancelActiveEvent();
    }
    this.currentStepIndex = index;
    storage.setCurrentStep(index);

    const step = MULTIPAGE_STEPS[index];
    if (!step) return;

    if (step.targetFile && this.editor.files[step.targetFile] !== undefined) {
      this.editor.switchFile(step.targetFile);
    }

    // Auto-découverte progressive des termes de l'Internet au fil de la progression
    this.autoDiscoverTermsForProgress(index);

    this.updateStepUI();
  }

  autoDiscoverTermsForProgress(maxStepIndex) {
    const toDiscover = [];
    for (let i = 0; i <= maxStepIndex && i < MULTIPAGE_STEPS.length; i++) {
      const step = MULTIPAGE_STEPS[i];
      if (!step) continue;
      const combined = (step.title + ' ' + (step.instructions || '') + ' ' + (step.mentorSpeech || '') + ' ' + (step.secretTip || '') + ' ' + (step.riddle || '') + ' ' + JSON.stringify(step.starterFiles || {})).toLowerCase();
      GLOSSARY_ITEMS.forEach(item => {
        if (item.patterns.some(p => combined.includes(p.toLowerCase()))) {
          toDiscover.push(item.id);
        }
      });
    }
    storage.discoverTerms(toDiscover);
  }

  updateStepUI() {
    const step = MULTIPAGE_STEPS[this.currentStepIndex];
    if (!step) return;

    // Header - Titre pur et serein sans décompte d'étapes oppressant
    if (this.el.currentStepLabel) {
      this.el.currentStepLabel.textContent = step.title;
    }

    if (this.el.stepProgressBar) {
      this.el.stepProgressBar.style.display = 'none';
    }

    // Bodhi avec déblocage progressif des questions
    this.bodhi.loadStep(step, MULTIPAGE_STEPS.length, this.highestUnlockedStep);

    // Navigation sereine
    if (this.el.bodhiNextBtn) {
      const canAdvance = this.currentStepIndex < this.highestUnlockedStep;
      this.el.bodhiNextBtn.disabled = !canAdvance;
      this.el.bodhiNextBtn.title = canAdvance
        ? "Passer au défi suivant"
        : "Valide ton code pour continuer l'apprentissage !";
      this.el.bodhiNextBtn.textContent = "Suivant";
    }

    if (this.el.bodhiPrevBtn) {
      this.el.bodhiPrevBtn.disabled = this.currentStepIndex <= 0;
      this.el.bodhiPrevBtn.textContent = "Précédent";
    }
  }

  navigateStep(delta) {
    const target = this.currentStepIndex + delta;
    if (target < 0 || target >= MULTIPAGE_STEPS.length) return;

    if (target > this.highestUnlockedStep) {
      this.showToast("Cette étape est encore verrouillée. Réussis la mission en cours !", "error");
      sound.playError();
      return;
    }

    this.loadStep(target);
  }

  validateCurrentStep() {
    const files = this.editor.getFiles();

    // 1. Toujours vérifier les codes secrets d'Architecte en priorité (permet de naviguer librement ou quitter un défi)
    const editorRaw = (this.editor.textarea ? this.editor.textarea.value : '').trim();
    if (editorRaw && !editorRaw.includes('<') && !editorRaw.includes('{') && editorRaw.length <= 30) {
      if (this.handleStoryTeleportCode(editorRaw)) {
        return;
      }
      if (editorRaw.toLowerCase() === 'resetall') {
        if (confirm("Ce code secret va réinitialiser l'ensemble de ta progression et relancer la cinématique d'intro. Continuer ?")) {
          storage.resetAll();
          this.editor.setFiles({}, null);
          this.highestUnlockedStep = 0;
          this.currentStepIndex = 0;
          storage.setCurrentStep(0);
          storage.setHighestUnlockedStep(0);
          storage.setSeenPrologue(false);
          this.updateStepUI();
          this.cinematic.start();
          this.showToast("Sanctuaire réinitialisé au néant originel.", "info");
        }
        return;
      }
    }

    // 2. Débogage d'urgence lors d'un Événement Notable (NULL)
    if (this.notableEvents && this.notableEvents.activeEvent) {
      const res = this.notableEvents.checkEventResolution(files);
      if (res && res.pass) {
        fireConfetti();
        this.notableEvents.resolveActiveEvent();
        this.showToast(res.message, "success");
      } else {
        this.bodhi.onValidationFailure(res ? res.message : "Le code injecté par NULL n'est toujours pas réparé !");
        this.showToast("La purge approche : répare le code !", "error");
      }
      return;
    }

    const allCodeCombined = Object.values(files).join(' ') + ' ' + (this.editor.textarea ? this.editor.textarea.value : '');
    const lowerCombined = allCodeCombined.toLowerCase();

    const step = MULTIPAGE_STEPS[this.currentStepIndex];
    if (!step) return;

    const result = step.check(files);

    if (result.pass) {
      fireConfetti();

      // Déclencheur inopiné : Événement Notable de maintenance (NULL)
      if (this.notableEvents && this.notableEvents.hasPendingEvent(step.number)) {
        const ev = this.notableEvents.getEventForStep(step.number);
        this.showToast("Incident système détecté...", "error");
        setTimeout(() => {
          this.notableEvents.triggerEvent(ev);
        }, 1200);
        return;
      }

      const nextIndex = this.currentStepIndex + 1;
      const isFinal = nextIndex >= MULTIPAGE_STEPS.length;

      if (!isFinal) {
        if (nextIndex > this.highestUnlockedStep) {
          this.highestUnlockedStep = nextIndex;
          storage.setHighestUnlockedStep(nextIndex);
        }
      }

      const nextStep = MULTIPAGE_STEPS[nextIndex];
      this.bodhi.onValidationSuccess(nextStep ? nextStep.title : null, isFinal);

      if (this.el.bodhiNextBtn) {
        this.el.bodhiNextBtn.disabled = false;
        this.el.bodhiNextBtn.textContent = "Suivant";
      }

      this.showToast(isFinal ? "Le Sanctuaire est consacré !" : "Construction validée avec succès !", "success");

      if (nextStep) {
        setTimeout(() => {
          this.loadStep(nextIndex);
        }, 1800);
      }
    } else {
      this.bodhi.onValidationFailure(result.message);
      this.showToast("Une règle n'est pas encore satisfaite.", "error");
    }
  }

  resetStepBaseline() {
    const step = MULTIPAGE_STEPS[this.currentStepIndex];
    if (!step) return;

    if (confirm("Souhaites-tu restaurer le modèle de code propre pour cette étape ?")) {
      if (step.starterFiles && Object.keys(step.starterFiles).length > 0) {
        this.editor.setFiles(step.starterFiles, step.targetFile || 'index.html');
        storage.saveProjectFiles(step.starterFiles);
      }
      this.showToast("Modèle de l'étape restauré.", "info");
    }
  }

  bindEvents() {
    // Header controls
    if (this.el.themeToggle) {
      this.el.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    if (this.el.soundToggle) {
      this.el.soundToggle.addEventListener('click', () => this.toggleSound());
    }

    // Création de fichier
    if (this.el.createFileBtn) {
      this.el.createFileBtn.addEventListener('click', () => {
        sound.playClick();
        this.openCreateFileModal();
      });
    }

    if (this.el.closeCreateFileBtn) {
      this.el.closeCreateFileBtn.addEventListener('click', () => this.closeCreateFileModal());
    }

    if (this.el.cancelCreateFileBtn) {
      this.el.cancelCreateFileBtn.addEventListener('click', () => this.closeCreateFileModal());
    }

    if (this.el.confirmCreateFileBtn) {
      this.el.confirmCreateFileBtn.addEventListener('click', () => this.submitCreateFile());
    }

    if (this.el.newFileInput) {
      this.el.newFileInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.submitCreateFile();
        }
        if (e.key === 'Escape') {
          this.closeCreateFileModal();
        }
      });
    }

    if (this.el.createFileModal) {
      this.el.createFileModal.addEventListener('click', (e) => {
        if (e.target === this.el.createFileModal) {
          this.closeCreateFileModal();
        }
      });
    }

    // Format & Reset & Search & Copy
    if (this.el.formatCodeBtn) {
      this.el.formatCodeBtn.addEventListener('click', () => {
        sound.playClick();
        this.editor.formatCurrentFile();
        this.showToast("Code réaligné proprement.", "info");
      });
    }

    const searchCodeBtn = document.getElementById('search-code-btn');
    if (searchCodeBtn) {
      searchCodeBtn.addEventListener('click', () => {
        sound.playClick();
        this.editor.toggleSearch();
      });
    }

    const copyCodeBtn = document.getElementById('copy-code-btn');
    if (copyCodeBtn) {
      copyCodeBtn.addEventListener('click', () => {
        sound.playClick();
        const activeText = this.editor.textarea ? this.editor.textarea.value : '';
        navigator.clipboard.writeText(activeText).then(() => {
          this.showToast("Code copié dans le presse-papiers !", "success");
        }).catch(() => {
          this.showToast("Impossible d'accéder au presse-papiers.", "warning");
        });
      });
    }

    // Preview controls
    if (this.el.reloadPreviewBtn) {
      this.el.reloadPreviewBtn.addEventListener('click', () => {
        sound.playClick();
        this.editor.updatePreview();
        this.showToast("Rendu actualisé.", "info");
      });
    }

    this.el.viewportBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        this.el.viewportBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const vp = btn.getAttribute('data-viewport');
        if (this.el.previewWrapper) {
          this.el.previewWrapper.className = `preview-wrapper viewport-${vp}`;
        }
      });
    });

    // Cheatsheet modal
    if (this.el.closeCheatsheetBtn) {
      this.el.closeCheatsheetBtn.addEventListener('click', () => this.closeCheatsheet());
    }

    if (this.el.cheatsheetModal) {
      this.el.cheatsheetModal.addEventListener('click', (e) => {
        if (e.target === this.el.cheatsheetModal) {
          this.closeCheatsheet();
        }
      });
    }

    if (this.el.cheatsheetSearch) {
      this.el.cheatsheetSearch.addEventListener('input', (e) => {
        this.renderCheatsheetContent(e.target.value);
      });
    }

    // Raccourcis globaux
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        this.validateCurrentStep();
      }
      if (e.key === 'Escape') {
        this.closeCheatsheet();
        this.closeCreateFileModal();
        this.closeSecretCodesModal();
      }
    });
  }

  /* ===========================================================================
     L'INTERNET DE MAÎTRE BODHI (ENCYCLOPÉDIE VIVANTE & CHRONIQUES HISTORIQUES)
     =========================================================================== */

  initNotableEvents() {
    this.notableEvents = new NotableEventsEngine(this);
  }

  initExportSystem() {
    const exportBtn = document.getElementById('export-project-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
      sound.playClick();
      const files = this.editor.getFiles();
      const fileNames = Object.keys(files);

      if (fileNames.length === 0) {
        this.showToast("Aucun fichier à exporter pour le moment.", "info");
        return;
      }

      // Exportation directe : création d'un ensemble de téléchargements ou archive
      fileNames.forEach((name, i) => {
        setTimeout(() => {
          const content = files[name] || '';
          const mime = name.endsWith('.html') ? 'text/html' : (name.endsWith('.css') ? 'text/css' : 'application/javascript');
          const blob = new Blob([content], { type: `${mime};charset=utf-8` });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, i * 180);
      });

      this.showToast(`Exportation lancée (${fileNames.length} fichiers du Sanctuaire) !`, "success");
    });
  }

  initCheatsheet() {
    this.selectedInternetCategory = 'all';
    this.renderCategoryPills();
    this.renderCheatsheetContent('');

    // Basculement d'onglets (Encyclopédie vs Chroniques)
    if (this.el.internetTabBtnEncyclopedia && this.el.internetTabBtnChronicles) {
      this.el.internetTabBtnEncyclopedia.addEventListener('click', () => {
        this.el.internetTabBtnEncyclopedia.classList.add('active');
        this.el.internetTabBtnChronicles.classList.remove('active');
        if (this.el.internetTabEncyclopedia) this.el.internetTabEncyclopedia.classList.remove('hidden');
        if (this.el.internetTabChronicles) this.el.internetTabChronicles.classList.add('hidden');
      });

      this.el.internetTabBtnChronicles.addEventListener('click', () => {
        this.el.internetTabBtnChronicles.classList.add('active');
        this.el.internetTabBtnEncyclopedia.classList.remove('active');
        if (this.el.internetTabChronicles) this.el.internetTabChronicles.classList.remove('hidden');
        if (this.el.internetTabEncyclopedia) this.el.internetTabEncyclopedia.classList.add('hidden');
      });
    }

    if (this.el.closeCheatsheetBtn) {
      this.el.closeCheatsheetBtn.addEventListener('click', () => this.closeCheatsheet());
    }

    if (this.el.cheatsheetModal) {
      this.el.cheatsheetModal.addEventListener('click', (e) => {
        if (e.target === this.el.cheatsheetModal) this.closeCheatsheet();
      });
    }

    if (this.el.cheatsheetSearch) {
      this.el.cheatsheetSearch.addEventListener('input', (e) => {
        this.renderCheatsheetContent(e.target.value);
      });
    }

    // Copie rapide en 1 clic des blocs de code
    if (this.el.cheatsheetContent) {
      this.el.cheatsheetContent.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.cheatsheet-copy-btn');
        if (!copyBtn) return;
        const codeEl = copyBtn.parentElement.querySelector('code');
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.textContent).then(() => {
            copyBtn.textContent = 'Copié !';
            setTimeout(() => { copyBtn.textContent = 'Copier'; }, 1800);
          }).catch(() => {});
        }
      });
    }
  }

  renderCategoryPills() {
    if (!this.el.internetCategoryPills) return;
    const discoveredSet = storage.getDiscoveredTerms();
    const discoveredItems = GLOSSARY_ITEMS.filter(item => discoveredSet.has(item.id));
    const categories = Array.from(new Set(discoveredItems.map(item => item.category)));

    let html = `<button type="button" class="internet-pill-btn ${this.selectedInternetCategory === 'all' ? 'active' : ''}" data-cat="all">Tous (${discoveredItems.length})</button>`;

    categories.forEach(cat => {
      const count = discoveredItems.filter(item => item.category === cat).length;
      const isActive = this.selectedInternetCategory === cat;
      html += `<button type="button" class="internet-pill-btn ${isActive ? 'active' : ''}" data-cat="${this.escapeHtml(cat)}">${this.escapeHtml(cat)} (${count})</button>`;
    });

    this.el.internetCategoryPills.innerHTML = html;

    this.el.internetCategoryPills.querySelectorAll('.internet-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedInternetCategory = btn.getAttribute('data-cat');
        this.renderCategoryPills();
        const query = this.el.cheatsheetSearch ? this.el.cheatsheetSearch.value : '';
        this.renderCheatsheetContent(query);
      });
    });
  }

  renderCheatsheetContent(query = '') {
    if (!this.el.cheatsheetContent) return;
    const q = query.toLowerCase().trim();
    const discoveredSet = storage.getDiscoveredTerms();

    // FILTRE STRICT : Uniquement les éléments découverts par le joueur au fil de son voyage
    const discoveredItems = GLOSSARY_ITEMS.filter(item => discoveredSet.has(item.id));
    const categories = Array.from(new Set(discoveredItems.map(item => item.category)));
    const blocks = [];
    let totalMatches = 0;

    categories.forEach(catName => {
      if (this.selectedInternetCategory !== 'all' && this.selectedInternetCategory !== catName) {
        return;
      }

      const items = discoveredItems.filter(item => {
        if (item.category !== catName) return false;
        if (!q) return true;
        const n = item.name.toLowerCase();
        const d = item.desc.toLowerCase();
        const c = (item.code || '').toLowerCase();
        const t = (item.bodhiTip || '').toLowerCase();
        const p = (item.patterns || []).join(' ').toLowerCase();
        return n.includes(q) || d.includes(q) || c.includes(q) || t.includes(q) || p.includes(q);
      });

      if (items.length > 0) {
        totalMatches += items.length;
        blocks.push({
          title: catName,
          items
        });
      }
    });

    if (this.el.cheatsheetCounter) {
      this.el.cheatsheetCounter.textContent = `${discoveredItems.length} / ${GLOSSARY_ITEMS.length} découverts`;
    }

    if (discoveredItems.length === 0) {
      this.el.cheatsheetContent.innerHTML = `
        <div class="cheatsheet-empty" style="text-align: center; padding: 50px 20px; color: var(--text-secondary);">
          <p style="font-size: 1.05rem; font-weight: 800; color: var(--amber-primary); margin-bottom: 8px;">Ton carnet Internet est encore vierge</p>
          <p style="font-size: 0.85rem; max-width: 480px; margin: 0 auto; line-height: 1.5;">
            Avance dans les missions de Maître Bodhi et clique sur les mots-clés dans ses dialogues pour enrichir tes archives de l'Internet !
          </p>
        </div>
      `;
      return;
    }

    const html = blocks.map(block => `
      <div class="cheatsheet-category-block">
        <h4 class="cheatsheet-cat-title">${this.escapeHtml(block.title)}</h4>
        <div class="cheatsheet-grid">
          ${block.items.map(item => `
            <div class="cheatsheet-card">
              <div class="cheatsheet-card-header">
                <span class="cheatsheet-rule-name">${this.escapeHtml(item.name)}</span>
                <span class="cheatsheet-cat-badge">${this.escapeHtml((item.category || '').split(':')[0] || 'WEB')}</span>
              </div>
              <div class="cheatsheet-rule-desc">${this.escapeHtml(item.desc)}</div>
              ${item.code ? `
                <div class="cheatsheet-code-wrap">
                  <pre class="cheatsheet-rule-code"><code>${this.escapeHtml(item.code)}</code></pre>
                  <button type="button" class="cheatsheet-copy-btn" title="Copier ce modèle de code">Copier</button>
                </div>
              ` : ''}
              ${item.bodhiTip ? `
                <div class="cheatsheet-tip-box">
                  <strong>Bodhi :</strong> ${this.escapeHtml(item.bodhiTip)}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    this.el.cheatsheetContent.innerHTML = html || `
      <div class="cheatsheet-empty" style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
        <p>Aucun concept découvert ne correspond à « ${this.escapeHtml(query)} ».</p>
      </div>
    `;
  }

  openCheatsheet(query = '') {
    if (this.el.cheatsheetModal) {
      this.el.cheatsheetModal.classList.remove('hidden');
      this.renderCategoryPills();
      if (this.el.cheatsheetSearch) {
        this.el.cheatsheetSearch.value = query || '';
        this.renderCheatsheetContent(query || '');
        setTimeout(() => this.el.cheatsheetSearch.focus(), 80);
      } else {
        this.renderCheatsheetContent('');
      }
    }
  }

  closeCheatsheet() {
    if (this.el.cheatsheetModal) {
      this.el.cheatsheetModal.classList.add('hidden');
    }
  }

  /* ===========================================================================
     CODES SECRETS DU SANCTUAIRE & SAUTS D'HISTOIRE
     =========================================================================== */

  initSecretCodes() {
    window.unlockEnding = (numOrCode) => this.unlockSecretEnding(numOrCode);

    if (this.el.secretCodesBtn) {
      this.el.secretCodesBtn.addEventListener('click', () => {
        this.openSecretCodesModal();
      });
    }

    if (this.el.closeSecretsBtn) {
      this.el.closeSecretsBtn.addEventListener('click', () => {
        this.closeSecretCodesModal();
      });
    }

    if (this.el.secretCodesModal) {
      this.el.secretCodesModal.addEventListener('click', (e) => {
        if (e.target === this.el.secretCodesModal) this.closeSecretCodesModal();
      });
    }

    if (this.el.submitSecretCodeBtn) {
      this.el.submitSecretCodeBtn.addEventListener('click', () => {
        this.submitSecretCode();
      });
    }

    if (this.el.secretCodeInput) {
      this.el.secretCodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.submitSecretCode();
        }
      });
    }

    // Clic direct sur les cartes et boutons de déblocage
    const endingTriggers = document.querySelectorAll('.btn-ending-trigger, .secret-ending-card');
    endingTriggers.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('.btn-ending-trigger');
        const card = e.target.closest('.secret-ending-card');
        const endingKey = targetBtn ? targetBtn.getAttribute('data-ending') : (card ? card.getAttribute('data-ending') : null);
        if (endingKey) {
          e.stopPropagation();
          this.unlockSecretEnding(endingKey);
        }
      });
    });

    // Raccourci clavier universel : Ctrl + Shift + S
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        this.openSecretCodesModal();
      }
    });
  }

  openSecretCodesModal() {
    if (this.el.secretCodesModal) {
      this.el.secretCodesModal.classList.remove('hidden');
      if (this.el.secretCodeFeedback) {
        this.el.secretCodeFeedback.textContent = '';
        this.el.secretCodeFeedback.className = 'secret-code-feedback';
      }
      if (this.el.secretCodeInput) {
        this.el.secretCodeInput.value = '';
        setTimeout(() => this.el.secretCodeInput.focus(), 80);
      }
    }
  }

  closeSecretCodesModal() {
    if (this.el.secretCodesModal) {
      this.el.secretCodesModal.classList.add('hidden');
    }
  }

  submitSecretCode() {
    if (!this.el.secretCodeInput) return;
    const rawVal = this.el.secretCodeInput.value.trim().toUpperCase();
    if (!rawVal) {
      if (this.el.secretCodeFeedback) {
        this.el.secretCodeFeedback.textContent = "Saisis un code d'Architecte (ex: ACTE1, NULL1, CSS, ADA, FINALE).";
        this.el.secretCodeFeedback.className = "secret-code-feedback error";
      }
      return;
    }

    const handled = this.handleStoryTeleportCode(rawVal);
    if (!handled) {
      sound.playError();
      if (this.el.secretCodeFeedback) {
        this.el.secretCodeFeedback.textContent = `Code « ${rawVal} » inconnu. Essaie ACTE1, NULL1, ACTE2, NULL2, CSS, NULL3, ADA, ou FINALE.`;
        this.el.secretCodeFeedback.className = "secret-code-feedback error";
      }
    }
  }

  handleStoryTeleportCode(rawCode) {
    if (!rawCode) return false;
    const c = String(rawCode).trim().toUpperCase();

    // 1. Actes & Étapes clés
    if (c === 'ACTE1' || c === 'DEBUT' || c === 'S1') {
      this.teleportToStep(0, "Acte I : Le Commencement");
      return true;
    }
    if (c === 'ACTE2' || c === 'PAGES' || c === 'S8') {
      this.teleportToStep(7, "Acte II : La Toile Multi-pages");
      return true;
    }
    if (c === 'ACTE3' || c === 'CSS' || c === 'S13') {
      this.teleportToStep(12, "Acte III : L'Harmonie CSS");
      return true;
    }
    if (c === 'ACTE4' || c === 'GRID' || c === 'S25') {
      this.teleportToStep(24, "Acte IV : CSS Grid & Layout");
      return true;
    }
    if (c === 'ACTE5' || c === 'MAITRISE' || c === 'S34') {
      this.teleportToStep(33, "Acte V : Haute Maîtrise & Accessibilité");
      return true;
    }
    if (c === 'ADA' || c === 'ACTE6' || c === 'JS' || c === 'S37') {
      this.teleportToStep(36, "Acte VI : L'Atelier du Runtime avec Ada (JavaScript)");
      return true;
    }
    if (c === 'LOCALSTORAGE' || c === 'S39') {
      this.teleportToStep(38, "Étape 39 : L'Exode de la Mémoire (localStorage)");
      return true;
    }
    if (c === 'FINALE' || c === 'APOTHEOSE' || c === 'S40') {
      this.teleportToStep(39, "Étape 40 : L'Apothéose & L'Ascension Éternelle");
      return true;
    }

    // 2. Événements Notables d'Urgence avec NULL
    if (c === 'NULL1' || c === 'CRASH1') {
      this.teleportToNotableEvent('event-1');
      return true;
    }
    if (c === 'NULL2' || c === 'CRASH2') {
      this.teleportToNotableEvent('event-2');
      return true;
    }
    if (c === 'NULL3' || c === 'CRASH3') {
      this.teleportToNotableEvent('event-3');
      return true;
    }

    // 3. Fins secrètes traditionnelles
    const phareAliases = ['PHARE', 'PHARE1991', 'FIN1', 'LUMIERE', '1'];
    const gardienAliases = ['GARDIEN', 'GARDIENW3C', 'FIN2', 'MEMOIRE', '2'];
    const rebelleAliases = ['REBELLE', 'REBELLE404', 'FIN3', 'BAZAR', '3'];

    if (phareAliases.includes(c)) {
      this.unlockSecretEnding('phare');
      return true;
    }
    if (gardienAliases.includes(c)) {
      this.unlockSecretEnding('gardien');
      return true;
    }
    if (rebelleAliases.includes(c)) {
      this.unlockSecretEnding('rebelle');
      return true;
    }
    if (c === 'ADMINPASS') {
      this.highestUnlockedStep = MULTIPAGE_STEPS.length - 1;
      storage.setHighestUnlockedStep(this.highestUnlockedStep);
      this.loadStep(this.highestUnlockedStep);
      this.closeSecretCodesModal();
      this.showToast("Accès Grand Architecte accordé ! Toutes les 40 étapes sont déverrouillées.", "success");
      return true;
    }

    return false;
  }

  teleportToStep(stepIndex, label) {
    if (stepIndex > this.highestUnlockedStep) {
      this.highestUnlockedStep = stepIndex;
      storage.setHighestUnlockedStep(stepIndex);
    }
    this.loadStep(stepIndex);
    sound.playSuccess();
    fireConfetti();
    this.closeSecretCodesModal();
    this.showToast(`Téléportation : ${label}`, "success");
  }

  teleportToNotableEvent(eventId) {
    const ev = NOTABLE_EVENTS.find(e => e.id === eventId);
    if (!ev) return;
    this.closeSecretCodesModal();
    if (!this.notableEvents) {
      try {
        this.notableEvents = new NotableEventsEngine(this);
      } catch (err) {
        console.error("Impossible d'initialiser NotableEventsEngine:", err);
      }
    }
    if (this.notableEvents) {
      this.notableEvents.triggerEvent(ev);
    }
  }

  unlockSecretEnding(endingKey) {
    let alignment = 'phare';
    let codeName = 'PHARE';
    let endingTitle = 'Fin 1 : Le Phare Universel';

    const str = String(endingKey).toLowerCase().trim();
    if (str === 'gardien' || str === '2' || str === 'fin2') {
      alignment = 'gardien';
      codeName = 'GARDIEN';
      endingTitle = 'Fin 2 : Le Sanctuaire Éternel';
    } else if (str === 'rebelle' || str === '3' || str === 'fin3') {
      alignment = 'rebelle';
      codeName = 'REBELLE';
      endingTitle = 'Fin 3 : Le Grand Bazar Étoilé';
    } else {
      alignment = 'phare';
      codeName = 'PHARE';
      endingTitle = 'Fin 1 : Le Phare Universel';
    }

    this.closeSecretCodesModal();
    storage.forceKarma(alignment);
    storage.discoverAllTerms(GLOSSARY_ITEMS.map(i => i.id));

    // Débloquer et positionner l'étape finale
    this.highestUnlockedStep = MULTIPAGE_STEPS.length - 1;
    storage.setHighestUnlockedStep(this.highestUnlockedStep);
    this.currentStepIndex = MULTIPAGE_STEPS.length - 1;
    storage.setCurrentStep(this.currentStepIndex);

    this.loadStep(this.currentStepIndex);

    // Déclencher la fin avec feux d'artifice/confettis
    fireConfetti();
    this.bodhi.onValidationSuccess("Le Grand Achèvement", true);
    this.showToast(`Code secret ${codeName} activé ! ${endingTitle} débloquée.`, "success");

    // Défilement doux vers le widget de Bodhi
    const dialogueEl = document.getElementById('bodhi-dialogue-widget');
    if (dialogueEl) {
      dialogueEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  showToast(message, type = 'info') {
    const toast = this.el.toast;
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Initialisation dès que le document est prêt dans le navigateur
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.app = new SanctuaireApp();
    });
  } else {
    window.app = new SanctuaireApp();
  }
}
