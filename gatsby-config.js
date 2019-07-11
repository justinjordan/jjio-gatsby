require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `JustinJordan.io`,
    description: `Justin Jordan's blog about web development and what's new in tech.`,
    author: `Justin Jordan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `${process.env.GTM_ID}`,
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // Specify optional GTM environment details.
        gtmAuth: `${process.env.GTM_AUTH}`,
        gtmPreview: `${process.env.GTM_PREVIEW}`,
        dataLayerName: `${process.env.GTM_DATALAYER}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
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
        baseUrl: `${process.env.WORDPRESS_DOMAIN}`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `${process.env.WORDPRESS_DOMAIN}`,
              protocol: `https`
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Material Icons`,
          },
          {
            family: `Quicksand`,
          },
          {
            family: `Pacifico`,
          },
          {
            family: `Merriweather`,
            variants: [`300`, `400`]
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`]
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
