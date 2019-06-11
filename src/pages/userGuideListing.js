import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const UserGuideListing = ({ data }) => {
  const userGuides = data.allKenticoCloudItemUserGuide.edges;
  const userGuideList = userGuides.map(guide => <li key={guide.node.elements.slug.value}><Link to={`/${guide.node.elements.slug.value}`}>{guide.node.elements.title.value}</Link></li>);
  return(
    <Layout>
      <h1>User Guides</h1>
      <p>Use these guides to do things</p>
      <ul>
        { userGuideList }
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
query KenticoUserGuides{
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
}
`

export default UserGuideListing
