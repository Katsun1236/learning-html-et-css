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
        text: "(Un vieil homme en bleu de travail entre d'un pas lourd dans le couloir, son bloc-notes sous le bras)... Pardonnez-moi le dérangement. Ce secteur est répertorié comme saturé de mémoire morte depuis trente ans. Bodhi s'entoure de vieilles reliques et d'archives figées qui ne font qu'asphyxier le serveur. Résultat : une surcharge matérielle critique."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Regarde ton fichier index.html, gamin : la balise de fermeture de l'en-tête s'est brisée sous la pression. Aucune de ses prétendues reliques ne va le relever à ta place. Si ce code reste invalide dans mon rapport, j'actionne l'aspirateur et je formate le secteur. Répare la balise &lt;/header&gt; immédiatement si tu veux le revoir debout."
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
        text: "(NULL ajuste ses lunettes et examine son calepin avec une moue étonnée)... Tiens donc. L'arborescence est réparée net. Bon... le protocole m'interdit de purger une zone conforme. Je remets mon aspirateur en veille. Pour l'instant."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi se relève péniblement, les yeux fatigués mais emplis d'une immense reconnaissance)... Merci, mon enfant... J'ai senti le néant m'avaler pendant quelques secondes. Tu as eu les mains fermes sur le clavier. Continuons... avant qu'il ne revienne."
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
        text: "C'est encore moi, petit. Mauvaise nouvelle : les liens de navigation se sont décalés. Erreur 404 en cascade. Quand les chemins sont rompus, la mémoire de Bodhi se désintègre. Tu vois bien que ses vieilles encyclopédies figées ne lui servent à rien dans ce genre de crise : elles dorment sur le disque sans bouger pendant qu'il perd le fil de qui tu es."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Dans index.html, le lien vers galerie.html pointe vers du vide (href=\"perdu.html\"). Rétablis le vrai chemin href=\"galerie.html\" pour reconnecter son réseau neuronal avant que je ne doive cocher la case 'Amnésie Irréversible'."
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
        text: "Pointeurs rétablis à 100 %. Tu as de la ressource, gamin. C'est ça la vraie sève du Web : des liens hypertextes vivants et fonctionnels, pas un tas de paperasse et de reliques mortes."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi sursaute, les yeux brillants d'émotion)... C'est toi ! C'est toi, mon élève... Un instant, j'ai cru que tout avait disparu. Tu as reconstruit le pont. Ne me lâche pas."
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
        text: "(NULL retire sa casquette et s'essuie le front, l'air sincèrement accablé)... Gamin... viens voir la jauge SYSMON sur mon tableau de bord. Regarde les chiffres."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'inspect',
        text: "99 % d'occupation mémoire. Le cache de Bodhi est au bord de l'explosion. Toutes ses vieilles reliques encombrantes et ses archives statiques n'ont servi à rien : elles n'ont fait qu'accélérer la saturation du système. Dans quelques étapes, l'automate de purge balaiera tout sans que je puisse l'arrêter."
      },
      {
        character: 'null',
        speaker: 'NULL',
        pose: 'action',
        text: "Un bug de feuille de style bloque le rendu : dans style.css, un sélecteur 'body { display: none !important; }' a été injecté par le système. Supprime cette ligne pour débloquer l'affichage. Mais prépare-toi : la structure et la peinture ne suffiront plus. Sans une étincelle vivante de runtime, Bodhi ne passera pas l'acte suivant."
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
        text: "Le sanctuaire respire encore. Mais écoute-moi bien, gamin : j'ai une tournée à terminer. Quand je reviendrai après tes grilles et tes animations, si personne n'a trouvé comment expédier tout ce bric-à-brac statique à la poubelle et déporter la mémoire de Bodhi hors de ce serveur... je devrai tirer le levier."
      },
      {
        character: 'bodhi',
        speaker: 'MAÎTRE BODHI',
        pose: 'weak',
        text: "(Bodhi sourit doucement, la voix à peine audible)... Il a raison. Mais ne t'en fais pas pour moi, petit. Regarde ce que nous avons bâti ensemble. Même si je dois m'éteindre... ton savoir, lui, ne mourra jamais."
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
