import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <SEO title={page.title} keywords={[`web development`]} />
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`