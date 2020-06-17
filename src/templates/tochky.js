import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TochkaGrid from "../components/TochkaGrid"

export default function TochkaPage({ data }) {
  const tochkaPage = data.prismic.allTochkys.edges[0].node
  const { tochky_title, ulad } = tochkaPage
  console.log(`ULAD IS:`, ulad)

  const allActivities = data.prismic.allActivitys.edges
  // console.log(allActivities)

  function allActivitysByUlad(activities, ulad) {
    console.log(`HUH`, activities, ulad)
    const activityList = activities.filter(i => {
      const nodeUlad = JSON.stringify(i.node.ulad)
      const pageUlad = JSON.stringify(ulad)
      // console.log("TEST", nodeUlad, pageUlad)
      return nodeUlad === pageUlad
    })
    return activityList
  }

  // console.log(allActivitysByUlad(allActivities, ulad))

  return (
    <Layout ulad={ulad}>
      <h1>{tochky_title[0].text}</h1>
      <TochkaGrid
        tochky={allActivitysByUlad(allActivities, ulad)}
        ulad={ulad}
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
              lang
              alternateLanguages {
                lang
                uid
              }
            }
          }
        }
      }
      allActivitys {
        edges {
          node {
            ulad
            activity_title
            activity_subtitle
            _linkType
            _meta {
              uid
            }
            activity_category
            activity_code
          }
        }
      }
    }
  }
`
