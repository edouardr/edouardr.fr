import * as React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps): JSX.Element => (
  <header>
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-greenlight-100 shadow"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
          <Link to="/" className="flex items-center no-underline text-black">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </nav>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
