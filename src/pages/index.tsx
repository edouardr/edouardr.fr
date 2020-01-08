import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />

    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
        Coming&nbsp;
        <span className="text-greenlight-500">Soon.</span>
      </h1>
    </div>
  </Layout>
);

export default IndexPage;
