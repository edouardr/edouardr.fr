const path = require(`path`);

const createPosts = (createPage, edges) => {
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

const createBlogPages = ({ data, actions }) => {
  if (data.edges.length <= 0) {
    throw new Error('There are no posts!');
  }

  const { edges } = data;
  const { createPage } = actions;
  createPosts(createPage, edges);
  return;
};

exports.createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(
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

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    if (node.fileAbsolutePath.includes('content/blog/')) {
      slug = `/blog/${node.frontmatter.slug || parent.name}`;
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
