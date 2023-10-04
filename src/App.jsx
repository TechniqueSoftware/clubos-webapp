import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { useLocation } from 'react-router-dom'
import { IFRAME_DOMAIN } from './utils/constants'
import useReadIframeUrl from './hooks/useReadIframeUrl'
import './App.css'

export default function App() {
  const [iframeUrl, setIframeUrl] = useState(IFRAME_DOMAIN)
  const location = useLocation()
  const { pageTitle } = useReadIframeUrl()

  const handleIframeUrl = ({ pathname, search = '' }) => {
    const url = IFRAME_DOMAIN + pathname + search
    setIframeUrl(url)
  }

  useEffect(() => {
    handleIframeUrl(location)
  }, [location])

  return (
    <Layout handleIframeUrl={handleIframeUrl} pageTitle={pageTitle}>
      <iframe id='app-iframe' src={iframeUrl} />
    </Layout>
  )
}