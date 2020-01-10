import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const UseCases = (): JSX.Element => (
  <Layout>
    <SEO title="Use Cases" />

    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
        Use&nbsp;
        <span className="text-greenlight-500">Cases.</span>
      </h1>
    </div>
  </Layout>
);

export default UseCases;
