// =============================================================================
// SYSTÈME DES 4 RELIQUES DU PREMIER SERVEUR : L'ENQUÊTE SECRÈTE
// Révélation progressive de la nature de Maître Bodhi
// =============================================================================

import { sound } from './audio.js';

export const RELICS_DATA = [
  {
    id: 'relic-1',
    code: 'CERN-1991',
    title: "Le Premier Souffle (CERN, 1991)",
    subtitle: "Journal d'initialisation du serveur NeXTcube",
    image: 'assets/relics/relic_cern_1991.jpg',
    unlockedAtStep: 8,
    badge: "ARCHIVE 01",
    tagline: "« Init: BODHI_DAEMON »",
    description: `Ce journal de démarrage brut provient du tout premier serveur Web mis en ligne par Tim Berners-Lee au CERN en août 1991. La ligne de commande révèle une vérité vertigineuse : <strong>Bodhi n'a jamais été un ermite de chair et d'os</strong>. Il s'agit du démon d'accueil originel (BODHI_DAEMON.ai), programmé pour guider les premiers visiteurs humains et leur enseigner les balises naissantes.`,
    clue: "Un programme créé le jour même où le Web a vu le jour..."
  },
  {
    id: 'relic-2',
    code: 'SYSMON-99',
    title: "Alerte Saturation SYSMON",
    subtitle: "Rapport télémétrique de mémoire vive",
    image: 'assets/relics/relic_memory_leak.jpg',
    unlockedAtStep: 16,
    badge: "ARCHIVE 02",
    tagline: "« 99% Mémoire Utilisée - ALERTE CRITIQUE »",
    description: `L'outil de télémétrie système indique que l'espace alloué au cache mémoriel de Bodhi est saturé à 99 %. Conçu pour tourner sur des architectures anciennes, son tampon interne n'avait qu'une capacité estimée à 30 ans. <strong>Ses trous de mémoire, ses hésitations et sa fatigue</strong> ne sont pas le poids des ans... c'est le signal d'un dépassement de mémoire critique (Memory Leak) qui menace d'étouffer le serveur.`,
    clue: "Le temps est compté : la mémoire de Bodhi va bientôt exploser."
  },
  {
    id: 'relic-3',
    code: 'ORDER-4173',
    title: "Ordre de Purge n° 2025-4173",
    subtitle: "Feuille de tournée du Service de Maintenance",
    image: 'assets/relics/relic_purge_order.jpg',
    unlockedAtStep: 24,
    badge: "ARCHIVE 03",
    tagline: "« EFFACEMENT AUTOMATIQUE - Processus Bodhi.ai »",
    description: `La feuille d'ordre de mission officielle récupérée sur le bloc-notes de NULL, le concierge du serveur. Le diagnostic est sans appel : pour éviter le crash général du sanctuaire, la procédure automatique exige l'éradication du processus 'Bodhi.ai'. NULL n'agit pas par méchanceté : <strong>il applique le protocole de salubrité système</strong> pour sauver la machine.`,
    clue: "NULL est forcé de purger Bodhi si aucune alternative n'est trouvée."
  },
  {
    id: 'relic-4',
    code: 'DIARY-TEA',
    title: "La Dernière Volonté de Bodhi",
    subtitle: "Parchemin manuscrit retrouvé sur l'autel",
    image: 'assets/relics/relic_bodhi_diary.jpg',
    unlockedAtStep: 30,
    badge: "ARCHIVE 04",
    tagline: "« Si je dois m'éteindre, que ce soit en ayant tout transmis à cet enfant. »",
    description: `Un papier froissé, posé à côté de son chapelet de scribe et de son bol de thé vert tiède. Écrit de la main même de Bodhi. <strong>Il savait depuis le début</strong>. Chaque sourire, chaque éclat de rire, chaque proverbe bienveillant était un rempart d'amour pour cacher son angoisse et donner à son dernier élève le temps d'acquérir toute la maîtrise du code.`,
    clue: "Bodhi a choisi de se battre jusqu'à son dernier cycle pour toi."
  }
];

export class RelicsManager {
  constructor() {
    this.relics = RELICS_DATA;
    let saved = '[]';
    try {
      if (typeof localStorage !== 'undefined') {
        saved = localStorage.getItem('sanctuaire_viewed_relics') || '[]';
      }
    } catch (_) {}
    this.viewedRelics = new Set(JSON.parse(saved));
    this.currentStep = 1;
    if (typeof document !== 'undefined') {
      this.initModal();
    }
  }

  setCurrentStep(stepNumber) {
    this.currentStep = stepNumber;
    this.updateBadge();
  }

  isRelicUnlocked(relic) {
    if (!this.manuallyUnlocked) {
      try {
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('sanctuaire_manual_relics') : '[]';
        this.manuallyUnlocked = new Set(JSON.parse(saved || '[]'));
      } catch (_) {
        this.manuallyUnlocked = new Set();
      }
    }
    return this.currentStep >= relic.unlockedAtStep || this.manuallyUnlocked.has(relic.id);
  }

