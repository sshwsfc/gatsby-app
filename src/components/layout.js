import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from 'react-bootstrap/Container'
import Header from "./header"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container style={{ marginTop: '1rem' }}>
        {children}
      </Container>
      <footer
        style={{
          margin: `2rem 0`,
          textAlign: 'center'
        }}
      >
        © {new Date().getFullYear()}, AirIot
      </footer>
    </>
  )
}

export default Layout
