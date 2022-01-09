import axios, { AxiosError, AxiosResponse } from 'axios'
import express from 'express'
import { ISearchTripQuery, TripDBResponse } from '../types/trip'
import { isValidNumeric } from '../utils/checkInteger'
import { dbServer } from '../utils/dbServer'
import { processSearch } from '../utils/processSearch'

const tripRouter = express.Router()

tripRouter.get('/', async (req, res) => {
  try {
    const query = req.query as ISearchTripQuery

    console.info('Get query:', query)
    let pages: number = 1
    let searchQuery: string = ''
    let limit: number = 5

    const pagesNumericValid = isValidNumeric(query.pages)
    const limitNumericValid = isValidNumeric(query.limit)

    if (!pagesNumericValid && !limitNumericValid) {
      res.status(400).json({
        error: 'Limit and Pages query must be integer',
      })
      return
    }

    if (!pagesNumericValid) {
      res.status(400).json({
        error: 'Pages query must be integer',
      })
      return
    }

    if (!limitNumericValid) {
      res.status(400).json({
        error: 'Limit query must be integer',
      })
      return
    }

    if (query.pages) {
      pages = +query.pages
    }

    if (query.search) {
      searchQuery = query.search
    }

    if (query.limit) {
      limit = +query.limit
    }

    if (limit < 0) {
      res.status(400).json({
        error: 'Limit query cannot less than or equal zero',
      })
      return
    }

    const data: AxiosResponse<TripDBResponse> =
      await dbServer.get<TripDBResponse>('/trips')
    const filterResult = processSearch(data.data, pages, limit, searchQuery)

    res.json({
      ...filterResult,
    })
  } catch (err) {
    const axiosErr = err as AxiosError<{}>
    console.error(axiosErr.message)

    res.status(500).json({
      error: 'Something went wrong',
    })
  }
})

export { tripRouter }
