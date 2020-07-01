import React from "react"
import { Link, graphql } from "gatsby"
import { linkResolver } from "../utils/linkResolver"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LogoFancy from "../components/LogoFancy"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

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
            className="btn text-5xl font-bold w-1/4 m-8 text-red-600  bg-yellow-500 hover:bg-yellow-300 p-8 rounded shadow-lg"
            to="/tochky_upn"
          >
            УПН
          </Link>
          <Link
            className="btn text-5xl font-bold w-1/4 m-8 text-yellow-500  bg-red-600 hover:bg-red-500 p-8 rounded-lg shadow-lg"
            to="/tochky_upu"
          >
            УПЮ+
          </Link>
        </div>
        <div className="mt-8">
          <Link className="text-gray-200 text-4xl">
            <FontAwesomeIcon icon={["fal", "question-circle"]} />
          </Link>
        </div>
        <div>
          <Link></Link>
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
