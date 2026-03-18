import { useEffect, useRef } from 'react'

export const useScrollAnimation = () => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let rafId = 0

    const updateParallax = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const speed = Number(element.dataset.parallaxSpeed || 0.18)

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const centeredProgress = progress - 0.5
      const offset = centeredProgress * speed * 160

      element.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`)
    }

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return ref
}

export default useScrollAnimation
