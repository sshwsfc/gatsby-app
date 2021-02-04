import React from "react"  
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Release from "../components/Release"

export const query = graphql`  
  query RepoQuery($id: Int!) {
    repo: strapiRepos(strapiId: {eq: $id}) {
      group_name
      repo_name
      releases {
        assets {
          name
          id
          url
        }
        create_time
        description
        id
        tag_name
      }
    }
  }
`

const Releases = ({ data }) => {  
  const repo = data.repo
  return (
    <Layout>
      <SEO title={`Releases ${repo.group_name} ${repo.repo_name}`} />
      <h5>{repo.group_name} / {repo.repo_name}</h5>
      <h3>版本列表</h3>
      {
        repo.releases.sort((a, b) => b.id - a.id)
          .map(r => <Release release={r} showRepo={false} />)
      }
    </Layout>
  )
}

export default Releases  