import { FC, ReactNode } from 'react';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="font-sans overflow-hidden bg-white">
      <Nav />
      <main className="">
        <div className="flex flex-col justify-start items-start w-full min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
