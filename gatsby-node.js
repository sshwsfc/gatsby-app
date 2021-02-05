
const createReleasePages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(
    `
    {
      releases: allStrapiReleases {
        nodes {
          strapiId
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const releases = result.data.releases.nodes

  releases.forEach((r, index) => {
    createPage({
      path: `/releases/${r.strapiId}`,
      component: require.resolve("./src/templates/release.js"),
      context: {
        id: r.strapiId,
      },
    })
  })
}

const createRepoReleases = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(
    `
    {
      repo: allStrapiRepos {
        nodes {
          strapiId
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const repos = result.data.repo.nodes

  repos.forEach((r, index) => {
    createPage({
      path: `/repos/${r.strapiId}/releases`,
      component: require.resolve("./src/templates/releases.js"),
      context: {
        id: r.strapiId,
      },
    })
  })
}

const createReposPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
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

  if (result.errors) {
    throw result.errors
  }

  const group = result.data.allStrapiRepos.group

  group.forEach((g, index) => {
    const groupName = g.nodes[0].group_name
    createPage({
      path: `/repos/${groupName}`,
      component: require.resolve("./src/templates/repos.js"),
      context: {
        group: groupName,
      },
    })
  })
}

exports.createPages = async (params) => {  
  await Promise.all([ 
    createReposPages(params),
    createReleasePages(params),
    createRepoReleases(params)
  ])
}