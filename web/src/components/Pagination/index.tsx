import React, { useMemo } from 'react'
import { useCallback } from 'react'
import {
  PaginateChip,
  CursorLeft,
  CursorRight,
  PaginationContainer,
  GreyBullet,
} from './styled'
import { IPaginationPages } from './types'

export function Pagination(props: IPaginationPages) {
  const { current, allPages, handlePagination } = props
  const btnList = useMemo(() => {
    let newChip: number[] = []
    if (current === 1) {
      for (let i = 1; i <= 3; ++i) {
        if (i <= allPages && i !== 1 && i !== allPages) {
          newChip.push(i)
        }
      }
    } else if (current === allPages) {
      for (let i = allPages - 2; i <= allPages; ++i) {
        if (i >= 1 && i !== 1 && i !== allPages) {
          newChip.push(i)
        }
      }
    } else {
      for (let i = current - 1; i <= current + 1; ++i) {
        if (i >= 1 && i <= allPages && i !== 1 && i !== allPages) {
          newChip.push(i)
        }
      }
    }

    return newChip
  }, [current, allPages])

  const handleNext = useCallback(() => {
    if (current >= allPages) return
    handlePagination(current + 1)
  }, [handlePagination, current, allPages])

  const handlePrev = useCallback(() => {
    if (current <= 1) return
    handlePagination(current - 1)
  }, [handlePagination, current])

  const handleChange = useCallback(
    (newPage: number) => {
      if (newPage === current) return
      if (newPage >= 1 && newPage <= allPages) {
        handlePagination(newPage)
      }
    },
    [handlePagination, current, allPages]
  )

  return (
    <PaginationContainer>
      {current !== 1 && (
        <CursorLeft css={{ marginRight: '8px' }} onClick={handlePrev} />
      )}
      <PaginateChip isActive={current === 1} onClick={() => handleChange(1)}>
        1
      </PaginateChip>
      {((current >= 4 && allPages >= 6) ||
        (current >= allPages - 1 && allPages >= 5)) && (
        <GreyBullet>...</GreyBullet>
      )}
      {btnList.map((val) => (
        <PaginateChip
          key={`pages-${val}`}
          isActive={current === val}
          onClick={() => handleChange(val)}
        >
          {val}
        </PaginateChip>
      ))}
      {((current <= allPages - 3 && allPages >= 6) ||
        (current <= 2 && allPages >= 5)) && <GreyBullet>...</GreyBullet>}
      {allPages > 1 && (
        <PaginateChip
          isActive={current === allPages}
          onClick={() => handleChange(allPages)}
        >
          {allPages}
        </PaginateChip>
      )}
      {current !== allPages && allPages > 1 && (
        <CursorRight onClick={handleNext} />
      )}
    </PaginationContainer>
  )
}
