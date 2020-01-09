import axios from 'axios'
export async function fetchRoutes(entrypoint) {
  const data = await axios.get(
    `${process.env.MICROCMS_BASE_URL}${entrypoint}?fields=id&limit=1000`,
    {
      headers: {
        'X-API-KEY': process.env.MICROCMS_X_API_KEY
      }
    }
  )
  const routes = data.data.contents.map((content) => {
    return `${entrypoint}/${content.id}`
  })
  return routes
}

export async function fetchAllRoutes() {
  const entrypoints = process.env.MICROCMS_ENTRYPOINTS.split(':')
  const routes = await Promise.all(entrypoints.map(async entrypoint => {
    const data = await fetchRoutes(entrypoint)
    return data
  }))
  console.log(routes.flat())
  return routes.flat()
}