import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`web development`]} />
    <Posts />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    wordpressSiteMetadata {
      name
      description
    }
  }
`