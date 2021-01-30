import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Card } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Releases" />
    <StaticQuery query={graphql`
      query Release {
        allStrapiIotReleases(sort: {fields: create_time, order: DESC}) {
          totalCount
          edges {
            node {
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
      }
      `}
      render={data => (
        data.allStrapiIotReleases.edges.map(({ node: r }) =>(
          <Card title={<Link href={`/releases/${r.tag_name}`} >{r.tag_name}</Link>}>{r.description}</Card>
        ))
      )}
    />
  </Layout>
)

