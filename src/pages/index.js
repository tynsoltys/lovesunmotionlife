import React from "react"
import { Link, graphql } from "gatsby"
import { faQuestionCircle } from "../icons/js/light"
// import { linkResolver } from "../utils/linkResolver"

import Layout from "../components/layout"
import LogoFancy from "../components/LogoFancy"

export default function IndexPage({ data }) {
  console.log(data)
  const homepage = data.prismic.allHomepages.edges[0].node

  return (
    <Layout pageType="homepage">
      <div className="homepage-container text-center flex flex-col justify-center content-center">
        <div className="logo logo-container">
          <LogoFancy />
        </div>
        <div className="ulad-links-container flex flex-row content-center justify-center">
          <Link
            className="text-5xl font-bold m-8 w-1/3 p-8 md:p-4 md:text-2xl bg-gray-600 text-gray-200 rounded shadow-lg"
            to="/tochky_upn"
          >
            УПН
          </Link>
          <Link
            className="text-5xl font-bold m-8 w-1/3 p-8 md:p-4 md:text-2xl bg-gray-600 text-gray-200 rounded-lg shadow-lg"
            to="/tochky_upu"
          >
            УПЮ+
          </Link>
        </div>
        <div className="mt-8">
          <Link className="faq-link text-3xl text-gray-200" to="/faq">
            ?
          </Link>
        </div>
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
            title
            intro
            additional_info
            _linkType
            help_link {
              _linkType
            }
          }
        }
      }
    }
  }
`
