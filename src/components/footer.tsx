import * as React from 'react';
import { Twitter, GitHub, LinkedIn } from './social';

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="w-full text-center p-4 pin-b">
        <div className="p-8 flex items-center justify-center text-greenlight-900">
          <LinkedIn />
          <GitHub />
          <Twitter />
        </div>
      </footer>
    </>
  );
};

export default Footer;
