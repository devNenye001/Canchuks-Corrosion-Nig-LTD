import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
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
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About Us', id: 'about', href: '/about' },
    { name: 'Services', id: 'services', href: '/services' },
    { name: 'Partners', id: 'partners', href: '/partners' },
    { name: 'Knowledge', id: 'knowledge', href: '/knowledge' },
  ]

  const isTransparentHero =
    (currentPage === 'home' ||
      currentPage === 'about' ||
      currentPage === 'services' ||
      currentPage === 'partners' ||
      currentPage === 'contact') &&
    !scrolled

  const handleLinkClick = (e, id) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
    if (id === 'home') {
      onNavigate('home')
    } else if (id === 'about') {
      onNavigate('about')
    } else if (id === 'services') {
      onNavigate('services')
    } else if (id === 'partners') {
      onNavigate('partners')
    } else {
      onNavigate(id)
    }
  }

  const handleContactClick = (e) => {
    if (e) e.preventDefault()
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
        <a
          href="/"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('home')
          }}
          aria-label="Canchuks Corrosion Nigeria Limited Home"
        >
          <img
            src={isTransparentHero ? '/logo-white.png' : '/logo-black.png'}
            alt="Canchuks Corrosion Nigeria Limited Logo"
            className="navbar-logo-img"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {navLinks.map((item) => {
              const isActive =
                currentPage === item.id ||
                (currentPage === 'home' && item.id === 'home')
              return (
                <li key={item.id} className="navbar-nav-item">
                  <a
                    href={item.href}
                    className={`navbar-nav-link ${isActive ? 'is-active' : ''} ${
                      isTransparentHero ? 'nav-link-light' : 'nav-link-dark'
                    }`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                    <span className="navbar-nav-indicator" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: Contact Us CTA button (Desktop) */}
        <div className="navbar-cta-wrapper">
          <a
            href="/contact"
            className="btn-orange-pill navbar-contact-btn"
            onClick={handleContactClick}
          >
            <span>Contact Us</span>
          </a>
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

        <nav aria-label="Mobile Navigation">
          <ul className="navbar-mobile-list">
            {navLinks.map((item, idx) => {
              const isActive =
                currentPage === item.id ||
                (currentPage === 'home' && item.id === 'home')
              return (
                <li
                  key={item.id}
                  className="navbar-mobile-item"
                  style={{ animationDelay: `${idx * 60 + 100}ms` }}
                >
                  <a
                    href={item.href}
                    className={`navbar-mobile-link ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
