import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// data.prismic.allActivitys.edges[0].node
export default function CalendarPage({ data }) {
  const calendarPage = data.prismic.allCalendars.edges[0].node
  const { calendar_title, ulad } = calendarPage
  console.log(`test`, ulad)
  return (
    <Layout ulad={ulad}>
      <h1>{calendar_title[0].text}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query CalendarPageQuery($uid: String) {
    prismic {
      allCalendars(uid: $uid) {
        edges {
          node {
            ulad
            calendar_title
            _linkType
            _meta {
              lang
              alternateLanguages {
                lang
                uid
              }
            }
          }
        }
      }
    }
  }
`
