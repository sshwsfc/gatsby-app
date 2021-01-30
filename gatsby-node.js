
exports.createPages = async ({ graphql, actions }) => {  
    const { createPage } = actions
    const result = await graphql(
      `
        {
          releases: allStrapiIotReleases(sort: {fields: create_time, order: DESC}) {
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
                strapiId
              }
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create blog articles pages.
    const releases = result.data.releases.edges
  
    releases.forEach(({ node: r }, index) => {
      createPage({
        path: `/releases/${r.tag_name}`,
        component: require.resolve("./src/templates/release.js"),
        context: {
          id: r.strapiId,
        },
      })
    })

  }