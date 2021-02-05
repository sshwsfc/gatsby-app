import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const ReposTabs = ({ activeGroup }) => {
  const data = useStaticQuery(
    graphql`
    {
      allStrapiRepos {
        group(field: group_name, limit: 1) {
          nodes {
            group_name
          }
        }
      }
    }
    `
  )
  const group = data.allStrapiRepos.group

  return (<>
    {group.map(g => {
      const groupName = g.nodes[0].group_name
      return <Link to={`/repos/${groupName}`}><Button style={{ marginRight: '1rem'}} variant={activeGroup && activeGroup === groupName ? 'primary' : 'secondary'}>
          {groupName}</Button></Link>
    })}
  </>)
}

export { ReposTabs }

export default ({ repos }) => (
  <Row xs={2} md={3} lg={4}>
  {repos.map(repo => (
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
    )
  )}
  </Row>
)
