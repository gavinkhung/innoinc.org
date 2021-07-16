import { useRouter } from "next/router";

import { FC } from "react";
import Link from "next/link";

const Nav: FC = () => {
  return (
    <div className="p-6 my-0 md:mb-6 bg-primary-red">
      <nav
        className={"flex justify-between items-center max-w-5xl w-full mx-auto"}
      >
        <p className="text-lg md:text-xl lg:text-3xl font-bold uppercase tracking-wide text-white">
          <Link href="\">INNO</Link>
        </p>

        <ul className="flex flex-row flex-wrap list-none">
          <NavItem route="home" />
          <NavItem route="about" />
          <NavItem route="events" />
          <NavItem route="resources" />
          <NavItem route="contact" />
        </ul>
      </nav>
    </div>
  );
};
export default Nav;

type NavItemProps = {
  route: string;
};
const NavItem: FC<NavItemProps> = ({ route }: NavItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link href={route === "home" ? "/" : `/${route}`}>
        <a
          className={`cursor-pointer px-1 md:px-2 text-lg md:text-xl font-normal text-gray-100 capitalize border-b-4 border-transparent hover:text-gray-300 transition ${
            ((router.pathname === "/" && route === "home") ||
              router.pathname === "/" + route) &&
            "border-gray-400"
          }`}
        >
          {route}
        </a>
      </Link>
    </li>
  );
};
