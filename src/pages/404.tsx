import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
      Coming
      <span className="text-greenlight-500">&nbsp;Soon.</span>
    </h1>
  </Layout>
);

export default NotFoundPage;
