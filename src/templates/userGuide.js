import React from "react"
import { graphql } from "gatsby"
import { isLoggedIn } from "../services/auth"
import Login from "../components/login"
import Table from "../components/table"

import Layout from "../components/layout"

const handleStepList = guideSteps => guideSteps.map((step, i) => {
  const stepData = step.elements;
  const stepImage = stepData.step_image.value;
  let stepImageNode;
  let subTaskNode = [];
  if (stepImage.length) {
    stepImageNode = <img src={stepImage[0].url} alt={stepImage[0].description} />;
  }
  if (stepData.sub_task) {
    subTaskNode = handleStepList(stepData.sub_task);
    console.log(subTaskNode);
  }
  return (
  <li key={`guide-step-${i + 1}`}>
    <h3>{stepData.step_title.value}</h3>
    <p>{stepData.step_content.value}</p>
    {stepImage.length > 0 &&
      <div>
        { stepImageNode }
      </div>
    }
    {subTaskNode.length > 0 &&
      <ul>
        { subTaskNode }
      </ul>
    }
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
      { isLoggedIn() &&
      <>
        <h1>{item.title.value}</h1>
        <h2>Summary</h2>
        <span>Created by: {item.author.value} - {item.date_published.value}</span>
        <div dangerouslySetInnerHTML={{ __html: item.summary.value }} />
        <h2>Implementation Notes</h2>
        <div dangerouslySetInnerHTML={{ __html: item.implementation_notes.value }} />
        <Table tableHeadings={['Field Name', 'Input Type', 'Description']} tableContent={item.widget_properties} />
        <h2>Steps</h2>
        <ul>
          { stepsList }
        </ul>
      </>
      }
      { !isLoggedIn() &&
        <Login path="/user-guides/login" />
      }
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
        widget_properties {
          elements {
            field_name {
              value
            }
            input_type {
              value
            }
            description {
              value
            }
          }
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
            ...SubTaskRecursive
          }
        }
      }
    }
  }

  fragment SubTaskRecursive on KenticoCloudItemContentEntryStepElements {
    sub_task {
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
      elements {
         ...SubTask
        sub_task {
          elements {
            ...SubTask
          }
        }
      }
    }
  }
  
  fragment SubTask on KenticoCloudItemContentEntryStepElements {
    sub_task {
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
`