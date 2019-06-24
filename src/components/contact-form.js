import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  formContainer: {
    position: 'relative',
    minHeight: '300px',
  },
  statusMessage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14pt',
  },
}))

const ContactForm = () => {
  const classes = useStyles()

  const [nameField, setNameField] = useState({
    value: '',
    error: null,
  })
  const [emailField, setEmailField] = useState({
    value: '',
    error: null,
  })
  const [messageField, setMessageField] = useState({
    value: '',
    error: null,
  })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const getters = {
    name: nameField,
    email: emailField,
    message: messageField,
  }
  const setters = {
    name: setNameField,
    email: setEmailField,
    message: setMessageField,
  }

  const onChangeField = event => {
    const el = event.target

    if (typeof setters[el.name] === 'function') {
      setters[el.name]({
        value: el.value,
        error: null,
      })
    }
  }

  const sendMessage = async () => {
    const startTime = new Date().getTime()

    try {
      setSending(true)

      const response = await axios.post(`${process.env.API_DOMAIN}/send-mail`, {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
      })

      setSuccess(true)
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        for (let key in errors) {
          setters[key]({
            value: getters[key].value,
            error: errors[key].pop(),
          })
        }
      }
    } finally {
      const requestDuration = new Date().getTime() - startTime

      // delay displaying result to prevent flashing
      setTimeout(() => {
        setSending(false)
      }, 400 - requestDuration)
    }
  }

  return (
    <div className={classes.formContainer}>
      {success ? (
        <div className={classes.statusMessage}>
          <FontAwesomeIcon icon={faCheckCircle}/> Message sent!
        </div>
      ) : sending ? (
        <div className={classes.statusMessage}>
          <CircularProgress color="secondary"/>
          <div>Sending...</div>
        </div>
      ) : (
        <form onSubmit={sendMessage}>
          <Typography variant="h5">Get in Touch</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                error={!!nameField.error}
                value={nameField.value}
                helperText={nameField.error}
                onChange={onChangeField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                error={!!emailField.error}
                value={emailField.value}
                helperText={emailField.error}
                onChange={onChangeField}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                error={!!messageField.error}
                value={messageField.value}
                helperText={messageField.error}
                onChange={onChangeField}
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
      )}
    </div>
  )
}

export default ContactForm
