import Footer from "@/components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function Imprint() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className={`p-6 text-brown-one font-light`}>
          <h1 className="text-2xl text font-bold">Impressum</h1>
          <br />
          <p>Angaben gemäß § 5 TMG</p>
          <br />
          <p className="text-lg text font-bold">Kontakt</p>
          <br />
          <span className="font-bold">Hammerstücke</span>
          <p>
            Alstertalweg 32
            <br />
            24558 Wakendorf II
            <br />
          </p>
          <p></p>
          <p>
            <br />
            <span>Vertreten durch:</span>
            <br />
            Katja Rogall
            <br />
            Telefon: 0176 32696949
            <br />
            E-Mail:{" "}
            <a
              className="text-brown-one underline"
              href="mailto: info@hammerstuecke.de"
            >
              info@hammerstuecke.de
            </a>
            <br />
            <br />
          </p>
          <p>
            Steuer-Nummer: 11/170/07287
            <br />
            <br />
          </p>
          <p>
            <span>Haftungsausschluss: </span>
            <br />
            <br />
            <span className="text-lg text font-bold">Datenschutz</span>
            <br />
            <br />
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
            <br />
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
            <br />
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
            <br />
          </p>
          <br />
          Website Impressum von{" "}
          <a
            className="text-brown-one underline"
            href="https://www.impressum-generator.de"
          >
            impressum-generator.de
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
