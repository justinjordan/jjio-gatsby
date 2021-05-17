import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

import BreaksToParagraphs from './breaks-to-paragraphs'
import Social from './social'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  row1: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  },
  row2: {
    backgroundColor: theme.palette.primary.dark,
    '&::after': {
      content: "''",
      display: 'block',
      width: '100%',
      height: '100vh',
      position: 'fixed',
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))

const Footer = ({ bio }) => {
  const classes = useStyles()
  const year = new Date().getFullYear()

  return (
    <footer className={classes.root}>
      <div className={classes.row1}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              <Typography variant="h5">About Me</Typography>
              <Typography variant="body2">
                <BreaksToParagraphs content={bio}/>
              </Typography>
              <Typography>
                Send inquiries to <Link color="body2" href="mailto:justin@justinjordan.io">justin@justinjordan.io</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.row2}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              &copy; Copyright by Justin Jordan {year}
            </Grid>
            <Grid item sm={12} lg={6}>
              <Social/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
