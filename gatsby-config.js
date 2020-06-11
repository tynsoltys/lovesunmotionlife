module.exports = {
  siteMetadata: {
    title: `Любимо Сонце Рух Життя`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `ст. пл. вірл. Тиня Солтис, Кн.`,
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
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "lsml-2", // (REQUIRED, replace with your own)
        defaultLang: "en-ca",
        langs: ["ua-ua"],
        accessToken: `MC5YdUU3cGhJQUFGYk5ZWFdv.R--_vQ5177-9YO-_ve-_vQ43SmDvv73vv73vv71WUO-_ve-_vT3vv73vv71F77-977-977-977-9BFIHR--_vQ`, // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Activity", // TypeName from prismic
            match: "/activity/:uid", // Pages will be generated under this pattern
            path: "/activity", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/activity.js"),
          },
          {
            // (optional, builds pages dynamically)
            type: "Tochky", // TypeName from prismic
            match: "/:uid", // Pages will be generated under this pattern
            path: "/", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/tochky.js"),
          },
          {
            // (optional, builds pages dynamically)
            type: "Calendar", // TypeName from prismic
            match: "/:uid", // Pages will be generated under this pattern
            path: "/", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/calendar.js"),
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
