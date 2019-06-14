import React from 'react'
import { graphql } from 'gatsby'
import entities from 'entities'
import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../components/featured-image"

import '../styles/post.scss'

const Post = ({ data }) => {
  const { wordpressPost: post } = data

  let featuredImage = ''
  if (post.featured_media) {
    featuredImage = (
      <FeaturedImage src={post.featured_media.localFile.childImageSharp.original.src}/>
    )
  }
  
  return (
    <Layout>
      <SEO
        title={entities.decodeHTML(post.title)}
        description={post.yoast.metadesc}
      />
      <header>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
            <h2 dangerouslySetInnerHTML={{ __html: post.yoast.metadesc }}></h2>
          </Grid>
          <Grid item sm={6}>
            {featuredImage}
          </Grid>
        </Grid>
      </header>
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
      featured_media {
        localFile {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`