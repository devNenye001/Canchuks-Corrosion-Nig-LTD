import { Home, Phone, Mail } from 'lucide-react'
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
    <div className="contact-page-wrapper animate-fade-in">
      {/* 1. Hero Banner with service4.jpg and concave upward bottom curve */}
      <section className="contact-hero-banner" aria-label="Contact Us Banner">
        <div className="contact-hero-bg" />
        <div className="contact-hero-overlay" />

        <div className="contact-hero-container animate-fade-in-up">
          <h1 className="contact-hero-title">
            Let&apos;s Talk About What You&apos;re Building.
          </h1>
          <p className="contact-hero-subtitle">
            We are committed to turning ideas into durable structures, functional spaces,
            and lasting value.
          </p>
        </div>

        {/* Concave upward bottom curve */}
        <div className="contact-hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path
              d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. Three Info Columns */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          {/* Column 1: Visit Our Office */}
          <div className="contact-info-col animate-fade-in-up">
            <Home size={26} className="contact-col-icon" />
            <h2 className="contact-col-title">Visit Our Office</h2>
            <p className="contact-col-text">
              Address: 31, Wetheral Road, Owerri, Imo State, Nigeria.
            </p>
          </div>

          {/* Column 2: Call Us */}
          <div className="contact-info-col animate-fade-in-up delay-100">
            <Phone size={26} className="contact-col-icon" />
            <h2 className="contact-col-title">Call Us</h2>
            <p className="contact-col-text">
              <a href="tel:+2349128209328" className="contact-col-link">
                +2349128209328
              </a>
            </p>
          </div>

          {/* Column 3: Email */}
          <div className="contact-info-col animate-fade-in-up delay-200">
            <Mail size={26} className="contact-col-icon" />
            <h2 className="contact-col-title">
              <a href="mailto:canchukscorrosioninc@gmail.com">
                canchukscorrosioninc@gmail.com
              </a>
            </h2>
            <p className="contact-col-text">
              Send us your inquiries anytime, and our team will respond promptly with
              the information you need.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Embedded Google Map */}
      <section className="contact-map-section" aria-label="Office Location Map">
        <div className="contact-map-container animate-fade-in-up delay-100">
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
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <FinalCTA onContactClick={handleCtaClick} />
    </div>
  )
}
