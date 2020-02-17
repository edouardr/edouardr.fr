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
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-offline`,
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        decks: [],
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              aliases: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
