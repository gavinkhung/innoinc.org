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
      <main className="flex flex-col justify-center px-8">
        <div className="flex flex-col justify-start items-start max-w-4xl mx-auto w-full min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
