/* eslint-disable @typescript-eslint/camelcase */
const config = require('./config/website.js');
const { URL = config.siteUrl } = process.env;
const siteUrl = URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: config.keywords,
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author.name,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#1F6537',
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        purgeOnly: ['src/css/style.css', 'src/css/global.css'],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: 'language-',
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
        // This toggles the display of line numbers globally alongside the code.
        // To use it, add the following line in gatsby-browser.js
        // right after importing the prism color scheme:
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        // Defaults to false.
        // If you wish to only show line numbers on certain code blocks,
        // leave false and use the {numberLines: true} syntax below
        showLineNumbers: false,
        // If setting this to true, the parser won't handle and highlight inline
        // code used in markdown i.e. single backtick code like `this`.
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
        languageExtensions: [
          {
            language: 'superscript',
            extend: 'javascript',
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: 'root',
          host: 'localhost',
          global: false,
        },
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
        plugins: [`gatsby-remark-prismjs`],
      },
    },
  ],
};
