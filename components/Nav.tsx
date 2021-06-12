import { useRouter } from 'next/router';

import { FC } from 'react';
import Link from 'next/link';

const Nav: FC = () => {
  return (
    <>
      <nav
        className={
          'flex justify-between items-center max-w-5xl w-full p-8 my-0 md:my-8 mx-auto bg-[#750D37]'
        }
      >
        <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-black">
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
    </>
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
      <Link href={route === 'home' ? '/' : `/${route}`}>
        <a
          className={`cursor-pointer px-1 md:px-2 text-base md:text-lg lg:text-xl font-medium text-gray-900 capitalize border-b-4 border-transparent hover:text-gray-500 transition ${
            ((router.pathname === '/' && route === 'home') ||
              router.pathname === '/' + route) &&
            'border-gray-400'
          }`}
        >
          {route}
        </a>
      </Link>
    </li>
  );
};
