import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import './Footer.css'

export default function Footer({ onNavigate }) {
  const companyLinks = [
    { name: 'Services', id: 'services', href: '/services' },
    { name: 'Knowledge', id: 'knowledge', href: '/knowledge' },
    { name: 'About Us', id: 'about', href: '/about' },
    { name: 'Partners', id: 'partners', href: '/partners' },
  ]

  const handleLinkClick = (e, id) => {
    if (e) e.preventDefault()
    if (onNavigate) {
      onNavigate(id)
    }
  }

  return (
    <footer
      className="footer-wrapper"
      aria-label="Site Footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="footer-container">
        {/* Main 5-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Parent Company Details */}
          <div className="footer-col brand-col">
            <a
              href="/"
              className="footer-logo-wrapper"
              onClick={(e) => handleLinkClick(e, '404')}
              aria-label="Canchuks Corrosion Nigeria Limited"
            >
              <img
                src="/logo-black.png"
                alt="Canchuks Corrosion Nigeria Limited Logo"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-subsidiary-text">
              Canchuks Corrosion Nigeria Limited is a subsidiary of Canchuks
              Corrosion Inc., Canada
            </p>
            <a
              href="https://canchukscorrosion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
              aria-label="Visit parent company Canchuks Corrosion Inc., Canada website"
            >
              <span>canchukscorrosion.com</span>
              <ExternalLink size={14} className="external-icon" aria-hidden="true" />
            </a>
          </div>

          {/* Column 2: Company Navigation */}
          <nav className="footer-col" aria-label="Company Navigation">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-link-list">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="footer-link-btn"
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Physical Addresses (Port Harcourt above Imo State) */}
          <div className="footer-col">
            <h3 className="footer-heading">Address</h3>
            <address className="footer-address-list">
              <div
                className="footer-address-item"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="footer-address-icon" size={18} aria-hidden="true" />
                <p className="footer-address-text">
                  <span className="footer-address-label">Port Harcourt, Nigeria:</span>{' '}
                  <span itemProp="streetAddress">4, Gbalajam Road, Woji</span>,{' '}
                  <span itemProp="addressLocality">Port Harcourt</span>,{' '}
                  <span itemProp="addressCountry">Nigeria</span>.
                </p>
              </div>

              <div
                className="footer-address-item"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="footer-address-icon" size={18} aria-hidden="true" />
                <p className="footer-address-text">
                  <span itemProp="streetAddress">31, Wetheral Road</span>,
                  <br />
                  <span itemProp="addressLocality">Owerri</span>,{' '}
                  <span itemProp="addressRegion">Imo State</span>,{' '}
                  <span itemProp="addressCountry">Nigeria</span>.
                </p>
              </div>
            </address>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="footer-col">
            <h3 className="footer-heading">Opening Hours:</h3>
            <div className="footer-hours-list">
              <p>Mo-Fr: 8:00-5:00</p>
              <p>Sat: closed</p>
              <p>Sun: closed</p>
            </div>
          </div>

          {/* Column 5: Contact Channels */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon phone" size={17} aria-hidden="true" />
                <a href="tel:+2349128209328" className="footer-contact-link">
                  <span>Call Us: +2349128209328</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon email" size={17} aria-hidden="true" />
                <a
                  href="mailto:canchukscorrosioninc@gmail.com"
                  className="footer-contact-link email-text"
                >
                  <span>Email: canchukscorrosioninc@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="footer-divider" />

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Canchuks Corrosion Nigeria Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
