import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = ({ siteTitle }) => (
  <header>
    <AppBar position="static" color="default">
      <Toolbar style={{
        backgroundColor: '#fff',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h6" color="inherit">
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                fontSize: '2.1rem',
                fontFamily: 'Pacifico, cursive',
                color: '#000',
              }}
            >{siteTitle}</Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
