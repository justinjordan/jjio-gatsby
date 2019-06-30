import React, { useState } from 'react'
import { Link } from 'gatsby'
import dayjs from 'dayjs'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardFooter from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const PostCard = ({ post }) => {

  const [depth, setDepth] = useState(1)

  const onMouseOver = () => {
    setDepth(6)
  }
  const onMouseOut = () => {
    setDepth(1)
  }

  const prettyDate = dayjs(post.date).format('MMMM D, YYYY')

  return (
    <Card
      elevation={depth}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{
        height: '100%',
      }}
    >
      <Link to={post.path} style={{
        color: '#000000',
        textDecoration: 'none',
      }}>
        {!post.featured_media ? '' : (
          <CardMedia
            component="img"
            height="400"
            image={post.featured_media.localFile.childImageSharp.original.src}
            title=""
            alt=""
          />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              fontFamily: 'Merriweather, serif',
              fontWeight: 400,
            }}
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="address"
          >
            By <span rel="author">{post.author.name}</span> on <time dateTime={post.date}>{prettyDate}</time>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            dangerouslySetInnerHTML={{ __html: post.yoast.metadesc }}
          />
        </CardContent>
        <CardFooter/>
      </Link>
    </Card>
  )
}

export default PostCard