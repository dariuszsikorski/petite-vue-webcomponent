# petite-vue-webcomponent

A minimal, cute project using [Petite Vue](https://github.com/vuejs/petite-vue) for both progressive-enhancement apps and custom web components.

- **Demo app:** Regular Petite Vue pages live in `index.html` and `about.html` (with source code in `/src/pages`).
- **Web components:** Custom elements (`my-component-1`, `my-component-2`, `my-component-3`) live in `/src/webcomponents` and can be built either standalone or bundled together via different entry files.
- **Development:** Use `npm run dev` for hot-reload development of the demo app.
- **Builds:**
  - `npm run build` builds the demo app.
  - `npm run build:webcomponent` builds the webcomponent bundles (minified with Terser) into `dist/webcomponents`.
