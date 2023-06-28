import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audio }: { audio: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<any>({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current as HTMLDivElement,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? "pause" : "play"}
      </button>

      <div ref={containerRef} />
    </>
  );
};

export default Waveform;
