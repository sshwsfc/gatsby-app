import React from "react"  
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Release from "../components/Release"

export const query = graphql`  
  query ReleaseQuery($id: Int!) {
    release: strapiReleases(strapiId: { eq: $id }) {
      repo {
        group_name
        id
        repo_name
      }
      strapiId
      description
      id
      create_time
      tag_name
      assets {
        id
        name
        url
      }
    }
  }
`

const ReleasePage = ({ data }) => {  
  const r = data.release
  return (
    <Layout>
      <SEO title={`Release ${r.tag_name}`} />
      <h5>{r.repo?.group_name} / {r.repo?.repo_name}</h5>
      <h3>{r.tag_name}</h3>
      <Release release={r} showRepo={false} />
    </Layout>
  )
}

export default ReleasePage  