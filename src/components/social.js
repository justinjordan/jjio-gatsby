import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/styles'

const iconSize = "2x"

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: '18px',
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))

const Social = () => {
  const classes = useStyles()

  return (
    <div style={{
      textAlign: 'right',
    }}>
      <a className={classes.link} href="https://www.linkedin.com/in/justintjordan/">
        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
      </a>
      <a className={classes.link} href="https://github.com/sXule">
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
      </a>
      <a className={classes.link} href="https://soundcloud.com/realfataltransmission">
        <FontAwesomeIcon icon={faSoundcloud} size={iconSize} />
      </a>
    </div>
  )
}

export default Social