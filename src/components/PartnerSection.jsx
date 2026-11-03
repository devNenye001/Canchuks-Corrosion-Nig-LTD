import { ArrowRight } from 'lucide-react'

export default function PartnerSection({ onContactClick }) {
  return (
    <section id="partners-section" className="home-partner-section">
      <div className="home-partner-container">
        {/* Heading */}
        <h2 className="home-partner-title text-center animate-fade-in-up">
          Partner With Us
        </h2>

        {/* Subtitle */}
        <p className="home-partner-desc text-center animate-fade-in-up delay-100">
          Canchuks Corrosion Nigeria invites industry partners and clients actively
          seeking the partnership opportunities for innovative solutions.
        </p>

        {/* 3D Partner Handshake Image (Clean, static) */}
        <div className="home-partner-media-wrap animate-fade-in-up delay-200">
          <img
            src="/partner-img.png"
            alt="Business partnership and collaboration handshake"
            className="partner-illustration-img"
            loading="lazy"
          />
        </div>

        {/* CTA Button */}
        <div className="home-partner-action animate-fade-in-up delay-300">
          <button
            type="button"
            className="btn-orange-pill partner-contact-btn"
            onClick={onContactClick}
          >
            <span>Contact Us</span>
            <ArrowRight className="btn-icon-arrow" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
