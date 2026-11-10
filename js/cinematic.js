// =============================================================================
// CINÉMATIQUE D'INTRODUCTION AVEC MAÎTRE BODHI
// Progression manuelle (aucun défilement automatique) & Histoire d'un apprenti novice
// =============================================================================

import { sound } from './audio.js';
import { storage } from './storage.js';

export class CinematicIntro {
  constructor({ container, onComplete }) {
    this.container = container;
    this.onComplete = onComplete;
    this.currentIndex = 0;

    this.scenes = [
      {
        pose: 'assets/characters/bodhi_neutral.png',
        bg: 'assets/backgrounds/sanctuary_dawn.png',
        quote: "« Tu franchis ce seuil les mains nues, sans certitudes... et c'est la plus grande de tes forces. »",
        sub: "Tu arrives dans le Sanctuaire en simple apprenti. Autour de toi, les vestiges de vieux sites web abandonnés s'étendent à perte de vue."
      },
      {
        pose: 'assets/characters/bodhi_scroll.png',
        bg: 'assets/backgrounds/library_vault.png',
        quote: "« J'ai moi aussi débuté dans l'ignorance. J'ai connu le chaos des guerres de navigateurs, des nuits entières à réparer du code brisé et des échecs cuisants. »",
        sub: "Maître Bodhi déroule un parchemin d'archives. « J'ai vu des temples entiers s'effondrer parce que leurs fondations étaient bancales. C'est de mes erreurs que j'ai forgé ma maîtrise. »"
      },
      {
        pose: 'assets/characters/bodhi_code_magic.png',
        bg: 'assets/backgrounds/stellar_city.png',
        quote: "« Je ne cherche pas un prodige né, mais un compagnon courageux prêt à apprendre pas à pas la vérité du Web. »",
        sub: "« À chaque défi, je te raconterai mes combats, mes doutes, et comment la rigueur du HTML et du CSS m'a sauvé. Tu vas forger tes propres armes. »"
      },
      {
        pose: 'assets/characters/bodhi_thumbs_up.png',
        bg: 'assets/backgrounds/sanctuary_dawn.png',
        quote: "« Prends place devant ton éditeur, apprenti. Ensemble, posons ta toute première pierre. »",
        sub: "Clique sur 'Commencer la construction' pour débuter ton apprentissage."
      }
    ];

    this.bindControls();
  }

  bindControls() {
    if (!this.container) return;

    const nextBtn = this.container.querySelector('#cinematic-next-btn');
    const skipBtn = this.container.querySelector('#cinematic-skip-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.next();
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (this.container && this.container.classList.contains('active')) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.close();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.next();
        }
      }
    });
  }

  start() {
    if (!this.container) return;
    storage.setSeenPrologue(true);
    this.currentIndex = 0;
    this.container.classList.remove('hidden');
    this.container.classList.add('active');
    this.showScene(0);
  }

  showScene(index) {
    if (index >= this.scenes.length) {
      this.close();
      return;
    }
    this.currentIndex = index;
    const scene = this.scenes[index];

    const quoteEl = this.container.querySelector('.cinematic-quote');
    const subEl = this.container.querySelector('.cinematic-sub');
    const avatarEl = this.container.querySelector('.cinematic-bodhi-avatar');
    const nextBtn = this.container.querySelector('#cinematic-next-btn');

    if (quoteEl) quoteEl.textContent = scene.quote;
    if (subEl) subEl.textContent = scene.sub;

    if (scene.bg && this.container) {
      this.container.style.backgroundImage = `linear-gradient(rgba(11, 15, 25, 0.72), rgba(11, 15, 25, 0.88)), url('${scene.bg}')`;
      this.container.style.backgroundSize = 'cover';
      this.container.style.backgroundPosition = 'center';
    }

    if (avatarEl) {
      avatarEl.innerHTML = `<img src="${scene.pose}" alt="Maître Bodhi" class="cinematic-portrait-img">`;
    }

    if (nextBtn) {
      nextBtn.textContent = index === this.scenes.length - 1 ? "Commencer la construction" : "Suivant";
    }

    const progressFill = this.container.querySelector('.cinematic-progress-bar');
    if (progressFill) {
      const pct = ((index + 1) / this.scenes.length) * 100;
      progressFill.style.width = `${pct}%`;
    }

    sound.playClick();
    // AUCUN défilement automatique avec timer : le joueur avance à son rythme !
  }

  next() {
    if (this.currentIndex < this.scenes.length - 1) {
      this.showScene(this.currentIndex + 1);
    } else {
      this.close();
    }
  }

  close() {
    storage.setSeenPrologue(true);
    if (this.container) {
      this.container.classList.remove('active');
      this.container.classList.add('hidden');
    }
    sound.playSuccess();
    if (typeof this.onComplete === 'function') {
      this.onComplete();
    }
  }
}
