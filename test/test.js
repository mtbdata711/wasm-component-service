import assert from 'node:assert'
import { test } from 'node:test'
import createPlugin from "@extism/extism";

const plugin = await createPlugin("dist/wasm/ssr.wasm", {
  useWasi: true,
})

const input = {
  component: "GifPlayer",
  props: {
    src: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
  },
}

test('Component renders successfully', async () => {
  const output = await plugin.call("ssr", JSON.stringify(input))
  const text = output.text();
  assert(text === `<gif-player src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"><div><h1>Gif Player</h1><figure class="gif-player"><video playsinline loop muted src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"></video><button>Play Gif</button></figure></div></gif-player>`);
})

