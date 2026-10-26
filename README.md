# Desktop portfolio

React + Vite + Tailwind CSS v4. Colors, fonts and type sizes live in `src/index.css` under `@theme`.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push this repo to GitHub on the `main` branch.
2. In the repo go to **Settings > Pages > Build and deployment > Source** and choose **GitHub Actions**.
3. Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.

The site is served at `https://<username>.github.io/<repo-name>/`. The workflow sets the base path
from the repo name automatically. For a `<username>.github.io` repo, change `VITE_BASE` in the
workflow to `/`.
