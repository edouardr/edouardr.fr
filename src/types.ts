import type { MarkdownRemark, Node } from './graphql-types';

interface Post {
  node: {
    id: number;
    fields: {
      slug: string;
    };
  };
}

export interface BlogPagesQuery {
  data: {
    blogs: {
      edges: Post[];
    };
  };
  errors: any;
}

interface PageInput {
  path: string;
  component: string;
  layout?: string;
  context?: any;
}

interface FieldInput {
  name: string;
  node: MarkdownRemark;
  value: any;
}

interface BoundActionCreators {
  createNodeField: (field: FieldInput) => void;
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

export type GatsbyCreateNode = (fns: {
  node: MarkdownRemark;
  getNode: (node: Node | null | undefined) => Node | null | undefined;
  actions: BoundActionCreators;
}) => void;

export type GatsbyCreatePages = (fns: {
  graphql: any;
  actions: BoundActionCreators;
  reporter: any;
}) => void;

export type CreateBlogPages = (fns: {
  data: BlogPagesQuery['data']['blogs'];
  actions: BoundActionCreators;
}) => void;

export type CreateBlogPost = (fns: {
  createPage: BoundActionCreators['createPage'];
  edges: Post[];
}) => void;
