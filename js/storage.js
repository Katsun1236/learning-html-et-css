// =============================================================================
// GESTIONNAIRE DE PERSISTANCE LOCALE (LEARNING HTML & CSS)
// =============================================================================

const STORAGE_PREFIX = 'learning_html_css_';

export const storage = {
  getSavedCode(exerciseId) {
    try {
      const data = localStorage.getItem(`${STORAGE_PREFIX}code_${exerciseId}`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveCode(exerciseId, html, css) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}code_${exerciseId}`, JSON.stringify({ html, css, updatedAt: Date.now() }));
    } catch (e) {
      console.warn('Erreur sauvegarde locale :', e);
    }
  },

  clearSavedCode(exerciseId) {
    try {
      localStorage.removeItem(`${STORAGE_PREFIX}code_${exerciseId}`);
    } catch (e) {
      console.warn(e);
    }
  },

  getCompleted() {
    try {
      const data = localStorage.getItem(`${STORAGE_PREFIX}completed`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  setCompleted(exerciseId, isCompleted = true) {
    const list = this.getCompleted();
    const set = new Set(list);
    if (isCompleted) {
      set.add(exerciseId);
    } else {
      set.delete(exerciseId);
    }
    const updated = Array.from(set);
    try {
      localStorage.setItem(`${STORAGE_PREFIX}completed`, JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
    return updated;
  },

  getTheme() {
    return localStorage.getItem(`${STORAGE_PREFIX}theme`) || 'dark';
  },

  setTheme(theme) {
    localStorage.setItem(`${STORAGE_PREFIX}theme`, theme);
  },

  getSoundEnabled() {
    const val = localStorage.getItem(`${STORAGE_PREFIX}sound`);
    return val !== 'false'; // par défaut activé
  },

  setSoundEnabled(enabled) {
    localStorage.setItem(`${STORAGE_PREFIX}sound`, enabled ? 'true' : 'false');
  },

  hasSeenPrologue() {
    // Vérifie si le joueur a déjà vu l'introduction une première fois
    return localStorage.getItem(`${STORAGE_PREFIX}intro_seen_v1`) === 'true';
  },

  setSeenPrologue(seen = true) {
    localStorage.setItem(`${STORAGE_PREFIX}intro_seen_v1`, seen ? 'true' : 'false');
  },

  // Gestion du projet multi-fichiers (index.html, chroniques.html, etc.)
  getProjectFiles() {
    try {
      const data = localStorage.getItem(`${STORAGE_PREFIX}multipage_project`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveProjectFiles(files) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}multipage_project`, JSON.stringify(files));
    } catch (e) {
      console.warn('Erreur sauvegarde projet :', e);
    }
  },

  // Progression verrouillée des étapes (on doit valider l'étape pour débloquer la suivante)
  getHighestUnlockedStep() {
    const val = localStorage.getItem(`${STORAGE_PREFIX}highest_step`);
    return val ? parseInt(val, 10) : 0; // Étape 1 débloquée par défaut
  },

  setHighestUnlockedStep(stepIndex) {
    const current = this.getHighestUnlockedStep();
    if (stepIndex > current) {
      localStorage.setItem(`${STORAGE_PREFIX}highest_step`, stepIndex.toString());
    }
  },

  getCurrentStep() {
    const val = localStorage.getItem(`${STORAGE_PREFIX}current_active_step`);
    return val ? parseInt(val, 10) : 0;
  },

  setCurrentStep(stepIndex) {
    localStorage.setItem(`${STORAGE_PREFIX}current_active_step`, stepIndex.toString());
  },

  getArchitectAlignment() {
    return localStorage.getItem(`${STORAGE_PREFIX}architect_alignment`) || 'phare';
  },

  setArchitectAlignment(alignment) {
    localStorage.setItem(`${STORAGE_PREFIX}architect_alignment`, alignment);
  },

  getKarma() {
    try {
      const data = localStorage.getItem(`${STORAGE_PREFIX}karma`);
      return data ? JSON.parse(data) : { phare: 0, gardien: 0, rebelle: 0 };
    } catch {
      return { phare: 0, gardien: 0, rebelle: 0 };
    }
  },

  addKarma(type) {
    if (!type) return this.getKarma();
    const k = this.getKarma();
    k[type] = (k[type] || 0) + 1;
    try {
      localStorage.setItem(`${STORAGE_PREFIX}karma`, JSON.stringify(k));
    } catch (e) {
      console.warn('Erreur sauvegarde karma :', e);
    }
    return k;
  },

  getDominantKarma() {
    const k = this.getKarma();
    // En cas d'égalité ou par défaut, l'esprit chaleureux du phare prévaut
    if (k.rebelle > k.phare && k.rebelle > k.gardien) return 'rebelle';
    if (k.gardien > k.phare && k.gardien >= k.rebelle) return 'gardien';
    return 'phare';
  },

  setKarma(karmaObj) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}karma`, JSON.stringify(karmaObj));
    } catch (e) {
      console.warn('Erreur sauvegarde karma :', e);
    }
  },

  forceKarma(alignment) {
    if (alignment === 'gardien') {
      this.setKarma({ phare: 0, gardien: 100, rebelle: 0 });
      this.setArchitectAlignment('gardien');
    } else if (alignment === 'rebelle') {
      this.setKarma({ phare: 0, gardien: 0, rebelle: 100 });
      this.setArchitectAlignment('rebelle');
    } else {
      this.setKarma({ phare: 100, gardien: 0, rebelle: 0 });
      this.setArchitectAlignment('phare');
    }
  },

  // Gestion de la découverte progressive des éléments dans Internet
  getDiscoveredTerms() {
    try {
      const data = localStorage.getItem(`${STORAGE_PREFIX}discovered_terms`);
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch {
      return new Set();
    }
  },

  discoverTerm(termId) {
    if (!termId) return false;
    const set = this.getDiscoveredTerms();
    if (set.has(termId)) return false;
    set.add(termId);
    try {
      localStorage.setItem(`${STORAGE_PREFIX}discovered_terms`, JSON.stringify(Array.from(set)));
      return true; // nouveau terme découvert
    } catch (e) {
      console.warn('Erreur sauvegarde termes découverts :', e);
      return false;
    }
  },

  discoverTerms(idArray) {
    if (!Array.isArray(idArray)) return 0;
    const set = this.getDiscoveredTerms();
    let newlyAdded = 0;
    idArray.forEach(id => {
      if (id && !set.has(id)) {
        set.add(id);
        newlyAdded++;
      }
    });
    if (newlyAdded > 0) {
      try {
        localStorage.setItem(`${STORAGE_PREFIX}discovered_terms`, JSON.stringify(Array.from(set)));
      } catch (e) {
        console.warn('Erreur sauvegarde termes découverts :', e);
      }
    }
    return newlyAdded;
  },

  discoverAllTerms(allIds) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}discovered_terms`, JSON.stringify(allIds));
    } catch (e) {
      console.warn('Erreur découverte totale :', e);
    }
  },

  isTermDiscovered(termId) {
    const set = this.getDiscoveredTerms();
    return set.has(termId);
  },

  resetAll() {

    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
  }
};
