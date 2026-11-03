import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Knowledge.css'

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState('all')

  const industryPublications = [
    'C. Onuoha et al, “No Contact, No Problem: Validating Contactless Magnetic Inspection (CMIT) for Corrosion Detection on Buried Gas Pipelines” AMPP Corrosion Conference Paper # C2026-00291 (AMPP CORROSION, 2026)',
    'C. Onuoha et al, “Revolutionizing Unpiggable Pipeline Assessment: The Power of Holistic Inspection” AMPP Corrosion Conference Paper # C2026-00292 (AMPP CORROSION, 2026)',
    'C. Onuoha et al, “Successful Deployment of Contactless Magnetic Inspection Technology (CMIT) in the Integrity Assessment of a 30-Inch Crude Oil Pipeline.” AMPP Corrosion Conference Paper # C2026-C-9 (AMPP Calgary, 2026)',
    'C. Onuoha et al, “Successful Deployment of Contactless Magnetic Inspection Technology (CMIT) for the Prioritization of External Corrosion Engineering Assessment (ECEA) Digs.” AMPP Corrosion Conference Paper # C2026-C-10 (AMPP Calgary, 2026)',
    'C. Onuoha, “Next-Generation Integrity Framework: Merging Contactless Magnetic Inspection (CMIT) with DA Methodologies for Unpiggable Pipelines.” (AMPP Lloydminster Technical Show, 2025)',
    'C. Onuoha, “Next-Generation Integrity Framework: Merging Contactless Magnetic Inspection (CMIT) with DA Methodologies for Unpiggable Pipelines.” (AMPP Calgary Technical Show, 2025)',
    'C. Onuoha et al, “Advanced Contactless Magnetic Inspection Technology for the Water and Wastewater Industry.” AMPP Corrosion Conference Paper # C2025-C-11 (AMPP Panama, 2025)',
    'C. Onuoha et al, “Deployment of Contactless Magnetic Inspection Technology (CMIT) in Pipeline Integrity Assessment.” AMPP Corrosion Conference Paper # C2025-C-10 (AMPP Panama, 2025)',
    'C. Onuoha et al, “Innovative Non-Contact Overline Survey Techniques for the Water and Wastewater Industry.” AMPP Corrosion Conference Paper # C2025-C-32 (AMPP Saskatoon, 2025)',
    'C. Onuoha et al, “Innovative Non-Contact Overline Survey Techniques for the Water and Wastewater Industry” AMPP Corrosion Conference Paper # C2025-00220 (AMPP CORROSION, 2025)',
    'C. Onuoha et al, “Field-Validated Results of the Non-contact Magnetic Gradient Tomography Method (MTM-G) for Enhancement in Pipeline Integrity” AMPP Corrosion Conference Paper # C2025-00219 (AMPP CORROSION, 2025)',
    'C. Onuoha (2024). Advances in Use of Internal Corrosion Predictive Modelling on Buried Crude Oil and Gas Pipelines. In: Javaherdashti, R. (eds) Advances in Corrosion Modelling. Engineering Materials. Springer, Cham. https://doi.org/10.1007/978-3-031-60358-7_5',
    'C. Onuoha et al, “Enhancement of pipeline integrity assessment of buried unpiggable pipelines with non-contact magnetic gradient tomography method (MTM-G),” Journal of Materials and Manufacturing 3 (1): 25 – 37 (2024).',
    'C. Onuoha, “Advances in Comprehensive Integrity Assessment of Buried Pipelines with Non-Contact Magnetic Gradient Tomography Method (MTM-G),” Institute of Corrosion UK (ICORR) Quarterly Seminar, Aberdeen 2024',
    'C. Onuoha, “Advancements in Direct Assessment with the Non-Contact Magnetic Gradient Tomography Method (MTM-G),” AMPP Edmonton Corrosion Conference (AMPP International Western Area Edmonton Conference, 2024).',
    'C. Onuoha, “Improvements in Direct Assessment with the Non-Contact Magnetic Gradient Tomography Method (MTM-G),” AMPP Corrosion Conference Paper # C2024-20874 (AMPP CORROSION, 2024)',
    'C. Onuoha, “Interpretation and Selection of Direct Examination Locations with Respect to SCCDA Methodology,” NACE Edmonton Corrosion Conference (NACE International Northern Area Western Conference, 2022).',
    'V. Shankar, C. Onuoha, E. Pozniak, P. Song, “Innovative Solutions for Water Crossing Pipeline Inspections” ASME Pipeline Conference Paper # 931627 (ASME Pipeline Conference, 2021)',
    'C. Onuoha, E. Pozniak, V. Shankar, C. White, “Innovative Overline Survey Techniques for the Water and Wastewater Industry” ASME Pipeline Conference Paper # 927524 (ASME Pipeline Conference, 2021)',
    'V. Shankar, E. Pozniak, C. Onuoha, S. McDonnell, J. Spenst, T. Bumby, “Improved Methodology To Identify The Location Of A Stuck Pig Using Large Standoff Magnetometry Technology” NACE Corrosion Conference Paper # C2021-16908 (NACE CORROSION, 2021)',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, L de Guzman, H Li, “Optimization of Internal Corrosion Assessments in Crude Oil Pipelines with Internal Corrosion Predictive Model” NACE Corrosion Conference Paper # C2021-16180 (NACE CORROSION, 2021)',
    'V. Shankar, E. Pozniak, C. Onuoha, S. McDonnell, “Monitoring and Assessing Pipeline Water Crossings in the Face of Severe Flooding, River Scour, and River Channel Migration” NACE Corrosion Conference Paper # C2019-14962 (NACE CORROSION, 2020).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Process Improvements in Direct Assessment Programs” NACE Corrosion Conference Paper # C2019-14817 (NACE CORROSION, 2020).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Use of Large Standoff Magnetometry in Pipeline Integrity Investigations” NACE Corrosion Conference Paper # C2019-14475 (NACE CORROSION, 2020).',
    'V. Shankar, E. Pozniak, C. Onuoha, S. McDonnell, “Leveraging IOT Telemetry to Improve the Tracking of Inline Inspection Tools for Oil & Gas Pipelines,” IPC Conference Paper # IPC2020-9681 (IPC Calgary, 2020).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Coating Anomaly Detection with Integrated Indirect Inspection Tools,” NACE Corrosion Conference Paper # C2019-12810 (NACE CORROSION, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Comparison of Predicted and Outcome of Several ECDA Digs to Demonstrate Improvements in ECDA Methodologies,” NACE Corrosion Conference Paper # C2019-12811 (NACE CORROSION, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Interpretation and Selection of Direct Examination Locations with Respect to SCCDA Methodology,” NACE Corrosion Conference Paper # C2019-12812 (NACE CORROSION, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, V. Shankar, “Integrity Assessment Case Studies of Time-Dependent Threats,” NACE Corrosion Conference Paper # C2019-12928 (NACE CORROSION, 2019).',
    'C. Onuoha, S. McDonnell, V. Shankar, E. Pozniak, “Use of Large Standoff Magnetometry for Geohazard Pipeline Integrity Investigations,” ASME PIMG Conference Paper # AIM-PIMG2019-1019 (ASME Houston Texas, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, “Identification of Unknown Steel Rods on Buried Pipeline Using Indirect Inspection Method,” NACE Western Corrosion Conference Paper # 02-0119 (NACE Calgary Canada, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, “Improvements in Direct Assessment Methodologies Using an Integrated Approach,” NACE Western Corrosion Conference Paper # 02-0319 (NACE Calgary Canada, 2019).',
    'C. Onuoha, S. McDonnell, E. Pozniak, “Predicted and Actual Dig Outcome of ECDA on Multiple Buried Onshore Pipelines,” NACE Western Corrosion Conference Paper # 02-1419 (NACE Calgary Canada, 2019).',
    'S. McDonnell, C. Onuoha, V. Shankar, E. Pozniak, “Identifying Stress Concentrations on Buried Pipelines using Large Standoff Magnetometry Technology,” IPC Conference Paper # IPC2018-78162 (IPC Calgary, 2018).',
    'C. Onuoha, S. McDonnell, E. Pozniak, “Predicted and Actual Dig Outcome of Dry Gas Internal Corrosion Direct Assessment of Unpiggable Pipelines,” NACE Corrosion Conference Paper # C2018-11300 (NACE CORROSION, 2018).',
    'C. Onuoha, S. McDonnell, E. Pozniak, L. Guzman, V. Shankar, G. Zinter, “Advancements in Stress Corrosion Cracking Direct Assessment using an Integrated Approach,” NACE Corrosion Conference Paper # C2018-11194 (NACE CORROSION, 2018).',
    'C. Onuoha, S. McDonnell & Et al, PRCI Project EC-3-19: Improved Methodology for Identifying Coating Faults and Their Severity Through Electrolyte Resistivity Measurements (Miami Florida, 2018)',
    'C. Onuoha, S. McDonnell, E. Pozniak, M. Wegner, V. Shankar, G. Zinter, “Interpretation and Selection of Direct Examination Locations with Respect to ECDA Methodology,” NACE Corrosion Conference Paper # C2017-9304 (NACE CORROSION, 2017).',
    'C. Onuoha, S. McDonnell, E. Pozniak, M. Wegner, V. Shankar, G. Zinter, P. Paulson, W. Sim, J. Tolentino, T. Ross, “Improved Methodology in Identification of Buried Casings Using Indirect Inspection Method,” NACE Corrosion Conference Paper # C2017-9400 (NACE CORROSION, 2017).',
    'C. Onuoha, S. McDonnell, E. Pozniak, L. Guzman, R. Lennox, P. Iyer, Y. Nakazato, C. Corina, G. Zinter, “Correlation of Inline and Aboveground Integrity Data for Comprehensive Pipeline Integrity Management,” NACE Corrosion Conference Paper # C2017-9648 (NACE CORROSION, 2017).',
    'C. Onuoha, S. McDonnell, E. Pozniak, M. Krywko, “Pipeline Integrity Assessment, In-Line Inspection and Direct Assessment Anomaly Density,” NACE Corrosion Conference Paper # C2016-7713 (NACE CORROSION, 2016).',
    'C. Onuoha, S. McDonnell, E. Pozniak, M. Krywko, V. Shankar, “Improvement to Cathodic Protection Performance using DCVG Prioritization,” NACE Corrosion Conference Paper # C2016-7091 (NACE CORROSION, 2016).',
    'S. McDonnell, C.C. Onuoha, “Oil and Gas Pipeline Technology Finds Uses in the Water and Wastewater Industry”, ASCE 2015 Pipeline Conference (Baltimore, USA 2015).',
    'S. McDonnell, M. Wrigglesworth, T. Ross, C. Onuoha, “An Integrated Approach to Integrity for the Un-Piggable Pipe: New Inline and External Techniques,” Pipeline Technology Conference (Berlin Germany, 2015).',
  ]

  const journalArticles = [
    'C. Onuoha, Z. Russell (née Memarrashidi), G.J. Kipouros, Z.N. Farhat and K.P. Plucknett, ‘The Aqueous Electrochemical Response of TiC-Stainless Steel Cermets’, Metals, 8 [6] Paper #398, pages 1-26 (2018). Invited paper: Focus Issue on “Cermets and Hardmetals”.',
    'C. Onuoha, Z. Memarrashidi, G.J. Kipouros, Z.N. Farhat and K.P. Plucknett, ‘Aqueous Corrosion Behaviour of TiC-304L Stainless Steel Cermets in a 3.5 wt.% NaCl Solution’, Int. J. Refrac. Metal. Hard Mater., 66 [1] 234-243 (2017).',
    'C. Jin, C.C. Onuoha, Z.N. Farhat, G.J. Kipouros and K.P. Plucknett, ‘Reciprocating Wear Behaviour of TiC-Stainless Steel Cermets’, Tribol. Int., 105 [1] 250-263 (2017).',
    'C. Jin, C.C. Onuoha, Z.N. Farhat, G.J. Kipouros and K.P. Plucknett, ‘Microstructural Damage Following Reciprocating Wear of TiC-Stainless Steel Cermets’, Tribol. Int., 105 [1] 201-218 (2017).',
    'C. Onuoha, C. Jin, Z.N. Farhat, G.J. Kipouros and K.P. Plucknett, ‘The Effects of TiC Grain Size on the Sliding Wear Behaviour of TiC-316L Stainless Steel Cermets’, Wear, 350-351 [1-2] 116-129 (2016).',
    'C. Onuoha, G.J. Kipouros, Z.N. Farhat and K.P. Plucknett, ‘The Effects of Metal Binder Content and Carbide Grain Size on the Aqueous Corrosion Behaviour of TiC-316L Stainless Steel Cermets’, Int. J. Refrac. Metal. Hard Mater., 44 [1] 129-141 (2014).',
    'C. Onuoha, Z.N. Farhat, G.J. Kipouros and K.P. Plucknett, ‘The Reciprocating Wear Behaviour of TiC-304L Stainless Steel Composites Prepared by Melt Infiltration’, Wear, 303 [1-2] 321-333 (2013).',
  ]

  const academicConferences = [
    'C. Jin, C.C. Onuoha, Z.N. Farhat, G.J. Kipouros and K.P. Plucknett, ‘Focused Ion Beam Characterisation of Reciprocating Wear Damage in TiC-316L Stainless Steel Cermets’, extended abstract (2 pages) in Proceedings of the 2016 Annual Meeting of the Microscopical Society of Canada, Edmonton, Alberta, Canada (June 2016).',
    'C. Onuoha, G.J. Kipouros, Z.N. Farhat and K.P. Plucknett, ‘Characterisation of Reciprocating Wear in TiC/Stainless Steel Composites’, pp. 126-127 in Proceedings of the 2012 Annual Meeting of the Microscopical Society of Canada, Halifax, Nova Scotia, Canada (2012).',
  ]

  const bookChapters = [
    'K.P. Plucknett, C. Jin, C.C. Onuoha, T.L. Stewart and Z. Memarrashidi, ‘Sliding Wear of High Performance Ceramic-Metal Composites’, in Mechanics of Materials (Vol. 4): Measurement and Applications, Springer International Publishing AG, Switzerland (2017). Invited paper.',
  ]

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'industry', label: 'Industry Conferences' },
    { id: 'journals', label: 'Journal Articles' },
    { id: 'academic', label: 'Academic Conferences' },
    { id: 'book', label: 'Invited Book Chapter' },
  ]

  return (
    <div className="knowledge-page-wrapper">
      <div className="knowledge-container">
        {/* Main Header */}
        <motion.div
          className="knowledge-main-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="knowledge-main-title">Knowledge</h1>
          <p className="knowledge-main-subtitle">
            Industry publications, technical whitepapers, peer-reviewed journal articles,
            and specialized pipeline integrity methodologies authored by our leadership team.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="knowledge-tabs-wrapper"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`knowledge-tab-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Publications Content List */}
        <div className="knowledge-sections-list">
          <AnimatePresence mode="wait">
            {/* 1. Industry Conferences and Publications */}
            {(activeCategory === 'all' || activeCategory === 'industry') && (
              <motion.section
                key="industry"
                className="knowledge-category-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="knowledge-category-title">
                  INDUSTRY CONFERENCES AND PUBLICATIONS
                </h2>
                <ul className="knowledge-items-list">
                  {industryPublications.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="knowledge-item-card"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.35, delay: (idx % 10) * 0.03 }}
                      whileHover={{ x: 6 }}
                    >
                      <p className="knowledge-item-text">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* 2. Academic Journal Articles */}
            {(activeCategory === 'all' || activeCategory === 'journals') && (
              <motion.section
                key="journals"
                className="knowledge-category-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="knowledge-category-title">ACADEMIC JOURNAL ARTICLES</h2>
                <ul className="knowledge-items-list">
                  {journalArticles.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="knowledge-item-card"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      whileHover={{ x: 6 }}
                    >
                      <p className="knowledge-item-text">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* 3. Academic Conferences & Publications */}
            {(activeCategory === 'all' || activeCategory === 'academic') && (
              <motion.section
                key="academic"
                className="knowledge-category-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="knowledge-category-title">
                  ACADEMIC CONFERENCES &amp; PUBLICATIONS
                </h2>
                <ul className="knowledge-items-list">
                  {academicConferences.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="knowledge-item-card"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{ x: 6 }}
                    >
                      <p className="knowledge-item-text">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* 4. Invited Book Chapter */}
            {(activeCategory === 'all' || activeCategory === 'book') && (
              <motion.section
                key="book"
                className="knowledge-category-block"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="knowledge-category-title">INVITED BOOK CHAPTER</h2>
                <ul className="knowledge-items-list">
                  {bookChapters.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="knowledge-item-card"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                      whileHover={{ x: 6 }}
                    >
                      <p className="knowledge-item-text">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* 5. Profile Section: Dr. Chukwuma Onuoha & chuks-pic.jpe */}
        <section className="knowledge-profile-section">
          <motion.div
            className="knowledge-profile-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="knowledge-profile-name">
              Chukwuma (Chuks) Onuoha (P. Eng, PhD, FICorr, MBA)
            </h2>
            <p className="knowledge-profile-role">
              AMPP Certified Corrosion Engineering Specialist
            </p>
          </motion.div>

          <motion.div
            className="knowledge-profile-media"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/chuks-pic.jpe"
              alt="Dr. Chukwuma (Chuks) Onuoha speaking at the AMPP conference podium"
              className="knowledge-profile-img"
              loading="lazy"
            />
          </motion.div>

          <motion.p
            className="knowledge-profile-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dr. Chukwuma (Chuks) Onuoha, (P.Eng., PhD) is a Principal Corrosion
            Engineering Lead at Canchuks Corrosion Inc. Canada, specializing in pipeline
            integrity, cathodic protection engineering, and advanced inspection
            technologies. He holds an MSc in Corrosion Control Engineering from the
            University of Manchester, UK, and a PhD in Materials Engineering (Corrosion
            specialization) from Dalhousie University, Canada. He has led major
            integrity programmes including ECDA, ICDA, and SCCDA across complex pipeline
            systems worldwide. Dr. Onuoha has authored over 50 technical papers and
            journal articles, collaborates with industry research organizations to
            advance emerging integrity technologies. He is an AMPP Certified Corrosion
            Specialist and a Fellow of the Institute of Corrosion (ICorr). With more
            than a decade of hands-on involvement in Contactless Magnetic Inspection
            Technology (CMIT), he has supported its development, validation, and
            deployment across multiple continents. His work focuses on improving
            inspection confidence, reducing uncalculated integrity escalations, and
            enhancing the reliability and safety of high-consequence asset networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="mailto:canchukscorrosioninc@gmail.com"
              className="knowledge-profile-contact-link"
            >
              Email: canchukscorrosioninc@gmail.com
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
