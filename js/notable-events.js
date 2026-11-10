// =============================================================================
// MOTEUR DES ÉVÉNEMENTS NOTABLES & DUEL DE DÉBOGAGE
// Les intrusions de NULL & Sauvetage de Bodhi
// =============================================================================

import { sound } from './audio.js';
import { getStepCanonicalFiles } from './continuous-steps.js';
import { NULL_POSES, BODHI_POSES } from './dialogue-box.js';

export const NOTABLE_EVENTS = [
  {
    id: 'event-1',
    triggerAfterStep: 7, // Après Acte I
    title: "ALERTE SYSTÈME : Première Purge Sectorielle",
    speaker: "NULL",
    character: 'null',
    cinematicImage: 'assets/backgrounds/cinematic_bodhi_purge.jpg',
    introDialogue: [
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'glitch',
        text: "(Bodhi s'effondre en serrant sa poitrine, les dents serrées de douleur)... Aaargh ! Mon... mon cache ! Les partitions se déchirent... !"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "(Un homme au regard froid en bleu de travail avance d'un pas lourd et mesuré, son terminal de purge sous le bras)... Alerte d'intégrité de niveau 1. Ce serveur est en infraction matérielle."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Regarde ton fichier index.html : la balise de fermeture de l'en-tête s'est brisée sous la pression. Les fragments de code corrompus polluent le bus système. Mon ordre de mission est formel : si cette anomalie persiste à mon prochain cycle, je formate le secteur et j'efface l'entité Bodhi. Répare la balise &lt;/header&gt; immédiatement si tu veux qu'il survive. Rien de personnel : j'applique les directives système."
      }
    ],
    targetFile: 'index.html',
    bugInjection(files) {
      let copy = { ...files };
      if (!copy['index.html'] || !copy['index.html'].includes('</header>')) {
        const canonical = getStepCanonicalFiles(7);
        copy = { ...canonical, ...copy };
        copy['index.html'] = canonical['index.html'];
      }
      copy['index.html'] = copy['index.html'].replace('</header>', '<!-- CORRUPTED_SECTOR: HEADER NON FERMÉ -->');
      return copy;
    },
    missionRiddle: "Trouve le commentaire '<!-- CORRUPTED_SECTOR: HEADER NON FERMÉ -->' dans index.html et remplace-le par la vraie balise </header> pour rétablir l'arborescence !",
    check(files) {
      const html = files['index.html'] || '';
      if (!html.includes('</header>') || html.includes('CORRUPTED_SECTOR')) {
        return { pass: false, message: "La balise </header> n'est toujours pas refermée. L'arborescence est brisée !" };
      }
      return {
        pass: true,
        message: "L'arborescence est rétablie ! L'intégrité du secteur est restaurée."
      };
    },
    resolutionDialogue: [
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "(NULL consulte son terminal d'un œil impassible, puis valide d'un coup de stylet sec)... L'arborescence est de nouveau conforme. La clause de purge immédiate est suspendue. Mais ce serveur est en fin de cycle. Je reviendrai à la moindre faille."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi se relève péniblement, le souffle court)... Il ne plaisante pas... NULL n'a ni haine ni pitié, il n'est que le bras armé du protocole d'effacement. Merci de m'avoir sauvé... mais le compte à rebours est lancé."
      }
    ]
  },

  {
    id: 'event-2',
    triggerAfterStep: 15, // Après Acte II
    title: "ALERTE SYSTÈME : La Fracture des Chemins (404)",
    speaker: "NULL",
    character: 'null',
    cinematicImage: 'assets/backgrounds/cinematic_bodhi_purge.jpg',
    introDialogue: [
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'glitch',
        text: "(Des étincelles violettes jaillissent autour du crâne de Bodhi)... Mes souvenirs... où sont passées les chroniques ?! Qui... qui êtes-vous devant cet écran ? Pourquoi êtes-vous là ?!"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "Alerte d'intégrité de niveau 2. Rupture de routage. Les hyperliens se sont désalignés. Erreurs 404 en cascade dans le journal d'audit système."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Dans index.html, le pointeur vers la galerie est rompu : href=\"perdu.html\". Quand les chemins meurent, la mémoire de l'entité se dégrade irréversiblement. Rétablis le chemin href=\"galerie.html\" immédiatement, ou je déclare ce secteur irrécupérable et j'exécute la purge."
      }
    ],
    targetFile: 'index.html',
    bugInjection(files) {
      let copy = { ...files };
      if (!copy['index.html'] || !copy['index.html'].includes('galerie.html')) {
        const canonical = getStepCanonicalFiles(15);
        copy = { ...canonical, ...copy };
        copy['index.html'] = canonical['index.html'];
      }
      copy['index.html'] = copy['index.html'].replace('href="galerie.html"', 'href="perdu.html"');
      return copy;
    },
    missionRiddle: "Corrige l'attribut erroné href=\"perdu.html\" dans la barre de navigation de index.html pour repointer vers href=\"galerie.html\" !",
    check(files) {
      const html = files['index.html'] || '';
      if (!html.includes('href="galerie.html"')) {
        return { pass: false, message: "Le lien vers galerie.html n'est toujours pas rétabli !" };
      }
      return {
        pass: true,
        message: "Le réseau est reconnecté ! Les souvenirs de Bodhi se stabilisent."
      };
    },
    resolutionDialogue: [
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "(NULL vérifie les tables de routage, le visage de marbre)... Les pointeurs sont rétablis. L'amnistie temporaire est accordée. Mais ne te fais aucune illusion : un système qui accumule des erreurs d'adressage finira par être recyclé."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi reprend ses esprits, encore tremblant)... Ses pas se rapprochent à chaque erreur. Si nous ne maîtrisons pas chaque ligne de ce sanctuaire, NULL le rasera jusqu'au dernier octet..."
      }
    ]
  },

  {
    id: 'event-3',
    triggerAfterStep: 23, // Après Acte III
    title: "ALERTE SYSTÈME : L'Avis de Purge Ultime (Seuil 99 %)",
    speaker: "NULL",
    character: 'null',
    cinematicImage: 'assets/backgrounds/cinematic_bodhi_purge.jpg',
    introDialogue: [
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "(NULL s'avance, son terminal pointé vers l'écran avec une froideur absolue)... Avis d'expulsion final. Regarde les compteurs système : saturation mémoire à 99 %."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "Le cache de Bodhi est au bord de l'asphyxie. Le protocole automatique de ramasse-miettes s'enclenchera à la prochaine défaillance sans qu'aucune négociation ne soit possible."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Une instruction anormale 'body { display: none !important; }' a bloqué le pipeline d'affichage de style.css. Supprime cette ligne pour débloquer le rendu. Mais écoute bien : tes fichiers HTML et CSS ne suffiront plus à compenser la fuite mémoire. Sans une intervention structurelle, le levier de purge sera abaissé."
      }
    ],
    targetFile: 'style.css',
    bugInjection(files) {
      let copy = { ...files };
      if (!copy['style.css'] || copy['style.css'].length < 20) {
        const canonical = getStepCanonicalFiles(23);
        copy = { ...canonical, ...copy };
        copy['style.css'] = canonical['style.css'] || '/* Base du Sanctuaire */\n';
      }
      copy['style.css'] = `/* ALERTE SECURITE GC */\nbody { display: none !important; }\n\n` + copy['style.css'];
      return copy;
    },
    missionRiddle: "Ouvre style.css et supprime la règle 'body { display: none !important; }' pour rétablir la lumière !",
    check(files) {
      const css = files['style.css'] || '';
      if (css.includes('display: none !important') || css.includes('display:none !important')) {
        return { pass: false, message: "Supprime la règle 'display: none !important' sur le body pour réafficher le sanctuaire." };
      }
      return {
        pass: true,
        message: "L'affichage est rétabli ! Mais la jauge mémoire reste critique..."
      };
    },
    resolutionDialogue: [
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "Affichage rétabli. Sursis accordé pour la suite de vos travaux. Quand je reviendrai après vos grilles et vos animations, si ce serveur ne dispose d'aucun moyen de déporter sa mémoire... la purge totale sera exécutée."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi baisse la tête, lucide et grave)... Sa logique est implacable. NULL ne fait qu'exécuter la loi d'airain des machines. Si nous ne trouvons pas une solution pour déporter ma mémoire avant son retour... tout ce que nous avons créé disparaîtra."
      }
    ]
  }
];

