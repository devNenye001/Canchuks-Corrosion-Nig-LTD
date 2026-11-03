import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA({ onContactClick }) {
  return (
    <section className="final-cta-section" aria-labelledby="cta-heading">
      {/* Top Accent Blue Border (#59AEDB) */}
      <div className="final-cta-accent-border top" aria-hidden="true" />

      {/* Background Image Container with Overlay */}
      <div className="final-cta-bg-layer" />
      <div className="final-cta-overlay" />

      {/* Content Container with Framer Motion */}
      <div className="final-cta-container">
        <motion.div
          className="final-cta-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 id="cta-heading" className="final-cta-title">
            Need a Pipeline Integrity Solution?
          </h2>

          <p className="final-cta-description">
            Contact our team to discuss your corrosion assessment, inspection,
            and engineering requirements.
          </p>

          <div className="final-cta-actions">
            <button
              type="button"
              className="btn-white-pill final-cta-btn"
              onClick={onContactClick}
              aria-label="Contact our team to discuss your corrosion assessment"
            >
              <span>Contact Us</span>
              <ArrowRight className="btn-icon-arrow" size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Blue Border (#59AEDB) */}
      <div className="final-cta-accent-border bottom" aria-hidden="true" />
    </section>
  )
}
