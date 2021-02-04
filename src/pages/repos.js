import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Repo" />
    <h3>项目模块</h3>
    <Row xs={2} md={3} lg={4}>
    <StaticQuery
      query={graphql`
      {
        allStrapiRepos(sort: {fields: group_name, order: ASC}) {
          nodes {
            releases {
              tag_name
              create_time
              id
            }
            group_name
            strapiId
            repo_name
            id
          }
        }
      }
      `}
      render={data => (
        data.allStrapiRepos.nodes.map(repo => (
          <Col style={{ margin: '1rem 0'}}>
          <Card>
            <Card.Body>
              <Card.Title>{repo.repo_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{repo.group_name}</Card.Subtitle>
              <Card.Text>{repo.releases.length > 0 ? 
                <>最新版本：
                  <Link to={`/releases/${repo.releases[repo.releases.length - 1].id}`} >
                    <Badge variant="success">
                      {repo.releases[repo.releases.length - 1].tag_name}
                    </Badge>
                  </Link></> : 
                  <span className="text-muted">暂无版本</span>}</Card.Text>
              <Card.Link><Link to={`/repos/${repo.strapiId}/releases`} >查看版本</Link></Card.Link>
            </Card.Body>
          </Card>
          </Col>
        ))
      )}
    ></StaticQuery>
    </Row>
  </Layout>
)

