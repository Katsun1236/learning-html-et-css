// =============================================================================
// DESSINS CRAYONNÉS DES BÂTIMENTS & DISTRICTS DU ROYAUME (STYLE JEU MOBILE / CARTE FANTASTIQUE)
// =============================================================================

export const DISTRICT_SKETCHES = {
  'chap-1': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Fond parchemin crayonne -->
    <defs>
      <filter id="sketch-filter" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
    </defs>
    <!-- Sol crayonne avec herbes -->
    <path d="M10 140 Q100 135 190 140" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M25 138 L30 130 M32 139 L35 128 M70 138 L72 131 M150 139 L154 132 M160 138 L163 129" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
    <!-- Tente de scribe en toile avec hachures crayon -->
    <path d="M50 135 L95 45 L140 135 Z" fill="#fef3c7" stroke="#78350f" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M95 45 L95 135" stroke="#92400e" stroke-width="2" stroke-dasharray="4 2"/>
    <path d="M75 135 L95 75 L115 135" fill="#451a03" stroke="#78350f" stroke-width="2"/>
    <!-- Pieu et cordes -->
    <line x1="95" y1="45" x2="35" y2="135" stroke="#b45309" stroke-width="1.5"/>
    <line x1="95" y1="45" x2="155" y2="135" stroke="#b45309" stroke-width="1.5"/>
    <!-- Parchemin et plume de scribe au premier plan -->
    <path d="M130 115 Q145 110 160 115 Q165 135 150 135 Q135 135 130 115 Z" fill="#ffedd5" stroke="#78350f" stroke-width="2"/>
    <path d="M135 120 L155 120 M136 125 L152 125 M137 130 L148 130" stroke="#9a3412" stroke-width="1.5"/>
    <!-- Plume -->
    <path d="M165 95 Q155 110 152 122 Q160 115 168 100 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
    <!-- Feu de camp de nuit -->
    <circle cx="35" cy="130" r="8" fill="rgba(245, 158, 11, 0.2)"/>
    <path d="M30 135 L40 135 M32 137 L38 132" stroke="#78350f" stroke-width="2.5"/>
    <path d="M35 132 Q32 122 35 116 Q38 124 35 132 Z" fill="#f97316"/>
  </svg>`,

  'chap-2': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Eau avec vaguelettes crayonnées -->
    <path d="M10 135 Q50 130 100 135 Q150 140 190 135" stroke="#0284c7" stroke-width="2.5" fill="none"/>
    <path d="M30 145 Q70 140 120 145 Q160 150 180 145" stroke="#0ea5e9" stroke-width="1.5" fill="none"/>
    <path d="M15 125 Q45 120 75 125 M120 128 Q150 123 180 128" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
    <!-- Ponton en bois -->
    <path d="M10 110 L80 110 L75 135 L5 135 Z" fill="#78350f" stroke="#451a03" stroke-width="2.5"/>
    <line x1="25" y1="110" x2="25" y2="135" stroke="#451a03" stroke-width="2"/>
    <line x1="50" y1="110" x2="50" y2="135" stroke="#451a03" stroke-width="2"/>
    <!-- Caravelle avec voiles gonflees -->
    <path d="M85 115 Q130 130 175 115 L165 98 L95 98 Z" fill="#92400e" stroke="#451a03" stroke-width="2.5"/>
    <!-- Mats -->
    <line x1="120" y1="98" x2="120" y2="35" stroke="#451a03" stroke-width="3"/>
    <line x1="150" y1="98" x2="150" y2="48" stroke="#451a03" stroke-width="2.5"/>
    <!-- Voiles rayees de pirate -->
    <path d="M120 42 Q140 55 120 72 Q105 55 120 42 Z" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
    <path d="M120 74 Q142 84 120 95 Q104 84 120 74 Z" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
    <path d="M150 52 Q165 62 150 75 Q138 62 150 52 Z" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
    <!-- Drapeau au sommet -->
    <path d="M120 35 L105 38 L120 42 Z" fill="#dc2626"/>
    <!-- Mouettes -->
    <path d="M30 45 Q35 40 40 45 Q45 40 50 45" stroke="#64748b" stroke-width="1.5" fill="none"/>
    <path d="M60 35 Q64 31 68 35 Q72 31 76 35" stroke="#64748b" stroke-width="1.5" fill="none"/>
  </svg>`,

  'chap-3': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Sol de la place publique -->
    <path d="M15 140 L185 140" stroke="#78350f" stroke-width="2.5"/>
    <!-- Temple romain / Sénat sémantique -->
    <!-- Marches -->
    <rect x="35" y="130" width="130" height="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <rect x="42" y="124" width="116" height="6" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
    <!-- Colonnes flûtees avec hachures -->
    <rect x="48" y="65" width="12" height="59" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <rect x="74" y="65" width="12" height="59" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <rect x="114" y="65" width="12" height="59" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <rect x="140" y="65" width="12" height="59" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <!-- Entablement et fronton triangulaire -->
    <rect x="40" y="58" width="120" height="7" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
    <polygon points="100,22 35,58 165,58" fill="#f1f5f9" stroke="#475569" stroke-width="2.5"/>
    <!-- Symbole sémantique gravé dans le fronton -->
    <circle cx="100" cy="44" r="8" fill="none" stroke="#6366f1" stroke-width="2"/>
    <text x="96" y="48" font-size="11" font-weight="bold" fill="#6366f1">&lt;&gt;</text>
    <!-- Échoppe de marché à droite avec auvent rayé -->
    <path d="M145 105 L185 105 L180 120 L150 120 Z" fill="#f43f5e" stroke="#9f1239" stroke-width="1.5"/>
    <line x1="155" y1="105" x2="152" y2="120" stroke="#fff" stroke-width="2"/>
    <line x1="168" y1="105" x2="165" y2="120" stroke="#fff" stroke-width="2"/>
  </svg>`,

  'chap-4': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Tour ronde des alchimistes -->
    <path d="M60 140 L60 70 Q100 55 140 70 L140 140 Z" fill="#fce7f3" stroke="#831843" stroke-width="2.5"/>
    <!-- Toit conique pointu crayonne -->
    <polygon points="100,15 50,70 150,70" fill="#be185d" stroke="#831843" stroke-width="2.5"/>
    <!-- Fenêtres vitrail en arche -->
    <path d="M85 85 Q100 75 115 85 L115 110 L85 110 Z" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
    <line x1="100" y1="78" x2="100" y2="110" stroke="#0369a1" stroke-width="1.5"/>
    <line x1="85" y1="95" x2="115" y2="95" stroke="#0369a1" stroke-width="1.5"/>
    <!-- Palette d'artiste géante sur le côté -->
    <ellipse cx="40" cy="115" rx="24" ry="18" fill="#fed7aa" stroke="#9a3412" stroke-width="2"/>
    <circle cx="30" cy="110" r="4" fill="#ef4444"/>
    <circle cx="42" cy="106" r="4" fill="#3b82f6"/>
    <circle cx="52" cy="114" r="4" fill="#22c55e"/>
    <circle cx="36" cy="122" r="4" fill="#eab308"/>
    <!-- Pinceau magique traversant -->
    <line x1="20" y1="135" x2="60" y2="90" stroke="#78350f" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M60 90 Q65 85 68 88 Q63 95 60 90 Z" fill="#ec4899"/>
    <!-- Étoiles de couleur étincelantes -->
    <circle cx="160" cy="50" r="3" fill="#ec4899"/>
    <circle cx="170" cy="80" r="4" fill="#38bdf8"/>
    <circle cx="35" cy="45" r="3" fill="#facc15"/>
  </svg>`,

  'chap-5': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Forge de pierre avec briques hachurees -->
    <rect x="40" y="60" width="120" height="80" fill="#334155" stroke="#0f172a" stroke-width="2.5"/>
    <!-- Cheminée fumante -->
    <rect x="50" y="25" width="25" height="35" fill="#475569" stroke="#0f172a" stroke-width="2"/>
    <!-- Volutes de fumée crayonnées -->
    <path d="M62 25 Q55 15 65 8 Q75 5 70 0" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Foyer incandescent flamboyant -->
    <path d="M80 140 Q80 95 100 95 Q120 95 120 140 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
    <circle cx="100" cy="125" r="14" fill="#ea580c"/>
    <circle cx="100" cy="128" r="8" fill="#facc15"/>
    <!-- Enclume de forge au premier plan -->
    <path d="M135 140 L135 120 L155 120 L160 115 L165 120 L165 140 Z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
    <rect x="130" y="115" width="30" height="6" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
    <!-- Bouclier carré parfait (modèle de boîte) accroché au mur -->
    <rect x="85" y="68" width="30" height="25" rx="3" fill="#3b82f6" stroke="#f8fafc" stroke-width="2.5"/>
    <rect x="89" y="72" width="22" height="17" rx="2" fill="none" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 2"/>
  </svg>`,

  'chap-6': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Deux falaises rocheuses hachurées -->
    <path d="M0 80 L50 80 L40 160 L0 160 Z" fill="#334155" stroke="#1e293b" stroke-width="2.5"/>
    <path d="M150 80 L200 80 L200 160 L160 160 Z" fill="#334155" stroke="#1e293b" stroke-width="2.5"/>
    <!-- Sapins sur les falaises -->
    <polygon points="20,80 15,65 25,65" fill="#047857"/>
    <polygon points="180,80 175,62 185,62" fill="#047857"/>
    <!-- Pont suspendu en bois courbé (Flexbox en action) -->
    <!-- Cordes de suspension paraboliques -->
    <path d="M45 80 Q100 110 155 80" stroke="#78350f" stroke-width="3" fill="none"/>
    <path d="M45 92 Q100 122 155 92" stroke="#78350f" stroke-width="2" fill="none"/>
    <!-- Planches de bois suspendues -->
    <line x1="60" y1="87" x2="60" y2="99" stroke="#92400e" stroke-width="2"/>
    <line x1="80" y1="96" x2="80" y2="108" stroke="#92400e" stroke-width="2"/>
    <line x1="100" y1="101" x2="100" y2="113" stroke="#92400e" stroke-width="2"/>
    <line x1="120" y1="96" x2="120" y2="108" stroke="#92400e" stroke-width="2"/>
    <line x1="140" y1="87" x2="140" y2="99" stroke="#92400e" stroke-width="2"/>
    <!-- Nuages vaporeux sous le pont -->
    <path d="M60 145 Q80 135 100 145 Q120 135 140 145" stroke="#94a3b8" stroke-width="2" fill="none"/>
    <!-- Flèches directionnelles d'alignement -->
    <path d="M90 60 L110 60 M105 55 L110 60 L105 65" stroke="#38bdf8" stroke-width="2" fill="none"/>
  </svg>`,

  'chap-7': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Damier flottant isométrique de Titans -->
    <g transform="translate(100, 30)">
      <!-- Tuiles de la grille en perspective -->
      <polygon points="0,20 45,45 0,70 -45,45" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
      <polygon points="45,45 90,70 45,95 0,70" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>
      <polygon points="-45,45 0,70 -45,95 -90,70" fill="#3730a3" stroke="#818cf8" stroke-width="2"/>
      <polygon points="0,70 45,95 0,120 -45,95" fill="#4f46e5" stroke="#818cf8" stroke-width="2"/>
      <!-- Grand bloc en vedette (span 2) surélevé -->
      <polygon points="-30,30 0,15 30,30 0,45" fill="#38bdf8" stroke="#f8fafc" stroke-width="2"/>
      <polygon points="0,45 30,30 30,48 0,63" fill="#0284c7" stroke="#f8fafc" stroke-width="1.5"/>
      <polygon points="-30,30 0,45 0,63 -30,48" fill="#0369a1" stroke="#f8fafc" stroke-width="1.5"/>
      <!-- Runes magiques flottantes -->
      <circle cx="-60" cy="30" r="3" fill="#facc15"/>
      <circle cx="60" cy="30" r="3" fill="#facc15"/>
      <circle cx="0" cy="-5" r="4" fill="#a855f7"/>
    </g>
  </svg>`,

  'chap-8': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Tour astronomique des arcanes spiralée -->
    <path d="M80 145 L85 60 L115 60 L120 145 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="2.5"/>
    <!-- Escaliers en colimaçon dessinés autour -->
    <path d="M78 130 Q100 135 122 125" stroke="#a5b4fc" stroke-width="2.5" fill="none"/>
    <path d="M79 110 Q100 115 121 105" stroke="#a5b4fc" stroke-width="2.5" fill="none"/>
    <path d="M82 90 Q100 95 119 85" stroke="#a5b4fc" stroke-width="2.5" fill="none"/>
    <!-- Dôme d'observation avec télescope géant -->
    <ellipse cx="100" cy="60" rx="22" ry="12" fill="#312e81" stroke="#6366f1" stroke-width="2"/>
    <path d="M90 60 Q100 35 110 60 Z" fill="#4338ca" stroke="#6366f1" stroke-width="2"/>
    <!-- Télescope pointant vers les étoiles -->
    <line x1="95" y1="52" x2="135" y2="28" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
    <circle cx="137" cy="27" r="4" fill="#fef08a"/>
    <!-- Anneau gyroscopique orbital (animation 3D) -->
    <ellipse cx="100" cy="60" rx="38" ry="16" fill="none" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6 3" transform="rotate(-20 100 60)"/>
    <!-- Constellation céleste -->
    <circle cx="45" cy="30" r="2.5" fill="#facc15"/>
    <circle cx="65" cy="20" r="2" fill="#facc15"/>
    <circle cx="75" cy="35" r="2.5" fill="#facc15"/>
    <line x1="45" y1="30" x2="65" y2="20" stroke="rgba(250, 204, 21, 0.4)" stroke-width="1"/>
    <line x1="65" y1="20" x2="75" y2="35" stroke="rgba(250, 204, 21, 0.4)" stroke-width="1"/>
  </svg>`,

  'chap-9': `<svg viewBox="0 0 200 160" class="sketch-svg">
    <!-- Citadelle royale suprême de conte de fées -->
    <!-- Remparts de base avec créneaux -->
    <rect x="35" y="90" width="130" height="55" fill="#475569" stroke="#1e293b" stroke-width="2.5"/>
    <!-- Créneaux -->
    <path d="M35 90 L43 90 L43 82 L51 82 L51 90 L59 90 L59 82 L67 82 L67 90 M133 90 L141 90 L141 82 L149 82 L149 90 L157 90 L157 82 L165 82 L165 90" stroke="#1e293b" stroke-width="2" fill="#475569"/>
    <!-- Tour centrale haute du Trône -->
    <rect x="80" y="45" width="40" height="45" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
    <polygon points="100,12 75,45 125,45" fill="#6366f1" stroke="#312e81" stroke-width="2.5"/>
    <!-- Grande bannière royale flottante -->
    <line x1="100" y1="12" x2="100" y2="2" stroke="#facc15" stroke-width="2"/>
    <path d="M100 2 L125 7 L100 14 Z" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
    <!-- Deux tours de garde latérales avec toits en cône pourpres -->
    <rect x="25" y="65" width="22" height="40" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
    <polygon points="36,40 22,65 50,65" fill="#a855f7" stroke="#581c87" stroke-width="2"/>
    <rect x="153" y="65" width="22" height="40" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
    <polygon points="164,40 150,65 178,65" fill="#a855f7" stroke="#581c87" stroke-width="2"/>
    <!-- Grand portail doré en arche -->
    <path d="M88 145 L88 115 Q100 102 112 115 L112 145 Z" fill="#facc15" stroke="#78350f" stroke-width="2.5"/>
    <line x1="100" y1="106" x2="100" y2="145" stroke="#78350f" stroke-width="2"/>
    <!-- Pont-levis en bois -->
    <rect x="85" y="142" width="30" height="5" fill="#78350f"/>
  </svg>`
};
