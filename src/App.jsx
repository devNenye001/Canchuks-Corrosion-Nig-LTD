import { useState, useEffect } from 'react'
import SEO from './components/SEO'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partners from './pages/Partners'
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

const PAGE_TO_PATH = {
  home: '/',
  about: '/about',
  services: '/services',
  partners: '/partners',
  knowledge: '/knowledge',
  contact: '/contact',
  404: '/404',
}

function normalizeLegacyHash() {
  const hash = window.location.hash.replace('#', '').toLowerCase()
  if (hash && PAGE_TO_PATH[hash]) {
    if (window.location.protocol !== 'file:') {
      window.history.replaceState({ page: hash }, '', PAGE_TO_PATH[hash])
    }
    return hash
  }
  return null
}

function resolvePageFromLocation() {
  const hash = window.location.hash.replace('#', '').toLowerCase()
  if (hash && PAGE_TO_PATH[hash]) {
    return hash
  }

  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/'
  if (path === '/' || path === '/index.html') return 'home'
  if (path === '/about') return 'about'
  if (path === '/services') return 'services'
  if (path === '/partners') return 'partners'
  if (path === '/knowledge') return 'knowledge'
  if (path === '/contact') return 'contact'
  if (path === '/404') return '404'

  if (window.location.protocol !== 'file:') {
    return '404'
  }
  return 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(resolvePageFromLocation)

  useEffect(() => {
    normalizeLegacyHash()

    const syncRoute = () => {
      const migratedPage = normalizeLegacyHash()
      setCurrentPage(migratedPage || resolvePageFromLocation())
    }
    window.addEventListener('popstate', syncRoute)
    window.addEventListener('hashchange', syncRoute)
    return () => {
      window.removeEventListener('popstate', syncRoute)
      window.removeEventListener('hashchange', syncRoute)
    }
  }, [])

  const handleNavigate = (page) => {
    const targetPage = PAGE_TO_PATH[page] ? page : 'home'
    const targetPath = PAGE_TO_PATH[targetPage]

    if (window.location.protocol !== 'file:') {
      if (window.location.pathname !== targetPath || window.location.hash) {
        window.history.pushState({ page: targetPage }, '', targetPath)
      }
    }

    setCurrentPage(targetPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-layout">
      {/* Dynamic Per-Page Meta Tags, Canonical URL, Open Graph, Twitter Card & JSON-LD */}
      <SEO page={currentPage} />

      {/* Navbar with borderless design, thick pill button, and reduced logo */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Pages */}
      <main className="main-content" id="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
        {currentPage === 'partners' && <Partners onNavigate={handleNavigate} />}
        {currentPage === 'knowledge' && <Knowledge onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
        {currentPage === '404' && <NotFound onNavigate={handleNavigate} />}
      </main>

      {/* Global 5-Column Responsive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
