import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import './Footer.css'

export default function Footer({ onNavigate }) {
  const companyLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Knowledge', id: 'knowledge' },
    { name: 'About Us', id: 'about' },
    { name: 'Partners', id: 'partners' },
  ]

  const handleLinkClick = (id) => {
    if (onNavigate) {
      onNavigate(id)
    }
  }

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Main 5-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Parent Company Details */}
          <div className="footer-col brand-col">
            <div 
              className="footer-logo-wrapper" 
              onClick={() => handleLinkClick('404')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('404')}
              aria-label="Canchuks Corrosion Home"
            >
              <img
                src="/logo-black.png"
                alt="Canchuks Corrosion Nigeria Limited Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-subsidiary-text">
              Canchuks Corrosion Nigeria Limited is a subsidiary of Canchuks
              Corrosion Inc., Canada
            </p>
            <a
              href="https://canchukscorrosion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
            >
              <span>https://canchukscorrosion.com/</span>
              <ExternalLink size={14} className="external-icon" />
            </a>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-link-list">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Physical Address */}
          <div className="footer-col">
            <h3 className="footer-heading">Address</h3>
            <div className="footer-address-item">
              <MapPin className="footer-address-icon" size={18} />
              <p className="footer-address-text">
                31, Wetheral Road,
                <br />
                Owerri, Imo State, Nigeria.
              </p>
            </div>
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
                <Phone className="footer-contact-icon phone" size={17} />
                <a href="tel:+2349128209328" className="footer-contact-link">
                  <span>Call Us: +2349128209328</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon email" size={17} />
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

