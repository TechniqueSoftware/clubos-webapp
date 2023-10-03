import { render } from '@techniquesoftware/component-library/dist/esm/index'
import { useEffect } from 'react'

export default function Layout({ children, handleIframeUrl }) {
  useEffect(() => {
    render.topNavbar({ id: 'top-navbar', props: { handleIframeUrl } })
    render.sideNavbar({ id: 'side-navbar', props: { handleIframeUrl } })
  }, [])

  return (
    <div id='layout-wrapper'>
      <header id='top-navbar' />
      <div id='layout-container'>
        <nav id='side-navbar' />
        <div id='content-container'>
          {children}
        </div>
      </div>
    </div>
  )
}
