import Link from 'next/link';
import { FC, ReactNode } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex justify-between items-center max-w-5xl w-full p-8 my-0 md:my-8 mx-auto ">
      <div className="w-full max-w-5xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <p className="">Contact</p>
          <ExternalLink href="">Instagram</ExternalLink>
          <ExternalLink href="">Facebook</ExternalLink>
          <ExternalLink href="">LinkedIn</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="">Events</p>
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">IDC</a>
          </Link>
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Summer Camp
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="">Resources</p>
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Curriculum
            </a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4 ">
          <p>Donate</p>
          <p className="text-gray-500 ">
            Inno Biotech Incorporated is a 501(c)(3) non-profit organization.{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};
const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};
