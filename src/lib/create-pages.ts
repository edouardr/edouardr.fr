import path from 'path';
import type {
  GatsbyCreatePages,
  CreateBlogPages,
  CreateBlogPost,
  BlogPagesQuery,
} from '../types';

const createPosts: CreateBlogPost = ({ createPage, edges }) => {
  edges.forEach(({ node }) => {
    const pagePath = node.fields.slug;

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });
};

const createBlogPages: CreateBlogPages = ({ data, actions }) => {
  const { edges } = data;
  if (edges.length <= 0) {
    throw new Error('There are no posts!');
  }

  const { createPage } = actions;
  createPosts({ createPage, edges });
  return;
};

export const createPages: GatsbyCreatePages = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { data, errors }: BlogPagesQuery = await graphql(
    `
      fragment PostDetails on Mdx {
        fileAbsolutePath
        id
        parent {
          ... on File {
            name
            sourceInstanceName
          }
        }
        excerpt(pruneLength: 250)
        fields {
          slug
        }
      }
      query loadPagesQuery($limit: Int!) {
        blogs: allMdx(
          limit: $limit
          filter: { fileAbsolutePath: { regex: "//content/blog//" } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              ...PostDetails
            }
          }
        }
      }
    `,
    { limit: 1000 },
  );
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  createBlogPages({
    data: data.blogs,
    actions,
  });
};
