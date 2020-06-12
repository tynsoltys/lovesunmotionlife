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
        <div className=" border ">
          <LogoFancy />
        </div>
        <div className="ulad-links-container flex flex-row content-center justify-center">
          <Link
            className="btn text-5xl font-bold text-gray-900 m-8 w-1/3 bg-blue-600 hover:bg-blue-500 p-8 rounded shadow-lg"
            to="/tochky_upn"
          >
            УПН
          </Link>
          <Link
            className="btn text-5xl font-bold w-1/3 m-8 text-red-800  bg-yellow-600 hover:bg-orange-500 border-4 border-red-700 p-8 rounded shadow-lg"
            to="/tochky_upn"
          >
            УПЮ+
          </Link>
        </div>
        <div className="">
          <Link>Реєстрaція</Link>
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
