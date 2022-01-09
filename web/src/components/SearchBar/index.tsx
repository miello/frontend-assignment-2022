import React, { useCallback } from 'react'
import { SearchBase, SearchContainer, SearchIcon } from './styled'
import { ISearchBarProps } from './types'

export function SearchBar(props: ISearchBarProps) {
  const { search, handleSearch } = props
  const handleSubmit = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      if (e) {
        e.preventDefault()
      }
      handleSearch(search)
    },
    [handleSearch, search]
  )

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchBase
        value={search}
        placeholder="หาที่เที่ยวแล้วไปกัน"
        onChange={handleSearch}
      />
      <SearchIcon onClick={() => handleSubmit()} />
    </SearchContainer>
  )
}
