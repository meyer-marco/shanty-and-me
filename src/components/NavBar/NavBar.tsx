import style from "./navBar.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";

export interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  return (
    <div className={`flex w-full ${style.nav}`}>
      <div className="flex flex-col justify-center content-start pl-4  text-neutral-50 sm:text-xl font-light text-sm flex-wrap ">
        <Link href="/">
          {/*    <Logo width={90} height={90} /> */}
          {"Shanty & Me"}
        </Link>
      </div>
    </div>
  );
}
