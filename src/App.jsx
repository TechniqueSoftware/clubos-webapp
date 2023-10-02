import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'

const LOCAL_IFRAME_URL = 'http://localhost:8080'
const QA_IFRAME_URL = 'https://test-web-iframe-poc.club-os.dev'

export default function App() {
  const [iframeUrl, setIframeUrl] = useState(LOCAL_IFRAME_URL)

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

  const handleIframeUrl = (url) => {
    const { pathname, search } = new URL(url)
    setIframeUrl(LOCAL_IFRAME_URL + pathname + search)
  }

  return (
    <>
      <Layout iframeUrl={iframeUrl} setIframeUrl={handleIframeUrl} />
    </>
  )
}
