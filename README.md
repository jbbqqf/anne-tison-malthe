# Site vitrine — Anne Tison-Malthé · FWD Legal

Aperçu du site vitrine de **Maître Anne Tison-Malthé**, avocate au barreau de Paris
(restructuring, procédures collectives, défense des dirigeants — conseil trilingue
français / allemand / anglais).

> **Version d'aperçu**, destinée à être relue et validée. Le site est en `noindex`
> (non référencé par les moteurs) tant qu'il n'est pas finalisé.

🔗 **En ligne :** https://jbbqqf.github.io/anne-tison-malthe/

## Stack

- [Astro](https://astro.build) (site statique, zéro JS superflu)
- Déploiement automatique sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)

## Développer en local

```bash
npm install
npm run dev      # http://localhost:4321/anne-tison-malthe/
npm run build    # génère le site statique dans dist/
npm run preview  # sert le build localement (respecte le sous-chemin)
```

## Structure

| Page | Rôle |
|---|---|
| `/` | Accueil — positionnement, différenciateurs, aperçu des expertises, prise de RDV |
| `/le-cabinet/` | Parcours, engagements, distinctions |
| `/expertises/` | Hub des domaines d'intervention (prévention, procédures collectives, défense du dirigeant, franco-allemand, contentieux) + FAQ |
| `/rendez-vous/` | Honoraires et prise de rendez-vous |
| `/mentions-legales/` | Mentions légales et confidentialité |

## À finaliser avant la mise en ligne publique

- **Module de rendez-vous** (`src/components/Rdv.astro`) : démonstration à connecter à un
  agenda réel (Calendly ou back-office). Aucun message n'est réellement envoyé.
- **Domaine définitif** : mettre à jour `site` / `base` dans `astro.config.mjs` puis
  retirer la balise `noindex` dans `src/layouts/Layout.astro`.
- **Logo & charte** : le logo « robe d'avocat » (`public/images/logo-robe.svg`) est un
  emblème provisoire.
- **Portrait** : remplacer `public/images/anne-portrait.jpg` par une photo haute définition.
- **Mentions légales** : compléter l'hébergeur et l'assurance RCP.
