import { useEffect } from 'react'

const SITE_URL = 'https://canchukscorrosionng.com'
const SITE_NAME = 'Canchuks Corrosion Nigeria Limited'

const PAGE_META = {
  home: {
    title: 'Canchuks Corrosion Nigeria Limited | Corrosion Engineering & Pipeline Integrity',
    description:
      'Canchuks Corrosion Nigeria Limited delivers advanced corrosion engineering, pipeline integrity assessments, Contactless Magnetic Inspection Technology (CMIT), ECDA, ICDA, SCCDA, and cathodic protection solutions across Nigeria.',
    keywords:
      'Canchuks Corrosion Nigeria Limited, corrosion engineering Nigeria, pipeline integrity services, CMIT inspection, Contactless Magnetic Inspection Technology, Port Harcourt, Owerri, unpiggable pipelines, oil and gas Nigeria',
    path: '/',
    image: `${SITE_URL}/hero.jpg`,
    imageAlt: 'Offshore and onshore pipeline integrity and corrosion engineering in Nigeria',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          description:
            'Advanced corrosion engineering, pipeline integrity assessment, and Contactless Magnetic Inspection Technology (CMIT) in Nigeria.',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en-NG',
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: 'Canchuks Corrosion Nigeria Limited | Home',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
          description:
            'Specialized corrosion assessment, materials engineering, training, R&D, and CMIT inspection solutions for Nigeria’s oil and gas industry.',
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/hero.jpg`,
          },
          hasPart: [
            {
              '@type': 'WebPageElement',
              name: 'Hero - Advanced Corrosion Engineering & Reliable Pipeline Integrity',
              url: `${SITE_URL}/#hero-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'About Us - Expertise in Corrosion & Pipeline Integrity',
              url: `${SITE_URL}/#about-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Services - Comprehensive Pipeline Integrity Solutions',
              url: `${SITE_URL}/#services-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Technology - Contactless Magnetic Inspection Technology (CMIT)',
              url: `${SITE_URL}/#technology-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Why Choose Canchuks Corrosion',
              url: `${SITE_URL}/#why-choose-us-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Partner With Us',
              url: `${SITE_URL}/#partners-section`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Need a Pipeline Integrity Solution - Call to Action',
              url: `${SITE_URL}/#cta-section`,
            },
          ],
        },
      ],
    },
  },
  about: {
    title: 'About Us | Canchuks Corrosion Nigeria Limited',
    description:
      'Learn about Canchuks Corrosion Nigeria Limited, our mission, vision, customized integrity solutions for buried unpiggable pipelines, and Principal Corrosion Engineer Dr. Chukwuma (Chuks) Onuoha, P.Eng., PhD.',
    keywords:
      'About Canchuks Corrosion Nigeria, Dr Chukwuma Onuoha, Chuks Onuoha, AMPP Certified Corrosion Specialist, pipeline integrity mission vision Nigeria, corrosion engineering company Nigeria',
    path: '/about',
    image: `${SITE_URL}/about-img.jpg`,
    imageAlt: 'Canchuks Corrosion engineer inspecting heavy industrial pipeline infrastructure',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${SITE_URL}/about#webpage`,
          url: `${SITE_URL}/about`,
          name: 'About Us | Canchuks Corrosion Nigeria Limited',
          description:
            'Mission, vision, engineering capabilities, and leadership of Canchuks Corrosion Nigeria Limited.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/about-img.jpg`,
          },
          hasPart: [
            {
              '@type': 'WebPageElement',
              name: 'Corrosion, Materials, Pipeline Integrity Services Hero',
              url: `${SITE_URL}/about#about-hero`,
            },
            {
              '@type': 'WebPageElement',
              name: 'About Us - Customized Pipeline Integrity Solutions Overview',
              url: `${SITE_URL}/about#about-intro`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Our Mission and Vision',
              url: `${SITE_URL}/about#mission-and-vision`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Engineering In Action',
              url: `${SITE_URL}/about#engineering-in-action`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Leadership Profile - Dr. Chukwuma (Chuks) Onuoha',
              url: `${SITE_URL}/about#leadership-profile`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Need a Pipeline Integrity Solution - Call to Action',
              url: `${SITE_URL}/about#cta-section`,
            },
          ],
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
            ],
          },
        },
        {
          '@type': 'Person',
          name: 'Dr. Chukwuma (Chuks) Onuoha',
          honorificPrefix: 'Dr.',
          honorificSuffix: 'P.Eng., PhD, FICorr, MBA',
          jobTitle: 'Principal Corrosion Engineering Lead & AMPP Certified Corrosion Specialist',
          worksFor: { '@id': `${SITE_URL}/#organization` },
          email: 'canchukscorrosioninc@gmail.com',
          image: `${SITE_URL}/chuks-pic.jpg`,
          alumniOf: [
            { '@type': 'CollegeOrUniversity', name: 'University of Manchester' },
            { '@type': 'CollegeOrUniversity', name: 'Dalhousie University' },
          ],
          description:
            'Principal Corrosion Engineering Lead specializing in pipeline integrity, corrosion engineering, ECDA, ICDA, SCCDA, and Contactless Magnetic Inspection Technology (CMIT).',
        },
      ],
    },
  },
  services: {
    title: 'Pipeline Integrity & Corrosion Services | Canchuks Corrosion Nigeria Limited',
    description:
      'Specialized pipeline integrity & corrosion services in Nigeria: CMIT Inspection, Internal Corrosion Direct Assessment (ICDA), External Corrosion Direct Assessment (ECDA), SCCDA, and Cathodic Protection Design & Surveys.',
    keywords:
      'CMIT Inspection Nigeria, Internal Corrosion Assessment ICDA, External Corrosion Assessment ECDA, Stress Corrosion Cracking SCCDA, Cathodic Protection Design Nigeria, pipeline integrity services',
    path: '/services',
    image: `${SITE_URL}/serve1.jpg`,
    imageAlt: 'Pipeline integrity and corrosion engineering services in Nigeria',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/services#webpage`,
          url: `${SITE_URL}/services`,
          name: 'Services | Canchuks Corrosion Nigeria Limited',
          description:
            'Comprehensive pipeline integrity & corrosion engineering services including CMIT, ICDA, ECDA, SCCDA, and Cathodic Protection.',
          isPartOf: { '@id': `${SITE_URL}/#website` },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/serve1.jpg`,
          },
          hasPart: [
            {
              '@type': 'WebPageElement',
              name: 'Pipeline Integrity & Corrosion Engineering Banner',
              url: `${SITE_URL}/services#services-hero`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Comprehensive Pipeline Integrity & Corrosion Engineering Solutions',
              url: `${SITE_URL}/services#pipeline-integrity-services`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Discover Our CMIT Approach',
              url: `${SITE_URL}/services#cmit-approach`,
            },
            {
              '@type': 'WebPageElement',
              name: 'Need a Pipeline Integrity Solution - Call to Action',
              url: `${SITE_URL}/services#cta-section`,
            },
          ],
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
            ],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Pipeline Integrity & Corrosion Engineering Services',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'CMIT Inspection',
              provider: { '@id': `${SITE_URL}/#organization` },
              image: `${SITE_URL}/serve1.jpg`,
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'Internal Corrosion Assessment (NACE ICDA)',
              description:
                'Evaluating internal corrosion risks in buried, unpiggable pipelines using NACE ICDA programs.',
              provider: { '@id': `${SITE_URL}/#organization` },
              image: `${SITE_URL}/serve2.jpg`,
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'External Corrosion Assessment (NACE ECDA)',
              description:
                'Assessing buried, unpiggable pipelines including cathodic protection and coating surveys using NACE ECDA protocols.',
              provider: { '@id': `${SITE_URL}/#organization` },
              image: `${SITE_URL}/serve3.jpg`,
            },
            {
              '@type': 'Service',
              position: 4,
              name: 'Stress Corrosion Cracking Assessment (NACE SCCDA)',
              description:
                'Assessing pipeline susceptibility to stress corrosion cracking using NACE SCCDA programs.',
              provider: { '@id': `${SITE_URL}/#organization` },
              image: `${SITE_URL}/serve4.jpg`,
            },
            {
              '@type': 'Service',
              position: 5,
              name: 'Cathodic Protection Design & Surveys',
              description:
                'Designing cathodic protection systems and conducting surveys to assess their effectiveness in protecting buried or submerged metallic structures against corrosion.',
              provider: { '@id': `${SITE_URL}/#organization` },
              image: `${SITE_URL}/serve5.jpg`,
            },
          ],
        },
        {
          '@type': 'VideoObject',
          name: 'Discover Our CMIT Approach - Contactless Magnetic Inspection Technology',
          description:
            'Overview of Contactless Magnetic Inspection Technology (CMIT) by Canchuks Corrosion for non-contact overline inspection of buried pipelines.',
          thumbnailUrl: `${SITE_URL}/serve1.jpg`,
          embedUrl: 'https://www.youtube.com/embed/vTx-b5bHY0s',
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
      ],
    },
  },
  partners: {
    title: 'Partners & Global CMIT Technology | Canchuks Corrosion Nigeria Limited',
    description:
      'Partner with Canchuks Corrosion Nigeria Limited for non-contact Contactless Magnetic Inspection Technology (CMIT) for onshore and offshore unpiggable pipelines with zero pipeline interruption.',
    keywords:
      'Canchuks Corrosion Partners, CMIT Global Inspection, unpiggable pipeline management, non-contact pipeline inspection, offshore onshore pipeline inspection Nigeria',
    path: '/partners',
    image: `${SITE_URL}/partner-img1.jpg`,
    imageAlt: 'Contactless Magnetic Inspection Technology scanning buried pipeline',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/partners#webpage`,
      url: `${SITE_URL}/partners`,
      name: 'Partners | Canchuks Corrosion Nigeria Limited',
      description:
        'Industry partnerships and Contactless Magnetic Inspection Technology (CMIT) benefits for offshore and onshore unpiggable pipelines.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/partner-img1.jpg`,
      },
      hasPart: [
        {
          '@type': 'WebPageElement',
          name: 'Partners Banner',
          url: `${SITE_URL}/partners#partners-hero`,
        },
        {
          '@type': 'WebPageElement',
          name: 'CMIT Global Capability Statement',
          url: `${SITE_URL}/partners#cmit-global-capability`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Innovative Technology for Offshore and Onshore Pipeline Inspection',
          url: `${SITE_URL}/partners#offshore-onshore-inspection`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Benefits of CMIT Pipeline Inspection',
          url: `${SITE_URL}/partners#cmit-benefits`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Partner With Us Collaboration',
          url: `${SITE_URL}/partners#partner-with-us`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Need a Pipeline Integrity Solution - Call to Action',
          url: `${SITE_URL}/partners#cta-section`,
        },
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Partners', item: `${SITE_URL}/partners` },
        ],
      },
    },
  },
  knowledge: {
    title: 'Knowledge & Technical Publications | Canchuks Corrosion Nigeria Limited',
    description:
      'Technical papers, AMPP and NACE conference proceedings, ASME papers, Springer book chapters, and peer-reviewed journal articles on CMIT, MTM-G, ECDA, ICDA, and SCCDA by Dr. Chukwuma Onuoha.',
    keywords:
      'AMPP corrosion conference papers, NACE corrosion papers, CMIT research papers, MTM-G pipeline integrity, Chukwuma Onuoha publications, corrosion journals Nigeria',
    path: '/knowledge',
    image: `${SITE_URL}/chuks-pic.jpg`,
    imageAlt: 'Dr. Chukwuma Onuoha presenting technical research at AMPP Conference',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/knowledge#webpage`,
      url: `${SITE_URL}/knowledge`,
      name: 'Knowledge & Technical Publications | Canchuks Corrosion Nigeria Limited',
      description:
        'Over 50 technical conference papers, journal articles, and book chapters on CMIT, corrosion modeling, and pipeline integrity.',
      author: {
        '@type': 'Person',
        name: 'Dr. Chukwuma (Chuks) Onuoha',
      },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      hasPart: [
        {
          '@type': 'WebPageElement',
          name: 'Knowledge & Technical Research Overview',
          url: `${SITE_URL}/knowledge#knowledge-header`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Industry Conferences and Publications',
          url: `${SITE_URL}/knowledge#industry-conferences`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Academic Journal Articles',
          url: `${SITE_URL}/knowledge#academic-journals`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Academic Conferences and Publications',
          url: `${SITE_URL}/knowledge#academic-conferences`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Invited Book Chapter',
          url: `${SITE_URL}/knowledge#invited-book-chapter`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Author Profile - Dr. Chukwuma (Chuks) Onuoha',
          url: `${SITE_URL}/knowledge#author-profile`,
        },
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Knowledge', item: `${SITE_URL}/knowledge` },
        ],
      },
    },
  },
  contact: {
    title: 'Contact Us | Port Harcourt & Owerri Offices | Canchuks Corrosion Nigeria Limited',
    description:
      'Reach Canchuks Corrosion Nigeria Limited at 4, Gbalajam Road, Woji, Port Harcourt or 31, Wetheral Road, Owerri, Imo State, Nigeria. Call +2349128209328 or email canchukscorrosioninc@gmail.com.',
    keywords:
      'Contact Canchuks Corrosion Nigeria, Port Harcourt corrosion engineering office, Woji Port Harcourt, Wetheral Road Owerri Imo State, +2349128209328, canchukscorrosioninc@gmail.com',
    path: '/contact',
    image: `${SITE_URL}/service4.jpg`,
    imageAlt: 'Contact Canchuks Corrosion Nigeria Limited engineering team',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: 'Contact Us | Canchuks Corrosion Nigeria Limited',
      description:
        'Office locations in Port Harcourt and Owerri, phone hotline, and email contact details for Canchuks Corrosion Nigeria Limited.',
      mainEntity: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      hasPart: [
        {
          '@type': 'WebPageElement',
          name: 'Contact Banner',
          url: `${SITE_URL}/contact#contact-hero`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Office Addresses, Phone and Email Contact Details',
          url: `${SITE_URL}/contact#contact-details`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Office Location Map',
          url: `${SITE_URL}/contact#office-location-map`,
        },
        {
          '@type': 'WebPageElement',
          name: 'Need a Pipeline Integrity Solution - Call to Action',
          url: `${SITE_URL}/contact#cta-section`,
        },
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_URL}/contact` },
        ],
      },
    },
  },
  404: {
    title: 'Page Not Found | Canchuks Corrosion Nigeria Limited',
    description:
      'The requested page on Canchuks Corrosion Nigeria Limited could not be found. Return to our homepage to explore pipeline integrity and corrosion engineering solutions.',
    keywords: 'Canchuks Corrosion Nigeria Limited, 404 page not found',
    path: '/404',
    image: `${SITE_URL}/not-found-cone.jpg`,
    imageAlt: 'Page not found notice on Canchuks Corrosion Nigeria Limited',
    robots: 'noindex, nofollow',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Page Not Found | Canchuks Corrosion Nigeria Limited',
      url: `${SITE_URL}/404`,
    },
  },
}

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEO({ page = 'home' }) {
  useEffect(() => {
    const meta = PAGE_META[page] || PAGE_META.home
    const canonicalUrl = `${SITE_URL}${meta.path}`

    document.title = meta.title

    upsertMeta('meta[name="title"]', 'name', 'title', meta.title)
    upsertMeta('meta[name="description"]', 'name', 'description', meta.description)
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', meta.keywords)
    upsertMeta('meta[name="robots"]', 'name', 'robots', meta.robots)

    upsertLink('canonical', canonicalUrl)

    // Open Graph
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', meta.type)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', meta.image)
    upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', meta.imageAlt)

    // Twitter
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl)
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    upsertMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      meta.description
    )
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', meta.image)

    // Page-specific JSON-LD
    let scriptEl = document.getElementById('page-seo-jsonld')
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.id = 'page-seo-jsonld'
      scriptEl.type = 'application/ld+json'
      document.head.appendChild(scriptEl)
    }
    scriptEl.textContent = JSON.stringify(meta.schema)
  }, [page])

  return null
}
