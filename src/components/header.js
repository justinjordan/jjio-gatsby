import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles }  from '@material-ui/styles'

const useStyles = makeStyles({
  logo: {
    margin: 0,
  },
  logoLink: {
    textDecoration: `none`,
    fontSize: '2.1rem',
    fontFamily: 'Pacifico, cursive',
    fontWeight: 400,
    color: '#000',
  },
  toolbar: {
    backgroundColor: '#fff',
  },
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="lg">
          <h1 className={classes.logo}>
            <Link
              to="/"
              alt="Go to JustinJordan.io Home"
              className={classes.logoLink}
            >{siteTitle}</Link>
          </h1>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
