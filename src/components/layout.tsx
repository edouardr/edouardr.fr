import * as React from 'react';
import Image from '../components/image';
import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="w-full bg-greenlight-500">
        {' '}
        <div className="lg:flex flex-row-reverse">
          <div
            id="sidebar"
            className="hidden inset-0 pt-24 z-90 w-full lg:-mb-0 lg:static lg:bg-greenlight-700 lg:pt-0 lg:w-1/5 lg:block"
          >
            <div
              id="navWrapper"
              className="scrolling-touch lg:block lg:relative lg:sticky lg:top-0 bg-gray-100 lg:bg-transparent"
            >
              <nav className="min-h-screen pt-6 text-base lg:text-sm lg:py-12 sticky?lg:h-screen">
                <div className="p-8 flex items-center justify-center">
                  <Image />
                </div>
                <Footer className="absolute" />
              </nav>
            </div>
          </div>

          <div
            id="content-wrapper"
            className="w-full bg-gray-100 lg:w-3/5 lg:shadow-2xl lg:px-10 lg:rounded-l-lg"
          >
            <Header />
            <div id="content">{children}</div>

            <Footer className="lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
