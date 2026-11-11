import { Home, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'
import './Contact.css'

export default function Contact({ onNavigate }) {
  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="contact-page-wrapper">
      {/* 1. Hero Banner with service4.jpg and concave upward bottom curve */}
      <section
        id="contact-hero"
        className="contact-hero-banner"
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="contact-hero-bg"
          role="img"
          aria-label="Canchuks Corrosion engineering team discussing pipeline integrity projects"
        />
        <div className="contact-hero-overlay" aria-hidden="true" />

        <motion.div
          className="contact-hero-container"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 id="contact-hero-heading" className="contact-hero-title">
            Let&apos;s Talk About What You&apos;re Building.
          </h1>
          <p className="contact-hero-subtitle">
            We are committed to turning ideas into durable structures, functional spaces,
            and lasting value.
          </p>
        </motion.div>

        {/* Downward convex bottom curve matching design */}
        <div className="contact-hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. Three Info Columns */}
      <section
        id="contact-details"
        className="contact-info-section"
        aria-label="Contact Information and Office Locations"
      >
        <div className="contact-info-container">
          {/* Column 1: Visit Our Office */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Home size={26} className="contact-col-icon" aria-hidden="true" />
            <h2 className="contact-col-title">Visit Our Office</h2>
            <address className="contact-address-list">
              <p
                className="contact-col-text"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span className="contact-address-label">Port Harcourt, Nigeria:</span>{' '}
                <span itemProp="streetAddress">4, Gbalajam Road, Woji</span>,{' '}
                <span itemProp="addressLocality">Port Harcourt</span>,{' '}
                <span itemProp="addressCountry">Nigeria</span>.
              </p>
              <p
                className="contact-col-text"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span className="contact-address-label">Imo State, Nigeria:</span>{' '}
                <span itemProp="streetAddress">31, Wetheral Road</span>,{' '}
                <span itemProp="addressLocality">Owerri</span>,{' '}
                <span itemProp="addressRegion">Imo State</span>,{' '}
                <span itemProp="addressCountry">Nigeria</span>.
              </p>
            </address>
          </motion.div>

          {/* Column 2: Call Us */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Phone size={26} className="contact-col-icon" aria-hidden="true" />
            <h2 className="contact-col-title">Call Us</h2>
            <p className="contact-col-text">
              <a href="tel:+2349128209328" className="contact-col-link">
                +2349128209328
              </a>
            </p>
          </motion.div>

          {/* Column 3: Email */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Mail size={26} className="contact-col-icon" aria-hidden="true" />
            <h2 className="contact-col-title">
              <a href="mailto:canchukscorrosioninc@gmail.com">
                canchukscorrosioninc@gmail.com
              </a>
            </h2>
            <p className="contact-col-text">
              Send us your inquiries anytime, and our team will respond promptly with
              the information you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Embedded Google Map */}
      <section
        id="office-location-map"
        className="contact-map-section"
        aria-label="Office Location Map"
      >
        <motion.div
          className="contact-map-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.5169608622377!2d7.0374908000000005!3d5.4899564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259bac1752445%3A0x68bc69533e6d1dc2!2s31%20Wetheral%20Rd%2C%20Angelina%20House%2C%20Owerri%20460281%2C%20Imo!5e0!3m2!1sen!2sng!4v1793733667196!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Canchuks Corrosion Nigeria Limited Location Map"
            className="contact-map-frame"
          />
        </motion.div>
      </section>

      {/* 4. Final CTA Banner */}
      <FinalCTA onContactClick={handleCtaClick} />
    </div>
  )
}
