import * as React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <div className="xl:max-w-lg xl:ml-auto">
      <img
        className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
        src="/img/beach-work.jpg"
        alt="Woman workcationing on the beach"
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
        Hi people
        <br className="hidden lg:inline" />
        <span className="text-greenlight-500">
          Welcome to your new Gatsby site.
        </span>
      </h1>
      <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
        Now go build something great.
      </p>
    </div>
    <div className="absolute inset-0 h-full w-full object-cover object-center">
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
