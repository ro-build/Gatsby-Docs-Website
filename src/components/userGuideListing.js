import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "./layout"

const UserGuideListing = () => (
  <StaticQuery
    query={graphql`
      query KenticoUserGuides {
        allKenticoCloudItemUserGuide {
          edges {
            node {
              elements {
                title {
                  value
                }
                slug {
                  value
                }
              }
            }
          }
        }
      }`
    }
    render={data => {
    const userGuides = data.allKenticoCloudItemUserGuide.edges;
    const userGuideList = userGuides.map(guide => <li key={guide.node.elements.slug.value}><Link to={`${guide.node.elements.slug.value}`}>{guide.node.elements.title.value}</Link></li>);
    return (
      <>
        <h1>User Guides</h1>
        <p>Use these guides to do things</p>
        <ul>
          { userGuideList }
        </ul>
      </>
    )}}
  />
)

export default UserGuideListing;