import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const UserGuide = ({ data }) => {
  const item = data.kenticoCloudItemUserGuide.elements;

  return (
    <Layout>
      <h1>{item.title.value}</h1>
      <span>Created by: {item.author.value} - {item.date_published.value}</span>
      <div dangerouslySetInnerHTML={{ __html: item.summary.value }} />
      <div dangerouslySetInnerHTML={{ __html: item.implementation_notes.value }} />
    </Layout>
  )
}

export default UserGuide

export const pageQuery = graphql`
  query userGuidesBySlug($slug: String!) {
    kenticoCloudItemUserGuide( fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      elements {
        title {
          value
        }
        slug {
          value
        }
        date_published {
          value
        }
        author {
          value
        }
        summary {
          value
        }
        implementation_notes {
          value
        }
      }
    }
  }
`