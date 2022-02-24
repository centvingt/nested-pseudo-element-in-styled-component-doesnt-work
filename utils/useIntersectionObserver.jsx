import { useEffect, useState } from 'react'

export const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = 0,
}) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const [observer, setObserver] = useState(null)

  useEffect(() => {
    setObserver(
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      })
    )
  }, [])

  useEffect(() => {
    if (node) observer.observe(node)

    return () => {
      if (observer) observer.disconnect()
    }
  }, [node])

  return [setNode, entry]
}
