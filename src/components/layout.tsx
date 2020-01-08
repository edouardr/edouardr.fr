import * as React from 'react';
import Image from '../components/image';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          <div
            id="content-wrapper"
            className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 "
          >
            <div id="content">{children}</div>
          </div>
          <div
            id="sidebar"
            className="hidden fixed inset-0 min-h-screen pt-24 z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-greenlight-700 lg:overflow-y-hidden lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
          >
            <div
              id="navWrapper"
              className="overflow-y-auto scrolling-touch lg:block lg:relative lg:sticky lg:top-0 bg-gray-100 lg:bg-transparent overflow-hidden"
            >
              <nav className="min-h-screen pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 sticky?lg:h-screen">
                <div className="p-8 flex items-center justify-center">
                  <Image />
                </div>
                <Footer />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
