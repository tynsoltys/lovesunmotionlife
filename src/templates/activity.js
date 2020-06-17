import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// data.prismic.allActivitys.edges[0].node

export default function ActivityPage({ data }) {
  const activity = data.prismic.allActivitys.edges[0].node
  const {
    activity_category,
    activity_code,
    activity_title,
    activity_subtitle,
    activity_description,
    materials,
    submission_form,
    ulad,
  } = activity
  console.log(activity_title[0].text)
  console.log(activity_subtitle[0].text)

  return (
    <Layout ulad={ulad}>
      {/* <h1>{activity_title[0].text}</h1> */}

      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query ActivityPageQuery($uid: String) {
    prismic {
      allActivitys(uid: $uid) {
        edges {
          node {
            activity_category
            activity_code
            activity_subtitle
            activity_description
            _linkType
            _meta {
              uid
            }
            materials
            submission_form
            activity_title
            ulad
          }
        }
      }
    }
  }
`
