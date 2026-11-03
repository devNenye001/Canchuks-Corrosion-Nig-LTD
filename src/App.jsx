import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import NotFoundHero from './components/NotFoundHero'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import './App.css'

function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '')
    if (hash === '404') return '404'
    if (hash === 'contact') return 'contact'
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === '404') setCurrentPage('404')
      else if (hash === 'contact') setCurrentPage('contact')
      else setCurrentPage('home')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    if (page === 'contact') {
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

  // Cycle views for easy testing: home -> 404 -> contact -> home
  const cycleView = () => {
    if (currentPage === 'home') handleNavigate('404')
    else if (currentPage === '404') handleNavigate('contact')
    else handleNavigate('home')
  }

  return (
    <div className="app-layout">
      {/* Dynamic Navbar: transparent over dark hero, solid white when scrolled or on white pages */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <main className="main-content">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}

        {currentPage === '404' && (
          <>
            <NotFoundHero onGoHome={() => handleNavigate('home')} />
            <FinalCTA onContactClick={() => handleNavigate('contact')} />
          </>
        )}

        {currentPage === 'contact' && (
          <ContactPage onBackTo404={() => handleNavigate('home')} />
        )}
      </main>

      {/* Global 5-Column Responsive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick View Switcher Pill */}
      <aside
        className="view-switch-pill"
        onClick={cycleView}
        title="Click to switch view (Home / 404 / Contact Us)"
      >
        <span className="view-indicator-dot" />
        <span>
          View: {currentPage === 'home' ? 'Home' : currentPage === '404' ? '404 Page' : 'Contact Us'} (Click to cycle)
        </span>
      </aside>
    </div>
  )
}

export default App
