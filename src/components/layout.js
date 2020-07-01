/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StateContextConsumer } from "./stateContextWrapper"
import Header from "./header"
import { uladification } from "../utils/uladConverters"

const Layout = ({ children, ulad, pageType }) => {
  // console.log("layoutreturn", children)
  // console.log(`is home page`, isHome)
  // console.log(`ulad is`, ulad)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const info = {}

  return (
    // <StateContextConsumer>
    <div className={`body-container bg-gray-300 font-serif ${pageType}-page`}>
      {pageType !== "homepage" ? (
        <Header
          siteTitle={data.site.siteMetadata.title}
          uladName={uladification(ulad)}
          pageType={pageType}
          ulad={ulad}
        />
      ) : (
        ""
      )}

      <div className="">
        <main className="">{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Plast Canada.
        {` `}
      </footer>
    </div>
    // </StateContextConsumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
