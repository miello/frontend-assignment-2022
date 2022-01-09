export function parseQuery(query: string): Record<string, string> {
  if (!query) {
    return {}
  }

  query = query.slice(1)

  let queryKeyVal = query.split('&&')
  return queryKeyVal.reduce((prevObj, curStr) => {
    let splitData = curStr.split('=')
    if (splitData.length === 1) {
      prevObj[splitData[0]] = ''
      return prevObj
    }

    prevObj[splitData[0]] = decodeURIComponent(splitData[1])
    return prevObj
  }, {} as Record<string, string>)
}

// https://stackoverflow.com/a/19279428
export function changeQueryParams(query: Record<string, any>) {
  let newQuery = '?'
  let firstKey = true
  for (const key in query) {
    if (!firstKey) newQuery += '&&'
    newQuery += `${key}=${query[key]}`
    firstKey = false
  }
  if (window.history.pushState) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      newQuery
    window.history.pushState({ path: newurl }, '', newurl)
  }
}
