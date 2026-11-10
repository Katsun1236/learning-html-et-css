# Le Sanctuaire du Web — L'Aventure Complète (HTML5, CSS3 & JavaScript)

Jeu pédagogique et narratif d'apprentissage du Web moderne sous forme de Visual Novel immersif aux côtés de Maître Bodhi, d'Ada (Ingénieure du Runtime) et de NULL (Auditeur Système & Garbage Collector).

---

## Synopsis & Univers Narratif

Dans ce jeu interactif, vous incarnez un apprenti débarquant devant les ruines du Sanctuaire du Web. Guidé par **Maître Bodhi**, un être chaleureux dont le cache mémoire s'efface peu à peu, vous bâtissez pas à pas un site web complet (`index.html`, `chroniques.html`, `galerie.html`, `contact.html`, `style.css`, `script.js`) à travers **40 étapes progressives**.

Au fil de l'aventure, des **Événements Notables** surgissent : **NULL**, l'auditeur système impassible du serveur, est mandaté par le Garbage Collector pour purger les démons et les segments mémoires saturés. Le serveur physique du CERN de 1991 approche des 99 % de saturation RAM !

Pour sauver Bodhi de l'effacement définitif imposé par les protocoles de purge, l'ingénieure **Ada** intervient et vous initie au **JavaScript** afin de décentraliser l'âme et le savoir de Bodhi directement dans la mémoire de chaque navigateur utilisateur (`localStorage`, `addEventListener`).

---

## Fonctionnalités Majeures

- **40 Étapes Réparties en 6 Actes Épiques** :
  - **Acte I** : Les Fondations & Le Néant Originel (`index.html`)
  - **Acte II** : La Toile & Le Réseau Multi-Pages (`chroniques.html`, `galerie.html`, `contact.html`)
  - **Acte III** : L'Harmonie Visuelle & Le Style CSS (`style.css`)
  - **Acte IV** : Le Layout Moderne (Flexbox & CSS Grid)
  - **Acte V** : La Haute Maîtrise, Les Animations & L'Accessibilité
  - **Acte VI** : L'Étincelle Vivante (JavaScript, `script.js`, DOM & persistance `localStorage`)
- **Les 3 Événements Notables (Duels de Débogage)** :
  - Fin Acte I : Le Premier Effondrement (balise brisée, cinématique 16:9, intrusion de NULL)
  - Fin Acte II : La Fracture des Chemins (Erreur 404 & chemins relatifs, amnésie de Bodhi)
  - Fin Acte III : Le Crash CSS & L'Avis de Purge Ultime (seuil 99 % de saturation mémoire)
- **Distribution des Rôles & Nouveaux PNJ Illustrés** :
  - **Maître Bodhi** : 15 expressions (dont `bodhi_weak`, `bodhi_glitch`, `bodhi_ascended`)
  - **NULL** : 4 expressions (neutral, action, inspect, relieved)
  - **Ada** : 5 expressions (neutral, serious, shocked, thinking, smile)
- **Éditeur de Code Multi-Fichiers Style VS Code** :
  - Prise en charge complète du HTML, du CSS et du JavaScript (`script.js`)
  - Coloration syntaxique haute fidélité, complétion intelligente et retour à la ligne automatique
  - Rendu instantané sécurisé dans une sandbox iframe
- **Outil d'Export .ZIP en 1 Clic** :
  - Téléchargez à tout moment l'ensemble de votre projet en local pour l'ouvrir dans VS Code ou le déployer sur le Web !
- **L'Internet de Maître Bodhi** :
  - 181 fiches encyclopédiques débloquées au fil de l'aventure
  - Aide-mémoire complet des syntaxes HTML et CSS

---

## Déploiement sur Cloudflare Pages

Le projet est 100 % statique et prêt pour un déploiement instantané sur Cloudflare Pages ou tout serveur web moderne :

```bash
# Tester en local
npx serve .
# Ou prévisualiser avec Cloudflare Wrangler
npx wrangler pages dev .
```
