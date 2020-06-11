import React from "react"
import { Link, graphql } from "gatsby"
import { linkResolver } from "../utils/linkResolver"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  console.log(data)
  const homepage = data.prismic.allHomepages.edges[0].node
  return (
    <Layout>
      <div className="logo">
        <img src={homepage.logo.url} alt={homepage.logo.alt} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    prismic {
      allHomepages {
        edges {
          node {
            logo
            title
            intro
            additional_info
            _linkType
            help_link {
              _linkType
            }
            links {
              link {
                _linkType
              }
              link_text
            }
          }
        }
      }
    }
  }
`
