import { useEffect, useState } from "react"

export default function useReadIframeUrl() {
  const [pageTitle, setPageTitle] = useState('Club OS')
  const readIframeUrl = e => {
    if (e.data) {
      const { title, path } = JSON.parse(e.data)
      setPageTitle(title)
      window.history.pushState({}, null, path)
    }
  }

  useEffect(() => {
    window.addEventListener('message', readIframeUrl)
    return () => {
      window.removeEventListener('message', readIframeUrl)
    }
  }, [])

  return { pageTitle }
}
