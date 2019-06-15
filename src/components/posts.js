import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import dayjs from 'dayjs'

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
          allWordpressPost {
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
          const prettyDate = dayjs(post.date).format('MMMM D, YYYY')
          let featuredImage = ''
          if (post.featured_media) {
            featuredImage = (
              <CardMedia
                component="img"
                height="400"
                image={post.featured_media.localFile.childImageSharp.original.src}
                title=""
                alt=""
              />
            )
          }

          cards.push(
            <Grid item sm={12} lg={6} key={post.id}>
              <Card>
                <Link to={post.path} style={{
                  color: '#000000',
                  textDecoration: 'none',
                }}>
                  {featuredImage}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      component="address"
                    >
                      By <span rel="author">{post.author.name}</span> on <time datetime={post.date}>{prettyDate}</time>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      dangerouslySetInnerHTML={{ __html: post.yoast.metadesc }}
                    />
                  </CardContent>
                </Link>
              </Card>
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