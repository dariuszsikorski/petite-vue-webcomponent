import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        entry1: fileURLToPath(new URL('./src/webcomponents/entry-1.js', import.meta.url)),
        entry2: fileURLToPath(new URL('./src/webcomponents/entry-2.js', import.meta.url))
      },
      output: {
        // Files will be built into dist/webcomponents/entry-1.min.js etc.
        entryFileNames: 'webcomponents/[name].min.js'
      },
      plugins: [terser()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
