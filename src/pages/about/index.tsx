import Footer from "@/components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div>
        <div
          className={`p-6 text-brown-one font-light text-center ${montserrat.className}`}
        >
          Hallo, ich bin Katja, <span>&#128075;</span> <br />
          <br />
          eine passionierte und erfahrene Goldschmiedin aus dem Herzen
          Schleswig-Holsteins. <br />
          <br />
          Geboren und aufgewachsen bin ich in der wunderschönen Landschaft von
          Schleswig-Holstein, wo die sanften Hügel und die malerische Küste
          meine früheste Inspiration waren. Die natürliche Schönheit meiner
          Heimat spiegelt sich in meiner Arbeit wider, von den feinsten Details
          bis hin zur Auswahl der Materialien, die ich für meine Schmuckstücke
          verwende.
          <br />
          <br />
          Meine Reise als Goldschmiedin begann in jungen Jahren, als ich die
          Fähigkeit entdeckte, schönes Schmuckdesign zu kreieren, das sowohl
          klassisch als auch zeitgemäß ist. Durch meine Ausbildung und Erfahrung
          habe ich gelernt, das Handwerk mit Präzision und Kunstfertigkeit zu
          beherrschen, und ich betrachte jedes Stück, das ich erschaffe, als ein
          Kunstwerk für sich.
          <br />
          <br />
          Die Leidenschaft für mein Handwerk wuchs mit jeder Arbeit, und
          letztendlich entschied ich mich, meine eigene Goldschmiede zu gründen.
          Hier in meiner Werkstatt arbeite ich mit größter Sorgfalt und Hingabe,
          um jedem einzelnen Schmuckstück eine persönliche und einzigartige Note
          zu verleihen.
          <br />
          <br />
          Ich fühle mich geehrt, Ihnen durch meine Arbeit Freude bereiten zu
          können, und ich lade Sie ein, sich die Sammlung anzuschauen und
          vielleicht das perfekte Stück zu finden, das Ihre Geschichte erzählt.
          Jeder hat seine eigene Geschichte zu erzählen, und ich freue mich
          darauf, Ihre Geschichte durch meine Kreationen zu erzählen.
          <br />
          <br />
          Herzlich willkommen in meiner Welt der handgefertigten Schmuckkunst.
          <br />
          <br />
          Mit besten Grüßen, Katja <span>&#128522;</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
