# Yurii Boiko — Portfolio

Personal portfolio site for [yura935.github.io](https://yura935.github.io/).

**Stack:** React 19, TypeScript, Vite  
**Theme:** Modern “player card” UI with light game metaphors and motion

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Production files are built into `docs/`.

**Recommended Pages settings** (avoids GitHub overwriting the Vite build with source files):

1. Run `npm run build`
2. Commit the updated `docs/` folder
3. In **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `master` / **`/docs`**

Optional: keep the GitHub Actions workflow, but if you use Actions as the source, disable the repo workflow named **pages-build-deployment** so it does not overwrite the Vite artifact.

## Content

Edit `src/data/content.ts` to update profile, skills, projects, and contacts.
