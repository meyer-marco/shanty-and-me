import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo/Logo";
import NavBar from "@/components/NavBar/NavBar";
import { WaveSurferPlayer } from "@/components/WaveSurferPlayer/WaveSurferPlayer";
import Timeline from "wavesurfer.js/dist/plugins/timeline.js";
import { Montserrat } from "next/font/google";
import { useCallback, useState } from "react";
import letMeFloat from "./letMeFloat.mp3";
import Waveform from "@/components/WaveSurferPlayer/Waveform";

const montserrat = Montserrat({ subsets: ["latin"] });

// color palette: https://coolors.co/7583d1-ffffff-f05477-fbae42-807dcb

export default function Main() {
  const urls = ["/examples/audio/audio.wav", "/examples/audio/stereo.mp3"];
  const [audioUrl, setAudioUrl] = useState(urls[0]);

  // Swap the audio URL
  const onUrlChange = useCallback(() => {
    urls.reverse();
    setAudioUrl(urls[0]);
  }, []);

  return (
    <div className="h-screen  bg-white">
      <NavBar />
      <div className="flex flex-col content-center justify-center flex-wrap">
        {" "}
        <Logo />
      </div>

      <div className="h-screen bg-white ">
        {/*   <Logo /> */}
        <div className="p-6">
          <Waveform audio={letMeFloat} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