export class NotableEventsEngine {
  constructor(app) {
    this.app = app;
    this.activeEvent = null;
    let saved = '[]';
    try {
      if (typeof localStorage !== 'undefined') {
        saved = localStorage.getItem('sanctuaire_completed_events') || '[]';
      }
    } catch (_) {}
    this.completedEvents = new Set(JSON.parse(saved));
  }

  cancelActiveEvent() {
    this.activeEvent = null;
    const overlay = document.getElementById('notable-event-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
    }
  }

  hasPendingEvent(completedStepNumber) {
    return NOTABLE_EVENTS.some(ev => ev.triggerAfterStep === completedStepNumber && !this.completedEvents.has(ev.id));
  }

  getEventForStep(completedStepNumber) {
    return NOTABLE_EVENTS.find(ev => ev.triggerAfterStep === completedStepNumber && !this.completedEvents.has(ev.id));
  }

  async triggerEvent(eventData) {
    this.activeEvent = eventData;
    sound.playError();
    this.showCinematicAlert(eventData);
  }

  showCinematicAlert(eventData) {
    let overlay = document.getElementById('notable-event-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'notable-event-overlay';
      overlay.className = 'notable-event-screen';
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="event-cinematic-backdrop" id="event-cinematic-backdrop" style="background-image: url('${eventData.cinematicImage}');">
        <div class="event-crt-scanlines"></div>
        <div class="event-vignette"></div>
        <div class="event-alert-bar">
          <span class="event-pulse-dot"></span>
          <span class="event-alert-title">${eventData.title}</span>
        </div>

        <!-- Standee grand format de NULL (style Visual Novel) -->
        <div class="event-null-standee hidden" id="event-null-standee">
          <img src="assets/characters/null_action.jpg" alt="NULL" class="null-standee-img" id="null-standee-img">
        </div>

        <div class="event-dialogue-card" id="event-dialogue-box">
          <div class="event-avatar-portrait-wrap">
            <img id="event-speaker-portrait" src="assets/characters/bodhi_glitch.jpg" alt="Personnage" class="event-speaker-portrait">
          </div>
          <div class="event-dialogue-content">
            <div class="event-speaker-badge" id="event-speaker-name">ALERTE SYSTÈME</div>
            <p class="event-speech-text" id="event-speech-text">Initialisation de la purge...</p>
            <div class="event-actions">
              <button id="event-dialogue-next-btn" class="event-btn-primary">Continuer</button>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.classList.remove('hidden');

    let dialogueIndex = 0;
    const speakerEl = overlay.querySelector('#event-speaker-name');
    const speechEl = overlay.querySelector('#event-speech-text');
    const nextBtn = overlay.querySelector('#event-dialogue-next-btn');
    const standee = overlay.querySelector('#event-null-standee');
    const standeeImg = overlay.querySelector('#null-standee-img');
    const portraitImg = overlay.querySelector('#event-speaker-portrait');

    const showDialogue = () => {
      const d = eventData.introDialogue[dialogueIndex];
      speakerEl.textContent = d.speaker;
      speechEl.innerHTML = d.text;

      const isNull = (d.character === 'null');
      const pose = d.pose || 'neutral';

      if (isNull) {
        const nullImg = NULL_POSES[pose] || 'assets/characters/null_neutral.jpg';
        if (standee) {
          standee.classList.remove('hidden');
          if (standeeImg) standeeImg.src = nullImg;
        }
        if (portraitImg) {
          portraitImg.src = nullImg;
          portraitImg.alt = "NULL";
        }
      } else {
        if (standee) standee.classList.add('hidden');
        if (portraitImg) {
          portraitImg.src = BODHI_POSES[pose] || 'assets/characters/bodhi_glitch.jpg';
          portraitImg.alt = "Maître Bodhi";
        }
      }

      if (dialogueIndex === eventData.introDialogue.length - 1) {
        nextBtn.textContent = "Passer au Débogage d'Urgence";
      } else {
        nextBtn.textContent = "Continuer";
      }
    };

    showDialogue();

    nextBtn.onclick = () => {
      sound.playClick();
      dialogueIndex++;
      if (dialogueIndex < eventData.introDialogue.length) {
        showDialogue();
      } else {
        overlay.classList.add('hidden');
        this.startDebugChallenge(eventData);
      }
    };
  }

  startDebugChallenge(eventData) {
    const currentFiles = this.app.editor.getFiles();
    const buggedFiles = eventData.bugInjection(currentFiles);
    this.app.editor.setFiles(buggedFiles, eventData.targetFile);

    // Mettre l'interface du compagnon en mode alerte NULL
    if (this.app.bodhi) {
      this.app.bodhi.setSpeaker('NULL', 'action', 'null');
      this.app.bodhi.speechContainer.innerHTML = `
        <div class="bodhi-feedback error debug-alert-mode">
          <p class="bodhi-feedback-title">${eventData.title}</p>
          <p><strong>NULL :</strong> « ${eventData.missionRiddle} »</p>
          <p class="debug-urgent-text">Attention : Répare le code dans l'éditeur puis clique sur <strong>Vérifier mon code</strong> pour repousser la purge !</p>
        </div>
      `;
    }
  }

  checkEventResolution(files) {
    if (!this.activeEvent) return null;
    return this.activeEvent.check(files);
  }

  resolveActiveEvent() {
    if (!this.activeEvent) return;
    const ev = this.activeEvent;
    this.completedEvents.add(ev.id);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('sanctuaire_completed_events', JSON.stringify([...this.completedEvents]));
      }
    } catch (_) {}

