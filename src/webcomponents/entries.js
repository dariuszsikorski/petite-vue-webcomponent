// src/webcomponents/entries.js
// Each object defines one bundle:
// - name: used for naming the bundle file (e.g. entry-1.min.js)
// - entry: relative to the build script
// - clean: whether to empty the output directory before this build (set to true only for the first entry)
export default [
  {
    name: 'entry-1.min',
    entry: '../src/webcomponents/entry-1.js',
    clean: true  // Clean output directory on first build
  },
  {
    name: 'entry-2.min',
    entry: '../src/webcomponents/entry-2.js',
    clean: false // Do not clean again – so both bundles coexist in the same outDir
  }
];
