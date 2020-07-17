import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { uladification } from "../utils/uladConverters"
import CalendarGrid from "../components/CalendarGrid"

export default function ZustrichPage({ data }) {
  const prismicContent = data.prismic.allPrograms.edges[0]
  if (!prismicContent) {
    return null
  }

  const ZustrichPage = prismicContent.node
  const { ulad } = ZustrichPage
  // console.log(ulad)

  const upnEvents = data.prismic.upnEvents.edges
  const upuEvents = data.prismic.upuEvents.edges

  return (
    <Layout ulad={ulad} pageType="program">
      <CalendarGrid
        upnEvents={upnEvents}
        upuEvents={upuEvents}
        ulad={uladification(ulad)}
      ></CalendarGrid>
    </Layout>
  )
}

export const query = graphql`
  query ZustrichPage($uid: String) {
    prismic {
      allPrograms(uid: $uid) {
        edges {
          node {
            program_title
            ulad
            _linkType
            _meta {
              uid
            }
          }
        }
      }
      upnEvents: allEvents(where: { ulad: false }) {
        edges {
          node {
            _linkType
            _meta {
              uid
            }
            date_and_time
            activity_title
            activity_subtitle
            has_tochka
            ulad
            activity_category
          }
        }
      }
      upuEvents: allEvents(where: { ulad: true }) {
        edges {
          node {
            _linkType
            _meta {
              uid
            }
            date_and_time
            activity_title
            activity_subtitle
            has_tochka
            ulad
            activity_category
          }
        }
      }
    }
  }
`
