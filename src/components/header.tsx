import * as React from 'react';
import { Link } from 'gatsby';

const Header = (): JSX.Element => {
  return (
    <>
      <div id="header" className="hidden lg:block">
        <div className="flex top-0 inset-x-0 z-100 h-16 items-center">
          <div className="w-full max-w-screen-xl mx-auto px-6">
            <div className="flex items-center -mx-6">
              <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                <div className="flex items-center">
                  <a href="/" className="block lg:mr-4">
                    edouardr.fr
                  </a>
                </div>
              </div>

              <div className="flex flex-grow relative">
                <div className="lg:h-full absolute right-0 lg:flex justify-between px-6">
                  <div className="flex justify-start items-center text-greenlight-900">
                    <Link
                      className="link"
                      to="/blog"
                      activeClassName="link-active"
                    >
                      Blog
                    </Link>
                    <Link
                      className="link"
                      to="/use-cases"
                      activeClassName="link-active"
                    >
                      Use Cases
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
