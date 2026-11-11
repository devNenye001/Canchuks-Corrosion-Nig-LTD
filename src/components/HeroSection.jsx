import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection({ onContactClick, onViewServices }) {
  return (
    <section
      id="hero-section"
      className="home-hero-section"
      aria-labelledby="hero-heading"
    >
      {/* Background Image Layer */}
      <div
        className="home-hero-bg-layer"
        role="img"
        aria-label="Offshore and onshore oil and gas pipeline infrastructure serviced by Canchuks Corrosion Nigeria Limited"
      />
      <div className="home-hero-overlay" aria-hidden="true" />

      {/* Content Container with Framer Motion */}
      <div className="home-hero-container">
        <motion.div
          className="home-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            id="hero-heading"
            className="home-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Advanced Corrosion Engineering,
            <br />
            Reliable Pipeline Integrity.
          </motion.h1>

          <motion.p
            className="home-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From advanced corrosion assessment to pipeline inspection, we deliver
            tailor-fit engineering solutions for Nigeria&apos;s oil and gas industry.
          </motion.p>

          <motion.div
            className="home-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
