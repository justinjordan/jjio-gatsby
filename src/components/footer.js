import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

import ContactForm from './contact-form'
import Social from './social'
import { Z_BLOCK } from 'zlib';

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

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <div className={classes.row1}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              <Typography variant="h5">About Me</Typography>
              <Typography variant="body2">I'm a professional web developer, and have been coding for fun since I was a kid, so most of my life now. Really, I just want to create things in as many ways as possible. My hobbies include photography, writing, music production, and coding... Did I mention coding?</Typography>
            </Grid>
            <Grid item sm={12} lg={1}/>
            <Grid item sm={12} lg={5}>
              <ContactForm/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.row2}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12} lg={6}>
              &copy; Copyright by Justin Jordan 2019
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
