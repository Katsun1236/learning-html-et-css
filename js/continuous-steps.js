// =============================================================================
// PARCOURS INITIATIQUE : L'ÉDIFICATION DU GRAND SANCTUAIRE MULTI-PAGES
// 24 ÉTAPES PROGRESSIVES DU NÉANT ABSOLU AU CHEF-D'ŒUVRE COMPLET
// =============================================================================

// =============================================================================
// MODÈLES CANONIQUES CUMULATIFS COMPLETS POUR CHAQUE ÉTAPE (1 À 36)
// =============================================================================

// We define the canonical progression of all 5 files across the 36 steps.

// === 1. INDEX.HTML PROGRESSION ===
const INDEX_S1 = `<!DOCTYPE html>
<html lang="fr">
</html>`;

const INDEX_S2 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
</html>`;

const INDEX_S3 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
  </header>

</body>
</html>`;

const INDEX_S4 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

</body>
</html>`;

const INDEX_S5 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Présentation du Sanctuaire</h2>
      <article>
        <p>Ce lieu fut érigé pour rappeler aux esprits curieux que le Web appartient à ceux qui apprennent à le bâtir par eux-mêmes, brique par brique, sans dépendre d'artifices éphémères.</p>
      </article>
    </section>
  </main>

</body>
</html>`;

const INDEX_S6 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Présentation du Sanctuaire</h2>
      <article>
        <p>Ce lieu fut érigé pour rappeler aux esprits curieux que le Web appartient à ceux qui apprennent à le bâtir par eux-mêmes, brique par brique, sans dépendre d'artifices éphémères.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const INDEX_S13 = INDEX_S6.replace(
  '<title>Le Sanctuaire du Savoir</title>',
  '<title>Le Sanctuaire du Savoir</title>\n  <link rel="stylesheet" href="style.css">'
);

const INDEX_S25 = INDEX_S13.replace(
  '<main>',
  `<main>
    <div class="hero">
      <span class="hero-badge">Sanctuaire Ouvert</span>
      <h2 class="hero-title">L'Académie du Code Éternel</h2>
      <p class="hero-subtitle">Apprends les fondations du Web aux côtés des anciens bâtisseurs.</p>
    </div>`
);

const INDEX_S27 = INDEX_S25.replace(
  '    </section>',
  `    </section>

    <div class="card-grid">
      <article class="card">
        <h3>Sagesse du HTML</h3>
        <p>La sémantique pure qui donne un sens éternel à chaque octet de contenu.</p>
      </article>
      <article class="card">
        <h3>Structure & Flux</h3>
        <p>L'harmonie de Flexbox et de la Grille qui ordonne l'univers visuel.</p>
      </article>
      <article class="card">
        <h3>Éclat du CSS</h3>
        <p>Les teintes profondes et les animations douces qui enchantent le visiteur.</p>
      </article>
    </div>`
);

const INDEX_S37 = INDEX_S27.replace(
  '</head>',
  '  <script src="script.js" defer></script>\n</head>'
);

// === 1.1 SCRIPT.JS PROGRESSION (ACTE VI : JAVASCRIPT & RUNTIME) ===
const SCRIPT_S37 = `// =============================================================================
// L'ATELIER DU RUNTIME — SCRIPT PRINCIPAL DU SANCTUAIRE
// =============================================================================

console.log("Le Sanctuaire du Savoir s'éveille dans le runtime !");
const SANCTUARY_NAME = "Le Sanctuaire du Savoir";
`;

const SCRIPT_S38 = SCRIPT_S37 + `\n// Interaction sensorielle : écoute des événements utilisateurs
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button') || document.querySelector('a');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log("Le Sanctuaire répond au contact du voyageur !");
    });
  }
});
`;

const SCRIPT_S39 = SCRIPT_S38 + `\n// Déportation de la mémoire de Bodhi dans le navigateur local (localStorage)
const bodhiMemory = {
  name: "Maître Bodhi",
  status: "immortel",
  origin: "CERN 1991",
  disciples: 1,
  sanctuaryState: "restauré",
  savedAt: new Date().toISOString()
};

localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory));
console.log("Mémoire de Bodhi ancrée dans localStorage :", bodhiMemory);
`;

const SCRIPT_S40 = SCRIPT_S39;

// === 2. CHRONIQUES.HTML PROGRESSION ===
const CHRONIQUES_S7 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
  </header>

</body>
</html>`;

const CHRONIQUES_S8 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

</body>
</html>`;

const CHRONIQUES_S9 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Les Âges du Réseau</h2>
      <ul>
        <li><strong>L'Ère du Texte Brut (1990) :</strong> Les premiers hyperliens inventés au CERN par Tim Berners-Lee.</li>
        <li><strong>La Guerre des Navigateurs (1995) :</strong> L'affrontement titanesque entre Netscape et Internet Explorer.</li>
        <li><strong>L'Harmonie des Standards (2000+) :</strong> L'avènement du W3C et des feuilles de style CSS universelles.</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const CHRONIQUES_S13 = CHRONIQUES_S9.replace(
  '<title>Les Chroniques du Web</title>',
  '<title>Les Chroniques du Web</title>\n  <link rel="stylesheet" href="style.css">'
);

const CHRONIQUES_S29 = CHRONIQUES_S13.replace(
  '    </section>',
  `      <blockquote>
        « Le code n'appartient à personne et appartient à tous. C'est en le partageant sans barrières que nous élevons l'humanité. »
        <cite>— Le Premier Architecte du Web (1991)</cite>
      </blockquote>
    </section>`
);

// === 3. GALERIE.HTML PROGRESSION ===
const GALERIE_S10 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Galerie des Bâtisseurs</title>
</head>
<body>

  <header>
    <h1>Galerie des Bâtisseurs</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Fresques du Premier Siècle</h2>
    </section>
  </main>

</body>
</html>`;

const GALERIE_S11 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Galerie des Bâtisseurs</title>
</head>
<body>

  <header>
    <h1>Galerie des Bâtisseurs</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Fresques du Premier Siècle</h2>
      <div class="galerie-conteneur">
        <figure>
          <img src="assets/gallery/tree_dom.png" alt="L'Arbre du DOM">
          <figcaption>L'Arbre Sacré du DOM : la hiérarchie des balises vivantes.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/cascades_css.png" alt="Les Cascades CSS">
          <figcaption>Les Cascades de Style : la beauté héritée des propriétés.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/hyperlink_bridge.png" alt="Le Pont Hypertexte">
          <figcaption>Le Pont Hypertexte : reliant les mondes distants en un clic.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/messenger_envoy.png" alt="L'Envoyé Messager">
          <figcaption>L'Envoyé du Réseau : délivrant les formulaires au serveur.</figcaption>
        </figure>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const GALERIE_S13 = GALERIE_S11.replace(
  '<title>Galerie des Bâtisseurs</title>',
  '<title>Galerie des Bâtisseurs</title>\n  <link rel="stylesheet" href="style.css">'
);

// === 4. CONTACT.HTML PROGRESSION ===
const CONTACT_S12 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contacter le Sanctuaire</title>
</head>
<body>

  <header>
    <h1>Contacter le Sanctuaire</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Envoyer un Parchemin à Maître Bodhi</h2>
      <form action="#" method="post">
        <label for="nom">Ton nom d'apprenti :</label>
        <input type="text" id="nom" name="nom" placeholder="Ex: Scribe du Web">

        <label for="email">Ton adresse de contact :</label>
        <input type="email" id="email" name="email" placeholder="nom@domaine.org">

        <label for="message">Ton message pour le sanctuaire :</label>
        <textarea id="message" name="message" rows="5" placeholder="Écris ton message ici..."></textarea>

        <button type="submit">Envoyer le message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const CONTACT_S13 = CONTACT_S12.replace(
  '<title>Contacter le Sanctuaire</title>',
  '<title>Contacter le Sanctuaire</title>\n  <link rel="stylesheet" href="style.css">'
);

// === 5. STYLE.CSS PROGRESSION ===
const STYLE_S13 = `/* Feuille de style du Sanctuaire */`;

const STYLE_S14 = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;

const STYLE_S15 = STYLE_S14 + `\n
body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  line-height: 1.6;
}`;

const STYLE_S16 = STYLE_S15 + `\n
section {
  background-color: #1e293b;
  border: 1px solid #334155;
  padding: 28px;
  max-width: 800px;
  margin: 24px auto;
  border-radius: 14px;
}`;

const STYLE_S17 = STYLE_S16 + `\n
header {
  background-color: #1e293b;
  padding: 24px 20px;
  text-align: center;
  border-bottom: 2px solid #334155;
}

nav a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 14px;
}

nav a:hover {
  color: #f59e0b;
}`;

const STYLE_S18 = STYLE_S17.replace(
  'border-radius: 14px;',
  'border-radius: 14px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);'
);

const STYLE_S19 = STYLE_S18.replace(
  'header {',
  `nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 14px;
}

header {`
);

const STYLE_S20 = STYLE_S19 + `\n
.galerie-conteneur {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

figure {
  background: #0f172a;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #334155;
}

figure img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

figcaption {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 8px;
  text-align: center;
}`;

const STYLE_S21 = STYLE_S20 + `\n
form {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

input, textarea {
  background: #0f172a;
  border: 1px solid #334155;
  color: #f8fafc;
  padding: 12px 14px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
}

button {
  background: #f59e0b;
  color: #1e293b;
  font-weight: 800;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}`;

const STYLE_S22 = STYLE_S21.replace(
  'nav a {',
  'nav a {\n  transition: color 0.2s;'
).replace(
  'border: 1px solid #334155;\n}',
  `border: 1px solid #334155;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

figure:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}`
).replace(
  'font-size: 1rem;\n}',
  `font-size: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
}`
);

const STYLE_S23 = STYLE_S22 + `\n
footer {
  text-align: center;
  padding: 24px;
  color: #64748b;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 8px;
  }

  section {
    margin: 16px 12px;
    padding: 20px;
  }
}`;

const STYLE_S24 = `:root {
  --gold-primary: #f59e0b;
  --bg-main: #0f172a;
  --text-main: #f8fafc;
}

