/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { Component } from "react"
import "./src/styles/index.scss"
import StateWrapper from "./src/components/stateWrapper"

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)

export const wrapPageElement = ({ element, props }) => (
  <StateWrapper {...props}>{element}</StateWrapper>
)
