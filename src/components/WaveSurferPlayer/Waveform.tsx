import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { PlayCircle, PauseCircle } from "react-feather";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

const Waveform = ({ audio }: { audio: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineref = useRef<HTMLElement>(null);
  const waveSurferRef = useRef<any>(null);
  const [isPlaying, toggleIsPlaying] = useState(false);

  // TODO: fix click behaviour

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current as HTMLDivElement,
      barWidth: 3,
      cursorWidth: 0,
      height: 80,
      waveColor: "#7583d1",
      autoCenter: true,
      progressColor: "#fbae42",
      fillParent: true,
    });
    /*     waveSurfer.registerPlugin(
      TimelinePlugin.create({
        style: "color: #7583d1",
        timeInterval: 30,
        primaryLabelInterval: 20,
        secondaryLabelInterval: 5,
      })
    ); */
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  function handlePlayPause() {
    waveSurferRef.current.playPause();
    toggleIsPlaying(!isPlaying);
  }

  return (
    <div className="flex flex-col content-center justify-center p-2 mt-4 h-1/6 border-2 sm:w-1/2 rounded-lg">
      <div className="flex flex-col content-center justify-center p-6">
        <div ref={containerRef} className="max-w-screen-sm" />
      </div>
      <div className="flex flex-col content-center justify-center flex-wrap">
        <button onClick={handlePlayPause} type="button" className="text-black">
          {isPlaying ? (
            <PauseCircle
              color="#7583d1"
              width={40}
              height={40}
              strokeWidth={1}
            />
          ) : (
            <PlayCircle
              color="#7583d1"
              width={40}
              height={40}
              strokeWidth={1}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Waveform;
