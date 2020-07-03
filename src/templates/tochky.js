import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TochkaGrid from "../components/TochkaGrid"
import { uladification } from "../utils/uladConverters"

export default function TochkaPage({ data }) {
  const prismicContent = data.prismic.allTochkys.edges[0]
  if (!prismicContent) {
    return null
  }
  const tochkaPage = prismicContent.node
  const { tochky_title, ulad } = tochkaPage

  const upnActivitys = data.prismic.upnActivitys
  const upuActivitys = data.prismic.upuActivitys

  return (
    <Layout ulad={ulad} pageType="tochky">
      <TochkaGrid
        tochky={ulad == true ? upuActivitys : upnActivitys}
        ulad={uladification(ulad)}
      />
    </Layout>
  )
}

export const query = graphql`
  query TochkaPageQuery($uid: String) {
    prismic {
      allTochkys(uid: $uid) {
        edges {
          node {
            ulad
            tochky_title
            _linkType
            _meta {
              uid
            }
          }
        }
      }
      upnActivitys: allActivitys(where: { ulad: false }) {
        edges {
          node {
            ulad
            activity_title
            activity_subtitle
            has_event
            _linkType
            _meta {
              uid
            }
            activity_category
            activity_code
          }
          cursor
        }
      }
      upuActivitys: allActivitys(where: { ulad: true }) {
        edges {
          node {
            ulad
            activity_title
            activity_subtitle
            has_event
            _linkType
            _meta {
              uid
            }
            activity_category
            activity_code
          }
          cursor
        }
      }
    }
  }
`
