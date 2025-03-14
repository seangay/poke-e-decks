# Poke-e-decks 
This is a project intended to play around with various tech in a more structured way. Mainly to set up a Node/React project to facilitate the searching and saving of a collection of Pokemon TCG cards.

My daughter is into collecting them and I thought it an interesting experiement to look for an API that could do most of the "knowledge" stuff for me, and I could focus on saving and searching for the various cards and getting them to display in a site somewhere. 

## Objectives

- Perhaps no real server side storage. I might be able to get away with local storage and an exporter or something to then import on another machine.
- skill up in React and modern web components
- Attempt "best practice" SDLC. Good commit messages, work to issues, create PRs 
- Ensure code is fully tested and executed at the PR level with good reporting
- Utilise the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for branch management. It may be overkill given that I will likely be the only one doing stuff in this project, but it is "good practice".


Nice to haves
- Zero deployment time, push and know that it will be deployed provided quality gates pass of course.

Security
At this stage I want to think about, but not be obsessed with security. 
- Keys shouldn't be leaked
- No PII in logs etc


## Poke-e-decks Server

<details>
<summary>click for detail</summary>

TBD: probably just a proxy of the [Pokemon TCG API](https://docs.pokemontcg.io/api-reference/cards/search-cards/) initially

</details>


## Poke-e-decks Client

Generated using vite and choosing react+typescript for the options. This is the React + TypeScript client to hook into the server application.

<details>
<summary>click for detail</summary>

```bash
npm create vite@latest .
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

</details>

<p></p><p></p><p></p>

## Misc

### Getting absolute references working for imports

<details>
<summary>click for detail</summary>

#### Adding compiler support for absolute references

Add the following into `tsconfig.json` and `tsconfig.app.json`

```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
```

#### VS Code setup

Add the following to your user `settings.json` and restart VS Code. You should now have "@/" notation being used for
imports.

```json
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.importModuleSpecifier": "non-relative",
```

</details>
