import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import SEO from '../components/seo';
import type { PageRendererProps } from 'gatsby';
import type { Query, SitePageContext } from '../graphql-types';

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: Query;
}

const BlogPost = ({ data }: Props): JSX.Element => {
  const post = data.mdx!;
  const frontmatter = post.frontmatter!;
  return (
    <Layout>
      <SEO title={frontmatter.title!} description={frontmatter.description!} />
      <article className="markdown">
        <MDXRenderer>{post.body!}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
