import Link from "next/link";
import { FC, ReactNode } from "react";

const Footer: FC = () => {
  return (
    <div className="p-8 my-0 bg-primary-blue-darker mt-24">
      <footer className="flex justify-between items-center max-w-5xl w-full mx-auto ">
        <div className="w-full max-w-5xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200 text-lg font-semibold">Contact</p>
            <ExternalLink href="">Instagram</ExternalLink>
            <ExternalLink href="">Facebook</ExternalLink>
            <ExternalLink href="">LinkedIn</ExternalLink>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200 text-lg font-semibold">Events</p>
            <Link href="/">
              <a className="text-gray-300 hover:text-gray-100 transition">
                IDC
              </a>
            </Link>
            <Link href="/">
              <a className="text-gray-300 hover:text-gray-100 transition">
                Summer Camp
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200 text-lg font-semibold">Resources</p>
            <Link href="/">
              <a className="text-gray-300 hover:text-gray-100 transition">
                Newsletter
              </a>
            </Link>
            <Link href="/">
              <a className="text-gray-300 hover:text-gray-100 transition">
                Curriculum
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 ">
            <p className="text-gray-200 text-lg font-semibold">Donate</p>
            <p className="text-gray-300 ">
              Inno Biotech Incorporated is a 501(c)(3) non-profit organization.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
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
