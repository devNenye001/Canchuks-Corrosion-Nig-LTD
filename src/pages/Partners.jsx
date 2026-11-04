import { ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollWordReveal from '../components/ScrollWordReveal'
import FinalCTA from '../components/FinalCTA'
import './Partners.css'

export default function Partners({ onNavigate }) {
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const techFeatures = [
    'Work as the non-contact inspection',
    'Defines the degree of danger',
    'Defines features using stress i.e, crack-like defects, metal loss, weld anomaly geometry change, SDS, discontinuity.',
    'Detects All-Metal Defects in all orientations',
  ]

  const benefits = [
    'COST EFFECTIVE',
    'NO INTERRUPTION TO PIPELINE OPERATION',
    'NO MINIMUM OR MAXIMUM OPERATING PRESSURE REQUIRED',
    'APPLICABLE TO ALL FERRO-MAGNETIC PIPELINES, INCLUDING TIGHT TURNS AND SMALL DIAMETER',
    'NO LIMIT TO THE LENGTH OF THE PIPELINE',
    'NO CONTACT WITH PIPELINE SURFACE',
    'NO SPECIAL PREPARATION OR MODIFICATION',
  ]

  return (
    <div className="partners-page-wrapper">
      {/* 1. Hero Banner with service4.jpg and concave upward bottom curve */}
      <section className="partners-hero-banner" aria-label="Partners Banner">
        <div className="partners-hero-bg" />
        <div className="partners-hero-overlay" />

        <motion.div
          className="partners-hero-container"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="partners-hero-title">Partners</h1>
          <p className="partners-hero-subtitle">
            At Canchuks Corrosion Nigeria, we actively value partnerships that support
            innovation, technical excellence, and reliable engineering solutions for the oil
            and gas industry.
          </p>
        </motion.div>

        {/* Concave upward bottom curve */}
        <div className="partners-hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path
              d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. Intro Statement Section with Scroll Color Reveal Animation */}
      <section className="partners-intro-section" aria-label="CMIT Global Capability">
        <div className="partners-intro-container">
          <ScrollWordReveal
            items={[
              {
                text: 'Canchuks Corrosion Inc. offers Contactless Magnetic Inspection Technology (CMIT) Globally,',
                className: 'partners-intro-headline',
                as: 'h2',
              },
              {
                text: 'and at the forefront of innovative solutions for management of unpiggable lines',
                className: 'partners-intro-subtext',
                as: 'p',
              },
            ]}
          />
        </div>
      </section>

      {/* 3. Feature Section 1: Innovative Technology (Text Left, Image Right) */}
      <section
        className="partners-feature-section"
        aria-label="Innovative Technology for Offshore and Onshore Pipeline Inspection"
      >
        <div className="partners-feature-container">
          <div className="partners-feature-grid">
            {/* Left: Text & Bullet Points */}
            <motion.div
              className="partners-feature-col text-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="partners-feature-title">
                Innovative Technology for Offshore and Onshore Pipeline Inspection
              </h3>

              <ul className="partners-bullet-list">
                {techFeatures.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="partners-bullet-item"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <ChevronRight size={18} className="partners-bullet-chevron" />
                    <span className="partners-bullet-text">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: partner-img1.jpg */}
            <motion.div
              className="partners-feature-col media-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="partners-image-wrapper">
                <img
                  src="/partner-img1.jpg"
                  alt="Non-contact pipeline inspection sensor scanning pipeline defect hotspot"
                  className="partners-feature-img"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Feature Section 2: Benefits (Image Left, Text Right) */}
      <section className="partners-feature-section benefits-alt-section" aria-label="Benefits">
        <div className="partners-feature-container">
          <div className="partners-feature-grid reverse-grid">
            {/* Left: partner-img2.jpg */}
            <motion.div
              className="partners-feature-col media-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="partners-image-wrapper">
                <img
                  src="/partner-img2.jpg"
                  alt="Industrial refinery processing towers and storage infrastructure"
                  className="partners-feature-img"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: Benefits Bullets */}
            <motion.div
              className="partners-feature-col text-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="partners-feature-title">Benefits</h3>

              <ul className="partners-bullet-list">
                {benefits.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="partners-bullet-item uppercase-item"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 + idx * 0.06 }}
                    whileHover={{ x: 4 }}
                  >
                    <ChevronRight size={18} className="partners-bullet-chevron" />
                    <span className="partners-bullet-text">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Partner With Us (Handshake Illustration & CTA) */}
      <section className="partners-connect-section" aria-label="Partner With Us">
        <div className="partners-connect-container">
          <motion.h2
            className="partners-connect-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Partner With Us
          </motion.h2>

          <motion.p
            className="partners-connect-desc text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Canchuks Corrosion Inc. engages in product innovation and is actively looking for
            partnership opportunities for innovative solutions.
          </motion.p>

          <motion.div
            className="partners-handshake-wrapper"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/partner-img.png"
              alt="Canchuks Corrosion business partnership handshake"
              className="partners-handshake-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="partners-connect-action"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              type="button"
              className="btn-orange-pill"
              onClick={handleContactClick}
            >
              <span>Contact Us</span>
              <ArrowRight className="btn-icon-arrow" size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 6. Reusable Final CTA Component */}
      <FinalCTA onContactClick={handleContactClick} />
    </div>
  )
}

