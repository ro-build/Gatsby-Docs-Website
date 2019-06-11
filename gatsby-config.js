module.exports = {
  siteMetadata: {
    title: `Reason One Documentation Guide`,
    description: `Site for user guides & other things`,
    author: `clantz`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: `b5633d97-52f1-001d-ae28-b6c86f18429b` // Fill in your Project ID
        },
        // Please note that with the Sample Project generated above, `en-US` is the default language for the project and this config. For a blank project, this needs to be `default`.
        languageCodenames: [
          `en-CA` // Or the languages in your project (Project settings -> Localization)
        ]
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    }
  ],
}
