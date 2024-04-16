import { useState, useRef } from 'react';
import { Heading } from './Heading.js';

export function GifPlayer(props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setPlaying(!playing);
    }

    return (<div>
    <Heading text="Gif Player" />
    <figure className="gif-player">
        <video playsInline loop={true} muted={true} onClick={handleVideo} ref={videoRef} src={props.src} />
        <button onClick={handleVideo}>{playing ? 'Pause Gif' : 'Play Gif'}</button>
    </figure>
    </div>
    );
}