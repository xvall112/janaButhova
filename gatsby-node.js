/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

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
