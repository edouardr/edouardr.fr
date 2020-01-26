import { GatsbyCreateNode } from '../types';

export const createNode: GatsbyCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let slug = '';
    if (
      node.fileAbsolutePath &&
      node.fileAbsolutePath.includes('content/blog/')
    ) {
      slug = `/blog/${(node.frontmatter && node.frontmatter.slug) ||
        (parent && parent.name!)}`;
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
