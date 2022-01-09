// https://github.com/isd-sgcu/6-oct-quiz/blob/dev/src/pages/intro.vue#L98
export function scrollToSmoothly(
  pos: number,
  time: number,
  callback?: () => void
) {
  const currentPos = window.pageYOffset
  let start: number | null = null
  const calculateEase = (x: number) => {
    return x * x * x * (10 + x * (6 * x - 15))
  }
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start
    const progress = currentTime - start
    const varX = progress / time
    if (currentPos < pos)
      window.scrollTo(0, (pos - currentPos) * calculateEase(varX) + currentPos)
    else
      window.scrollTo(0, currentPos - (currentPos - pos) * calculateEase(varX))
    if (progress < time) window.requestAnimationFrame(step)
    else {
      window.scrollTo(0, pos)
      if (callback) callback()
    }
  })
}
