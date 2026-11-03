import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutSection({ onViewServices }) {
  return (
    <section id="about-section" className="home-about-section">
      <div className="home-about-container">
        {/* Kicker Tag */}
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.div>

        <div className="home-about-grid">
          {/* Left Column: Heading */}
          <motion.div
            className="home-about-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="home-about-title">
              Expertise in Corrosion &amp; Pipeline Integrity
            </h2>
          </motion.div>

          {/* Right Column: Paragraph & CTA */}
          <motion.div
            className="home-about-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
