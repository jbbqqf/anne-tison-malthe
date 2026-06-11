import { defineConfig } from 'astro/config';

// Site vitrine Anne Tison-Malthé / FWD Legal.
// Déploiement actuel : GitHub Pages (aperçu partageable).
//   URL : https://jbbqqf.github.io/anne-tison-malthe/
// Pour un domaine définitif, remplacer `site` par le domaine et mettre `base: '/'`.
export default defineConfig({
  site: 'https://jbbqqf.github.io',
  base: '/anne-tison-malthe/',
  compressHTML: true,
});
