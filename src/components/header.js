import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles }  from '@material-ui/styles'
import logo from '../images/logo.png'

const useStyles = makeStyles({
  logo: {
    margin: 0,
  },
  logoLink: {
    display: 'flex',
    margin: '18px 0',
    textDecoration: `none`,
    fontSize: '2.1rem',
    fontFamily: 'Pacifico, cursive',
    fontWeight: 400,
    color: '#000',
    '& img': {
      height: '36px',
    },
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
            ><img src={logo} /></Link>
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
