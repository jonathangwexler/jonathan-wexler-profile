# Jonathan Wexler - Profile Website

A standalone Vite and React version of Jonathan Wexler's professional profile. It is a static website with no server, database, API keys, authentication, or dependency on ChatGPT Sites.

## What's included

- Complete React and TypeScript source in `src/`
- The portrait image in `src/assets/`
- Responsive CSS and accessibility features
- Root `index.html` entry point
- Vite and TypeScript configuration
- `package.json` and `package-lock.json`
- A ready-to-host production build in `dist/`
- An optional DigitalOcean App Platform specification template

The site uses system fonts (Georgia, Avenir when installed, Segoe UI, Helvetica, and Arial), so no third-party font files or font licenses are required. The portrait is the user-supplied project image.

## Requirements

- Node.js 22.x
- npm

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local preview address in the terminal.

## Production build

```bash
npm ci
npm run build
```

The production output directory is:

```text
dist/
```

The source entry point is `index.html`. The built entry point is `dist/index.html`.

To inspect the production build locally:

```bash
npm run preview
```

## Deploy from GitHub to DigitalOcean App Platform

1. Unzip this project and push the entire project folder to a GitHub repository. Commit `package-lock.json`; do not commit `node_modules/`.
2. In DigitalOcean, choose **Create > App Platform**, select **GitHub**, authorize access, and choose the repository and branch (usually `main`).
3. Configure the component as a **Static Site**.
4. Use these settings:

   - Source Directory: `/`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Run Command: leave blank

5. Optionally enable Autodeploy so each push to the selected branch creates a new deployment.
6. Review the plan and create the app. DigitalOcean serves `dist/index.html` as the default document.

DigitalOcean installs dependencies from `package-lock.json` before running the build command. The Node version is pinned to `22.x` in `package.json`.

## Optional app specification

`digitalocean-app-spec.example.yaml` is a template for `doctl` or API-based deployment. Replace:

```text
YOUR_GITHUB_OWNER/YOUR_REPOSITORY
```

with the real GitHub `owner/repository` value before using it. The app name and branch can also be changed. The app spec is not required when deploying through the DigitalOcean control panel.

## Portability and security notes

- Vite's `base` is set to `./`, so production JavaScript, CSS, and image references are relative.
- The production build contains no temporary ChatGPT file URLs.
- The project contains no browser-side API keys, tokens, or environment secrets.
- External links are limited to Jonathan's LinkedIn profile, email address, and existing website.
- This is a static single-page profile that uses section anchors, so no SPA catch-all routing rule is needed.

## Project structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── digitalocean-app-spec.example.yaml
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── vite-env.d.ts
│   └── assets/
│       └── jonathan-wexler-winter.jpg
└── dist/
    ├── index.html
    └── assets/
```

## DigitalOcean references

- [Create apps in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
- [Manage static sites](https://docs.digitalocean.com/products/app-platform/how-to/manage-static-sites/)
- [Node.js buildpack](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/nodejs/)
- [App specification reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
