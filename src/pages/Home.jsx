import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import TechnologySection from '../components/TechnologySection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import PartnerSection from '../components/PartnerSection'
import FinalCTA from '../components/FinalCTA'
import './Home.css'

export default function Home({ onNavigate }) {
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
      {/* 1. Hero Section (/hero.jpg) */}
      <HeroSection
        onContactClick={handleContactClick}
        onViewServices={handleViewServices}
      />

      {/* 2. About Us Section */}
      <AboutSection onViewServices={handleViewServices} />

      {/* 3. Comprehensive Pipeline Integrity Solutions (service1 to 4) */}
      <ServicesSection onSelectService={handleContactClick} />

      {/* 4. Technology: Contactless Magnetic Inspection Technology (CMIT) */}
      <TechnologySection />

      {/* 5. Why Choose Canchuks Corrosion? (3 clean columns, no card boxes) */}
      <WhyChooseUsSection />

      {/* 6. Partner With Us (partner-img.png + Contact Us) */}
      <PartnerSection onContactClick={handleContactClick} />

      {/* 7. Final CTA: Need a Pipeline Integrity Solution? */}
      <FinalCTA onContactClick={handleContactClick} />
    </div>
  )
}

