import { motion } from 'framer-motion'

export default function TechnologySection() {
  return (
    <section
      id="technology-section"
      className="home-tech-section"
      aria-labelledby="home-tech-heading"
    >
      <div className="home-tech-container">
        {/* Kicker Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <motion.div
            className="section-kicker text-center"
            style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technology
          </motion.div>
        </div>

        {/* Heading 400 Font Weight */}
        <motion.h2
          id="home-tech-heading"
          className="home-tech-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contactless Magnetic Inspection Technology (CMIT)
        </motion.h2>

        {/* Responsive YouTube Embed Container with Framer Motion */}
        <motion.div
          className="home-tech-video-wrapper"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="video-responsive-frame">
            <iframe
              src="https://www.youtube.com/embed/vTx-b5bHY0s?si=JlneWONdSpJOkCWC"
              title="YouTube video player - Canchuks Contactless Magnetic Inspection Technology (CMIT)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video-iframe"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
