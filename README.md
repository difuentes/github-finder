---
React: React 16.8+
DEMO: https://githubfinder-traning-react.netlify.com/
---

React App to search Github Users.

## Github Finder WebApp

* React 16.8+: npx create-react-app  app-name
* Axios: npm i axios
* React Router: npm i react-router-dom
* Github APIs: https://api.github.com/users & https://developer.github.com/v3/search/

## How to setup

* Clone repo
* npm install
* npm start

## Hooks used
* **useState**
* **useEffect**
* **useContext**
* **useReducer**

## Context used
    - DIR CONTEXT GITHUB: src/context/github
    - DIR CONTEXT ALERT: src/context/alert
* **payload** : Property of the dispatch method that receives the data to send.


## Utils Links

* **React Hooks**: https://ed.team/blog/introduccion-los-hooks-de-react
* **React Context**: https://ed.team/blog/maneja-datos-en-react-sin-redux-usando-context

## Notes

* Components without state are called as Stateless Functional Components. These components can be defined as functions and do not use the render method.
* React router must encapsulate the entire application.
* A context is composed of three parts: NameContext.js, NameReducer.js, NameState.js.

## Recommended plugins for VSCode

* Auto Rename Tag
* Bracket Pair Color
* ES7 React/Redux/GraphQL/React-Native snippets
* Prettier - Code formatter
* Sublime Babel

## Util commands for VsCode

* rce: Create component structure in new file.
* racf: Create stateless functional component structure in new file.
* impt: Import PropTypes.
* ptar: Add PropTypes.array.isRequired to Component.propTypes.
* ptbr: Add PropTypes.bool.isRequired to Component.propTypes.
* clg: Generate console.log(object).

## Prepare & deploy to Netlify
1. Register in [Netlify](https://www.netlify.com/)
2. Install Netlify CLI: npm i -g netlify-cli
3. Add netlify.toml to project root
4. Specify build folder
5. In terminal: netlify init
6. Give authorization to netlify CLI
7. Follow config steps
8. Optional: Config Environment variables in Netlify
9. If you dont set continuos deployment your follow next steps:
    - npm run build
    - netlify deploy --prod
