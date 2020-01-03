import * as React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <div className="p-8 flex items-center justify-center">
      <Image />
    </div>
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
        Coming
        <span className="text-greenlight-500">&nbsp;Soon.</span>
      </h1>
    </div>
  </Layout>
);

export default IndexPage;
