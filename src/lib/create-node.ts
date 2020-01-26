import { GatsbyCreateNode } from '../types';

export const createNode: GatsbyCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    let slug: string = '';
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
