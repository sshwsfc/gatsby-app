import React from "react"
import { Link } from "gatsby"

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>AirIot</h1>
      <p>
        节省成本，创造利润
      </p>
      <p>
      <Link to="/repos"><Button variant="primary">版本</Button></Link>
      </p>
    </Jumbotron>
  </Layout>
)

export default IndexPage
