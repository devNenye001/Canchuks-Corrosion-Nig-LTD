import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'services') return 'services'
    if (hash === 'knowledge') return 'knowledge'
    if (hash === 'contact') return 'contact'
    if (hash === '404') return '404'
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'services') setCurrentPage('services')
      else if (hash === 'knowledge') setCurrentPage('knowledge')
      else if (hash === 'contact') setCurrentPage('contact')
      else if (hash === '404') setCurrentPage('404')
      else setCurrentPage('home')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    if (page === 'services') {
      window.location.hash = 'services'
      setCurrentPage('services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'knowledge') {
      window.location.hash = 'knowledge'
      setCurrentPage('knowledge')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'contact') {
      window.location.hash = 'contact'
      setCurrentPage('contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === '404') {
      window.location.hash = '404'
      setCurrentPage('404')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.hash = ''
      setCurrentPage('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Cycle views for testing: home -> services -> knowledge -> contact -> 404 -> home
  const cycleView = () => {
    if (currentPage === 'home') handleNavigate('services')
    else if (currentPage === 'services') handleNavigate('knowledge')
    else if (currentPage === 'knowledge') handleNavigate('contact')
    else if (currentPage === 'contact') handleNavigate('404')
    else handleNavigate('home')
  }

  return (
    <div className="app-layout">
      {/* Navbar with borderless design, thick pill button, and reduced logo */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Pages */}
      <main className="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
        {currentPage === 'knowledge' && <Knowledge onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
        {currentPage === '404' && <NotFound onNavigate={handleNavigate} />}
      </main>

      {/* Global 5-Column Responsive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick View Switcher Pill */}
      <aside
        className="view-switch-pill"
        onClick={cycleView}
        title="Click to cycle page view (Home / Services / Knowledge / Contact Us / 404)"
      >
        <span className="view-indicator-dot" />
        <span>
          View:{' '}
          {currentPage === 'home'
            ? 'Home'
            : currentPage === 'services'
            ? 'Services'
            : currentPage === 'knowledge'
            ? 'Knowledge'
            : currentPage === 'contact'
            ? 'Contact Us'
            : '404 Page'}{' '}
          (Click to cycle)
        </span>
      </aside>
    </div>
  )
}

export default App
