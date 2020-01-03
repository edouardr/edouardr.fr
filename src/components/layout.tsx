import * as React from 'react';
import Footer from './footer';

interface LayoutProps {
  children: any[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="leading-normal tracking-normal text-white gradient">
        <div className="max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          {children}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
