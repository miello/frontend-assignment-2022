import { ITrip } from '../types/trip'

const processSearch = (
  trips: ITrip[],
  pages: number,
  limit: number,
  keyword: string
) => {
  const filterKeyword = trips.filter((val) => {
    if (keyword === '') return true

    if (val.description.includes(keyword)) {
      return true
    }

    if (val.title.includes(keyword)) {
      return true
    }

    const result = val.tags.reduce((prev, cur) => {
      return prev || cur.includes(keyword)
    }, false)

    return result
  })

  const allPages = Math.ceil(filterKeyword.length / limit)
  let startIdx = (pages - 1) * limit

  return {
    current: pages,
    allPages,
    trips: filterKeyword.splice(startIdx, limit),
  }
}

export { processSearch }
