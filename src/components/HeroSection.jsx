import { ArrowRight } from 'lucide-react'

export default function HeroSection({ onContactClick, onViewServices }) {
  return (
    <section className="home-hero-section" aria-label="Hero Section">
      {/* Background Image Layer with Parallax / Zoom Effect */}
      <div className="home-hero-bg-layer" />
      <div className="home-hero-overlay" />

      {/* Content Container */}
      <div className="home-hero-container">
        <div className="home-hero-content animate-fade-in-up">
          <h1 className="home-hero-title">
            Advanced Corrosion Engineering,
            <br />
            Reliable Pipeline Integrity.
          </h1>

          <p className="home-hero-description">
            From advanced corrosion assessment to pipeline inspection, we deliver
            tailor-fit engineering solutions for Nigeria&apos;s oil and gas industry.
          </p>

          <div className="home-hero-actions">
            <button
              type="button"
              className="btn-white-pill hero-action-btn"
              onClick={onViewServices}
            >
              <span>View Services</span>
              <ArrowRight className="btn-icon-arrow" size={18} />
            </button>

            <button
              type="button"
              className="btn-orange-pill hero-action-btn"
              onClick={onContactClick}
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

