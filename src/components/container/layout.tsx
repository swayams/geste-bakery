/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from '../header/header';
import { ILink } from '../header/nav';
import {  Grid, ThemeProvider } from "@material-ui/core";
import Footer from "../footer/Footer";
import { theme } from '../theme';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
     <Grid container >
        <Header siteTitle="Test" siteLogo="../images/gatsby-icon.png" links={links}></Header>
        <Grid item xs={12}><main>{children}</main></Grid>
        
      </Grid>
      <Footer></Footer>
     
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const links: ILink[] = [
  {name: 'home', url: '../pages/index.js'},
  {name: 'about', url:  '../pages/about.js'},
  {name: 'contact us', url: '../pages/contact-us.js'},
  
]
