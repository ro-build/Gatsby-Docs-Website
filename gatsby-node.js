const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, actions: { createNodeField }}) => {
  if (node.internal.type === `KenticoCloudItemUserGuide`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.elements.slug.value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allKenticoCloudItemUserGuide {
        edges {
          node {
            fields {
              slug
            }
            elements {
              slug {
                name
                value
                type
              }
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        throw result.errors
      }
      const guide = result.data.allKenticoCloudItemUserGuide.edges;
      guide.forEach(( { node } ) => {
        createPage({
          path: `${node.fields.slug}`,
          component: path.resolve(`src/templates/userGuide.js`),
          context: {
            slug: `${node.fields.slug}`,
          },
        })
      });
      resolve();
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  console.log(page);
  if (page.path.match(/^\/user-guides/)) {
    page.matchPath = "/user-guides/*"
    console.log(page);
    // Update the page.
    createPage(page)
  }
}