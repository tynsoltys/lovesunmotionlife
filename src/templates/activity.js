import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// data.prismic.allActivitys.edges[0].node

export default function About({ data }) {
  const activity = data.prismic.allActivitys.edges[0].node
  const { activity_title, activity_type, activity_category } = activity
  return (
    <Layout>
      <h1>{activity_title[0].text}</h1>

      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allActivitys(uid: $uid) {
        edges {
          node {
            activity_title
            _linkType
            _meta {
              id
              lang
              tags
              type
              uid
            }
            activity_category
            activity_code
            activity_description
            activity_subtitle
            hutirka_docs {
              hutirka_doc {
                _linkType
              }
            }
            hutirka_intro
            hutirka_video_link
            materials
            submission_form

            ulad
            vymohy
            # vymohy_help
          }
          cursor
        }
      }
    }
  }
`
