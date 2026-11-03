import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PartnerSection({ onContactClick }) {
  return (
    <section id="partners-section" className="home-partner-section">
      <div className="home-partner-container">
        {/* Heading */}
        <motion.h2
          className="home-partner-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Partner With Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="home-partner-desc text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Canchuks Corrosion Nigeria invites industry partners and clients actively
          seeking the partnership opportunities for innovative solutions.
        </motion.p>

        {/* 3D Partner Handshake Image */}
        <motion.div
          className="home-partner-media-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/partner-img.png"
            alt="Business partnership and collaboration handshake"
            className="partner-illustration-img"
            loading="lazy"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="home-partner-action"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            type="button"
            className="btn-orange-pill partner-contact-btn"
            onClick={onContactClick}
          >
            <span>Contact Us</span>
            <ArrowRight className="btn-icon-arrow" size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
