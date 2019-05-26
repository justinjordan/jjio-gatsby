module.exports = {
  siteMetadata: {
    title: `JustinJordan.io`,
    description: `Justin Jordan's blog about web development and what's new in tech.`,
    author: `Justin Jordan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JustinJordan.io`,
        short_name: `JJio`,
        start_url: `/`,
        background_color: `#03a9f4`,
        theme_color: `#03a9f4`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cms.justinjordan.io`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
