export default function TechnologySection() {
  return (
    <section className="home-tech-section" aria-label="Technology Demonstration">
      <div className="home-tech-container">
        {/* Kicker Tag */}
        <div className="section-kicker text-center">Technology</div>

        {/* Heading 400 Font Weight */}
        <h2 className="home-tech-title text-center animate-fade-in-up">
          Contactless Magnetic Inspection Technology (CMIT)
        </h2>

        {/* Responsive YouTube Embed Container */}
        <div className="home-tech-video-wrapper animate-fade-in-up delay-100">
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
        </div>
      </div>
    </section>
  )
}

