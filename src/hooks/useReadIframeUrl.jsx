import { useEffect } from "react"

export default function useReadIframeUrl() {
  const readIframeUrl = e => {
    if (e.data) {

      localStorage.setItem('pageTitle', JSON.parse(e.data).title)
      window.history.pushState({}, null, JSON.parse(e.data).URL)
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
