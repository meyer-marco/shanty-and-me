import Footer from "@/components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function Contact() {
  const contactText = `Contact`;
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className={`h-screen p-6 text-brown-one`}>{contactText}</div>
      <Footer />
    </div>
  );
}
