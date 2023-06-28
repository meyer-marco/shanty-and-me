import style from "./navBar.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";

export interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  return (
    <div className={`flex w-full justify-center content-center ${style.nav}`}>
      <div className="flex flex-col justify-center content-center text-white">
        <Link href="/">
          {/*    <Logo width={90} height={90} /> */}
          {"Shanty & Me"}
        </Link>
      </div>
    </div>
  );
}
