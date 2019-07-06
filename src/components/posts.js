import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

import PostCard from './post-card'

const useStyles = makeStyles({
  container: {
    margin: '3rem 0',
  },
})

const Posts = () => {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPost(
            sort: {
              fields: [date]
              order: DESC
            }
          ) {
            edges {
              node {
                id
                title
                path
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
          }
        }
      `}
      render={data => {
        const cards = []

        for (let edge of data.allWordpressPost.edges) {
          const post = edge.node

          // add post to beginning
          cards.push(
            <Grid item xs={12} md={6} key={post.id}>
              <PostCard post={post} />
            </Grid>
          )
        }

        return (
          <div className={classes.container}>
            <Grid container spacing={3}>{cards}</Grid>
          </div>
        )
      }}
    />
  )
}

export default Posts