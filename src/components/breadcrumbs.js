import React from 'react'
import { Link } from 'gatsby'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { makeStyles } from '@material-ui/styles'
import { truncate, htmlDecode } from '../utils'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem 0',
  },
  label: {
    fontFamily: 'Open Sans, sans-serif',
    textDecoration: 'none',
  },
  link: {
    fontFamily: 'Open Sans, sans-serif',
    textDecoration: 'none',
    transition: 'color 200ms ease',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))

export default ({ pages }) => {

  const classes = useStyles()

  const links = []
  for (let page of pages) {
    const label = truncate(htmlDecode(page.label), 5)

    if (page.path) {
      links.push(
        <Link
          className={classes.link}
          to={page.path}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )
    } else {
      links.push(
        <span
          className={classes.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )
    }
  }

  return (
    <Breadcrumbs className={classes.root}>{links}</Breadcrumbs>
  )
}
