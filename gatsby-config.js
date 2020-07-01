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
        name: `lovesunmotionlife-theme`,
        short_name: `lsml`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/LSML_logo_xs.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [
              `400`,
              `500`,
              `700`,
              `800`,
              `400i`,
              `500i`,
              `700i`,
              `800i`,
            ],
          },
          {
            family: `Rubik`,
            variants: [`300`, `400`, `500`, `300i`, `400i`, `500i`],
          },
          {
            family: `Rubik Mono One`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "lsml-2", // (REQUIRED, replace with your own)
        defaultLang: "en-ca",
        langs: ["ua-ua", "en-ca"],
        accessToken: `MC5YdUU3cGhJQUFGYk5ZWFdv.R--_vQ5177-9YO-_ve-_vQ43SmDvv73vv73vv71WUO-_ve-_vT3vv73vv71F77-977-977-977-9BFIHR--_vQ`, // (optional API access token)
        previews: false, // (optional, activated Previews. Default: false)
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
