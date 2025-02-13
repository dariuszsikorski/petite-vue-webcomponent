// scripts/build-webcomponents.js
import { build } from 'vite';
import { fileURLToPath, URL } from 'url';
import { terser } from 'rollup-plugin-terser';

const entries = [
  {
    name: 'entry-1.min',
    entry: '../src/webcomponents/entry-1.js',
    clean: true // Cleans output folder for the first bundle
  },
  {
    name: 'entry-2.min',
    entry: '../src/webcomponents/entry-2.js',
    clean: false // Keeps previous bundles intact
  }
];

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
        // Rollup options are passed here:
        rollupOptions: {
          output: {
            // Force all code into a single file:
            inlineDynamicImports: true,
            // Use terser for aggressive minification
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
}

buildEntries().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
