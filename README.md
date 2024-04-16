# WASM Component Service

Experimental repo rendering Preact components written in JavaScript in PHP using WASM.

Tools used:

- esbuild
- Preact
- [Extism](https://extism.org/)

A lot of the implementation has been inspired by the work done in [Enhance SSR WASM](https://github.com/enhance-dev/enhance-ssr-wasm).

## Quick start

Start the Docker container and run:
```  
composer run bootstrap
nvm install && npm install && npm run build
```
Run `npm run test` or open up http://localhost:8080 to confirm that everything is working.