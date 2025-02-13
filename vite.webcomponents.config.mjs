import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import { fileURLToPath, URL } from 'url';
// Import the array of entry definitions:
import entries from './src/webcomponents/entries.js';

const commonConfig = {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
};

// Export an array of config objects – one for each entry.
// (Vite supports exporting an array so each config is built in one run.)
export default entries.map(entry =>
  defineConfig({
    ...commonConfig,
    build: {
      lib: {
        // Convert the relative entry path to an absolute file URL
        entry: fileURLToPath(new URL(entry.entry, import.meta.url)),
        name: entry.name,
        // The fileName option expects a function or a string.
        // Here we simply use the 'name' property (which includes '.min')
        fileName: entry.name,
        formats: ['es']
      },
      outDir: 'dist/webcomponents',
      emptyOutDir: entry.clean, // Only clean for the first entry
      rollupOptions: {
        // inlineDynamicImports forces everything into a single file
        inlineDynamicImports: true,
        plugins: [terser()]
      }
    }
  })
);
