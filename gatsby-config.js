require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteTitle: `FUNKČNÍ & OSOBNÍ TRENÉR Jana Búthová`,
    siteDescription: `FUNKČNÍ & OSOBNÍ TRENÉR v Dolních Hbitech - Osobní tréninky, Skupinové tréninky, Výživové poradenství, Tréninkové plány`,
    siteUrl: `https://www.janabuthovatrainer.cz`,
    author: `@Lukas Valta <valtalukas@sezanm.cz>`,
    social: {
      twitter: `Lukas`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-resolve-src",
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8h7p5m57illg`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jana Búthová | FUNKČNÍ & OSOBNÍ TRENÉR`,
        short_name: `Jana Búthová`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/images/LOGOo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
