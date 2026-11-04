import { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll for navbar transparency / background changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Partners', id: 'partners' },
    { name: 'Knowledge', id: 'knowledge' },
  ]

  const isTransparentHero =
    (currentPage === 'home' ||
      currentPage === 'about' ||
      currentPage === 'services' ||
      currentPage === 'contact') &&
    !scrolled

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false)
    if (id === 'home') {
      onNavigate('home')
    } else if (id === 'about') {
      onNavigate('about')
    } else if (id === 'services') {
      onNavigate('services')
    } else if (id === 'partners') {
      if (currentPage === 'home') {
        const el = document.getElementById('partners-section')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        onNavigate('home')
        setTimeout(() => {
          const el = document.getElementById('partners-section')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      onNavigate(id)
    }
  }

  const handleContactClick = () => {
    setMobileMenuOpen(false)
    onNavigate('contact')
  }

  return (
    <header
      className={`navbar-header ${scrolled ? 'is-scrolled' : ''} ${
        isTransparentHero ? 'is-transparent-hero' : 'is-solid-light'
      }`}
    >
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <div
          className="navbar-brand"
          onClick={() => onNavigate('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
          aria-label="Canchuks Corrosion Home"
        >
          <img
            src={isTransparentHero ? '/logo-white.png' : '/logo-black.png'}
            alt="Canchuks Corrosion Inc. Logo"
            className="navbar-logo-img"
          />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {navLinks.map((item) => {
              const isActive =
                currentPage === item.id ||
                (currentPage === 'home' && item.id === 'home')
              return (
                <li key={item.id} className="navbar-nav-item">
                  <button
                    type="button"
                    className={`navbar-nav-link ${isActive ? 'is-active' : ''} ${
                      isTransparentHero ? 'nav-link-light' : 'nav-link-dark'
                    }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.name}
                    <span className="navbar-nav-indicator" />
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: Contact Us CTA button (Desktop) */}
        <div className="navbar-cta-wrapper">
          <button
            type="button"
            className="btn-orange-pill navbar-contact-btn"
            onClick={handleContactClick}
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          type="button"
          className={`navbar-burger-btn ${isTransparentHero ? 'burger-light' : 'burger-dark'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={mobileMenuOpen}
        >
          <div className={`burger-icon ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="navbar-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`navbar-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="navbar-mobile-header">
          <img
            src="/logo-black.png"
            alt="Canchuks Corrosion Logo"
            className="navbar-mobile-logo"
          />
          <button
            type="button"
            className="navbar-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="navbar-mobile-list">
          {navLinks.map((item, idx) => (
            <li
              key={item.id}
              className="navbar-mobile-item"
              style={{ animationDelay: `${idx * 60 + 100}ms` }}
            >
              <button
                type="button"
                className={`navbar-mobile-link ${
                  currentPage === item.id ||
                  (currentPage === 'home' && item.id === 'home')
                    ? 'is-active'
                    : ''
                }`}
                onClick={() => handleLinkClick(item.id)}
              >
                <span>{item.name}</span>
                <ArrowRight size={16} className="mobile-chevron" />
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-footer">
          <button
            type="button"
            className="btn-orange-pill navbar-mobile-cta"
            onClick={handleContactClick}
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </button>

          <div className="navbar-mobile-info">
            <p>
              <strong>Hotline:</strong> +2349128209328
            </p>
            <p>
              <strong>Email:</strong> canchukscorrosioninc@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
