import React, { useCallback, useEffect, useState } from 'react'
import { Card } from 'components/Card'
import { MainContainer, RootContainer } from 'components/common/Container'
import { GotoTopBtn } from 'components/GotoTop'
import { useTripData } from 'hooks/useTripData'
import { LoadingData, NotFound, Title } from './styled'
import { parseQuery } from 'utils/queryParams'
import { Pagination } from 'components/Pagination'
import { scrollToSmoothly } from 'utils/smoothScrolling'
import { SearchBar } from 'components/SearchBar'

function App() {
  const [search, setSearch] = useState('')
  const [current, setCurrent] = useState(1)
  const { trips, loading, fetchTripData, isError, allPages } = useTripData()

  const handlePagination = useCallback(
    (newPages: number) => {
      scrollToSmoothly(0, 500, () => {
        fetchTripData(search, newPages)
        setCurrent(newPages)
      })
    },
    [fetchTripData, search]
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | string) => {
      let newSearch: string
      if (typeof e === 'string') {
        newSearch = e
      } else {
        newSearch = e.currentTarget.value
      }
      fetchTripData(newSearch, 1)
      setCurrent(1)
      setSearch(newSearch)
    },
    [fetchTripData]
  )

  const fetchFromQuery = useCallback(() => {
    const query = parseQuery(window.location.search)
    let pages = 1
    let search = ''

    if (query['pages']) {
      pages = +query['pages']
    }

    if (query['search']) {
      search = query['search']
    }

    setCurrent(pages)
    setSearch(search)
    fetchTripData(search, pages, false)
  }, [fetchTripData])

  useEffect(() => {
    fetchFromQuery()

    // https://stackoverflow.com/a/48925019
    window.addEventListener('popstate', fetchFromQuery, true)
    return () => {
      window.removeEventListener('popstate', fetchFromQuery, true)
    }

    // eslint-disable-next-line
  }, [])

  return (
    <RootContainer>
      <MainContainer>
        <Title>เที่ยวไหนดี</Title>
        <SearchBar handleSearch={handleSearch} search={search} />
        {!loading && (
          <React.Fragment>
            {!isError &&
              trips.map((val) => (
                <Card
                  trips={val}
                  key={`title-${val.eid}`}
                  onClickTag={handleSearch}
                />
              ))}
            {trips.length === 0 && !isError && (
              <NotFound>ไม่พบผลลัพธ์ที่ต้องการค้นหา</NotFound>
            )}
            {trips.length !== 0 && !isError && (
              <Pagination
                current={current}
                allPages={allPages}
                handlePagination={handlePagination}
              />
            )}
            {isError && (
              <NotFound>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</NotFound>
            )}
          </React.Fragment>
        )}
        {loading && <LoadingData />}
      </MainContainer>
      <GotoTopBtn />
    </RootContainer>
  )
}

export default App
