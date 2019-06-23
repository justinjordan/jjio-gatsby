import React from 'react'
import { graphql } from 'gatsby'
import entities from 'entities'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FeaturedImage from '../components/featured-image'
import WordpressContent from '../components/wordpress-content'

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: '4rem',
  },
  title: {
    margin: '1.8rem 0 1rem 0',
    fontWeight: 400,
    lineHeight: '100%',
  },
  author: {
    fontSize: '1.2rem',
  },
  description: {
    fontSize: '1.8rem',
    fontWeight: 300,
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '120%',
  },
  featuredImage: {
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}))

const Post = ({ data }) => {
  const { wordpressPost: post } = data
  const classes = useStyles()

  const prettyDate = dayjs(post.date).format('MMMM D, YYYY')
  
  return (
    <Layout>
      <SEO
        title={entities.decodeHTML(post.title)}
        description={post.yoast.metadesc}
      />
      <article>
        <header className={classes.header}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h1"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <address className={classes.author}>
                Posted by <span rel="author">{post.author.name}</span> on <time dateTime={post.date}>{prettyDate}</time>
              </address>
              <p className={classes.description} dangerouslySetInnerHTML={{ __html: post.yoast.metadesc }}></p>
            </Grid>
            <Grid item xs={12} lg={6}>
              {!post.featured_media ? '' : (
                <FeaturedImage className={classes.featuredImage} src={post.featured_media.localFile.childImageSharp.original.src} />
              )}
            </Grid>
          </Grid>
        </header>
        <WordpressContent content={post.content} />
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