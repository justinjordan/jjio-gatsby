import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  input: {
    //
  },
}))

const ContactForm = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const sendMessage = async () => {
    try {
      setSending(true)

      const response = await axios.post('https://api.justinjordan.io/contact-form', form)

      if (response.status !== 200) {
        throw new Error(response.data.error)
      }

      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return success ? (
    <div>Message sent!</div>
  ) : sending ? (
    <div>Sending...</div>
  ) : (
    <form onSubmit={sendMessage}>
      <Typography variant="h5">Get in Touch</Typography>
      <Grid container spacing={3}>
        {error ? (
          <Grid item xs={12}>
            <Typography variant="caption">{error}</Typography>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            name="message"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
          >Send</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default ContactForm
