import { Award, UserCheck, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyChooseUsSection() {
  const features = [
    {
      id: 1,
      title: 'Specialized Engineering Expertise',
      icon: Award,
      text: 'Our focus on corrosion and materials engineering enables us to address complex pipeline integrity and asset reliability challenges.',
    },
    {
      id: 2,
      title: 'Technology–Driven Assessments',
      icon: UserCheck,
      text: 'We apply advanced inspection technologies and structured assessment methodologies to help identify potential pipeline threats.',
    },
    {
      id: 3,
      title: 'Comprehensive Service Capabilities',
      icon: Users,
      text: 'From corrosion assessment to risk evaluation and materials engineering, we offer services that address multiple aspects of pipeline integrity.',
    },
  ]

  return (
    <section
      id="why-choose-us-section"
      className="home-why-section"
      aria-labelledby="home-why-heading"
    >
      <div className="home-why-container">
        {/* Kicker */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <motion.div
            className="section-kicker text-center"
            style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.div>
        </div>

        {/* Heading */}
        <motion.h2
          id="home-why-heading"
          className="home-why-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Canchuks Corrosion?
        </motion.h2>

        {/* 3 Clean Columns with Staggered Framer Motion Reveal */}
        <div className="home-why-grid">
          {features.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.article
                key={item.id}
                className="why-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
              >
                <div className="why-icon-badge" aria-hidden="true">
                  <IconComponent size={20} className="why-icon" />
                </div>
                <h3 className="why-col-title">{item.title}</h3>
                <p className="why-col-text">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
