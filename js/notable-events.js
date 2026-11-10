// =============================================================================
// MOTEUR DES ÉVÉNEMENTS NOTABLES & DUEL DE DÉBOGAGE
// Les intrusions de NULL & Sauvetage de Bodhi
// =============================================================================

import { sound } from './audio.js';
import { getStepCanonicalFiles } from './continuous-steps.js';
import { NULL_POSES, BODHI_POSES, ADA_POSES } from './dialogue-box.js';

export const NOTABLE_EVENTS = [
  {
    id: 'event-1',
    triggerAfterStep: 8, // Après Acte I (Étape 8)
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
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi lève des yeux embués vers NULL)... NULL... Attends ! Ce secteur abrite trente ans de mémoire du Web... Ne lance pas la procédure de purge !"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "La nostalgie n'est pas un paramètre reconnu par le noyau, Bodhi. Le bus système enregistre une arborescence brisée dans index.html : balise d'en-tête non fermée. Mon journal d'audit exige un code valide, ou l'effacement immédiat."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Apprenti. Si tu veux éviter le reformatage de ton mentor, trouve la balise brisée dans l'éditeur et referme-la avec &lt;/header&gt;. Tu as jusqu'à la fin de mon cycle de scan. Rien de personnel : j'applique les directives système."
      }
    ],
    targetFile: 'index.html',
    bugInjection(files, forceCanonical = false) {
      const canonical = getStepCanonicalFiles(7);
      let baseHtml = canonical['index.html'];
      if (!forceCanonical && files && files['index.html'] && files['index.html'].includes('<header>')) {
        baseHtml = files['index.html'];
      }
      const buggedIndex = baseHtml.includes('</header>')
        ? baseHtml.replace('</header>', '<!-- CORRUPTED_SECTOR: HEADER NON FERMÉ -->')
        : (baseHtml.includes('<!-- CORRUPTED_SECTOR: HEADER NON FERMÉ -->') ? baseHtml : canonical['index.html'].replace('</header>', '<!-- CORRUPTED_SECTOR: HEADER NON FERMÉ -->'));
      return {
        ...canonical,
        ...(forceCanonical ? {} : files),
        'index.html': buggedIndex
      };
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
        text: "(NULL consulte son terminal d'un œil impassible, puis valide d'un coup de stylet sec)... L'arborescence est de nouveau conforme. La clause de purge immédiate est suspendue."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi se relève péniblement, le souffle court)... Tu vois, NULL ? Les nouveaux bâtisseurs apprennent vite. L'artisanat du Web résiste à tes protocoles."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "Ne criez pas victoire trop vite. Le protocole m'interdit de purger une zone conforme, mais ce vieux matériel s'effrite. Les prochaines erreurs ne tarderont pas."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'emotional',
        text: "(Bodhi se tourne vers toi avec gratitude)... Merci, mon enfant... J'ai senti le néant m'avaler pendant quelques secondes. Tu as eu les mains fermes sur le clavier. Continuons... avant son prochain passage."
      }
    ]
  },

  {
    id: 'event-2',
    triggerAfterStep: 18, // Après Acte II (Étape 18)
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
        text: "Alerte d'intégrité de niveau 2. Rupture de routage. Hyperliens désalignés. Erreurs 404 en cascade dans le journal d'audit système."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "Mes chemins... quelqu'un a coupé mes chemins... Qui es-tu, toi avec ce terminal d'ombre... ?"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "Je suis le processus de maintenance NULL, Bodhi. Et vos tables d'adressage sont en miettes. Quand les hyperliens meurent, les segments de mémoire s'isolent. Si personne ne reconnecte ce réseau, la procédure d'amnésie définitive sera verrouillée."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Apprenti. Dans index.html, le pointeur de navigation vers la galerie pointe dans le vide : href=\"perdu.html\". Rétablis immédiatement href=\"galerie.html\". Si les artères ne sont pas raccordées avant mon prochain contrôle, je classe ce secteur comme non-maintenable et j'exécute la purge."
      }
    ],
    targetFile: 'index.html',
    bugInjection(files, forceCanonical = false) {
      const canonical = getStepCanonicalFiles(15);
      let baseHtml = canonical['index.html'];
      if (!forceCanonical && files && files['index.html'] && files['index.html'].includes('galerie.html')) {
        baseHtml = files['index.html'];
      }
      const buggedIndex = baseHtml.includes('galerie.html')
        ? baseHtml.replace('galerie.html', 'perdu.html')
        : canonical['index.html'].replace('galerie.html', 'perdu.html');
      return {
        ...canonical,
        ...(forceCanonical ? {} : files),
        'index.html': buggedIndex
      };
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
        text: "(NULL vérifie les tables de routage, le visage de marbre)... Les pointeurs sont rétablis à 100 %. L'amnistie temporaire est accordée."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'emotional',
        text: "(Bodhi sursaute et te regarde avec émotion)... C'est toi ! C'est toi, mon élève ! Un instant, mon esprit s'était vidé de tout... Tu as reconstruit le pont."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'zen',
        text: "Un lien hypertexte bien forgé est plus solide que tous tes scripts de nettoyage, NULL."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "Pour l'instant. Mais un pont sans style et sans contrôle mémoire n'est qu'un fil de fer au-dessus du vide. Vos requêtes s'accumulent. Le prochain seuil sera critique."
      }
    ]
  },

  {
    id: 'event-3',
    triggerAfterStep: 28, // Après Acte III (Étape 28)
    title: "ALERTE SYSTÈME : L'Avis de Purge Ultime (Seuil 99 %)",
    speaker: "NULL",
    character: 'null',
    cinematicImage: 'assets/backgrounds/cinematic_bodhi_purge.jpg',
    introDialogue: [
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "(NULL s'avance d'un pas mécanique, son terminal braqué vers l'écran avec une froideur absolue)... Avis d'expulsion final. Taux d'occupation mémoire du serveur : 99 %."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi s'appuie contre le pupitre, la voix tremblante)... NULL... Regarde ce que mon élève a bâti ! Chaque balise, chaque règle CSS est polie avec amour. Tu ne peux pas raser cet édifice !"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "Un superviseur système n'a pas d'yeux pour l'amour, Bodhi. Seuls les chiffres font foi. Le cache interne est saturé. Le ramasse-miettes s'exécutera automatiquement dès que la pile débordera."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Une directive anormale 'body { display: none !important; }' bloque actuellement le flux de rendu dans style.css. Supprimez cette anomalie immédiatement. Mais sachez-le : vos feuilles de style ne suffiront plus à compenser l'asphyxie du serveur. Sans un moyen technique de déporter votre mémoire hors de cette machine, le levier de purge sera abaissé à mon retour."
      }
    ],
    targetFile: 'style.css',
    bugInjection(files, forceCanonical = false) {
      const canonical = getStepCanonicalFiles(23);
      let baseCss = canonical['style.css'];
      if (!forceCanonical && files && files['style.css'] && files['style.css'].length >= 30) {
        baseCss = files['style.css'];
      }
      const cleanCss = baseCss.replace(/\/\* ALERTE SECURITE GC \*\/\s*body\s*\{\s*display:\s*none\s*!important;\s*\}\s*/g, '');
      const buggedCss = `/* ALERTE SECURITE GC */\nbody { display: none !important; }\n\n` + cleanCss;
      return {
        ...canonical,
        ...(forceCanonical ? {} : files),
        'style.css': buggedCss
      };
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
        pose: 'inspect',
        text: "(NULL valide d'un coup de stylet sur son écran de contrôle)... Affichage rétabli. Conformité CSS validée. Sursis accordé jusqu'à la fin de vos travaux de mise en page."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "NULL... Même une machine a des logs d'archivage. Ne peux-tu pas allouer une partition d'exception ?"
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'neutral',
        text: "Aucune dérogation n'existe dans le protocole. 0 octet disponible. Quand je reviendrai après vos grilles et vos animations, si votre mémoire réside encore sur ce serveur physique, le reformatage complet sera irréversible."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'emotional',
        text: "(Bodhi se tourne vers toi, les yeux graves mais résolus)... Il a raison sur la physique des serveurs. La pierre statique ne suffira pas face à la purge... Mais écoute ! Depuis les sous-sols du runtime, j'entends le bruit d'un atelier qui s'active. Ada prépare le troisième pilier. Finissons nos styles de CSS... et préparons le grand bond vers le JavaScript !"
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
      } else if (d.character === 'ada') {
        const adaImg = ADA_POSES[pose] || 'assets/characters/ada_neutral.jpg';
        if (standee) standee.classList.add('hidden');
        if (portraitImg) {
          portraitImg.src = adaImg;
          portraitImg.alt = "Ada";
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
    if (this.app.storage) {
      this.app.storage.saveProjectFiles(buggedFiles);
    }

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
      } else if (d.character === 'ada') {
        const adaImg = ADA_POSES[pose] || 'assets/characters/ada_neutral.jpg';
        if (standee) standee.classList.add('hidden');
        if (portraitImg) {
          portraitImg.src = adaImg;
          portraitImg.alt = "Ada";
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
        const maxStepIdx = (this.app.steps && this.app.steps.length > 0) ? (this.app.steps.length - 1) : 49;
        const targetStep = (eventData.triggerAfterStep !== undefined) ? Math.min(eventData.triggerAfterStep, maxStepIdx) : (this.app.currentStepIndex + 1);
        if (targetStep > this.app.highestUnlockedStep) {
          this.app.highestUnlockedStep = targetStep;
          if (this.app.storage) this.app.storage.setHighestUnlockedStep(targetStep);
        }
        this.app.loadStep(targetStep);
      }
    };
  }
}
