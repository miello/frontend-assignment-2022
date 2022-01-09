import { useCallback, useContext, useState } from 'react'
import { ITripData, ITripResponse } from './types'
import { apiClient } from 'config/apiClient'
import { changeQueryParams } from 'utils/queryParams'
import { AxiosError } from 'axios'
import { AlertContext } from 'context/AlertContext'

const MAX_DESCRIPTION = 200

let timeout: number
export const useTripData = () => {
  const [trips, setTrips] = useState<ITripData[]>([])
  const [allPages, setAllPages] = useState(1)
  const [isError, setError] = useState(false)
  const [loading, setLoading] = useState<boolean>(true)
  const { triggerAlert } = useContext(AlertContext)

  const fetchTripData = useCallback(
    async (search: string, pages: number, pushHistory: boolean) => {
      setError(false)

      let query = {} as Record<string, any>
      if (search) {
        query['search'] = search
      }

      if (pages !== 1) {
        query['pages'] = pages
      }

      try {
        const res = await apiClient.get<ITripResponse>(
          `/api/trips?search=${search}&&pages=${pages}`
        )

        const tripsDisplay = res.data.trips.map((val) => {
          return {
            ...val,
            description: val.description
              .slice(0, MAX_DESCRIPTION)
              .split('\n\n'),
          }
        })
        setTrips(tripsDisplay)
        setAllPages(res.data.allPages)
      } catch (err) {
        const axiosErr = err as AxiosError<{ error: string }>
        const msgErr = axiosErr.response?.data.error || axiosErr.message
        triggerAlert(msgErr, 'error')
        setError(true)
      }
      setLoading(false)
      if (pushHistory) changeQueryParams(query)
    },
    [triggerAlert]
  )

  const delayWrapper = useCallback(
    (search: string = '', pages: number = 1, pushHistory: boolean = true) => {
      setLoading(true)
      window.clearTimeout(timeout)
      timeout = window.setTimeout(() => {
        fetchTripData(search, pages, pushHistory)
      }, 500)
    },
    [fetchTripData]
  )

  return {
    trips,
    loading,
    allPages,
    isError,
    fetchTripData: delayWrapper,
  }
}
