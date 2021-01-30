import React from "react"  
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"  
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`  
  query ReleaseQuery($id: Int!) {
    strapiIotReleases(strapiId: { eq: $id }) {
      assets {
          name
          url
          id
      }
      create_time
      description
      repo {
          group_name
          repo_name
      }
      tag_name
      published_at
      strapiId
    }
  }
`

const Article = ({ data }) => {  
  const article = data.strapiIotReleases
  return (
    <Layout title={article.tag_name}>
      <div>
        <h1>{article.repo?.group_name} / {article.repo?.repo_name}</h1>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.description} />
            <p>
              <Moment format="MMM Do YYYY">{article.create_time}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article  