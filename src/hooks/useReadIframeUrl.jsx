import { useEffect } from "react"

export default function useReadIframeUrl() {
  const readIframeUrl = e => {
    if (e.data) {
      window.history.pushState({}, null, e.data)
    }
  }

  useEffect(() => {
    window.addEventListener('message', readIframeUrl)
    return () => {
      window.removeEventListener('message', readIframeUrl)
    }
  }, [])

  return null
}
