import React from 'react'
import { graphql } from 'gatsby'
import entities from 'entities'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <SEO
        title={entities.decodeHTML(post.title)}
        description={post.yoast.matadesc}
      />
      <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostById($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      author {
        name
      }
      yoast {
        metadesc
      }
    }
  }
`