import { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Send,
  Building2,
  ExternalLink
} from 'lucide-react'

export default function ContactPage({ onBackTo404 }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Pipeline Integrity Assessment',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  const servicesList = [
    'Pipeline Integrity Assessment',
    'Cathodic Protection (CP) Design & Survey',
    'Non-Destructive Testing (NDT)',
    'Corrosion Risk Assessment & Mitigation',
    'Coating Inspection & Failure Analysis',
    'Engineering Consultancy & Training',
  ]

  return (
    <div className="contact-page-wrapper animate-fade-in">
      {/* Top Breadcrumb & Return Bar */}
      <div className="contact-nav-bar">
        <div className="contact-nav-container">
          <button
            type="button"
            className="contact-back-link"
            onClick={onBackTo404}
          >
            <ArrowLeft size={16} />
            <span>Back to 404 Page</span>
          </button>
          <div className="contact-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-badge-pill">
            <ShieldCheck size={16} />
            <span>Trusted Pipeline & Corrosion Specialists</span>
          </div>
          <h1 className="contact-hero-title">Contact Our Engineering Team</h1>
          <p className="contact-hero-subtitle">
            Reach out to discuss pipeline integrity assessments, cathodic protection,
            and comprehensive corrosion mitigation across Nigeria and West Africa.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column animate-fade-in-up">
            <div className="contact-info-card">
              <h2 className="contact-card-title">Corporate Headquarters</h2>
              <p className="contact-card-desc">
                Canchuks Corrosion Nigeria Limited operates as a dedicated subsidiary of
                Canchuks Corrosion Inc., Canada.
              </p>

              <div className="contact-details-list">
                {/* Office */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <MapPin size={20} className="icon-orange" />
                  </div>
                  <div>
                    <span className="contact-detail-label">Office Address</span>
                    <p className="contact-detail-val">
                      31, Wetheral Road, Owerri, Imo State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <Phone size={20} className="icon-blue" />
                  </div>
                  <div>
                    <span className="contact-detail-label">Direct Hotline</span>
                    <a href="tel:+2349128209328" className="contact-detail-link">
                      +2349128209328
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <Mail size={20} className="icon-orange" />
                  </div>
                  <div>
                    <span className="contact-detail-label">Official Email</span>
                    <a
                      href="mailto:canchukscorrosioninc@gmail.com"
                      className="contact-detail-link"
                    >
                      canchukscorrosioninc@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <Clock size={20} className="icon-blue" />
                  </div>
                  <div>
                    <span className="contact-detail-label">Working Hours</span>
                    <p className="contact-detail-val">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="contact-detail-sub">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Canadian Parent Portal link */}
              <div className="contact-global-banner">
                <Building2 size={20} className="global-icon" />
                <div className="global-banner-text">
                  <span>Parent Entity: Canchuks Corrosion Inc.</span>
                  <a
                    href="https://canchukscorrosion.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="global-link"
                  >
                    <span>Visit Canada Portal</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="contact-form-column animate-fade-in-up delay-100">
            <div className="contact-form-card">
              <h2 className="contact-card-title">Send Us a Direct Message</h2>
              <p className="contact-card-desc">
                Fill in your project specifications and an engineering specialist will
                reply within 24 hours.
              </p>

              {submitted ? (
                <div className="contact-success-state animate-fade-in">
                  <div className="success-icon-wrapper">
                    <CheckCircle size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Message Successfully Dispatched!</h3>
                  <p className="success-desc">
                    Thank you for reaching out, <strong>{formData.name || 'Valued Partner'}</strong>.
                    Our corrosion engineering team at Owerri has received your inquiry
                    and will get in touch shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-orange-pill success-reset-btn"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Pipeline Integrity Assessment',
                        message: '',
                      })
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Engr. Chukwuma Obi"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="e.g. Energy Resources Ltd"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Required Service Solution *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Please outline the pipeline location, operational environment, diameter, inspection scope, or any urgent corrosion concerns..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-orange-pill form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