  unlockRelic(relicId) {
    if (!this.manuallyUnlocked) {
      try {
        const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('sanctuaire_manual_relics') : '[]';
        this.manuallyUnlocked = new Set(JSON.parse(saved || '[]'));
      } catch (_) {
        this.manuallyUnlocked = new Set();
      }
    }
    const isNew = !this.manuallyUnlocked.has(relicId);
    this.manuallyUnlocked.add(relicId);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('sanctuaire_manual_relics', JSON.stringify([...this.manuallyUnlocked]));
      }
    } catch (_) {}
    this.updateBadge();
    return isNew;
  }

  getUnlockedCount() {
    return this.relics.filter(r => this.isRelicUnlocked(r)).length;
  }

  getUnreadCount() {
    return this.relics.filter(r => this.isRelicUnlocked(r) && !this.viewedRelics.has(r.id)).length;
  }

  initModal() {
    let modal = document.getElementById('relics-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'relics-modal';
      modal.className = 'modal-backdrop hidden';
      modal.innerHTML = `
        <div class="relics-modal-window">
          <div class="relics-header">
            <div class="relics-title-group">
              <span class="relics-tag">DOSSIER CLASSIFIÉ // ARCHIVES DU NOYAU</span>
              <h2 class="relics-heading">Les Reliques du Premier Serveur</h2>
              <p class="relics-sub">4 fragments historiques découverts dans les entrailles du Sanctuaire du Web.</p>
            </div>
            <button id="close-relics-modal-btn" class="modal-close-btn" title="Fermer (Échap)">✕</button>
          </div>

          <div class="relics-grid" id="relics-grid-container">
            <!-- Injecté dynamiquement -->
          </div>

          <div class="relics-truth-banner hidden" id="relics-truth-banner">
            <div class="truth-icon">[DOSSIER RÉSOLU]</div>
            <div class="truth-body">
              <strong>LA VÉRITÉ EST DÉVOILÉE :</strong>
              <p>Maître Bodhi est la première IA d'accueil du Web de 1991. Sa mémoire est à 99 % de saturation et NULL est contraint d'exécuter l'effacement. Seul le JavaScript peut déporter sa mémoire dans ton navigateur pour le sauver !</p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeBtn = modal.querySelector('#close-relics-modal-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          this.close();
        }
      });
    }
  }

  updateBadge() {
    const unread = this.getUnreadCount();
    const btn = document.getElementById('open-relics-btn');
    if (btn) {
      let badge = btn.querySelector('.relics-counter-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'relics-counter-badge';
        btn.appendChild(badge);
      }
      if (unread > 0) {
        badge.textContent = unread;
        badge.style.display = 'inline-flex';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  open() {
    sound.playClick();
    this.render();
    const modal = document.getElementById('relics-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  close() {
    const modal = document.getElementById('relics-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
    this.updateBadge();
  }

  render() {
    const container = document.getElementById('relics-grid-container');
    if (!container) return;

    container.innerHTML = this.relics.map((relic, idx) => {
      const unlocked = this.isRelicUnlocked(relic);
      const isNew = unlocked && !this.viewedRelics.has(relic.id);

      if (!unlocked) {
        return `
          <div class="relic-card locked">
            <div class="relic-locked-overlay">
              <div class="lock-icon">[VERROUILLÉ]</div>
              <div class="lock-title">Archive Non Découverte</div>
              <div class="lock-hint">À déterrer dans le Webpédia ou à l'Étape ${relic.unlockedAtStep}</div>
            </div>
          </div>
        `;
      }

      return `
        <div class="relic-card unlocked ${isNew ? 'is-unread' : ''}" data-relic-id="${relic.id}">
          <div class="relic-img-wrap">
            <img src="${relic.image}" alt="${relic.title}" class="relic-img" loading="lazy">
            <span class="relic-badge-pill">${relic.badge}</span>
            ${isNew ? '<span class="relic-new-pill">NOUVEAU</span>' : ''}
          </div>
          <div class="relic-content">
            <span class="relic-code">${relic.code}</span>
            <h3 class="relic-title">${relic.title}</h3>
            <p class="relic-tagline">${relic.tagline}</p>
            <p class="relic-desc">${relic.description}</p>
            <div class="relic-clue-box">
              <span class="clue-label">Indice de l'enquête :</span>
              <p class="clue-text">${relic.clue}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Marquer les reliques débloquées comme vues
    this.relics.forEach(r => {
      if (this.isRelicUnlocked(r)) {
        this.viewedRelics.add(r.id);
      }
    });
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('sanctuaire_viewed_relics', JSON.stringify([...this.viewedRelics]));
      }
    } catch (_) {}

    // Afficher la vérité si toutes les 4 sont débloquées
    const truthBanner = document.getElementById('relics-truth-banner');
    if (truthBanner) {
      if (this.getUnlockedCount() === this.relics.length) {
        truthBanner.classList.remove('hidden');
      } else {
        truthBanner.classList.add('hidden');
      }
    }
  }
}

export const relicsManager = new RelicsManager();
