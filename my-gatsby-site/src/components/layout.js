import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from './nav'

import {
    container,
    heading,
  } from './layout.module.css'

  const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
      
  `)
    return (
      
      <div >
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <Nav/>
        <main className={container}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  

export default Layout