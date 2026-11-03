import { ArrowRight } from 'lucide-react'

export default function AboutSection({ onViewServices }) {
  return (
    <section id="about-section" className="home-about-section">
      <div className="home-about-container">
        {/* Kicker Tag */}
        <div className="section-kicker">About Us</div>

        <div className="home-about-grid">
          {/* Left Column: Heading */}
          <div className="home-about-left animate-fade-in-up">
            <h2 className="home-about-title">
              Expertise in Corrosion &amp; Pipeline Integrity
            </h2>
          </div>

          {/* Right Column: Paragraph & CTA */}
          <div className="home-about-right animate-fade-in-up delay-100">
            <p className="home-about-text">
              Canchuks Corrosion Nigeria Limited provides specialized corrosion and
              materials engineering solutions for the oil and gas industry. As a
              subsidiary of Canchuks Corrosion Inc., Canada, we leverage engineering
              expertise and advanced inspection technology to help address pipeline
              integrity challenges.
            </p>

            <div className="home-about-action">
              <button
                type="button"
                className="btn-orange-pill"
                onClick={onViewServices}
              >
                <span>About Services</span>
                <ArrowRight className="btn-icon-arrow" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

