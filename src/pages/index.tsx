import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// color palette: https://coolors.co/7583d1-ffffff-f05477-fbae42-807dcb

export default function Main() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="h-screen flex flex-col"></div>
      <Footer />
    </div>
  );
}
