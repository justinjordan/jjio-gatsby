import React from 'react'
// import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  input: {
    color: 'white',
  },
}))

const ContactForm = () => {
  const classes = useStyles()

  return (
    <form>
      <Typography variant="h5">Get in Touch</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            fullWidth
            className={classes.input}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            className={classes.input}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            multiline
            fullWidth
            className={classes.input}
            InputProps={{
              className: classes.input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ContactForm
