import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const handleStepList = guideSteps => guideSteps.map((step, i) => {
  const stepData = step.elements;
  const stepImage = stepData.step_image.value;
  let stepImageNode;
  if (stepImage.length) {
    stepImageNode = <img src={stepImage[0].url} alt={stepImage[0].description} />;
  }
  return (
  <li key={`guide-step-${i + 1}`}>
    <h3>{stepData.step_title.value}</h3>
    <p>{stepData.step_content.value}</p>
    <div>
      { stepImageNode }
    </div>
  </li>
)});

// This is the layout that gets rendered
const UserGuide = ({ data }) => {
  const item = data.kenticoCloudItemUserGuide.elements;
  const guideSteps = item.content_entry_steps;
  // Get the formatted list
  const stepsList = handleStepList(guideSteps);

  return (
    <Layout>
      <h1>{item.title.value}</h1>
      <h2>Summary</h2>
      <span>Created by: {item.author.value} - {item.date_published.value}</span>
      <div dangerouslySetInnerHTML={{ __html: item.summary.value }} />
      <h2>Implementation Notes</h2>
      <div dangerouslySetInnerHTML={{ __html: item.implementation_notes.value }} />
      <h2>Steps</h2>
      <ul>
        { stepsList }
      </ul>
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
        content_entry_steps {
          elements {
            step_title {
              value
            }
            step_content {
              value
            }
            step_image {
              value {
                description
                url
              }
            }
          }
        }
      }
    }
  }
`