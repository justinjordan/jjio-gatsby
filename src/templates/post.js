import React from 'react'
import { graphql } from 'gatsby'
import entities from 'entities'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import dayjs from 'dayjs'

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../components/featured-image"

import '../styles/post.scss'

const useStyles = makeStyles(theme => ({
  content: {
    marginBottom: '3rem',
  },
}))

const Post = ({ data }) => {
  const { wordpressPost: post } = data
  const classes = useStyles()

  let featuredImage = ''
  if (post.featured_media) {
    featuredImage = (
      <FeaturedImage src={post.featured_media.localFile.childImageSharp.original.src}/>
    )
  }

  const prettyDate = dayjs(post.date).format('MMMM D, YYYY')
  
  return (
    <Layout>
      <SEO
        title={entities.decodeHTML(post.title)}
        description={post.yoast.metadesc}
      />
      <article>
        <header>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
              <address class="header__author">
                Posted by <span rel="author">{post.author.name}</span> on <time datetime={post.date}>{prettyDate}</time>
              </address>
              <p className="header__description" dangerouslySetInnerHTML={{ __html: post.yoast.metadesc }}></p>
            </Grid>
            <Grid item sm={6}>
              {featuredImage}
            </Grid>
          </Grid>
        </header>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
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