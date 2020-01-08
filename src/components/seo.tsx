import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Author } from '../../config/website';

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
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
