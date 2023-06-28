import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { PlayCircle, PauseCircle } from "react-feather";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

const Waveform = ({ audio }: { audio: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineref = useRef<HTMLElement>(null);
  const waveSurferRef = useRef<any>({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  // TODO: fix click behaviour

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current as HTMLDivElement,
      barWidth: 3,
      cursorWidth: 0,
      waveColor: "#7583d1",
      autoCenter: true,
      progressColor: "#fbae42",
    });
    /*     waveSurfer.registerPlugin(TimelinePlugin.create({style: "color: #7583d1", timeInterval: 60})) */
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <div className="flex flex-row  p-6 mt-4 h-1/6 w-1/2 border-2 rounded-lg">
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
        className="text-black"
      >
        {isPlaying ? (
          <PauseCircle color="#7583d1" width={40} height={40} strokeWidth={1} />
        ) : (
          <PlayCircle color="#7583d1" width={40} height={40} strokeWidth={1} />
        )}
      </button>
      <div className="flex flex-col justify-start p-6">
        <div ref={containerRef} className="w-96" />
      </div>
    </div>
  );
};

export default Waveform;
