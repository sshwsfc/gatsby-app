import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Repos, { ReposTabs } from "../components/Repos"

export default () => (
  <Layout>
    <SEO title="Repo" />
    <h3>项目模块</h3>
    <ReposTabs />
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
      render={data => <Repos repos={data.allStrapiRepos.nodes} />}></StaticQuery>
  </Layout>
)

