import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Repos, { ReposTabs } from "../components/Repos"

export const query = graphql`  
  query RepoGroupQuery($group: String!) {
    allStrapiRepos(sort: {fields: repo_name, order: ASC}, filter: {group_name: {eq: $group}}) {
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
`

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Repo" />
      <h3>项目模块</h3>
      <ReposTabs activeGroup={pageContext.group}/>
      <Repos repos={data.allStrapiRepos.nodes} />
    </Layout>
  )
}

