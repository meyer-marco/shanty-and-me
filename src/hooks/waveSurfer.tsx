// Import React hooks
import { useRef, useState, useEffect, useCallback } from "react";

// Import WaveSurfer
import WaveSurfer from "wavesurfer.js";

// WaveSurfer hook
export const useWavesurfer = (containerRef: any, options: any) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};
