import { Send, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollWordReveal from '../components/ScrollWordReveal'
import FinalCTA from '../components/FinalCTA'
import './About.css'

export default function About({ onNavigate }) {
  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Banner with service1.jpg and concave upward bottom curve */}
      <section className="about-hero-banner" aria-label="About Us Banner">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />

        <motion.div
          className="about-hero-container"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="about-hero-title">
            Corrosion, Materials,
            <br />
            Pipeline Integrity Services
          </h1>
          <p className="about-hero-subtitle">
            Canchuks Corrosion Nigeria Limited provides specialized corrosion assessment,
            pipeline integrity, and materials engineering solutions to support pipeline
            safety and reliability in the oil and gas industry.
          </p>
        </motion.div>

        {/* Downward convex bottom curve matching design */}
        <div className="about-hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. Intro Statement Section */}
      <section className="about-intro-section" aria-label="About Canchuks Corrosion">
        <div className="about-intro-container">
          <div className="about-kicker-wrapper">
            <motion.div
              className="section-kicker text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.div>
          </div>

          <ScrollWordReveal
            items={[
              {
                text: 'Canchuks Corrosion Inc is a renowned corrosion engineering company that specializes in variety of corrosion services including some of the following; corrosion, materials and engineering, pipeline integrity services, trainings, research, and development. With our customized pipeline integrity solutions, we extend the service life of buried unpiggable pipeline assets.',
                className: 'about-intro-headline',
                as: 'h2',
              }
            ]}
          />
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="about-values-section" aria-label="Our Mission and Vision">
        <div className="about-values-container">
          <div className="about-values-grid">
            {/* Mission Column */}
            <motion.div
              className="about-value-col"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-value-icon-badge" aria-hidden="true">
                <Send size={19} className="about-value-icon" />
              </div>
              <h3 className="about-value-title">
                Our <span className="highlight-orange">Mission</span>
              </h3>
              <p className="about-value-description">
                Canchuks Corrosion Nigeria Limited is committed to delivering innovative,
                reliable, and world-class corrosion and pipeline integrity solutions that
                enhance the safety, reliability, and longevity of oil and gas infrastructure
                across Nigeria, Africa, and beyond. Through advanced inspection
                technologies, engineering excellence, and industry-proven methodologies, we
                help our clients identify, assess, and manage corrosion risks, optimize
                asset performance, ensure regulatory compliance, and make informed
                decisions that protect people, assets, and the environment.
              </p>
            </motion.div>

            {/* Vision Column */}
            <motion.div
              className="about-value-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-value-icon-badge" aria-hidden="true">
                <Eye size={20} className="about-value-icon" />
              </div>
              <h3 className="about-value-title">
                Our <span className="highlight-orange">Vision</span>
              </h3>
              <p className="about-value-description">
                To become a leading provider of innovative corrosion engineering and pipeline
                integrity solutions in Nigeria and across Africa, recognized for technical
                excellence, technological innovation, and trusted client partnerships. We
                aspire to bridge the gap between globally proven technologies and local
                industry needs, setting new standards for pipeline safety, asset
                reliability, and sustainable infrastructure management throughout the
                energy sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Industrial Machinery Full-Width Image Section (about-img.jpg) */}
      <section className="about-banner-media-section" aria-label="Engineering In Action">
        <div className="about-banner-media-container">
          <motion.div
            className="about-banner-image-wrapper"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/about-img.jpg"
              alt="Canchuks engineer conducting precision machinery and pipeline structural inspection"
              className="about-featured-img"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Leadership Profile: Dr. Chukwuma (Chuks) Onuoha */}
      <section className="about-profile-section" aria-label="Leadership Profile">
        <div className="about-profile-container">
          <motion.div
            className="about-profile-header text-center"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-profile-name">
              Chukwuma (Chuks) Onuoha (P. Eng, PhD, FICorr, MBA)
            </h2>
            <p className="about-profile-role">
              AMPP Certified Corrosion Engineering Specialist
            </p>
          </motion.div>

          <motion.div
            className="about-profile-media-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/chuks-pic.jpg"
              alt="Dr. Chukwuma (Chuks) Onuoha speaking at the AMPP Conference podium"
              className="about-profile-img"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="about-profile-body"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="about-profile-bio">
              Dr Chukwuma (Chuks) Onuoha, P.Eng., PhD is a Principal Corrosion Engineering Lead
              at Canchuks Corrosion Inc Canada specializing in pipeline integrity, corrosion
              engineering, and advanced inspection technologies. He holds an MSc in Corrosion
              Control Engineering from the University of Manchester (UK) and a PhD in
              Materials Engineering (corrosion specialization) from Dalhousie University
              (Canada). He has led major integrity programmes including ECDA, ICDA, and SCCDA
              across complex pipeline systems worldwide. Dr Onuoha has authored over 50
              technical papers and actively collaborates with industry research organisations to
              advance emerging integrity technologies. He is an AMPP Certified Corrosion
              Specialist and a Fellow of the Institute of Corrosion (ICorr). With more than a
              decade of hands-on involvement in Contactless Magnetic Inspection Technology
              (CMIT), he has supported its development, validation, and deployment across
              multiple continents. His work focuses on improving inspection confidence,
              reducing unnecessary integrity decisions, and enhancing the reliability and
              safety of high-risk pipeline infrastructures.
            </p>

            <div className="about-profile-contact-wrapper">
              <a
                href="mailto:canchukscorrosioninc@gmail.com"
                className="about-profile-email-link"
              >
                Email: canchukscorrosioninc@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Reusable Final CTA Component */}
      <FinalCTA onContactClick={handleCtaClick} />
    </div>
  )
}

