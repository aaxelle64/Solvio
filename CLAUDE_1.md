# CLAUDE.md — Solvio Website

> Agence d'automatisation **Solvio** · Site vitrine construit avec **Astro**
> Ce fichier est la source de vérité pour Claude Code sur ce projet.

---

## Vue d'ensemble du projet

**Solvio** est une agence spécialisée dans l'automatisation de processus métier (workflows, IA, intégrations no-code/low-code). Le site est un site vitrine marketing destiné à convertir des prospects en clients.

**Stack technique :** Astro + TailwindCSS + TypeScript  
**Déploiement :** Vercel (ou Netlify)  
**Repo :** monorepo simple, pas de backend

---

## Structure du projet

```
/
├── public/
│   ├── fonts/              # DM Sans (woff2)
│   └── images/
│       └── logo.svg        # Logo Solvio
├── src/
│   ├── components/
│   │   ├── ui/             # Composants atomiques (Button, Badge, Card…)
│   │   ├── sections/       # Blocs de page (Hero, Services, FAQ…)
│   │   └── layout/         # Header, Footer, Nav
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   ├── services.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── global.css      # Variables CSS + reset
│   └── content/            # Contenu Markdown/MDX (blog optionnel)
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Charte graphique — Design tokens

### Couleurs

```css
:root {
  /* Fonds */
  --color-abyss:    #080A12;   /* Fond principal */
  --color-surface:  #0D1120;   /* Cartes, sections alternées */
  --color-border:   #1C2238;   /* Bordures */

  /* Accents */
  --color-teal:     #00C8A0;   /* CTA, liens actifs, icônes primaires */
  --color-blue:     #4E7FFF;   /* Accents secondaires, badges IA */

  /* Texte */
  --color-text-primary:   #EDF1FF;  /* Titres, texte fort */
  --color-text-secondary: #7A8EA8;  /* Corps de texte, descriptions */
  --color-text-muted:     #3D4E6B;  /* Labels, placeholders */
}
```

### Typographie

| Rôle | Police | Taille | Poids | Notes |
|---|---|---|---|---|
| Logotype | Georgia, serif | 44px | 400 | Tracking -1.5px |
| H1 display | Georgia, serif | 48–64px | 400 | Tracking -1px |
| H2 section | Georgia, serif | 32–40px | 400 | |
| H3 | DM Sans | 20px | 500 | |
| Body | DM Sans | 15–16px | 300–400 | Line-height 1.65 |
| Label caps | DM Sans | 10px | 500 | Letter-spacing 3.5px, uppercase |
| Mono / code | JetBrains Mono | 13px | 400 | |

**⚠️ Ne jamais utiliser :** Arial, Roboto, Inter, system-ui comme police d'affichage.

### Espacement & layout

- Grille : 12 colonnes, max-width `1200px`, padding horizontal `2rem`
- Sections : padding vertical `6rem` (desktop) / `3.5rem` (mobile)
- Coins arrondis : `6px` (boutons/badges) · `12px` (cartes) · `16px` (grandes cartes)
- Bordures : toujours `0.5px solid var(--color-border)`

---

## Composants UI clés

### Bouton primaire

```astro
<!-- Fond teal, texte foncé, jamais de gradient -->
<button class="btn-primary">Démarrer →</button>
```

```css
.btn-primary {
  background: var(--color-teal);
  color: #003D32;
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: opacity 0.15s;
}
.btn-primary:hover { opacity: 0.88; }
```

### Bouton outline

```css
.btn-outline {
  background: transparent;
  color: var(--color-teal);
  border: 1px solid var(--color-teal);
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 14px;
}
```

### Carte service

```astro
<div class="service-card">
  <!-- icône SVG 24px -->
  <h3>Nom du service</h3>
  <p>Description courte du service proposé.</p>
</div>
```

```css
.service-card {
  background: var(--color-surface);
  border: 0.5px solid var(--color-border);
  border-radius: 12px;
  padding: 1.75rem;
}
.service-card:hover {
  border-color: rgba(0, 200, 160, 0.3);
}
```

---

## Pages & sections

### Homepage (`index.astro`)

1. **Hero** — Titre accrocheur (serif), sous-titre, CTA « Démarrer » + lien « Voir nos services »
2. **Logos clients** — Bande défilante avec logos partenaires/clients (si disponibles)
3. **Services** — Grille 3 colonnes : Automatisation, Intégrations IA, Audit & conseil
4. **Processus** — 4 étapes numérotées : Analyse → Design → Déploiement → Suivi
5. **Témoignages** — 2–3 quotes clients avec nom et entreprise
6. **CTA final** — Fond teal très sombre, titre fort, bouton contact
7. **Footer** — Logo + liens nav + mention légale

### Page Services (`services.astro`)

Détail de chaque offre avec tarifs ou approche tarifaire.

### Page Contact (`contact.astro`)

Formulaire simple : nom, email, entreprise, description du besoin. Pas de backend requis — utiliser [Formspree](https://formspree.io) ou Netlify Forms.

---

## Conventions de code

- **Astro** : un composant = un fichier `.astro`. Props typées en TypeScript dans le frontmatter.
- **CSS** : préférer les classes utilitaires Tailwind. Pour les styles complexes/réutilisables, utiliser `<style>` scoped dans le composant.
- **Pas de CSS-in-JS**, pas de styled-components.
- **Images** : toujours utiliser `<Image>` d'Astro (`astro:assets`) pour l'optimisation automatique.
- **Icônes** : SVG inline ou bibliothèque `@iconify/astro`. Taille standard 20–24px.
- **Accessibilité** : `alt` sur toutes les images, `aria-label` sur les icônes seules, contraste AA minimum.
- **Pas de JavaScript côté client** sauf si strictement nécessaire. Utiliser les directives Astro (`client:load`, `client:visible`) avec parcimonie.

---

## SEO & performance

```astro
<!-- Dans BaseLayout.astro -->
<meta name="description" content="..." />
<meta property="og:title" content="Solvio — Agence d'automatisation" />
<meta property="og:image" content="/og-image.png" />
```

- OG image : `1200×630px`, fond `#080A12`, logo centré
- Sitemap : activer `@astrojs/sitemap`
- Robots : `robots.txt` permissif sauf `/admin`
- Core Web Vitals : pas d'images LCP sans `loading="eager"`, fonts en `preload`

---

## Variables d'environnement

```bash
# .env (ne jamais committer les valeurs réelles)
FORMSPREE_ID=xxxxx          # ID du formulaire contact
PUBLIC_SITE_URL=https://solvio.fr
```

---

## Commandes utiles

```bash
npm run dev        # Serveur local http://localhost:4321
npm run build      # Build production dans ./dist
npm run preview    # Prévisualiser le build
npm run astro add  # Ajouter une intégration Astro
```

---

## Ce qu'il ne faut PAS faire

- ❌ Fond blanc ou clair comme fond de page principal
- ❌ Gradients violets/rose génériques
- ❌ Animations trop chargées (parallax excessif, particules JS)
- ❌ Police Arial, Roboto ou system-ui pour les titres
- ❌ Importer React/Vue sans justification (Astro islands seulement si nécessaire)
- ❌ Inline styles sauf pour des valeurs dynamiques
- ❌ Committer le dossier `node_modules` ou `.env`

---

*Dernière mise à jour : avril 2026 · Solvio Automation Agency*
