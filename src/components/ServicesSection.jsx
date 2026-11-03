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
        <div className="section-kicker">Services</div>

        <div className="home-services-header-grid">
          <div className="home-services-header-left animate-fade-in-up">
            <h2 className="home-services-title">
              Comprehensive Pipeline Integrity Solutions
            </h2>
          </div>
          <div className="home-services-header-right animate-fade-in-up delay-100">
            <p className="home-services-intro">
              We provide specialized engineering services to help identify pipeline
              threats, assess corrosion risks, and support effective integrity
              management.
            </p>
          </div>
        </div>

        {/* 4 Items Grid with sharp corners & zero shadows */}
        <div className="home-services-grid">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className={`service-card animate-fade-in-up delay-${(idx + 1) * 100}`}
              onClick={() => onSelectService && onSelectService(item.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === 'Enter' && onSelectService && onSelectService(item.title)
              }
              aria-label={`View details for ${item.title}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
