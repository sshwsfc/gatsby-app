import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Release from "../components/Release"

export default () => (
  <Layout>
    <SEO title="Releases" />
    <h3>所有版本</h3>
    <StaticQuery query={graphql`
      query Release {
        allStrapiReleases(sort: {fields: create_time, order: DESC}) {
          totalCount
          nodes {
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
          }
        }
      }
      `}
      render={data => (
        data.allStrapiReleases.nodes.map(r => <Release release={r} showRepo={true} />)
      )}
    />
  </Layout>
)

