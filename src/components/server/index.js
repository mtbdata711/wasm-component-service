import { renderToString } from "preact-render-to-string";
import { GifPlayer as Gif } from "../GifPlayer";
import { Heading } from "../Heading";

export default {
    // wc-wrapper to hydrate the component on the client
    GifPlayer: ({ src }) => renderToString(<gif-player src={src}><Gif src={src} /></gif-player>),
    // non-interactive components can be rendered directly without the wc-wrapper
    Heading: ({ text }) => renderToString(<Heading text={text} />)
}