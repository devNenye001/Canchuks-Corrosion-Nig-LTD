import { motion } from 'framer-motion'

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: 1,
      title: 'Pipeline Integrity Services',
      img: '/service1.jpg',
      alt: 'Industrial oil and gas pipeline infrastructure',
    },
    {
      id: 2,
      title: 'Corrosion, Material Selection & Engineering',
      img: '/service2.jpg',
      alt: 'Corroded structural metal and pipeline material testing',
    },
    {
      id: 3,
      title: 'Training',
      img: '/service3.jpg',
      alt: 'Professional engineering training session with laptops',
    },
    {
      id: 4,
      title: 'Research & Development',
      img: '/service4.jpg',
      alt: 'Corrosion research and laboratory analysis session',
    },
  ]

  return (
    <section id="services-section" className="home-services-section">
      <div className="home-services-container">
        {/* Section Header */}
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.div>

        <div className="home-services-header-grid">
          <motion.div
            className="home-services-header-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="home-services-title">
              Comprehensive Pipeline Integrity Solutions
            </h2>
          </motion.div>
          <motion.div
            className="home-services-header-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="home-services-intro">
              We provide specialized engineering services to help identify pipeline
              threats, assess corrosion risks, and support effective integrity
              management.
            </p>
          </motion.div>
        </div>

        {/* 4 Items Grid with sharp corners & zero shadows */}
        <div className="home-services-grid">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              className="service-card"
              onClick={() => onSelectService && onSelectService(item.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === 'Enter' && onSelectService && onSelectService(item.title)
              }
              aria-label={`View details for ${item.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="service-card-image-wrap">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="service-card-img"
                  loading="lazy"
                />
                <div className="service-card-gradient" />
              </div>

              <div className="service-card-info">
                <h3 className="service-card-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
