import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              id
              title
              path
              yoast {
                metadesc
              }
            }
          }
        }
      }
    `}
    render={data => {
      const cards = []

      for (let edge of data.allWordpressPost.edges) {
        // cards.push(
        //   <article key={edge.node.id}>
        //     <h1><Link to={edge.node.path} dangerouslySetInnerHTML={{ __html: edge.node.title }} /></h1>
        //     <p dangerouslySetInnerHTML={{ __html: edge.node.yoast.metadesc }}></p>
        //   </article>
        // )
        cards.push(
          <Card key={edge.node.id}>
            <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
            >
              <Link to={edge.node.path} dangerouslySetInnerHTML={{ __html: edge.node.title }} />
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              dangerouslySetInnerHTML={{ __html: edge.node.yoast.metadesc }}
            />
            </CardContent>
          </Card>
        )
      }

      return cards
    }}
  />
)

export default Posts