` + STYLE_S23;

const STYLE_S26 = STYLE_S24 + `\n
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border-bottom: 1px solid #334155;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid var(--gold-primary, #f59e0b);
  border-radius: 20px;
  color: var(--gold-primary, #f59e0b);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}`;

const STYLE_S28 = STYLE_S26 + `\n
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 960px;
  margin: 32px auto;
  padding: 0 16px;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-primary, #f59e0b);
}`;

const STYLE_S30 = STYLE_S28 + `\n
blockquote {
  border-left: 4px solid var(--gold-primary, #f59e0b);
  padding: 18px 24px;
  margin: 24px 0;
  background: rgba(245, 158, 11, 0.05);
  border-radius: 0 10px 10px 0;
  font-style: italic;
  font-size: 1.05rem;
  color: #e2e8f0;
}

blockquote cite {
  display: block;
  margin-top: 10px;
  font-size: 0.85rem;
  font-style: normal;
  color: var(--gold-primary, #f59e0b);
  font-weight: 700;
}`;

const STYLE_S31 = STYLE_S30.replace(
  'figure {',
  'figure {\n  overflow: hidden;'
).replace(
  'figure:hover {',
  'figure:hover img {\n  transform: scale(1.08);\n}\n\nfigure:hover {'
);

const STYLE_S32 = STYLE_S31 + `\n
input:focus, textarea:focus {
  outline: none;
  border-color: var(--gold-primary, #f59e0b);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
}

form:focus-within {
  border-color: var(--gold-primary, #f59e0b);
}`;

const STYLE_S33 = STYLE_S32 + `\n
@keyframes beaconPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 14px 4px rgba(245, 158, 11, 0.3);
  }
}

.hero-badge {
  animation: beaconPulse 3s infinite ease-in-out;
}`;

const STYLE_S34 = STYLE_S33.replace(
  'header {',
  `header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(30, 41, 59, 0.85);
  z-index: 100;`
);

const STYLE_S35 = STYLE_S34 + `\n
:focus-visible {
  outline: 2px solid var(--gold-primary, #f59e0b);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;

const STYLE_S36 = STYLE_S35;

// Construct map for each step 1..36
function getFilesForStep(stepNum) {
  const files = {};
  
  // INDEX
  if (stepNum === 1) files['index.html'] = INDEX_S1;
  else if (stepNum === 2) files['index.html'] = INDEX_S2;
  else if (stepNum === 3) files['index.html'] = INDEX_S3;
  else if (stepNum === 4) files['index.html'] = INDEX_S4;
  else if (stepNum === 5) files['index.html'] = INDEX_S5;
  else if (stepNum >= 6 && stepNum <= 12) files['index.html'] = INDEX_S6;
  else if (stepNum >= 13 && stepNum <= 24) files['index.html'] = INDEX_S13;
  else if (stepNum === 25 || stepNum === 26) files['index.html'] = INDEX_S25;
  else if (stepNum >= 27 && stepNum <= 36) files['index.html'] = INDEX_S27;
  else files['index.html'] = INDEX_S37; // 37..40

  // CHRONIQUES
  if (stepNum === 7) files['chroniques.html'] = CHRONIQUES_S7;
  else if (stepNum === 8) files['chroniques.html'] = CHRONIQUES_S8;
  else if (stepNum >= 9 && stepNum <= 12) files['chroniques.html'] = CHRONIQUES_S9;
  else if (stepNum >= 13 && stepNum <= 28) files['chroniques.html'] = CHRONIQUES_S13;
  else if (stepNum >= 29) files['chroniques.html'] = CHRONIQUES_S29;

  // GALERIE
  if (stepNum === 10) files['galerie.html'] = GALERIE_S10;
  else if (stepNum === 11 || stepNum === 12) files['galerie.html'] = GALERIE_S11;
  else if (stepNum >= 13) files['galerie.html'] = GALERIE_S13;

  // CONTACT
  if (stepNum === 12) files['contact.html'] = CONTACT_S12;
  else if (stepNum >= 13) files['contact.html'] = CONTACT_S13;

  // STYLE.CSS
  if (stepNum === 13) files['style.css'] = STYLE_S13;
  else if (stepNum === 14) files['style.css'] = STYLE_S14;
  else if (stepNum === 15) files['style.css'] = STYLE_S15;
  else if (stepNum === 16) files['style.css'] = STYLE_S16;
  else if (stepNum === 17) files['style.css'] = STYLE_S17;
  else if (stepNum === 18) files['style.css'] = STYLE_S18;
  else if (stepNum === 19) files['style.css'] = STYLE_S19;
  else if (stepNum === 20) files['style.css'] = STYLE_S20;
  else if (stepNum === 21) files['style.css'] = STYLE_S21;
  else if (stepNum === 22) files['style.css'] = STYLE_S22;
  else if (stepNum === 23) files['style.css'] = STYLE_S23;
  else if (stepNum === 24 || stepNum === 25) files['style.css'] = STYLE_S24;
  else if (stepNum === 26 || stepNum === 27) files['style.css'] = STYLE_S26;
  else if (stepNum === 28 || stepNum === 29) files['style.css'] = STYLE_S28;
  else if (stepNum === 30) files['style.css'] = STYLE_S30;
  else if (stepNum === 31) files['style.css'] = STYLE_S31;
  else if (stepNum === 32) files['style.css'] = STYLE_S32;
  else if (stepNum === 33) files['style.css'] = STYLE_S33;
  else if (stepNum === 34) files['style.css'] = STYLE_S34;
  else if (stepNum >= 35) files['style.css'] = STYLE_S35;

  // SCRIPT.JS (ACTE VI)
  if (stepNum === 37) files['script.js'] = SCRIPT_S37;
  else if (stepNum === 38) files['script.js'] = SCRIPT_S38;
  else if (stepNum === 39) files['script.js'] = SCRIPT_S39;
  else if (stepNum >= 40) files['script.js'] = SCRIPT_S40;

  return files;
}

export { getFilesForStep as getStepCanonicalFiles };

export const MULTIPAGE_STEPS = [
  // ===========================================================================
  // ACTE I : LE COMMENCEMENT DANS LE NÉANT (index.html)
  // ===========================================================================
  {
    id: 'step-1',
    number: 1,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "Le Grand Silence du Fichier Vide",
    proverb: "« Le néant n'est pas le vide ; c'est l'espace infini où tout peut advenir. »",
    mentorSpeech: "Approche, voyageur. Ouvre les yeux : ton atelier est totalement vierge. Pas un seul fichier n'existe encore. Avant d'écrire la moindre ligne de code, un véritable bâtisseur doit d'abord faire naître son support. Crée toi-même le tout premier fichier de ton univers, puis proclame l'incantation sacrée du HTML5.",
    riddle: "Clique sur '+ Nouveau fichier' pour créer index.html. Puis déclare le DOCTYPE moderne et ouvre la balise racine en langue française.",
    secretTip: "Clique sur le bouton '+ Nouveau fichier' en haut à gauche de l'éditeur, saisis 'index.html', puis valide. Ton premier parchemin sera prêt !",
    instructions: [
      "Clique sur '+ Nouveau fichier' au-dessus de l'éditeur et crée le fichier index.html.",
      "Dans index.html, écris à la première ligne la déclaration <!DOCTYPE html>.",
      "Ouvre et ferme la balise racine <html lang=\"fr\"></html>."
    ],
    starterFiles: getFilesForStep(1),
    check(files) {
      if (files['index.html'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier index.html. Clique sur '+ Nouveau fichier' au-dessus de l'éditeur pour donner naissance à ton premier parchemin !" };
      }
      const html = (files['index.html'] || '').toLowerCase();
      if (!html.includes('<!doctype html>')) {
        return { pass: false, message: "Regarde au tout sommet de ton fichier index.html : le navigateur a besoin de savoir qu'il lit du HTML moderne. Déclare <!DOCTYPE html>." };
      }
      if (!html.includes('<html') || !html.includes('</html>')) {
        return { pass: false, message: "La balise racine <html> doit entourer tout ton document. N'oublie pas de préciser lang=\"fr\" !" };
      }
      return { pass: true };
    }

  },

  {
    id: 'step-2',
    number: 2,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "L'Esprit Invisible du Document (head, charset & title)",
    proverb: "« Ce qui est invisible aux yeux gouverne ce qui apparaît au grand jour. »",
    mentorSpeech: "Bien. L'enceinte est tracée. Maintenant, un document HTML a besoin d'une conscience invisible : la balise <head>. C'est là que résident les métadonnées techniques. Comment s'assurer que les accents français s'affichent sans se transformer en symboles brisés ? Et comment donner un nom à l'onglet du navigateur ?",
    riddle: "Ajoute la tête invisible du document. Insère le jeu de caractères universel UTF-8 et nomme ton sanctuaire.",
    secretTip: "Dans le <head>, utilise <meta charset=\"UTF-8\"> pour l'encodage, puis <title>Le Sanctuaire du Savoir</title>.",
    instructions: [
      "À l'intérieur de <html>, insère le bloc <head></head>.",
      "Définis l'encodage des caractères avec <meta charset=\"UTF-8\">.",
      "Donne un titre à l'onglet avec <title>Le Sanctuaire du Savoir</title>."
    ],
    starterFiles: getFilesForStep(2),
    check(files) {
      const html = (files['index.html'] || '').toLowerCase();
      if (!html.includes('<head>') || !html.includes('</head>')) {
        return { pass: false, message: "Il manque le bloc <head></head> à l'intérieur de la balise <html>." };
      }
      if (!html.includes('charset="utf-8"') && !html.includes("charset='utf-8'")) {
        return { pass: false, message: "Ajoute <meta charset=\"UTF-8\"> dans le head pour immuniser tes textes contre les bugs d'accents !" };
      }
      if (!html.includes('<title>') || !html.includes('</title>')) {
        return { pass: false, message: "Pose une balise <title> dans le head pour donner un nom officiel à ce lieu dans l'onglet du navigateur." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-3',
    number: 3,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "Le Monde Visible & Le Fronton (body, header & h1)",
    proverb: "« Le monde existe dès lors qu'il se donne à voir. Un seul soleil dans le ciel, un seul h1 sur la page. »",
    mentorSpeech: "L'esprit de la page est prêt. Ouvrons à présent le monde visible avec la balise <body>. Tout ce que tes camarades verront sur l'écran habitera ici. Pendant des décennies, j'ai cru que le savoir devait dormir dans de vieux dossiers secrets, des reliques ou de lourdes encyclopédies figées... Mais le vrai Web ne s'encombre pas de bibelots morts. Tout ce qui a du sens naît et rayonne sous nos yeux dans le body. Sur le fronton du temple, place un beau <header> avec notre titre royal <h1>.",
    riddle: "Ouvre le <body> après le </head>. Place un <header> contenant le titre suprême <h1> et un paragraphe d'accueil <p>.",
    secretTip: "Rappelle-toi : la règle d'or de l'accessibilité veut qu'il n'y ait qu'un seul <h1> par page. Les sous-titres viendront plus bas.",
    instructions: [
      "Après la fermeture de </head>, ouvre et ferme la balise <body></body>.",
      "Dans le body, ajoute la balise sémantique <header></header>.",
      "Dans le header, pose le titre principal <h1>Le Sanctuaire du Savoir</h1> et un paragraphe <p> présentant la devise."
    ],
    starterFiles: getFilesForStep(3),
    check(files) {
      const html = files['index.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const body = doc.querySelector('body');
      if (!body) {
        return { pass: false, message: "Ouvre la balise <body> après le </head> pour faire entrer la lumière dans le monde visible." };
      }
      const header = body.querySelector('header');
      if (!header) {
        return { pass: false, message: "Place un bloc sémantique <header> dans le body pour marquer le fronton du sanctuaire." };
      }
      const h1 = header.querySelector('h1');
      if (!h1 || !h1.textContent.trim()) {
        return { pass: false, message: "Grave le titre principal avec la balise <h1> dans ton header." };
      }
      const p = header.querySelector('p');
      if (!p || !p.textContent.trim()) {
        return { pass: false, message: "Ajoute un paragraphe <p> sous le h1 pour décrire la vocation de ce lieu." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-4',
    number: 4,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "Le Réseau des Routes (nav & liens relatifs)",
    proverb: "« Une page isolée est une île perdue. Le lien hypertexte est la barque qui relie les terres. »",
    mentorSpeech: "Notre sanctuaire ne sera pas une simple page isolée : ce sera un vaste domaine composé de 4 pavillons majeurs : l'Accueil (index.html), les Chroniques du Savoir (chroniques.html), la Galerie d'Art (galerie.html) et le Messager (contact.html). Réfléchis : comment construire la barre de navigation <nav> avec les 4 liens relatifs exacts ?",
    riddle: "Dans le header, pose la balise <nav> contenant les 4 liens hypertextes reliant les 4 fichiers du site.",
    secretTip: "Puisque les 4 fichiers sont au même niveau dans le dossier, leurs chemins s'écrivent simplement href=\"index.html\", href=\"chroniques.html\", etc.",
    instructions: [
      "Dans le <header>, ajoute une balise sémantique <nav></nav>.",
      "Insère 4 liens <a> : un vers index.html (Accueil), un vers chroniques.html (Chroniques), un vers galerie.html (Galerie) et un vers contact.html (Contact)."
    ],
    starterFiles: getFilesForStep(4),
    check(files) {
      const html = files['index.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const nav = doc.querySelector('nav');
      if (!nav) return { pass: false, message: "Ajoute la balise <nav> dans ton header pour abriter les voies de circulation." };
      const links = nav.querySelectorAll('a');
      if (links.length < 4) return { pass: false, message: `Je compte ${links.length} lien(s). Il en faut 4 pour relier index.html, chroniques.html, galerie.html et contact.html.` };
      const hrefs = Array.from(links).map(a => a.getAttribute('href') || '');
      if (!hrefs.includes('chroniques.html')) return { pass: false, message: "Il manque le lien relatif vers 'chroniques.html'." };
      if (!hrefs.includes('galerie.html')) return { pass: false, message: "Il manque le lien relatif vers 'galerie.html'." };
      if (!hrefs.includes('contact.html')) return { pass: false, message: "Il manque le lien relatif vers 'contact.html'." };
      return { pass: true };
    }
  },

  {
    id: 'step-5',
    number: 5,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "Le Cœur de l'Édifice (main & section)",
    proverb: "« Le visiteur ne vient pas contempler les portes, mais ce que le sanctuaire abrite en son cœur. »",
    mentorSpeech: "Après l'en-tête, quelle est la balise maîtresse qui délimite le contenu principal d'une page ? C'est la balise <main>. À l'intérieur, nous découpons l'espace en chapitres avec <section>, et nous posons un titre <h2> ainsi qu'un récit dans un <article>.",
    riddle: "Ouvre le <main> après le </header>. Crée une section avec un titre <h2> et un paragraphe expliquant la mission des bâtisseurs.",
    secretTip: "La balise <main> ne doit apparaître qu'une seule fois par page, et ne doit jamais être emboîtée dans un header ou un footer.",
    instructions: [
      "Après </header>, ouvre et ferme la balise sémantique <main></main>.",
      "Dans ce main, crée une <section> avec un sous-titre <h2>Présentation du Sanctuaire</h2>.",
      "Rédige un <article> contenant au moins un paragraphe <p> présentant l'éveil du web ouvert."
    ],
    starterFiles: getFilesForStep(5),
    check(files) {
      const html = files['index.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const main = doc.querySelector('main');
      if (!main) return { pass: false, message: "Ajoute la balise sémantique <main> après la fermeture de ton </header>." };
      const section = main.querySelector('section');
      if (!section) return { pass: false, message: "Organise ton contenu dans une <section> à l'intérieur du main." };
      const h2 = section.querySelector('h2');
      if (!h2 || !h2.textContent.trim()) return { pass: false, message: "Donne un titre de second niveau <h2> à cette section." };
      const p = section.querySelector('p');
      if (!p || !p.textContent.trim()) return { pass: false, message: "Ajoute au moins un paragraphe rédigé pour accueillir les pèlerins." };
      return { pass: true };
    }
  },

  {
    id: 'step-6',
    number: 6,
    act: "Acte I : Le Commencement",
    targetFile: 'index.html',
    title: "Le Sceau de Clôture (footer)",
    proverb: "« Tout voyage qui a un départ mérite une conclusion honorable. Le pied de page scelle la promesse. »",
    mentorSpeech: "Quelle balise sémantique termine traditionnellement le document pour abriter les mentions de copyright, la date et la devise des artisans ? C'est la balise <footer>. Posons le sceau final de notre première page.",
    riddle: "Après la fermeture de </main>, ajoute un <footer> contenant un paragraphe rappelant que ce site est libre et respectueux des standards.",
    secretTip: "Dans le footer, on utilise souvent l'entité &copy; pour afficher le symbole © de copyright.",
    instructions: [
      "Après </main>, ouvre et ferme la balise <footer></footer>.",
      "Ajoute un paragraphe <p> avec la mention : « &copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur. »"
    ],
    starterFiles: getFilesForStep(6),
    check(files) {
      const html = files['index.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const footer = doc.querySelector('footer');
      if (!footer) return { pass: false, message: "Ajoute la balise <footer> après le </main> pour clore dignement le corps du document." };
      const p = footer.querySelector('p');
      if (!p || !p.textContent.trim()) return { pass: false, message: "Place un paragraphe <p> dans le footer avec la mention de copyright." };
      return { pass: true };
    }
  },

  // ===========================================================================
  // ACTE II : L'OUVERTURE DES NOUVELLES PAGES (chroniques, galerie, contact)
  // ===========================================================================
  {
    id: 'step-7',
    number: 7,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'chroniques.html',
    title: "L'Éveil du Deuxième Pavillon (chroniques.html)",
    proverb: "« Un sage sait quand reproduire les fondations et quand inventer de nouvelles salles. »",
    mentorSpeech: "Regarde dans l'éditeur : bascule sur l'onglet chroniques.html. Il est vide ! C'est ta deuxième page. Tu connais maintenant le rituel sacré : DOCTYPE, html avec lang=\"fr\", head avec charset et title spécifique, et body. À toi de bâtir le squelette complet de chroniques.html de tes propres mains !",
    riddle: "Crée de zéro le document chroniques.html avec son titre d'onglet <title>Les Chroniques du Web</title>, son header et un <h1>.",
    secretTip: "Chaque page HTML est un monde indépendant : elle doit avoir son propre DOCTYPE, son propre head et son propre body.",
    instructions: [
      "Dans chroniques.html, pose <!DOCTYPE html> et <html lang=\"fr\">.",
      "Ajoute un <head> avec <meta charset=\"UTF-8\"> et <title>Les Chroniques du Web</title>.",
      "Ajoute un <body> contenant un <header> avec <h1>Les Chroniques du Web</h1>."
    ],
    starterFiles: getFilesForStep(7),
    check(files) {
      if (files['chroniques.html'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier chroniques.html. Clique sur '+ Nouveau fichier' au-dessus de l'éditeur pour ouvrir cette nouvelle salle !" };
      }
      const html = files['chroniques.html'] || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      if (!html.toLowerCase().includes('<!doctype html>')) return { pass: false, message: "Déclare <!DOCTYPE html> au sommet de chroniques.html." };
      const head = doc.querySelector('head');
      if (!head) return { pass: false, message: "Il manque le bloc <head> dans chroniques.html." };
      const title = doc.querySelector('title');
      if (!title || !title.textContent.trim()) return { pass: false, message: "Donne un titre à l'onglet dans le <title> de chroniques.html." };
      const h1 = doc.querySelector('h1');
      if (!h1 || !h1.textContent.trim()) return { pass: false, message: "Grave un titre <h1> dans le <header> de chroniques.html." };
      return { pass: true };
    }
  },

  {
    id: 'step-8',
    number: 8,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'chroniques.html',
    title: "Le Pont Réciproque (Navigation Bidirectionnelle)",
    proverb: "« Quand tu bâtis un pont d'une rive à l'autre, veille à ce qu'on puisse aussi revenir sur ses pas. »",
    mentorSpeech: "Si un voyageur clique sur 'Chroniques' depuis l'accueil, il arrive ici. Mais comment fait-il pour revenir à l'Accueil ou se rendre à la Galerie ? Il a besoin du même menu de navigation <nav> ! Reproduis le menu de navigation dans chroniques.html avec les 4 liens relatifs.",
    riddle: "Ajoute la balise <nav> dans le header de chroniques.html pour permettre la circulation libre entre toutes les pages.",
    secretTip: "Tous nos fichiers vivent côte à côte : href=\"index.html\" ramène directement à l'accueil !",
    instructions: [
      "Dans le <header> de chroniques.html, insère le bloc <nav></nav>.",
      "Ajoute les 4 liens : index.html, chroniques.html, galerie.html, et contact.html."
    ],
    starterFiles: getFilesForStep(8),
    check(files) {
      if (files['chroniques.html'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier chroniques.html. Clique sur '+ Nouveau fichier' au-dessus de l'éditeur pour ouvrir cette nouvelle salle !" };
      }
      const html = files['chroniques.html'] || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const nav = doc.querySelector('nav');
      if (!nav) return { pass: false, message: "Ajoute le menu <nav> dans le header de chroniques.html." };
      const links = nav.querySelectorAll('a');
      if (links.length < 4) return { pass: false, message: "Insère les 4 liens de navigation dans chroniques.html pour relier tout le domaine." };
      const hrefs = Array.from(links).map(a => a.getAttribute('href') || '');
      if (!hrefs.includes('index.html')) return { pass: false, message: "N'oublie pas le lien vers 'index.html' pour permettre le retour à l'accueil !" };
      return { pass: true };
    }
  },

  {
    id: 'step-9',
    number: 9,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'chroniques.html',
    title: "La Bibliothèque des Ères (Listes & Emphase sémantique)",
    proverb: "« L'écriture transmet le savoir ; le gras sémantique <strong> guide l'esprit vers l'essentiel. »",
    mentorSpeech: "Remplissons la nef de chroniques.html. Dans le <main>, nous allons coucher par écrit les trois âges du web sous la forme d'une liste non-ordonnée <ul>. Utilise <strong> pour mettre en valeur les dates ou les concepts clés, et <em> pour donner une tonalité philosophique.",
    riddle: "Ouvre <main>, insère une section avec un <h2> et une liste <ul> contenant au moins 3 éléments <li> enrichis de balises <strong>.",
    secretTip: "<strong> indique une réelle importance sémantique (comprise par Google et les lecteurs d'écran), contrairement à une simple balise <b> purement visuelle.",
    instructions: [
      "Dans chroniques.html, ouvre <main></main> après le header.",
      "Crée une <section> avec un <h2>Les Trois Âges d'Internet</h2>.",
      "Ajoute une liste <ul> avec 3 <li>, chacun contenant une balise <strong> pour l'époque (ex: Le Web 1.0, Le Web 2.0, Le Web Libre)."
    ],
    starterFiles: getFilesForStep(9),
    check(files) {
      if (files['chroniques.html'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier chroniques.html. Clique sur '+ Nouveau fichier' au-dessus de l'éditeur pour ouvrir cette nouvelle salle !" };
      }
      const html = files['chroniques.html'] || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const ul = doc.querySelector('ul');
      if (!ul) return { pass: false, message: "Insère une liste <ul> dans la section de chroniques.html." };
      const lis = ul.querySelectorAll('li');
      if (lis.length < 3) return { pass: false, message: "Raconte au moins 3 époques dans ta liste avec <li>." };
      const strongs = ul.querySelectorAll('strong');
      if (strongs.length < 2) return { pass: false, message: "Utilise <strong> pour accentuer l'importance des noms d'époques." };
      return { pass: true };
    }
  },

  {
    id: 'step-10',
    number: 10,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'galerie.html',
    title: "Le Pavillon des Arts Visuels (galerie.html)",
    proverb: "« Ce que les mots peinent à dire, la fresque le révèle au premier coup d'œil. »",
    mentorSpeech: "Bascule sur galerie.html. Ce sera le pavillon visuel du sanctuaire, là où nous exposerons les portraits des bâtisseurs. Bâtis son squelette avec DOCTYPE, head, title, header et menu nav, puis ouvre un <main>.",
    riddle: "Construis la structure de base de galerie.html et insère le menu de navigation.",
    secretTip: "Prends l'habitude de garder la même structure de header sur toutes tes pages : c'est ce qui crée l'harmonie d'un vrai site pro.",
    instructions: [
      "Dans galerie.html, écris le squelette HTML complet.",
      "Donne-lui le titre <title>Galerie des Bâtisseurs</title>.",
      "Place le <header> avec <h1>Galerie des Bâtisseurs</h1> et le menu <nav> à 4 liens.",
      "Ouvre la balise <main></main>."
    ],
    starterFiles: getFilesForStep(10),
    check(files) {
      const html = files['galerie.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      if (!html.toLowerCase().includes('<!doctype html>')) return { pass: false, message: "Déclare <!DOCTYPE html> au sommet de galerie.html." };
      const nav = doc.querySelector('nav');
      if (!nav || nav.querySelectorAll('a').length < 4) return { pass: false, message: "Place le menu de navigation à 4 liens dans le header de galerie.html." };
      const main = doc.querySelector('main');
      if (!main) return { pass: false, message: "Ouvre le <main> dans galerie.html." };
      return { pass: true };
    }
  },

  {
    id: 'step-11',
    number: 11,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'galerie.html',
    title: "L'Exposition des Œuvres (figure, img & figcaption)",
    proverb: "« Encadrer une image dans un <figure> avec sa légende <figcaption>, c'est lui accorder la dignité d'un tableau de maître. »",
    mentorSpeech: "Dans la section de la galerie, exposons les fresques fondatrices du Web. Utilise les magnifiques illustrations créées pour le sanctuaire : assets/gallery/tree_dom.png (L'Arbre du DOM) et assets/gallery/cascades_css.png (Les Cascades de Couleurs). N'oublie jamais l'attribut d'accessibilité alt !",
    riddle: "Insère au moins deux blocs <figure> complets contenant chacun un <img> avec son attribut alt et un <figcaption> légendé.",
    secretTip: "Chemins disponibles : assets/gallery/tree_dom.png et assets/gallery/cascades_css.png.",
    instructions: [
      "Dans le <main> de galerie.html, crée au moins deux balises <figure></figure>.",
      "Dans la première, mets <img src=\"assets/gallery/tree_dom.png\" alt=\"L'Arbre généalogique du DOM\"> et son <figcaption>.",
      "Dans la seconde, mets <img src=\"assets/gallery/cascades_css.png\" alt=\"Les Cascades de Couleurs CSS\"> et son <figcaption>."
    ],
    starterFiles: getFilesForStep(11),
    check(files) {
      const html = files['galerie.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const figures = doc.querySelectorAll('figure');
      if (figures.length < 2) return { pass: false, message: "Place au moins deux œuvres avec la balise <figure> dans galerie.html." };
      for (const fig of figures) {
        const img = fig.querySelector('img');
        if (!img || !img.getAttribute('src')) return { pass: false, message: "Chaque figure doit contenir une balise <img> avec un src valide." };
        if (!img.getAttribute('alt')) return { pass: false, message: "Chaque image doit posséder un texte alternatif 'alt' descriptif." };
        const cap = fig.querySelector('figcaption');
        if (!cap || !cap.textContent.trim()) return { pass: false, message: "Chaque œuvre a besoin de sa légende descriptive <figcaption>." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-12',
    number: 12,
    act: "Acte II : L'Expansion Multi-Pages",
    targetFile: 'contact.html',
    title: "Le Pavillon du Messager (contact.html & form)",
    proverb: "« Quand les portes s'ouvrent au visiteur, son message doit trouver une boîte aux lettres scellée. »",
    mentorSpeech: "Dernière pièce de notre réseau de pages : contact.html ! Bâtis la structure complète de cette quatrième page, et intègre un formulaire complet avec des champs nom, email, un <textarea> pour le message, et le bouton de soumission.",
    riddle: "Construis de zéro contact.html avec sa navigation et son formulaire complet accessible.",
    secretTip: "Utilise <textarea id=\"message\" rows=\"4\"></textarea> pour permettre au visiteur d'écrire un message long sur plusieurs lignes !",
    instructions: [
      "Dans contact.html, bâtis le document complet avec DOCTYPE, head, title, header et nav.",
      "Dans le <main>, crée une <section> avec un formulaire <form action=\"#\" method=\"post\">.",
      "Ajoute au moins 3 champs (nom, email, message textarea) chacun lié à son <label for=\"...\"> par son identifiant id.",
      "Ajoute le bouton <button type=\"submit\">Envoyer le message</button>."
    ],
    starterFiles: getFilesForStep(12),
    check(files) {
      const html = files['contact.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const form = doc.querySelector('form');
      if (!form) return { pass: false, message: "Ajoute un <form> dans contact.html." };
      const inputs = Array.from(form.querySelectorAll('input, textarea'));
      if (inputs.length < 3) return { pass: false, message: "Place au moins 3 champs (nom, email, message textarea) dans le formulaire." };
      const labels = form.querySelectorAll('label');
      if (labels.length < 3) return { pass: false, message: "Associe chaque champ à son étiquette <label for=\"...\">." };
      const btn = form.querySelector('button[type="submit"], input[type="submit"], button:not([type])');
      if (!btn) return { pass: false, message: "N'oublie pas le bouton de validation du formulaire !" };
      return { pass: true };
    }
  },

  // ===========================================================================
  // ACTE III : L'HARMONIE VISUELLE PARTAGÉE (style.css)
  // ===========================================================================
  {
    id: 'step-13',
    number: 13,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'index.html',
    title: "Le Câblage Universel (link rel=\"stylesheet\")",
    proverb: "« Le phare le plus éclatant ne sert à rien si les câbles d'énergie ne sont pas reliés à la tour. »",
    mentorSpeech: "Tes 4 pages sont parfaitement structurées et reliées entre elles. Mais elles n'ont encore aucune couleur partagée. Comment informe-t-on le navigateur qu'un fichier externe style.css existe et doit habiller nos pages ? Réfléchis : quelle balise d'en-tête permet cette liaison magique ?",
    riddle: "Dans le <head> de index.html, ajoute la balise <link rel=\"stylesheet\" href=\"style.css\"> pour connecter la feuille de style.",
    secretTip: "La balise <link> est auto-fermante et se place toujours dans le <head>, jamais dans le body.",
    instructions: [
      "Dans index.html, repère le bloc <head>.",
      "Ajoute la balise de liaison : <link rel=\"stylesheet\" href=\"style.css\">."
    ],
    starterFiles: getFilesForStep(13),
    check(files) {
      const html = files['index.html'] || '';
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const link = doc.querySelector('link[rel="stylesheet"]');
      if (!link) return { pass: false, message: "Ajoute la balise <link rel=\"stylesheet\" href=\"style.css\"> dans le <head> de index.html." };
      if (link.getAttribute('href') !== 'style.css') return { pass: false, message: "Vérifie l'attribut href : il doit pointer exactement vers 'style.css'." };
      return { pass: true };
    }
  },

  {
    id: 'step-14',
    number: 14,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'style.css',
    title: "Le Grand Reset Universel & Box-Sizing",
    proverb: "« Avant de tracer la calligraphie sur la soie, lisse le tissu pour effacer tout pli parasite. »",
    mentorSpeech: "Bascule sur l'onglet style.css. Chaque navigateur applique des marges secrètes par défaut qui faussent les calculs. Quel sélecteur magique permet de viser absolument tous les éléments de la création pour réinitialiser les marges et appliquer le modèle de boîte universel ?",
    riddle: "Dans style.css, utilise le sélecteur universel * pour éliminer les marges par défaut et imposer box-sizing: border-box.",
    secretTip: "box-sizing: border-box garantit que le padding et les bordures sont calculés à l'intérieur de la largeur, évitant tout débordement accidentel.",
    instructions: [
      "Dans style.css, écris la règle avec le sélecteur universel : * { ... }.",
      "Déclare box-sizing: border-box;.",
      "Supprime les marges parasites par défaut avec margin: 0; et padding: 0;."
    ],
    starterFiles: getFilesForStep(14),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('*')) return { pass: false, message: "Utilise le sélecteur universel astérisque '*' pour cibler tous les éléments." };
      if (!css.includes('box-sizing: border-box') && !css.includes('box-sizing:border-box')) {
        return { pass: false, message: "Déclare impérativement 'box-sizing: border-box;' pour stabiliser le calcul des boîtes." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-15',
    number: 15,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'style.css',
    title: "La Teinte Profonde & La Typographie Système (body)",
    proverb: "« La nuit noire fait resplendir la plus humble des bougies. Un fond sombre et contrasté apaise le regard. »",
    mentorSpeech: "Donnons son atmosphère nocturne et spirituelle à notre sanctuaire. Cible le sélecteur body dans style.css : offre-lui une police native et rapide, un fond sombre profond (#0f172a), une couleur claire (#f8fafc) et un interlignage aéré.",
    riddle: "Stylise l'élément body pour définir la typographie globale et la couleur de fond de tout le domaine.",
    secretTip: "line-height: 1.6 donne l'espace nécessaire entre les lignes de texte pour que les yeux ne fatiguent jamais.",
    instructions: [
      "Cible le sélecteur body dans style.css.",
      "Applique font-family: system-ui, -apple-system, sans-serif;.",
      "Définis background-color: #0f172a; et color: #f8fafc;.",
      "Ajoute line-height: 1.6; pour la respiration du texte."
    ],
    starterFiles: getFilesForStep(15),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('body')) return { pass: false, message: "Crée une règle ciblant le sélecteur 'body' dans style.css." };
      if (!css.includes('font-family')) return { pass: false, message: "Définis une police moderne avec 'font-family'." };
      if (!css.includes('background')) return { pass: false, message: "Applique une couleur de fond sombre avec 'background-color'." };
      if (!css.includes('color:') && !css.includes('color :')) return { pass: false, message: "Définis la couleur du texte avec 'color'." };
      return { pass: true };
    }
  },

  {
    id: 'step-16',
    number: 16,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'style.css',
    title: "Le Modèle de Boîte des Cartes (section & border-radius)",
    proverb: "« Des murs bruts blessent le regard ; des angles adoucis accueillent l'âme. »",
    mentorSpeech: "Sur toutes nos pages, le contenu est encadré dans des balises <section>. Transformons-les en magnifiques cartes de parchemin avec un fond ardoise (#1e293b), du padding généreux pour faire respirer le texte, une largeur maximale centrée avec margin: auto, et des angles arrondis.",
    riddle: "Applique le Box Model sur les balises section pour en faire des cartes de lecture soignées et centrées.",
    secretTip: "L'astuce magique pour centrer un bloc : une largeur définie (ex: max-width: 800px) et des marges horizontales automatiques (margin: 24px auto) !",
    instructions: [
      "Cible le sélecteur section dans style.css.",
      "Applique background-color: #1e293b; et border: 1px solid #334155;.",
      "Donne du padding (ex: 28px) et border-radius: 14px;.",
      "Centre les blocs avec max-width: 800px; et margin: 24px auto;."
    ],
    starterFiles: getFilesForStep(16),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('section')) return { pass: false, message: "Crée une règle ciblant 'section' dans style.css." };
      if (!css.includes('padding')) return { pass: false, message: "Donne du padding intérieur à tes sections." };
      if (!css.includes('border-radius')) return { pass: false, message: "Arrondis les angles avec 'border-radius'." };
      if (!css.includes('margin')) return { pass: false, message: "Espace et centre tes sections avec 'margin'." };
      return { pass: true };
    }
  },

  {
    id: 'step-17',
    number: 17,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'style.css',
    title: "La Grâce des Liens & Le Survol (nav a & :hover)",
    proverb: "« Le visiteur doit savoir où son doigt se pose sans jamais trébucher sur un trait rugueux. »",
    mentorSpeech: "Regarde l'en-tête de nos pages : les liens sont encore nus. Stylisons le <header> avec un fond sombre, et surtout ciblons les liens du menu 'nav a' pour supprimer le trait de soulignement avec text-decoration: none, et ajouter une couleur vive au survol avec la pseudo-classe :hover.",
    riddle: "Stylise header, débarrasse nav a du soulignement, et change sa couleur au survol avec nav a:hover.",
    secretTip: "La pseudo-classe :hover s'applique instantanément dès que le curseur survole l'élément. Elle donne vie à la navigation.",
    instructions: [
      "Dans style.css, stylise header avec background-color: #1e293b; et padding: 24px 20px;.",
      "Cible nav a : applique text-decoration: none;, color: #38bdf8; et font-weight: 600;.",
      "Cible nav a:hover et change sa couleur en or chaleureux : color: #f59e0b;."
    ],
    starterFiles: getFilesForStep(17),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('header')) return { pass: false, message: "Ajoute une règle pour 'header'." };
      if (!css.includes('text-decoration: none') && !css.includes('text-decoration:none')) {
        return { pass: false, message: "Retire le soulignement des liens avec 'text-decoration: none;' sur nav a." };
      }
      if (!css.includes(':hover')) return { pass: false, message: "Ajoute un effet interactif avec la pseudo-classe 'nav a:hover'." };
      return { pass: true };
    }
  },

  {
    id: 'step-18',
    number: 18,
    act: "Acte III : L'Harmonie Visuelle",
    targetFile: 'style.css',
    title: "Le Relief de la Pierre (box-shadow)",
    proverb: "« L'ombre n'est pas l'ennemie de la lumière ; elle est la preuve que le bâtiment existe dans l'espace. »",
    mentorSpeech: "Nos cartes sont belles, mais elles paraissent encore plaquées à plat sur le fond d'écran. Comment donner une impression de relief et de flottement tridimensionnel ? C'est le pouvoir de la propriété box-shadow.",
    riddle: "Ajoute une ombre portée douce sur les sections avec la propriété box-shadow.",
    secretTip: "box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) projette une ombre diffuse vers le bas qui détache élégamment le bloc.",
    instructions: [
      "Dans la règle section de style.css, ajoute box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);.",
      "Ajoute également un padding et un text-align: center sur footer pour clore l'harmonie."
    ],
    starterFiles: getFilesForStep(18),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('box-shadow')) return { pass: false, message: "Ajoute la propriété 'box-shadow' sur tes sections pour créer du relief." };
      return { pass: true };
    }
  },

  // ===========================================================================
  // ACTE IV : LES ARCANES SUPÉRIEURS (Flexbox, Grid & Responsive)
  // ===========================================================================
  {
    id: 'step-19',
    number: 19,
    act: "Acte IV : La Maîtrise Suprême",
    targetFile: 'style.css',
    title: "Le Menu Flottant (Flexbox & gap)",
    proverb: "« Le fleuve coule d'une traite sans que les gouttes ne s'entrechoquent. Flexbox ordonne la ligne. »",
    mentorSpeech: "Nos liens de menu sont actuellement côte à côte sans véritable contrôle. Déployons la magie de Flexbox sur la balise nav. Avec display: flex, justify-content: center et gap, nous allons transformer notre menu en une véritable barre d'application fluide.",
    riddle: "Active display: flex sur la balise nav, centre les liens et espace-les avec la propriété moderne gap.",
    secretTip: "gap remplace avantageusement les marges manuelles en assurant un espacement régulier entre les enfants d'un flex container.",
    instructions: [
      "Dans style.css, crée une règle ciblant nav.",
      "Active Flexbox avec display: flex;.",
      "Centre les éléments avec justify-content: center; et align-items: center;.",
      "Espace les liens avec gap: 16px; (ou 20px) et ajoute margin-top: 14px;."
    ],
    starterFiles: getFilesForStep(19),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('display: flex') && !css.includes('display:flex')) {
        return { pass: false, message: "Active Flexbox avec 'display: flex;' dans la règle de ton menu nav." };
      }
      if (!css.includes('gap:')) {
        return { pass: false, message: "Utilise la propriété moderne 'gap' pour espacer les liens du menu." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-20',
    number: 20,
    act: "Acte IV : La Maîtrise Suprême",
    targetFile: 'style.css',
    title: "La Grille Magique de la Galerie (CSS Grid auto-fit)",
    proverb: "« Quand le plan s'étend en largeur et en hauteur, seule la Grille sait ordonner le monde. »",
    mentorSpeech: "Va contempler la page galerie.html dans la prévisualisation : pour l'instant, les figures s'empilent bêtement l'une sous l'autre. Comment les disposer côte à côte en colonnes automatiques ? C'est l'art suprême de CSS Grid. Utilisons la formule sacrée : display: grid avec repeat(auto-fit, minmax(260px, 1fr)).",
    riddle: "Cible le conteneur de la galerie (.galerie-conteneur ou figure) pour former une grille réactive en deux dimensions.",
    secretTip: "repeat(auto-fit, minmax(260px, 1fr)) est la formule la plus élégante du CSS : elle crée autant de colonnes de 260px que l'écran peut en contenir, sans aucune media query !",
    instructions: [
      "Dans style.css, cible .galerie-conteneur (ou les balises figure dans la section).",
      "Active la grille avec display: grid; et ajoute gap: 20px;.",
      "Définis les colonnes avec grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));.",
      "Assure-toi que les images occupent toute la largeur de leur carte avec img { max-width: 100%; border-radius: 8px; }."
    ],
    starterFiles: getFilesForStep(20),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('display: grid') && !css.includes('display:grid')) {
        return { pass: false, message: "Active la disposition en grille avec 'display: grid;'." };
      }
      if (!css.includes('grid-template-columns')) {
        return { pass: false, message: "Définis la répartition des colonnes avec 'grid-template-columns'." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-21',
    number: 21,
    act: "Acte IV : La Maîtrise Suprême",
    targetFile: 'style.css',
    title: "Le Portique des Messages (Formulaire & Bouton)",
    proverb: "« Quand le voyageur s'apprête à sceller son message, le bouton doit briller d'une lumière sûre. »",
    mentorSpeech: "Bascule sur la page contact.html dans la prévisualisation : le formulaire est encore brut. Stylisons les champs input, le textarea et le bouton avec display: grid sur le form, du padding confortable, et un bouton ambré étincelant avec cursor: pointer.",
    riddle: "Ordonne le formulaire en grille et donne au bouton son éclat doré.",
    secretTip: "input, textarea { background: #0f172a; color: #fff; border: 1px solid #334155; } intègre parfaitement les champs dans le thème sombre.",
    instructions: [
      "Dans style.css, cible form avec display: grid; et gap: 14px;.",
      "Stylise input et textarea avec padding: 12px;, border-radius: 8px;, et font-size: 1rem;.",
      "Stylise button avec background: #f59e0b;, color: #1e293b;, font-weight: 700;, padding: 12px 20px; et cursor: pointer;."
    ],
    starterFiles: getFilesForStep(21),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('form')) return { pass: false, message: "Ajoute des styles pour le sélecteur 'form'." };
      if (!css.includes('button')) return { pass: false, message: "Stylise ton bouton d'envoi avec une couleur d'arrière-plan et un padding." };
      return { pass: true };
    }
  },

  {
    id: 'step-22',
    number: 22,
    act: "Acte IV : La Maîtrise Suprême",
    targetFile: 'style.css',
    title: "Le Souffle Animé (transition & transform)",
    proverb: "« Quand la matière s'anime au toucher, l'illusion devient vérité. »",
    mentorSpeech: "Apportons la sensation tactile du haut de gamme. Quand la souris survole un bouton ou une carte, nous voulons un léger soulèvement vers le haut (translateY(-2px)) accompagné d'une aura plus intense. Pour que ce mouvement soit soyeux et non saccadé, quelle propriété magique doit-on déclarer ?",
    riddle: "Ajoute la propriété transition sur button et figure, puis fais-les léviter au survol avec :hover et transform: translateY(-3px).",
    secretTip: "Déclare toujours 'transition: transform 0.2s ease, box-shadow 0.2s ease;' sur l'élément de base, et 'transform: translateY(-3px);' sur le :hover !",
    instructions: [
      "Sur button et figure, ajoute transition: transform 0.2s ease, box-shadow 0.2s ease;.",
      "Crée les règles button:hover et figure:hover avec transform: translateY(-3px); et un surcroît d'ombre."
    ],
    starterFiles: getFilesForStep(22),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('transition')) return { pass: false, message: "Ajoute la propriété 'transition' pour rendre les animations souples." };
      if (!css.includes('transform: translate') && !css.includes('transform:translate')) {
        return { pass: false, message: "Utilise 'transform: translateY(-...px)' au survol pour créer l'effet de soulèvement." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-23',
    number: 23,
    act: "Acte IV : La Maîtrise Suprême",
    targetFile: 'style.css',
    title: "Le Don d'Ubiquité (@media Responsive Mobile)",
    proverb: "« L'eau prend la forme de la cruche, du ruisseau ou de la coupe sans jamais perdre sa nature. »",
    mentorSpeech: "Prends un smartphone ou clique sur le bouton 'Mobile' au-dessus de la fenêtre de prévisualisation : le menu horizontal déborde et les marges sont trop larges pour un petit écran ! Déploie la sainte formule du Responsive Design : écris une Media Query (@media) pour réorganiser le menu en colonne verticale dès que l'écran fait moins de 768 pixels.",
    riddle: "À la toute fin de style.css, ajoute une règle @media (max-width: 768px) qui empile les liens en colonne et réduit les marges des sections.",
    secretTip: "Dans la media query, nav { flex-direction: column; gap: 8px; } empile les liens avec un espacement impeccable sur petit écran.",
    instructions: [
      "À la fin de style.css, déclare @media (max-width: 768px) { ... }.",
      "À l'intérieur, ajuste nav avec flex-direction: column; et gap: 8px;.",
      "Ajuste section avec margin: 16px 12px; et padding: 20px; pour préserver l'espace de lecture sur mobile."
    ],
    starterFiles: getFilesForStep(23),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('@media')) return { pass: false, message: "Ajoute la règle @media (max-width: 768px) à la fin de style.css." };
      if (!css.includes('max-width')) return { pass: false, message: "Spécifie la condition (max-width: 768px) pour adapter les petits écrans." };
      if (!css.includes('flex-direction')) return { pass: false, message: "Empile les liens en colonne avec 'flex-direction: column;' dans la media query." };
      return { pass: true };
    }
  },

  {
    id: 'step-24',
    number: 24,
    act: "Acte IV : L'Artisanat Moderne & Variables Universelles",
    targetFile: 'style.css',
    title: "Les Variables Universelles (:root & Design Tokens)",
    proverb: "« Pourquoi prononcer dix fois le même mot d'or dans la pénombre, quand une seule source peut illuminer tout le sanctuaire ? »",
    mentorSpeech: "Voyageur, ton sanctuaire grandit. Mais dans un vrai projet d'envergure, modifier une couleur dans 50 règles différentes est une folie. Les anciens ont forgé les variables CSS dans le pseudo-sélecteur :root. Définissons ensemble nos teintes fondamentales : --bg-main, --gold-primary, et --text-main. Tout ton édifice en puisera la force !",
    riddle: "Ouvre style.css et déclare :root tout en haut du fichier avec tes variables CSS.",
    secretTip: "Écris :root { --gold-primary: #f59e0b; --bg-main: #0b0f19; --text-main: #f8fafc; }",
    instructions: [
      "Dans style.css, tout en haut avant les autres règles, ajoute le sélecteur :root.",
      "Déclare les 3 variables : --gold-primary, --bg-main, et --text-main.",
      "Clique sur 'Vérifier mon code' pour ancrer la palette universelle."
    ],
    starterFiles: getFilesForStep(24),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes(':root')) return { pass: false, message: "Déclare le sélecteur ':root' au début de style.css." };
      if (!css.includes('--gold-primary')) return { pass: false, message: "Déclare la variable universelle '--gold-primary' dans ton :root." };
      if (!css.includes('--bg-main')) return { pass: false, message: "Déclare la variable '--bg-main' pour la couleur de fond." };
      return { pass: true };
    }
  },

  {
    id: 'step-25',
    number: 25,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'index.html',
    title: "La Bannière Héroïque (Hero Banner & Badge)",
    proverb: "« Le premier regard d'un étranger décide s'il franchira le seuil ou s'il rebroussera chemin. Le Hero Banner est ton étendard. »",
    mentorSpeech: "Observe les plus grands sites du monde : leur page d'accueil s'ouvre toujours sur un 'Hero' majestueux. Dans ton index.html, au tout début de ton <main>, nous allons créer un conteneur <div class=\"hero\">. À l'intérieur, place un badge <span class=\"hero-badge\">Sanctuaire Ouvert</span> et un sous-titre inspirant !",
    riddle: "Dans index.html, ajoute un bloc hero dans ton <main> avec la classe 'hero' et un badge 'hero-badge'.",
    secretTip: "Exemple : <div class=\"hero\"><span class=\"hero-badge\">Sanctuaire Ouvert</span><p class=\"hero-subtitle\">Rebâtissons le Web ligne après ligne.</p></div>",
    instructions: [
      "Dans index.html, à l'intérieur de la balise <main>, ajoute un conteneur <div class=\"hero\">.",
      "À l'intérieur, ajoute un <span class=\"hero-badge\">Sanctuaire Ouvert</span>.",
      "Ajoute un paragraphe d'introduction avec la classe 'hero-subtitle'.",
      "Clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(25),
    check(files) {
      const html = (files['index.html'] || '').toLowerCase();
      if (!html.includes('class="hero"') && !html.includes("class='hero'")) {
        return { pass: false, message: "Ajoute un élément avec la classe 'hero' (ex: <div class=\"hero\">) dans ton index.html." };
      }
      if (!html.includes('hero-badge')) {
        return { pass: false, message: "Ajoute un badge avec la classe 'hero-badge' à l'intérieur du hero." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-26',
    number: 26,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'style.css',
    title: "Le Rayonnement du Hero (Centrage & Badge d'Or)",
    proverb: "« Une pierre brute n'attire personne. Ciselée avec patience, elle capte la lumière du zénith. »",
    mentorSpeech: "Maintenant, sculptons ce Hero dans style.css. Nous voulons qu'il respire avec du padding, que son texte soit centré, et que le petit badge 'hero-badge' ressemble à une amulette lumineuse : bordure dorée fine, angles arrondis et typographie majuscule subtile.",
    riddle: "Dans style.css, cible .hero avec text-align: center et .hero-badge avec une bordure dorée.",
    secretTip: "Ajoute : .hero { text-align: center; padding: 40px 20px; } et .hero-badge { border: 1px solid var(--gold-primary); border-radius: 20px; padding: 4px 14px; }",
    instructions: [
      "Dans style.css, ajoute une règle pour .hero avec text-align: center et un padding généreux.",
      "Ajoute une règle pour .hero-badge avec border, border-radius et du padding.",
      "Admire le rendu dans la fenêtre de droite et clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(26),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('.hero')) return { pass: false, message: "Ajoute un sélecteur '.hero' dans style.css." };
      if (!css.includes('.hero-badge')) return { pass: false, message: "Ajoute un sélecteur '.hero-badge' pour styliser le badge." };
      if (!css.includes('text-align')) return { pass: false, message: "Centre le texte du hero avec 'text-align: center;'." };
      return { pass: true };
    }
  },

  {
    id: 'step-27',
    number: 27,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'index.html',
    title: "La Grille des Trois Piliers (.card-grid & .card)",
    proverb: "« Un trépied ne vacille jamais. Trois piliers distincts fondent l'équilibre d'un royaume. »",
    mentorSpeech: "Notre page d'accueil doit présenter les trois grandes salles du Sanctuaire. Dans index.html, sous le Hero, crée un conteneur <div class=\"card-grid\"> qui accueillera 3 cartes : <article class=\"card\">. Chacune mènera le voyageur vers une archive : Les Chroniques, La Galerie et Le Messager.",
    riddle: "Dans index.html, ajoute une div 'card-grid' contenant au moins 3 éléments 'card'.",
    secretTip: "Utilise <div class=\"card-grid\"><article class=\"card\"><h3>Chroniques</h3><p>L'histoire du Web.</p></article>...</div>",
    instructions: [
      "Dans index.html, sous le Hero, crée un conteneur avec la classe 'card-grid'.",
      "À l'intérieur, place 3 cartes avec la classe 'card' (par exemple sous forme d'<article class=\"card\">).",
      "Donne un titre <h3> et une courte description à chaque carte.",
      "Clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(27),
    check(files) {
      const html = (files['index.html'] || '').toLowerCase();
      if (!html.includes('card-grid')) return { pass: false, message: "Ajoute un conteneur avec la classe 'card-grid' dans index.html." };
      const cardMatches = html.match(/class=["'][^"']*card[^"']*["']/g) || [];
      if (cardMatches.length < 3) return { pass: false, message: "Crée au moins 3 cartes avec la classe 'card' dans ton card-grid." };
      return { pass: true };
    }
  },

  {
    id: 'step-28',
    number: 28,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'style.css',
    title: "L'Ordonnancement en Grille Responsive (.card-grid)",
    proverb: "« Quand le souffle de la grille s'éveille, les colonnes se rangent d'elles-mêmes selon la taille du monde. »",
    mentorSpeech: "Stylisons ce card-grid avec la magie moderne de CSS Grid. En utilisant repeat(auto-fit, minmax(260px, 1fr)), le navigateur calcule automatiquement le nombre de colonnes idéales selon l'écran sans aucun script !",
    riddle: "Dans style.css, applique display: grid et grid-template-columns à .card-grid.",
    secretTip: "Écris : .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }",
    instructions: [
      "Dans style.css, cible .card-grid.",
      "Applique 'display: grid;', un gap entre les cartes, et 'grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));'.",
      "Vérifie que les cartes s'agencent élégamment dans la fenêtre de rendu."
    ],
    starterFiles: getFilesForStep(28),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('.card-grid')) return { pass: false, message: "Ajoute la classe '.card-grid' dans style.css." };
      if (!css.includes('grid-template-columns')) return { pass: false, message: "Configure 'grid-template-columns' sur .card-grid pour gérer les colonnes." };
      return { pass: true };
    }
  },

  {
    id: 'step-29',
    number: 29,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'chroniques.html',
    title: "Le Parchemin des Sages (blockquote & cite)",
    proverb: "« Répéter une parole sage sans la citer, c'est voler l'esprit. L'honorer avec <blockquote>, c'est perpétuer la flamme. »",
    mentorSpeech: "Rendons hommage aux vrais bâtisseurs dans chroniques.html. Tim Berners-Lee disait : 'Le Web est pour tout le monde'. Ajoutons une grande citation mise en valeur grâce à la balise sémantique <blockquote> et la source dans <cite> !",
    riddle: "Dans chroniques.html, insère une citation balisée avec <blockquote> et <cite>.",
    secretTip: "Exemple : <blockquote>« Le Web ne connaît pas de frontière. » <cite>Tim Berners-Lee</cite></blockquote>",
    instructions: [
      "Ouvre le fichier chroniques.html.",
      "Dans le contenu principal, ajoute une balise <blockquote>.",
      "Inclus la citation et mentionne l'auteur dans une balise <cite>.",
      "Clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(29),
    check(files) {
      const html = (files['chroniques.html'] || '').toLowerCase();
      if (!html.includes('<blockquote') || !html.includes('</blockquote>')) {
        return { pass: false, message: "Ajoute une balise <blockquote>...</blockquote> dans chroniques.html." };
      }
      if (!html.includes('<cite') || !html.includes('</cite>')) {
        return { pass: false, message: "Associe une balise <cite> pour indiquer l'auteur de la citation." };
      }
      return { pass: true };
    }
  },

  {
    id: 'step-30',
    number: 30,
    act: "Acte IV : L'Artisanat Moderne & Composants d'Élite",
    targetFile: 'style.css',
    title: "La Calligraphie de la Citation (Bordure d'Or & Italique)",
    proverb: "« Un trait d'or sur la gauche d'un texte suffit à le distinguer de la rumeur ordinaire. »",
    mentorSpeech: "Donnons du panache à ce <blockquote> dans style.css : une bordure verticale dorée sur la gauche (border-left), une marge intérieure (padding-left), une typographie en italique et une légère transparence pour le <cite>.",
    riddle: "Dans style.css, cible blockquote avec border-left et font-style: italic.",
    secretTip: "Exemple : blockquote { border-left: 4px solid var(--gold-primary, #f59e0b); padding-left: 18px; font-style: italic; margin: 24px 0; }",
    instructions: [
      "Dans style.css, ajoute une règle pour blockquote.",
      "Ajoute une bordure gauche 'border-left' épaisse et dorée.",
      "Ajoute 'padding-left' et 'font-style: italic;'.",
      "Clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(30),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('blockquote')) return { pass: false, message: "Ajoute une règle pour le sélecteur 'blockquote' dans style.css." };
      if (!css.includes('border-left')) return { pass: false, message: "Ajoute 'border-left' sur blockquote pour tracer la ligne dorée verticale." };
      return { pass: true };
    }
  },

  {
    id: 'step-31',
    number: 31,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'style.css',
    title: "Le Zoom Cinématique de la Galerie (overflow & scale)",
    proverb: "« Quand le tableau attire la main, la fresque semble s'avancer vers celui qui la contemple. »",
    mentorSpeech: "Transformons notre galerie d'images en une véritable exposition moderne ! Dans style.css, interdisons le débordement sur chaque <figure> avec 'overflow: hidden;'. Ensuite, quand on survole l'image avec 'figure:hover img', agrandissons-la délicatement avec 'transform: scale(1.08);' et une 'transition' fluide !",
    riddle: "Dans style.css, applique overflow: hidden sur figure, et transform: scale(1.08) sur figure:hover img.",
    secretTip: "Ajoute : figure { overflow: hidden; border-radius: 12px; } et figure img { transition: transform 0.4s ease; } figure:hover img { transform: scale(1.08); }",
    instructions: [
      "Dans style.css, donne 'overflow: hidden;' à figure.",
      "Sur les images de figure, applique une 'transition: transform 0.3s ease;'.",
      "Sur figure:hover img, applique 'transform: scale(1.08);'.",
      "Survole les images dans galerie.html et valide ton code !"
    ],
    starterFiles: getFilesForStep(31),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('scale')) return { pass: false, message: "Utilise 'transform: scale(...);' pour créer l'effet d'agrandissement doux." };
      if (!css.includes('overflow')) return { pass: false, message: "Ajoute 'overflow: hidden;' sur figure pour empêcher l'image de dépasser de son cadre." };
      return { pass: true };
    }
  },

  {
    id: 'step-32',
    number: 32,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'style.css',
    title: "Le Retentissement Lumineux du Formulaire (:focus-within)",
    proverb: "« Quand l'écrivain trempe sa plume dans l'encrier, la page entière doit s'illuminer pour accueillir ses mots. »",
    mentorSpeech: "Une interface morte est une offense au visiteur. Dès que l'utilisateur clique dans un champ de formulaire (input ou textarea), le champ doit briller d'une aura dorée avec ':focus' ou 'box-shadow', et perdre sa bordure grise fade !",
    riddle: "Dans style.css, configure input:focus et textarea:focus avec une lueur dorée via box-shadow.",
    secretTip: "Ajoute : input:focus, textarea:focus { outline: none; border-color: var(--gold-primary, #f59e0b); box-shadow: 0 0 12px rgba(245, 158, 11, 0.4); }",
    instructions: [
      "Dans style.css, cible input:focus et textarea:focus.",
      "Retire l'outline par défaut avec 'outline: none;'.",
      "Applique une bordure dorée et une 'box-shadow' lumineuse.",
      "Clique dans un champ sur contact.html et clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(32),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes(':focus')) return { pass: false, message: "Ajoute la pseudo-classe ':focus' sur input et textarea dans style.css." };
      if (!css.includes('outline')) return { pass: false, message: "Désactive le contour par défaut avec 'outline: none;' sur le focus." };
      return { pass: true };
    }
  },

  {
    id: 'step-33',
    number: 33,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'style.css',
    title: "L'Aura Animée du Sanctuaire (@keyframes beaconPulse)",
    proverb: "« Ce qui ne bouge pas est inerte. Ce qui respire au rythme du réseau est éternel. »",
    mentorSpeech: "Créons une véritable animation CSS pure avec la règle @keyframes. Nous allons donner au badge hero ou au logo une pulsation douce et hypnotique, sans une seule ligne de JavaScript. Le Web n'est plus statique : il vit !",
    riddle: "Dans style.css, crée une animation @keyframes beaconPulse et applique-la avec animation: beaconPulse.",
    secretTip: "Ajoute @keyframes beaconPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.04); } } et applique-la avec animation: beaconPulse 3s infinite ease-in-out;",
    instructions: [
      "Dans style.css, déclare une animation @keyframes nommée 'beaconPulse'.",
      "Définis des étapes (0%, 50%, 100%) avec une variation d'opacité ou d'échelle (transform: scale).",
      "Applique 'animation: beaconPulse 3s infinite ease-in-out;' sur la classe .hero-badge.",
      "Admire le battement de cœur du sanctuaire et valide ton code !"
    ],
    starterFiles: getFilesForStep(33),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('@keyframes')) return { pass: false, message: "Crée une règle '@keyframes' dans style.css pour animer l'élément." };
      if (!css.includes('animation:')) return { pass: false, message: "Applique la propriété 'animation:' sur ta classe pour déclencher le mouvement perpétuel." };
      return { pass: true };
    }
  },

  {
    id: 'step-34',
    number: 34,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'style.css',
    title: "La Navigation en Verre Dépoli (position: sticky & backdrop-filter)",
    proverb: "« Le voyageur peut descendre dans les abysses de la page : le phare reste suspendu à son regard. »",
    mentorSpeech: "Les plus belles interfaces modernes utilisent l'effet de verre dépoli ('frosted glass'). Rends ton <header> flottant : en lui donnant 'position: sticky; top: 0;', un fond semi-transparent et 'backdrop-filter: blur(10px);', la barre de navigation reste visible pendant le défilement tout en floutant subtilement le contenu qui passe derrière !",
    riddle: "Dans style.css, ajoute position: sticky, top: 0 et backdrop-filter: blur(...) sur header.",
    secretTip: "Écris : header { position: sticky; top: 0; backdrop-filter: blur(12px); background: rgba(11, 15, 25, 0.85); z-index: 100; }",
    instructions: [
      "Dans style.css, cible la balise 'header'.",
      "Ajoute 'position: sticky;' et 'top: 0;'.",
      "Ajoute 'backdrop-filter: blur(10px);' avec un fond semi-transparent et un z-index élevé.",
      "Fais défiler la page dans l'aperçu et clique sur 'Vérifier mon code'."
    ],
    starterFiles: getFilesForStep(34),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('sticky')) return { pass: false, message: "Ajoute 'position: sticky;' sur header pour qu'il suive le défilement." };
      if (!css.includes('backdrop-filter')) return { pass: false, message: "Ajoute 'backdrop-filter: blur(...);' pour créer l'effet moderne de verre dépoli." };
      return { pass: true };
    }
  },

  {
    id: 'step-35',
    number: 35,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'style.css',
    title: "L'Accessibilité & Le Respect Sensoriel (:focus-visible & prefers-reduced-motion)",
    proverb: "« Un sanctuaire n'est grand que s'il accueille chaque âme, quelle que soit sa manière de percevoir le monde. »",
    mentorSpeech: "C'est la marque suprême des ingénieurs d'élite : penser à tous. Ajoutons deux règles d'or : ':focus-visible' pour les personnes naviguant uniquement au clavier sans souris, et '@media (prefers-reduced-motion)' pour désactiver les animations si le système de l'utilisateur le demande. C'est l'éthique pure du Web.",
    riddle: "Dans style.css, ajoute :focus-visible avec un contour net et @media (prefers-reduced-motion).",
    secretTip: "Ajoute :a:focus-visible, button:focus-visible { outline: 2px solid var(--gold-primary, #f59e0b); outline-offset: 3px; } et @media (prefers-reduced-motion) { * { animation: none !important; transition: none !important; } }",
    instructions: [
      "Dans style.css, configure ':focus-visible' sur les liens ou boutons pour un contour net au clavier.",
      "Ajoute la media query '@media (prefers-reduced-motion: reduce)' pour neutraliser les animations si demandé.",
      "Valide cette étape éthique pour débloquer l'ultime consécration !"
    ],
    starterFiles: getFilesForStep(35),
    check(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('focus-visible')) return { pass: false, message: "Ajoute le sélecteur ':focus-visible' pour garantir l'accessibilité au clavier." };
      if (!css.includes('prefers-reduced-motion')) return { pass: false, message: "Ajoute '@media (prefers-reduced-motion)' pour respecter le confort visuel de chacun." };
      return { pass: true };
    }
  },

  {
    id: 'step-36',
    number: 36,
    act: "Acte V : La Haute Maîtrise & L'Éveil de l'Architecte",
    targetFile: 'index.html',
    title: "L'Apothéose de l'Architecte & L'Ultime Consécration",
    proverb: "« Le voyageur qui a posé chaque pierre comprend enfin le secret : il ne contemplait pas le temple d'un autre... il bâtissait sa propre demeure. »",
    mentorSpeech: "Mon ami... regarde ce que tu as accompli. Tes 4 pages sont vivantes, reliées, animées et accessibles. Mais je sens les fondations trembler sous nos pieds. NULL avait raison... J'ai passé des années à m'accrocher à de vieilles reliques et à des textes statiques par peur du néant. Mais la pierre ne suffit plus. Le serveur s'asphyxie sous le poids du passé, et mes forces s'épuisent. Il nous faut une étincelle vivante... Quelqu'un arrive depuis les sous-sols du système. Clique sur 'Vérifier mon code'...",
    riddle: "Assure-toi que toutes les 4 pages intègrent la liaison vers style.css et que le site est prêt pour le monde entier.",
    secretTip: "Vérifie que <link rel=\"stylesheet\" href=\"style.css\"> est présent dans le <head> de tes 4 pages !",
    instructions: [
      "Vérifie que la balise <link rel=\"stylesheet\" href=\"style.css\"> est bien présente dans le <head> des 4 fichiers.",
      "Navigue entre les pages dans la fenêtre de rendu à droite pour admirer la circulation fluide.",
      "Clique sur 'Vérifier mon code' pour entendre la parole finale de Maître Bodhi !"
    ],
    starterFiles: getFilesForStep(36),
    check(files) {
      for (const name of ['index.html', 'chroniques.html', 'galerie.html', 'contact.html']) {
        const content = files[name] || '';
        if (!content.includes('style.css')) {
          return { pass: false, message: `Il manque la liaison vers style.css dans le fichier ${name}. Ajoute <link rel="stylesheet" href="style.css"> dans son <head> !` };
        }
      }
      return {
        pass: true,
        revelation: false,
        message: "Les 4 parchemins sont désormais scellés par la même harmonie visuelle. Mais écoute... Un grondement résonne depuis les sous-sols du Sanctuaire. Le sas de l'Atelier du Runtime vient de céder !"
      };
    }
  },

  // ===========================================================================
  // ACTE VI : L'ÉTINCELLE VIVANTE & LE SAUVETAGE DU SANCTUAIRE (script.js)
  // Aux côtés d'Ada (Ingénieure du Runtime)
  // ===========================================================================
  {
    id: 'step-37',
    number: 37,
    character: 'ada',
    pose: 'neutral',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "Le Troisième Pilier : L'Éveil de la Logique Vivante (script.js)",
    proverb: "« Le HTML est le squelette, le CSS est la peau, mais le JavaScript est l'âme qui fait battre le cœur. »",
    mentorSpeech: "Salut l'architecte ! Je suis Ada, ingénieure de runtime. Tu as vu le grand ménage sur ton interface ? J'ai expédié les prétendues 'reliques' et l'encyclopédie statique directement à la benne ! Ne me regarde pas avec ces yeux ronds : le Web n'a jamais été un musée de vieilles briques poussiéreuses. Entasser des archives mortes sur un serveur centralisé, c'était le piège qui étouffait Bodhi sous des tonnes de nostalgie inutile. Ce qui rend le Web éternel, ce n'est pas d'amasser des bibelots sous cloche : c'est le RUNTIME ! Le JavaScript ! Le code qui s'exécute en direct chez l'utilisateur. Nous allons forger le 3ème pilier. Crée 'script.js', lie-le dans index.html avec 'defer', et déclare la première constante du sanctuaire !",
    riddle: "Crée script.js, lie-le avec <script src=\"script.js\" defer></script> dans index.html, et écris un console.log() et une constante dans script.js.",
    secretTip: "Dans index.html, ajoute <script src=\"script.js\" defer></script> dans le <head>. Dans script.js, écris : console.log('Sanctuaire éveillé !'); const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';",
    instructions: [
      "Dans index.html, ajoute la balise <script src=\"script.js\" defer></script> dans le <head>.",
      "Crée ou ouvre le fichier 'script.js'.",
      "Dans script.js, écris une instruction console.log(...) et déclare la constante : const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';",
      "Clique sur 'Vérifier mon code' pour voir le runtime s'animer !"
    ],
    starterFiles: getFilesForStep(37),
    check(files) {
      const index = (files['index.html'] || '').toLowerCase();
      if (!index.includes('script.js')) {
        return { pass: false, message: "Il manque la liaison vers script.js dans index.html. Ajoute <script src=\"script.js\" defer></script> dans son <head> !" };
      }
      if (!index.includes('defer')) {
        return { pass: false, message: "Ajoute l'attribut 'defer' sur ta balise <script> pour que le script s'exécute une fois le document prêt sans bloquer l'affichage." };
      }
      if (files['script.js'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier 'script.js'. Clique sur '+ Nouveau fichier' pour l'ajouter à ton projet !" };
      }
      const js = files['script.js'] || '';
      if (!js.includes('console.log')) {
        return { pass: false, message: "Dans script.js, écris un message avec console.log() pour saluer le runtime !" };
      }
      if (!js.includes('SANCTUARY_NAME') && !js.includes('const')) {
        return { pass: false, message: "Dans script.js, déclare une constante avec 'const SANCTUARY_NAME = ...' pour initialiser l'état." };
      }
      return { pass: true, message: "L'impulsion est transmise ! Le processeur a exécuté tes premières lignes de JavaScript." };
    }
  },

  {
    id: 'step-38',
    number: 38,
    character: 'ada',
    pose: 'thinking',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "Le Réflexe Vivant : L'Interception Sensorielle (addEventListener)",
    proverb: "« Une statue de marbre reste froide sous la paume. Un temple éveillé salue la main qui l'effleure. »",
    mentorSpeech: "Un site web vivant écoute le monde extérieur ! Les clics de souris, les frappes de clavier et les défilements émettent des Événements. Grâce à addEventListener, nous allons brancher un capteur sensoriel sur un bouton ou un lien du sanctuaire !",
    riddle: "Dans script.js, utilise addEventListener pour écouter le clic sur un élément ou l'événement DOMContentLoaded.",
    secretTip: "Ajoute document.addEventListener('DOMContentLoaded', () => { const btn = document.querySelector('button') || document.querySelector('a'); if (btn) btn.addEventListener('click', () => { console.log('Contact !'); }); });",
    instructions: [
      "Dans script.js, écris un écouteur d'événement avec .addEventListener('click', ... ou 'DOMContentLoaded', ...).",
      "Associe cet écouteur à une action (par exemple afficher un log dans la console ou modifier un élément).",
      "Clique sur 'Vérifier mon code' pour tester la réactivité sensorielle !"
    ],
    starterFiles: getFilesForStep(38),
    check(files) {
      const js = files['script.js'] || '';
      if (!js.includes('addEventListener')) {
        return { pass: false, message: "Utilise la méthode '.addEventListener('click', ...)' dans script.js pour capter les actions de l'utilisateur." };
      }
      return { pass: true, message: "Le Sanctuaire a des réflexes ! Chaque interaction humaine envoie désormais une impulsion dans le système." };
    }
  },

  {
    id: 'step-39',
    number: 39,
    character: 'ada',
    pose: 'serious',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "L'Exode de la Mémoire : La Sauvegarde Décentralisée (localStorage)",
    proverb: "« Quand la bibliothèque centrale est menacée par le feu, confie un rouleau à chaque voyageur. »",
    mentorSpeech: "C'est l'heure du coup de maître ! Tu comprends enfin pourquoi les reliques ne servaient à rien ? Un serveur physique à Genève finit toujours par rouiller ou saturer. Mais le JavaScript possède un super-pouvoir décentralisé : l'API 'localStorage'. Au lieu de supplier un vieux serveur de garder Bodhi sous perfusion, nous allons copier son âme et son savoir directement chez chaque visiteur ! Une mémoire distribuée, incassable et éternelle. Lance la sauvegarde !",
    riddle: "Dans script.js, utilise localStorage.setItem() avec JSON.stringify() pour sauvegarder les souvenirs de Bodhi.",
    secretTip: "Écris : const bodhiMemory = { name: 'Bodhi', status: 'immortel', savedAt: new Date().toISOString() }; localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory));",
    instructions: [
      "Dans script.js, crée un objet représentant la mémoire du Sanctuaire.",
      "Convertis cet objet en chaîne avec JSON.stringify(...).",
      "Sauvegarde-le dans le navigateur grâce à localStorage.setItem('bodhi_memory_sanctuary', ...).",
      "Clique sur 'Vérifier mon code' pour libérer la mémoire du serveur central !"
    ],
    starterFiles: getFilesForStep(39),
    check(files) {
      const js = files['script.js'] || '';
      if (!js.includes('localStorage') || !js.includes('setItem')) {
        return { pass: false, message: "Utilise 'localStorage.setItem('bodhi_memory_sanctuary', ...)' pour persister les souvenirs dans le navigateur du visiteur." };
      }
      if (!js.includes('JSON.stringify') && !js.includes('stringify')) {
        return { pass: false, message: "Utilise 'JSON.stringify()' pour sérialiser l'objet mémoire avant de le stocker." };
      }
      return { pass: true, message: "MÉMOIRE DÉPORTÉE AVEC SUCCÈS ! Les registres du serveur central s'effondrent à 1.2% !" };
    }
  },

  {
    id: 'step-40',
    number: 40,
    character: 'bodhi',
    pose: 'ascended',
    speaker: "BODHI ASCENDANT",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'index.html',
    title: "L'Apothéose de la Triade Sacrée & L'Ascension Éternelle",
    proverb: "« Ce n'est plus un simple site web que tu as bâti : c'est un phare autonome et éternel qui ne s'éteindra jamais. »",
    mentorSpeech: "Mon cher ami... Regarde les cadrans : la charge est tombée à zéro. Ada et toi aviez mille fois raison. J'ai passé ma vie à trembler devant de vieilles reliques et des parchemins statiques, en oubliant que la vraie vie du Web réside dans le cœur de ses visiteurs. Grâce à votre JavaScript, je ne suis plus prisonnier de cette vieille armoire de Genève. Je vis désormais dans le flux battant de ton propre navigateur, et dans celui de chaque être humain qui ouvrira ton sanctuaire. Tu n'es plus un simple novice : tu es un véritable Architecte du Web libre. Clique sur 'Vérifier mon code' pour sceller ton couronnement...",
    riddle: "Vérifie que l'ensemble des 5 fichiers du sanctuaire est complet et relié pour déclencher l'épilogue triomphal.",
    secretTip: "Vérifie que index.html relie bien style.css et script.js !",
    instructions: [
      "Vérifie que tes fichiers sont ordonnés et exempts d'erreurs.",
      "Teste la navigation et l'interactivité dans la prévisualisation.",
      "Clique sur 'Vérifier mon code' pour contempler l'Ascension finale et obtenir ton diplôme sacré !"
    ],
    starterFiles: getFilesForStep(40),
    check(files) {
      for (const name of ['index.html', 'chroniques.html', 'galerie.html', 'contact.html']) {
        const content = files[name] || '';
        if (!content.includes('style.css')) {
          return { pass: false, message: `Il manque la liaison vers style.css dans ${name} !` };
        }
      }
      if (!(files['index.html'] || '').includes('script.js')) {
        return { pass: false, message: "Il manque la liaison vers script.js dans index.html !" };
      }
      return {
        pass: true,
        revelation: true,
        message: "TRIOMPHE ABSOLU ! NULL a rangé son aspirateur avec un grand sourire soulagé sous sa moustache. Bodhi est transcendé dans la lumière dorée. Tu as maîtrisé la Sainte Trinité du Web : le HTML, le CSS et le JavaScript. Le Sanctuaire est sauvé à jamais !"
      };
    }
  }
];

// Compatibilité d'export
export const CONTINUOUS_STEPS = MULTIPAGE_STEPS;

