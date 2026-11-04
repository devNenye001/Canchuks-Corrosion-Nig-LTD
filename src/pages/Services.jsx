import { motion } from 'framer-motion'
import FinalCTA from '../components/FinalCTA'
import './Services.css'

export default function Services({ onNavigate }) {
  const serviceList = [
    {
      num: '01',
      title: 'CMIT Inspection',
      desc: 'We handle building construction and structural works with a focus on quality, durability and professional execution - from initial planning to project completion.',
      img: '/serve1.jpg',
      alt: 'CMIT Inspection - Industrial refinery and pipeline infrastructure',
    },
    {
      num: '02',
      title: 'Internal Corrosion Assessment',
      desc: 'Evaluating internal corrosion risks in buried, unpiggable pipelines using NACE ICDA programs.',
      img: '/serve2.jpg',
      alt: 'Internal Corrosion Assessment - Technical analysis and monitoring',
    },
    {
      num: '03',
      title: 'External Corrosion Assessment',
      desc: 'Assessing buried, unpiggable pipelines including cathodic protection and coating surveys using NACE ECDA protocols.',
      img: '/serve3.jpg',
      alt: 'External Corrosion Assessment - Engineering team review',
    },
    {
      num: '04',
      title: 'Stress Corrosion Cracking Assessment',
      desc: 'Assessing pipeline susceptibility to stress corrosion cracking using NACE SCCDA programs.',
      img: '/serve4.jpg',
      alt: 'Stress Corrosion Cracking Assessment - Corroded pipeline surface',
    },
    {
      num: '05',
      title: 'Cathodic Protection Design & Surveys',
      desc: 'Designing cathodic protection systems and conducting surveys to assess their effectiveness in protecting buried or submerged metallic structures against corrosion.',
      img: '/serve5.jpg',
      alt: 'Cathodic Protection Design & Surveys - Offshore energy platform',
    },
  ]

  const handleCtaClick = () => {
    onNavigate('contact')
  }

  return (
    <div className="services-page-wrapper">
      {/* 1. Hero Banner with rusty pipe texture & curved concave bottom */}
      <section className="services-hero-banner" aria-label="Services Banner">
        <div className="services-hero-bg" />
        <div className="services-hero-overlay" />

        <motion.div
          className="services-hero-container"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="services-hero-title">
            Pipeline Integrity &amp; Corrosion Engineering
          </h1>
          <p className="services-hero-subtitle">
            We provide specialized engineering services to the oil and gas industry to
            help evaluate pipeline conditions, identify corrosion threats, and protect
            asset integrity.
          </p>
        </motion.div>

        {/* Downward convex bottom curve matching design */}
        <div className="services-hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* 2. Main Services Section (01 to 05) */}
      <section className="services-main-section">
        <div className="services-main-container">
          <motion.h2
            className="services-main-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive Pipeline Integrity &amp; Corrosion Engineering Solutions.
          </motion.h2>

          <div className="services-cards-list">
            {serviceList.map((item, idx) => (
              <motion.article
                key={item.num}
                className="service-feature-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="service-feature-content">
                  <span className="service-feature-num">{item.num}</span>
                  <h3 className="service-feature-title">{item.title}</h3>
                  <p className="service-feature-desc">{item.desc}</p>
                </div>

                <div className="service-feature-image-wrap">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="service-feature-img"
                    loading="lazy"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technology Section: Discover Our CMIT Approach */}
      <section className="services-tech-section">
        <div className="services-tech-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="services-tech-kicker">Technology</span>
            <h2 className="services-tech-title">Discover Our CMIT Approach</h2>
          </motion.div>

          <motion.div
            className="services-tech-video-wrapper"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="services-video-frame">
              <iframe
                src="https://www.youtube.com/embed/vTx-b5bHY0s?si=JlneWONdSpJOkCWC"
                title="Discover Our CMIT Approach - YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="services-video-iframe"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <FinalCTA onContactClick={handleCtaClick} />
    </div>
  )
}

