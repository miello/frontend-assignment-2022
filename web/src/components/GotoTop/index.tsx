import React, { useCallback, useEffect, useState } from 'react'
import { Container } from './styled'
import { ReactComponent as ChevronUp } from 'assets/MdiLightChevronUp.svg'
import { scrollToSmoothly } from 'utils/smoothScrolling'

export function GotoTopBtn() {
  const [hidden, setHidden] = useState(true)

  const watchScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [])

  const scrollToTop = useCallback(() => {
    if (!hidden) {
      scrollToSmoothly(0, 500)
    }
  }, [hidden])

  useEffect(() => {
    document.addEventListener('scroll', watchScroll, false)
    return () => {
      document.removeEventListener('scroll', watchScroll, false)
    }
  }, [watchScroll])

  return (
    <Container
      css={{ opacity: hidden ? 0 : 1, cursor: hidden ? 'default' : 'pointer' }}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </Container>
  )
}
