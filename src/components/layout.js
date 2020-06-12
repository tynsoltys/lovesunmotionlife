/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children, location, isHome }) => {
  console.log("layoutreturn", children)
  console.log(isHome)
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
    <div className="body-container h-screen">
      {isHome ? null : <Header siteTitle={data.site.siteMetadata.title} />}
      <div className="font-alt h-full">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Plast Canada.
          {` `}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
