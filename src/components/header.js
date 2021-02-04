import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from "react"

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><Link to="/">{siteTitle}</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>产品特性</Nav.Link>
        <Nav.Link>版本发布</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">立即试用</Nav.Link>
        <Nav.Link href="#memes">联系我们</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
