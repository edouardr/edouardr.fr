import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import type { Author } from '../../config/website';

interface MetaAttribute {
  name: string;
  content: string;
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: MetaAttribute[];
  title: string;
}

interface SiteQuery {
  site: Site;
}

interface Site {
  siteMetadata: SiteMetadata;
}

interface SiteMetadata {
  title: string;
  description: string;
  author: Author;
}

const SEO = ({
  description,
  lang = `en`,
  meta = [],
  title = ``,
}: SEOProps): JSX.Element => {
  const { site } = useStaticQuery<SiteQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author.name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
