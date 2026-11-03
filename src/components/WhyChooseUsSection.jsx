import { Shield, Cpu, Layers } from 'lucide-react'

export default function WhyChooseUsSection() {
  const features = [
    {
      id: 1,
      title: 'Specialized Engineering Expertise',
      icon: Shield,
      text: 'Our focus on corrosion and materials engineering enables us to address complex pipeline integrity and asset reliability challenges.',
    },
    {
      id: 2,
      title: 'Technology–Driven Assessments',
      icon: Cpu,
      text: 'We apply advanced inspection technologies and structured assessment methodologies to help identify potential pipeline threats.',
    },
    {
      id: 3,
      title: 'Comprehensive Service Capabilities',
      icon: Layers,
      text: 'From corrosion assessment to risk evaluation and materials engineering, we offer services that address multiple aspects of pipeline integrity.',
    },
  ]

  return (
    <section className="home-why-section">
      <div className="home-why-container">
        {/* Kicker */}
        <div className="section-kicker text-center">Why Choose Us</div>

        {/* Heading */}
        <h2 className="home-why-title text-center animate-fade-in-up">
          Why Choose Canchuks Corrosion?
        </h2>

        {/* 3 Columns Grid */}
        <div className="home-why-grid">
          {features.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className={`why-card animate-fade-in-up delay-${(idx + 1) * 100}`}
              >
                <div className="why-icon-bubble">
                  <IconComponent size={22} className="why-icon" />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

