import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="font-sans overflow-hidden bg-white">
      <main className="flex flex-col justify-center px-8">
        <div className="flex flex-col justify-start items-start max-w-2xl mx-auto w-full min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
