# petite-vue-webcomponent

A minimal project using [Petite Vue](https://github.com/vuejs/petite-vue) for both progressive-enhancement apps and custom web components. This repository demonstrates how to build a demo app and tiny custom element bundles (≈17KB minified, 7KB gzipped) using Vite, Rollup, and Terser.

---

## Table of Contents

- [petite-vue-webcomponent](#petite-vue-webcomponent)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Development](#development)
  - [Building](#building)
    - [Demo App Build](#demo-app-build)
    - [Web Components Build](#web-components-build)
  - [Usage](#usage)
    - [As a Demo App](#as-a-demo-app)
    - [Using the Web Components](#using-the-web-components)
  - [Project Structure](#project-structure)
  - [Author](#author)
  - [License](#license)

---

## Features

- **Progressive Enhancement:**  
  Use Petite Vue to progressively enhance your static pages (see `/src/pages` with `index.html` and `about.html`).

- **Custom Web Components:**  
  Create and bundle tiny custom elements (e.g. `<my-component-1>`, `<my-component-2>`, `<my-component-3>`) located in `/src/webcomponents`.

- **Multiple Bundle Entries:**  
  Easily control which components are included in each bundle via a single entries file (`/src/webcomponents/entries.js`).

- **Modern Build Setup:**  
  Leverages [Vite](https://vitejs.dev/) for development and production builds with hot-reload support.

- **Ultra-Small Bundles:**  
  Web component bundles are extremely lightweight (around 17KB minified and 7KB gzipped).

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/petite-vue-webcomponent.git
cd petite-vue-webcomponent
npm install
```

---

## Development

For local development with hot-reload of the demo app, run:

```bash
npm run dev
```

Edit the files in `/src/pages` (for the demo app) or `/src/webcomponents` (for custom elements) and view the changes immediately.

---

## Building

### Demo App Build

To build the demo app (regular Petite Vue pages):

```bash
npm run build
```

The production files will be output to the `dist` folder.

### Web Components Build

To build the custom web component bundles, run:

```bash
npm run build:webcomponent
```

This command:
- Reads bundle definitions from [`src/webcomponents/entries.js`](./src/webcomponents/entries.js).
- Uses Vite’s library mode with inline dynamic imports and Terser for minification.
- Outputs standalone bundles (e.g. `entry-1.min.js` and `entry-2.min.js`) to `dist/webcomponents`.
- Automatically generates a demo page (`index.html`) in the `dist/webcomponents` folder that loads all bundles.

---

## Usage

### As a Demo App

Open the built demo pages (`index.html` or `about.html` from the root of `dist`) in your browser.

### Using the Web Components

Include the desired bundle in your HTML. For example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Web Components Demo</title>
  </head>
  <body>
    <!-- Use your custom elements -->
    <my-component-1></my-component-1>
    <my-component-2></my-component-2>
    <my-component-3></my-component-3>
    
    <!-- Load the webcomponent bundle -->
    <script type="module" src="https://yourdomain.com/webcomponents/entry-2.min.js"></script>
  </body>
</html>
```

The generated demo page (`dist/webcomponents/index.html`) also shows how to load multiple bundles automatically.

---

## Project Structure

```
petite-vue-webcomponent/
├── dist/                   # Production build output
│   └── webcomponents/
│       ├── entry-1.min.js  # Standalone bundle (e.g. only <my-component-1>)
│       ├── entry-2.min.js  # Bundled web components (all three components)
│       └── index.html      # Automatically generated demo page for web components
├── public/                 # Static assets for demo pages
├── scripts/                # Build scripts (e.g. build-webcomponents.js)
├── src/
│   ├── components/         # Regular Petite Vue components (e.g. ExampleComponent.js)
│   ├── hooks/              # Custom hooks (e.g. useHeader.js)
│   ├── pages/              # Demo pages (index and about) with main.js and styles
│   └── webcomponents/      # Custom element definitions and bundle entries
│         ├── defineComponent.js  # Helper to register custom elements
│         ├── entries.js          # Bundle definitions (single source of truth)
│         ├── entry-1.js          # Bundle entry: registers <my-component-1>
│         ├── entry-2.js          # Bundle entry: registers <my-component-1>, <my-component-2>, <my-component-3>
│         ├── MyComponent1.js
│         ├── MyComponent2.js
│         └── MyComponent3.js
├── LICENSE
├── package.json
├── README.md
└── vite.config.mjs          # Vite config for demo app
```

---

## Author
Dariusz Sikorski
[Homepage](https://github.com/vuejs/petite-vue)
[Linkedin](https://www.linkedin.com/in/dariusz-sikorski-56281b3a/)

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

Happy coding! Enjoy building tiny, efficient web components with Petite Vue.
