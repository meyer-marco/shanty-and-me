import React from "react";
import style from "./footer.module.css";
import Link from "next/link";
import { Instagram } from "iconoir-react";

interface FooterProps {}

function Footer(props: FooterProps) {
  const textStyles = "text-neutral-50 content-center  px-3";

  return (
    <div
      className={`flex flex-wrap w-full h-auto justify-center content-center ${style.footer}`}
    >
      <div className="flex flex-col justify-center text-neutral-50 content-center sm:text-xl font-light text-sm px-1 sm:px-3">
        <Link href="/imprint">Impressum</Link>
      </div>
      <div className="flex flex-col justify-center text-neutral-50 content-center sm:text-xl font-light text-sm px-1 sm:px-3">
        <Link href="/about">Über mich</Link>
      </div>
      <div className="flex flex-col justify-center text-neutral-50 content-center sm:text-xl font-light text-sm px-1 sm:px-3">
        <Link href="/privacy">Datenschutzerklärung</Link>
      </div>
      <div className="flex flex-col justify-center text-neutral-50 content-center sm:text-xl font-light text-sm px-1 sm:px-3">
        <Link href="/imprint">
          <span>Kontakt</span>
        </Link>
      </div>
      {/*       <div className="flex flex-col justify-center text-neutral-50 content-center sm:text-xl font-light text-sm px-1 sm:px-3">
        <Link href="/">
          <div className="flex flex-row justify-center content-center">
            <Instagram name="instagram" strokeWidth={1} />
            <span className="pl-1 sm:pl-2">Instagram</span>
          </div>
        </Link>
      </div> */}
    </div>
  );
}

export default Footer;
