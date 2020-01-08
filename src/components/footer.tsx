import * as React from 'react';
import { Twitter, GitHub, LinkedIn, RSS } from './social';

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="absolute w-full bottom-0 p-4 bg-greenlight-900">
        <div className="flex text-greenlight-100 items-center justify-center">
          <LinkedIn />
          <GitHub />
          <Twitter />
          <RSS />
        </div>
      </footer>
    </>
  );
};

export default Footer;
