// scripts/build-webcomponents.js
import { build } from 'vite';
import { fileURLToPath, URL } from 'url';
import { terser } from 'rollup-plugin-terser';
import { writeFile } from 'fs/promises';
import entries from '../src/webcomponents/entries.js';

async function buildEntries() {
  for (const { name, entry, clean } of entries) {
    console.log(`📦 Building ${name}...`);

    await build({
      configFile: false, // Ignore external (root) config (like vite.config.mjs)
      build: {
        lib: {
          entry: fileURLToPath(new URL(entry, import.meta.url)),
          name,
          fileName: name,
          formats: ['es']
        },
        outDir: 'dist/webcomponents',
        emptyOutDir: clean,
        rollupOptions: {
          output: {
            // Force all code into a single file:
            inlineDynamicImports: true,
            // Use terser for aggressive minification:
            plugins: [terser()]
          }
        },
        // Disable Vite’s built‑in minification (we want terser to handle it)
        minify: false
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url))
        }
      }
    });

    console.log(`✅ Built ${name}`);
  }

  // Generate a demo page that includes all bundles from entries.js:
  const demoHtml = generateDemoHtml(entries);
  await writeFile('dist/webcomponents/index.html', demoHtml);
  console.log('✅ Generated demo index.html');
}

function generateDemoHtml(entries) {
  // Create a script tag for each entry bundle:
  const scripts = entries
    .map(e => `<script type="module" src="./${e.name}"></script>`)
    .join('\n    ');

  // Customize the custom elements below as needed.
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Web Components Demo</title>
    <style>
      body { font-family: sans-serif; padding: 20px; }
      section { margin: 20px 0; padding: 10px; border: 1px solid #ccc; }
    </style>
  </head>
  <body>
    <h1>Web Components Demo</h1>
    <section>
      <h2>Test Web Components</h2>
      <!-- Insert your custom elements here -->
      <my-component-1></my-component-1>
      <my-component-2></my-component-2>
      <my-component-3></my-component-3>
    </section>
    <!-- Load bundle(s) -->
    ${scripts}
  </body>
</html>`;
}

buildEntries().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
