/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            slug
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            slug
            status
            template
            format
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.slug === 'gatsby-dummy-page') {
      return
    }

    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  allWordpressPost.edges.forEach(edge => {
    if (edge.node.slug === 'gatsby-dummy-post') {
      return
    }

    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}

