import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { useLocation } from 'react-router-dom'

const LOCAL_IFRAME_URL = 'http://localhost:8080'
const QA_IFRAME_URL = 'https://test-web-iframe-poc.club-os.dev'

const IFRAME_DOMAIN = QA_IFRAME_URL

export default function App() {
  const [iframeUrl, setIframeUrl] = useState(IFRAME_DOMAIN)
  const location = useLocation()

  const readIframeUrl = e => {
    if (e.data) {
      window.history.pushState({}, null, e.data)
    }
  }

  const handleIframeUrl = ({ pathname, search }) => {
    setIframeUrl(IFRAME_DOMAIN + pathname + search)
  }

  useEffect(() => {
    window.addEventListener('message', readIframeUrl)
    return () => {
      window.removeEventListener('message', readIframeUrl)
    }
  }, [])

  useEffect(() => {
    handleIframeUrl(location)
  }, [location])

  return (
    <Layout handleIframeUrl={handleIframeUrl}>
      <iframe id='app-iframe' src={iframeUrl} />
    </Layout>
  )
}
