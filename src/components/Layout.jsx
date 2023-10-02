import { render } from '@techniquesoftware/component-library/dist/esm/index'
import { useEffect } from 'react'

export default function Layout({ iframeUrl, setIframeUrl }) {
  useEffect(() => {
    render.topNavbar({ id: 'top-navbar' })
    render.sideNavbar({ id: 'side-navbar', props: { setIframeUrl } })
  }, [])

  return (
    <div id='layout-wrapper'>
      <header id='top-navbar' />
      <div id='layout-container'>
        <nav id='side-navbar' />
        <div id='content-container'>
          <iframe id='app-iframe' src={iframeUrl} />
        </div>
      </div>
    </div>
  )
}
