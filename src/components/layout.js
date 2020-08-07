/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap" rel="stylesheet" />
    </Helmet>
      <div
        style={{
          fontFamily: `'Sora', sans-serif`,
          margin: `5em auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
