import React from "react"  

import ReactMarkdown from "react-markdown"  
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import './release.css'

const Release = ({ release: r, showRepo=true, style }) => {
  return (
    <Card className="release" style={{ marginTop: '1.5rem', ...style }} >
      <Card.Body>
        { showRepo ? <Card.Subtitle>{r.repo?.group_name} / {r.repo?.repo_name}</Card.Subtitle> : null }
        <div className="description"><ReactMarkdown source={r.description} /></div>
        <Card.Subtitle className="mb-2 text-muted">下载</Card.Subtitle>
        <ListGroup>{
        r.assets.map(a => (
            <ListGroup.Item><a href={a.url}>{a.name}</a></ListGroup.Item>
        ))
        }
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default Release  