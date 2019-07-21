/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        wordpressWpUsers(slug: {
          eq: "justin"
        }) {
          description
        }
      }
    `}
    render={({ site, wordpressWpUsers: user }) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={site.siteMetadata.title}/>
        <Container maxWidth="lg">
          <main>{children}</main>
        </Container>
        <Footer bio={user.description}/>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
