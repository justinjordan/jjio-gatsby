import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: `inline-block`,
    width: `100vw`,
    height: `60vh`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    [theme.breakpoints.up('xs')]: {
      margin: '0 -24px',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 -32px',
    },
  },
}))

const JumboFeaturedImage = ({ src }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} style={{
      backgroundImage: `url(${src})`,
    }} />
  )
}

export default JumboFeaturedImage 
