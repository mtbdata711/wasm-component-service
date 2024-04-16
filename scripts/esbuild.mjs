import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/wasm/ssr.js'],
  outdir: 'dist/wasm',
  bundle: true,
  sourcemap: false,
  minify: false,
  format: 'cjs',
  loader: { '.js': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  jsxImportSource: 'preact',
  jsx: 'automatic'
});

esbuild.build({
  entryPoints: ['src/components/client/index.js'],
  outfile: 'dist/client/bundle.js',
  bundle: true,
  sourcemap: false,
  minify: false,
  platform: 'browser',
  loader: { '.js': 'jsx' },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  jsxImportSource: 'preact',
  jsx: 'automatic'
});