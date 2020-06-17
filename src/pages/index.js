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
    <Layout isHome="true">
      <div className="homepage-container text-center flex flex-col justify-center bg-blue-900 content-center">
        <div className="logo container w-2/3 mx-auto mb-12">
          <LogoFancy />
        </div>
        <div className="ulad-links-container flex flex-row content-center justify-center">
          <Link
            className="btn text-5xl font-bold w-1/3 m-8 text-red-700  bg-yellow-500 hover:bg-yellow-400 p-8 rounded shadow-lg"
            to="/tochky_upn"
          >
            УПН
          </Link>
          <Link
            className="btn text-5xl font-bold w-1/3 m-8 text-yellow-500  bg-red-700 hover:bg-red-600 p-8 rounded shadow-lg"
            to="/tochky_upu"
          >
            УПЮ+
          </Link>
        </div>
        <div className="">
          <Link>?</Link>
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
