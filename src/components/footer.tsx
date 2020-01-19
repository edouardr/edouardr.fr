import * as React from 'react';
import { Twitter, GitHub, LinkedIn, RSS } from './social';
import { Link } from 'gatsby';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <>
      <footer className={`${className} w-full bottom-0`}>
        <div className="flex text-greenlight-100 items-center justify-center bg-greenlight-900 p-4">
          <LinkedIn />
          <GitHub />
          <Twitter />
          <RSS />
        </div>
        <div className="flex text-greenlight-100 items-center justify-center bg-black p-1">
          <Link
            className="text-xs text-tight hover:underline hover:text-greenlight-300"
            to="/terms"
          >
            Terms
          </Link>
          <span>&nbsp;-&nbsp;</span>
          <a
            className="text-xs text-tight hover:underline hover:text-greenlight-300"
            href="https://github.com/edouardr/edouardr.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
