import { ArrowRight } from 'lucide-react'

export default function NotFoundHero({ onGoHome }) {
  return (
    <section className="not-found-section" aria-labelledby="not-found-heading">
      <div className="not-found-container">
        {/* Left Side: Traffic Cone (Static, no floating, no custom shadow) */}
        <div className="not-found-media-wrapper animate-fade-in-up">
          <img
            src="/not-found-cone.jpg"
            alt="Orange traffic cone indicating page not found"
            className="not-found-cone-img"
            loading="eager"
          />
        </div>

        {/* Right Side: Copy & CTA */}
        <div className="not-found-content animate-fade-in-up delay-100">
          <h1 id="not-found-heading" className="not-found-title">
            Page not Found
          </h1>

          <p className="not-found-description">
            This page cant be transcribed. It looks like this page has left the
            meeting or maybe it never joined.
          </p>

          <div className="not-found-action-wrapper">
            <button
              type="button"
              className="btn-orange-pill not-found-btn"
              onClick={onGoHome}
            >
              <span>Go Home</span>
              <ArrowRight className="btn-icon-arrow" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
