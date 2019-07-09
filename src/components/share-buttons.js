import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  btn: {
    color: '#000000',
    transition: 'color 200ms ease',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))

const iconSize = "2x"

const social = [{
  name: 'Facebook',
  icon: <FontAwesomeIcon icon={faFacebook} size={iconSize} />,
  getUrl: pageUrl => 'http://www.facebook.com/sharer.php?u=' + pageUrl,
}, {
  name: 'LinkedIn',
  icon: <FontAwesomeIcon icon={faLinkedin} size={iconSize} />,
  getUrl: pageUrl => 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + pageUrl,
}, {
  name: 'Twitter',
  icon: <FontAwesomeIcon icon={faTwitter} size={iconSize} />,
  getUrl: pageUrl => 'https://twitter.com/share?url=' + pageUrl,
}]

const getButtons = (pageUrl, btnClass) => {
  const buttons = []

  for (let btn of social) {
    buttons.push(
      <a
        className={btnClass}
        href={btn.getUrl(pageUrl)}
        title={'Share to ' + btn.name}
        target="_blank"
      >
        { btn.icon || btn.name }
      </a>
    )
  }

  return buttons
}

export default ({ pageUrl }) => {
  const classes = useStyles()

  return (
    <div className="share-buttons">
      {getButtons(pageUrl, classes.btn)}
    </div>
  )
}