    this.showResolutionScreen(ev);
    this.activeEvent = null;
  }

  showResolutionScreen(eventData) {
    let overlay = document.getElementById('notable-event-overlay');
    if (!overlay) return;

    overlay.innerHTML = `
      <div class="event-cinematic-backdrop resolution-mode" style="background-image: url('${eventData.cinematicImage}');">
        <div class="event-crt-scanlines"></div>
        <div class="event-vignette"></div>
        <div class="event-alert-bar success">
          <span class="event-pulse-dot green"></span>
          <span class="event-alert-title">SITUATION RÉSOLUE // PURGE NEUTRALISÉE</span>
        </div>

        <!-- Standee grand format de NULL -->
        <div class="event-null-standee hidden" id="event-null-standee-res">
          <img src="assets/characters/null_inspect.jpg" alt="NULL" class="null-standee-img" id="null-standee-img-res">
        </div>

        <div class="event-dialogue-card" id="event-dialogue-box">
          <div class="event-avatar-portrait-wrap">
            <img id="event-speaker-portrait-res" src="assets/characters/null_inspect.jpg" alt="NULL" class="event-speaker-portrait">
          </div>
          <div class="event-dialogue-content">
            <div class="event-speaker-badge" id="event-speaker-name">RÉSOLU</div>
            <p class="event-speech-text" id="event-speech-text"></p>
            <div class="event-actions">
              <button id="event-resolution-next-btn" class="event-btn-primary">Poursuivre la voie</button>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.classList.remove('hidden');

    let idx = 0;
    const speakerEl = overlay.querySelector('#event-speaker-name');
    const speechEl = overlay.querySelector('#event-speech-text');
    const nextBtn = overlay.querySelector('#event-resolution-next-btn');
    const standee = overlay.querySelector('#event-null-standee-res');
    const standeeImg = overlay.querySelector('#null-standee-img-res');
    const portraitImg = overlay.querySelector('#event-speaker-portrait-res');

    const showNext = () => {
      const d = eventData.resolutionDialogue[idx];
      speakerEl.textContent = d.speaker;
      speechEl.innerHTML = d.text;

      const isNull = (d.character === 'null');
      const pose = d.pose || 'neutral';

      if (isNull) {
        const nullImg = NULL_POSES[pose] || 'assets/characters/null_inspect.jpg';
        if (standee) {
          standee.classList.remove('hidden');
          if (standeeImg) standeeImg.src = nullImg;
        }
        if (portraitImg) {
          portraitImg.src = nullImg;
          portraitImg.alt = "NULL";
        }
      } else {
        if (standee) standee.classList.add('hidden');
        if (portraitImg) {
          portraitImg.src = BODHI_POSES[pose] || 'assets/characters/bodhi_weak.jpg';
          portraitImg.alt = "Maître Bodhi";
        }
      }

      if (idx === eventData.resolutionDialogue.length - 1) {
        nextBtn.textContent = "Reprendre l'apprentissage";
      } else {
        nextBtn.textContent = "Continuer";
      }
    };

    showNext();

    nextBtn.onclick = () => {
      sound.playClick();
      idx++;
      if (idx < eventData.resolutionDialogue.length) {
        showNext();
      } else {
        overlay.classList.add('hidden');
        sound.playSuccess();
        this.app.bodhi.setSpeaker('MAÎTRE BODHI', 'weak', 'bodhi');
        const targetStep = (eventData.triggerAfterStep !== undefined) ? Math.min(eventData.triggerAfterStep + 1, 39) : (this.app.currentStepIndex + 1);
        if (targetStep > this.app.highestUnlockedStep) {
          this.app.highestUnlockedStep = targetStep;
          if (this.app.storage) this.app.storage.setHighestUnlockedStep(targetStep);
        }
        this.app.loadStep(targetStep);
      }
    };
  }
}
