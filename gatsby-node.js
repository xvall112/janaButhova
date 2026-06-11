/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type ContentfulNabizim implements Node {
      documents: [ContentfulAsset] @link(from: "documents___NODE")
    }
    type ContentfulYoutubeVideo implements Node {
      linkNaVideo: String
    }
  `)
}

/* const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //create page for Training
  const placeTemplate = path.resolve("./src/templates/training.tsx")
  const res = await graphql(`
    query MyQuery {
      allContentfulNabizim {
        nodes {
          slug
        }
      }
    }
  `)
  res.data.allContentfulNabizim.nodes.forEach(node => {
    createPage({
      component: placeTemplate,
      path: `/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
 */
