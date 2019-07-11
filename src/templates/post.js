import React from 'react'
import { graphql } from 'gatsby'
import entities from 'entities'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import dayjs from 'dayjs'

import Breadcrumbs from '../components/breadcrumbs'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FeaturedImage from '../components/featured-image'
import JumboFeaturedImage from '../components/jumbo-featured-image'
import WordpressContent from '../components/wordpress-content'

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: '4rem',
  },
  title: {
    margin: '1.8rem 0 1rem 0',
    fontFamily: 'Merriweather, serif',
    fontWeight: 400,
    lineHeight: '120%',
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
}))

const Post = ({ data }) => {
  const { wordpressPost: post, wordpressSiteMetadata: metadata } = data
  const classes = useStyles()

  const prettyDate = dayjs(post.date).format('MMMM D, YYYY')
  const featuredImage = post.featured_media.localFile.childImageSharp.original.src
  const breadcrumbs = [{
    label: 'Home',
    path: '/',
  }, {
    label: post.title,
  }]
  
  return (
    <Layout>
      <SEO
        title={entities.decodeHTML(post.title)}
        description={post.yoast.metadesc||metadata.description}
        keywords={post.yoast.metakeywords.split(',')}
        image={metadata.home + featuredImage}
      />
      <article>
        <header className={classes.header}>
          <Hidden lgUp>
            <JumboFeaturedImage
              src={featuredImage}
            />
          </Hidden>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Breadcrumbs pages={breadcrumbs} />
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
            <Hidden mdDown>
              <Grid item lg={6}>
                {!featuredImage ? '' : (
                  <FeaturedImage src={featuredImage} />
                )}
              </Grid>
            </Hidden>
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
    wordpressSiteMetadata {
      home
      name
      description
    }
    wordpressPost(id: { eq: $id }) {
      path
      title
      content
      date
      link
      author {
        name
      }
      yoast {
        metadesc
        metakeywords
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