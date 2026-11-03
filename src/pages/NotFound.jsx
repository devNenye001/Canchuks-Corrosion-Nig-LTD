import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'
import './NotFound.css'

export default function NotFound({ onNavigate }) {
  const handleGoHome = () => {
    onNavigate('home')
  }

  const handleContactClick = () => {
    onNavigate('contact')
  }

  return (
    <div className="not-found-page-wrapper">
      <section className="not-found-section" aria-labelledby="not-found-heading">
        <div className="not-found-container">
          {/* Left Side: Static Traffic Cone (no shadows, no floating) */}
          <motion.div
            className="not-found-media-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/not-found-cone.jpg"
              alt="Orange traffic cone indicating page not found"
              className="not-found-cone-img"
              loading="eager"
            />
          </motion.div>

          {/* Right Side: Copy & CTA */}
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
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
                onClick={handleGoHome}
              >
                <span>Go Home</span>
                <ArrowRight className="btn-icon-arrow" size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <FinalCTA onContactClick={handleContactClick} />
    </div>
  )
}
