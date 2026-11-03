import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import TechnologySection from './TechnologySection'
import WhyChooseUsSection from './WhyChooseUsSection'
import PartnerSection from './PartnerSection'
import FinalCTA from './FinalCTA'

export default function HomePage({ onNavigate }) {
  const handleContactClick = () => {
    onNavigate('contact')
  }

  const handleViewServices = () => {
    const el = document.getElementById('services-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home-page-wrapper animate-fade-in">
      {/* 1. Hero Section with /hero.jpg */}
      <HeroSection
        onContactClick={handleContactClick}
        onViewServices={handleViewServices}
      />

      {/* 2. About Us Section */}
      <AboutSection onViewServices={handleViewServices} />

      {/* 3. Comprehensive Pipeline Integrity Solutions (service1 to 4) */}
      <ServicesSection onSelectService={handleContactClick} />

      {/* 4. Technology: Contactless Magnetic Inspection Technology (CMIT) with YouTube Embed */}
      <TechnologySection />

      {/* 5. Why Choose Canchuks Corrosion? (3 Cards) */}
      <WhyChooseUsSection />

      {/* 6. Partner With Us (partner-img.png + Contact Us) */}
      <PartnerSection onContactClick={handleContactClick} />

      {/* 7. Final CTA: Need a Pipeline Integrity Solution? (final-cta-bg.jpg) */}
      <FinalCTA onContactClick={handleContactClick} />
    </div>
  )
}

