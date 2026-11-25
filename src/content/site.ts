/**
 * Audacious Dreams Foundation (ADF) - Content Repository
 * 
 * All site copy, structure, programme data, impact statistics, and configuration
 * are centralized here so clients and editors can modify content without editing components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineMilestone {
  year: string;
  description: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ProgrammeDetail {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  shortDescription: string;
  ctaText: string;
  enquiryType: EnquiryTypeValue;
  fullOverview: string;
  componentsTable?: {
    component: string;
    exposure: string;
  }[];
  gains?: string[];
  offerings?: string[];
  deliveryModels?: {
    name: string;
    description: string;
  }[];
  learningPathways?: {
    destination: string;
    focus: string;
  }[];
  focusAreas?: string[];
  unicefHighlights?: {
    areas: string[];
    role: string;
    disclaimer: string;
  };
  giipLiteStages?: {
    stage: string;
    description: string;
  }[];
  giipLiteModules?: string[];
  notes?: string;
}

export interface ReachTableRow {
  programme: string;
  institutions: string;
  participants: string;
}

export interface FieldMoment {
  category: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  objectPosition?: "center" | "top" | "leaders";
}

export interface OrgNode {
  title: string;
  description: string;
  isParent?: boolean;
}

export interface PartnerPillar {
  title: string;
  description: string;
}

export interface InvolvementTier {
  target: string;
  description: string;
  ctaText: string;
  enquiryType: EnquiryTypeValue;
}

export type EnquiryTypeValue =
  | "Student or young person"
  | "School, college or university"
  | "Organisation or industry"
  | "International organisation"
  | "Other";

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    url: string;
    ogTitle: string;
    ogDescription: string;
    locale: string;
    siteName: string;
  };
  header: {
    wordmark: {
      primary: string;
      secondary: string;
    };
    nav: NavItem[];
    cta: {
      text: string;
      href: string;
    };
  };
  hero: {
    sinceLabel: string;
    headline: {
      line1: string;
      line2Prefix: string;
      line2Emphasized: string;
      line2Suffix: string;
      line3: string;
    };
    subtext: string;
    buttons: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
    stats: StatItem[];
    countriesList: string;
  };
  about: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    copy: string;
    timeline: TimelineMilestone[];
    vision: {
      label: string;
      text: string;
    };
    mission: {
      label: string;
      text: string;
    };
    approach: {
      title: string;
      steps: ApproachStep[];
    };
  };
  whatWeDo: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    focusAreas: FocusArea[];
  };
  programmes: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    flagship: ProgrammeDetail[];
    secondary: ProgrammeDetail[];
  };
  impact: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    intro: string;
    stats: StatItem[];
    tableTitle: string;
    tableColumns: {
      programme: string;
      institutions: string;
      participants: string;
    };
    tableRows: ReachTableRow[];
    footnote: string;
  };
  inPractice: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    intro: string;
    moments: FieldMoment[];
  };
  organisation: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    tree: {
      root: OrgNode;
      children: OrgNode[];
    };
    gusd: {
      title: string;
      badge: string;
      description: string;
    };
    leadership: {
      name: string;
      role: string;
      bio: string;
      initials: string;
      photoUrl?: string | null;
    };
  };
  partners: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    copy: string;
    pillars: PartnerPillar[];
    cta: {
      text: string;
      href: string;
    };
  };
  getInvolved: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    tiers: InvolvementTier[];
  };
  contact: {
    eyebrow: string;
    headingPrefix: string;
    headingEmphasized: string;
    headingSuffix: string;
    copy: string;
    address: string;
    email: string | null;
    phone: string | null;
    website: string | null;
    enquiryOptions: EnquiryTypeValue[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      orgLabel: string;
      orgPlaceholder: string;
      designationLabel: string;
      designationPlaceholder: string;
      typeLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      successHeading: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    socialLinks: {
      name: string;
      url: string | null;
    }[];
    policyLinks: {
      name: string;
      url: string | null;
    }[];
  };
}

export const siteContent: SiteConfig = {
  meta: {
    title: "Audacious Dreams Foundation | Youth Development & Global Institutional Engagement",
    description: "Audacious Dreams Foundation (ADF) is a premier youth development organisation in Vellore, Tamil Nadu, India, equipping youth and educational institutions through global immersion, industry integration, and sustainable leadership programmes.",
    url: "https://audaciousdreams.org",
    ogTitle: "Audacious Dreams Foundation — Empowering Youth. Enabling Opportunities.",
    ogDescription: "Equipping young people and partnering with educational institutions through global immersion, industry integration, leadership, and sustainable development since 2007.",
    locale: "en_IN",
    siteName: "Audacious Dreams Foundation",
  },
  header: {
    wordmark: {
      primary: "Audacious Dreams",
      secondary: "Foundation",
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "Programmes", href: "#programmes" },
      { label: "Impact", href: "#impact" },
      { label: "Partners", href: "#partners" },
      { label: "Get Involved", href: "#get-involved" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      text: "Partner With Us",
      href: "#contact",
    },
  },
  hero: {
    sinceLabel: "Since 2007 · Vellore, India",
    headline: {
      line1: "Empowering Youth.",
      line2Prefix: "Enabling ",
      line2Emphasized: "Opportunities",
      line2Suffix: ".",
      line3: "Building a Sustainable Future.",
    },
    subtext: "Audacious Dreams Foundation is a youth development organisation equipping young people with the knowledge, skills, experiences and opportunities to contribute meaningfully to society and sustainable development.",
    buttons: {
      primary: {
        text: "Partner With Us",
        href: "#contact",
      },
      secondary: {
        text: "Explore Programmes",
        href: "#programmes",
      },
    },
    stats: [
      { value: 200, suffix: "+", label: "Institutions engaged" },
      { value: 80, suffix: "+", label: "Institutions with signed MOUs" },
      { value: 3000, suffix: "+", label: "Students and delegates in international programmes" },
      { value: 5, suffix: "+", label: "Countries represented in international engagement" },
    ],
    countriesList: "Malaysia · Singapore · UAE · Sri Lanka · South Korea and others",
  },
  about: {
    eyebrow: "Who we are",
    headingPrefix: "A grassroots initiative, now an ",
    headingEmphasized: "institutional",
    headingSuffix: " partner.",
    copy: "Established in 2007 as a grassroots initiative and formally registered in 2012, Audacious Dreams Foundation (ADF) is a youth-focused organisation based in Vellore, Tamil Nadu, India. ADF works to create meaningful opportunities for young people through education, skills development, leadership, international exposure and institutional engagement. We collaborate with educational institutions, organisations and stakeholders to develop initiatives that connect learning with real-world experiences and encourage young people to become responsible global citizens.",
    timeline: [
      {
        year: "2007",
        description: "Began as a grassroots initiative",
      },
      {
        year: "2012",
        description: "Formally registered",
      },
    ],
    vision: {
      label: "Our Vision",
      text: "A world where every young person is inspired and equipped to create positive change.",
    },
    mission: {
      label: "Our Mission",
      text: "To empower young people through knowledge, skills, experiences and opportunities that promote global understanding, leadership and sustainable development.",
    },
    approach: {
      title: "Our Approach",
      steps: [
        {
          step: 1,
          title: "Learn",
          description: "Promote knowledge, awareness and continuous learning.",
        },
        {
          step: 2,
          title: "Experience",
          description: "Connect young people with practical and international experiences.",
        },
        {
          step: 3,
          title: "Engage",
          description: "Encourage active participation in institutions and communities.",
        },
        {
          step: 4,
          title: "Collaborate",
          description: "Build meaningful relationships with institutions and stakeholders.",
        },
        {
          step: 5,
          title: "Create Impact",
          description: "Enable young people to translate learning into positive action.",
        },
      ],
    },
  },
  whatWeDo: {
    eyebrow: "Focus areas",
    headingPrefix: "Structured pathways for youth ",
    headingEmphasized: "capability",
    headingSuffix: " and institutional growth.",
    focusAreas: [
      {
        id: "leadership",
        title: "Youth Leadership & Development",
        description: "Building leadership, confidence, participation and responsibility among young people.",
        bullets: [
          "Leadership development and youth participation",
          "Youth councils, youth parliaments and Model United Nations",
          "Youth volunteering and community engagement",
          "Communication, collaboration and personal development",
        ],
      },
      {
        id: "education",
        title: "Education & Skill Development",
        description: "Strengthening practical learning, digital capabilities and career readiness.",
        bullets: [
          "Digital productivity and digital literacy",
          "Financial literacy",
          "Entrepreneurship and job readiness",
          "21st-century skills",
          "Career awareness and employability",
          "Faculty development and institutional capacity-building",
        ],
      },
      {
        id: "international",
        title: "International Engagement",
        description: "Creating opportunities for cross-cultural learning, exchanges and global exposure.",
        bullets: [
          "International youth exchanges",
          "Global immersion programmes",
          "Cross-cultural learning",
          "International internships and fellowships",
          "International institutional engagement",
        ],
      },
      {
        id: "industry",
        title: "Industry Integration",
        description: "Connecting academic learning with industry knowledge and practical experiences.",
        bullets: [
          "Industry visits and expert interactions",
          "Practical learning and real-world projects",
          "Industry-linked skill development",
          "Internship opportunities",
          "Career exposure and professional development",
        ],
      },
      {
        id: "community",
        title: "Community & Sustainable Development",
        description: "Encouraging community participation, volunteering and action-based learning, and promoting youth participation in sustainable development.",
        bullets: [
          "SDG awareness and action-based projects",
          "Community development initiatives",
          "Youth-led social innovation",
          "Volunteerism and civic participation",
          "Rural and adolescent development",
        ],
      },
      {
        id: "collaboration",
        title: "Institutional & Global Collaboration",
        description: "Building networks between institutions, industry and international bodies.",
        bullets: [
          "Institutional networking",
          "High-level education leadership meetings",
          "International knowledge exchange",
          "Academic and industry collaborations",
          "Partnership development",
        ],
      },
    ],
  },
  programmes: {
    eyebrow: "Programmes",
    headingPrefix: "Programmes for schools, universities and ",
    headingEmphasized: "institutions",
    headingSuffix: ".",
    flagship: [
      {
        id: "gip",
        title: "Global Immersion Programme (GIP)",
        subtitle: "International Youth and Group Study Exchange Programme",
        badge: "Flagship International",
        shortDescription: "International exposure through educational, industrial, cultural and youth development experiences.",
        ctaText: "Explore International Opportunities",
        enquiryType: "School, college or university",
        fullOverview: "Also known as the International Youth and Group Study Exchange Programme, GIP gives students and youth delegates structured educational, industrial, cultural and institutional experiences abroad.",
        componentsTable: [
          {
            component: "Education",
            exposure: "Educational institutions, learning practices, policies and higher education opportunities",
          },
          {
            component: "Industrial & Skill Development",
            exposure: "Industry visits, infrastructure, innovation and expert interactions",
          },
          {
            component: "Government Relations",
            exposure: "Governance, public policies and government systems",
          },
          {
            component: "Youth Development",
            exposure: "Youth affairs, youth policies, youth councils and youth programmes",
          },
          {
            component: "International & Diplomacy Relations",
            exposure: "International development organisations, SDGs and global engagement",
          },
          {
            component: "Arts & Heritage",
            exposure: "Culture, tourism, arts and national heritage",
          },
        ],
        gains: [
          "International exposure and cross-cultural understanding",
          "Awareness of global education and career opportunities",
          "Interaction with international institutions and professionals",
          "Understanding of governance and sustainable development",
          "Leadership, adaptability and communication skills",
        ],
      },
      {
        id: "giip",
        title: "Global Industry Integrated Programme (GIIP)",
        subtitle: "Industry-Integrated Higher Education Enrichment",
        badge: "Higher Education Model",
        shortDescription: "An industry-integrated academic enrichment model connecting higher education with practical and global learning.",
        ctaText: "Discuss GIIP for Your Institution",
        enquiryType: "School, college or university",
        fullOverview: "GIIP works with institutions to add learning alongside regular degree programmes, adaptable to institutional requirements, regulations and available opportunities.",
        offerings: [
          "Global Immersion Programme",
          "Industry Certificates & Skill Development",
          "Multidisciplinary Learning",
          "Practical & Real-World Projects",
          "International Internship Programme (IIP), subject to selection and availability",
          "Paid Fellowship Programme (PFP), subject to eligibility, selection and availability",
          "Multiple Multidisciplinary Internships & Training (MMIT)",
        ],
        deliveryModels: [
          {
            name: "Fully Integrated Model",
            description: "Academic and additional components structured in alignment with the institution's regulations and approved arrangements.",
          },
          {
            name: "Industry-Integrated Model",
            description: "The institution delivers the core degree curriculum, while ADF facilitates additional industry, global exposure and experiential learning.",
          },
        ],
        learningPathways: [
          {
            destination: "Sri Lanka",
            focus: "Orientation, organisations, community engagement and development exposure",
          },
          {
            destination: "Malaysia",
            focus: "ASEAN perspectives, governance, industries and development organisations",
          },
          {
            destination: "Singapore",
            focus: "Technology, sustainability, manufacturing and innovation",
          },
          {
            destination: "Thailand",
            focus: "International education, industries, tourism and sustainability",
          },
        ],
        notes: "Other destinations may be considered based on programme design. Selection, duration, eligibility and availability depend on the specific opportunity.",
      },
      {
        id: "gcip",
        title: "Global Career Integrated Programme (GCIP)",
        subtitle: "Secondary Education Pathway (Grades 11 & 12)",
        badge: "Secondary Education",
        shortDescription: "Career and skill development opportunities for students in Grades 11 and 12.",
        ctaText: "Explore GCIP for Schools",
        enquiryType: "School, college or university",
        fullOverview: "GCIP helps students explore future academic and career pathways while building skills and confidence for higher education and professional life.",
        focusAreas: [
          "Career awareness and guidance",
          "Communication and presentation",
          "Digital and 21st-century skills",
          "Entrepreneurship",
          "Leadership and personal development",
          "Exposure to higher education and global opportunities",
        ],
      },
      {
        id: "unicef",
        title: "UNICEF Skill Development Initiative",
        subtitle: "Project-Specific LTA Engagement",
        badge: "Institutional Engagement",
        shortDescription: "Institutional skill development and student engagement through ADF's project-specific UNICEF LTA engagement.",
        ctaText: "Explore Institutional Participation",
        enquiryType: "School, college or university",
        fullOverview: "ADF facilitates institutional implementation and student engagement under its project-specific Long-Term Agreement (LTA) engagement with UNICEF. ADF supports coordination with participating institutions, student mobilisation, programme implementation and engagement with relevant stakeholders.",
        unicefHighlights: {
          areas: [
            "Digital productivity",
            "Financial literacy",
            "Job readiness",
            "Entrepreneurship",
            "21st-century skills",
            "Career development",
          ],
          role: "ADF supports coordination with participating institutions, student mobilisation, programme implementation and engagement with relevant stakeholders.",
          disclaimer: "Delivered strictly under project-specific LTA engagement terms; text-only representation without implied institutional endorsement.",
        },
      },
    ],
    secondary: [
      {
        id: "giip-lite",
        title: "GIIP-LITE",
        subtitle: "One-Year Academic Enrichment",
        badge: "Annual Enrichment",
        shortDescription: "A one-year skill-development and student-enrichment programme designed to complement regular academic education.",
        ctaText: "Introduce GIIP-LITE at Your Institution",
        enquiryType: "School, college or university",
        fullOverview: "GIIP-LITE is an intensive one-year skill-development and student-enrichment programme designed to complement regular academic education across college campuses.",
        giipLiteStages: [
          { stage: "Stage 1: Learn", description: "Foundational knowledge and frameworks on UN Sustainable Development Goals." },
          { stage: "Stage 2: Immerse", description: "Field exposure and community problem identification." },
          { stage: "Stage 3: Showcase", description: "Action project design and institutional presentations." },
          { stage: "Stage 4: Compete", description: "Cohort review and inter-institutional innovation challenges." },
          { stage: "Stage 5: Celebrate", description: "Recognition, dissemination, and project impact celebration." },
        ],
        giipLiteModules: [
          "UN SDG Action-Based Community Development Project (selected projects may progress to further innovation challenges or youth exchange opportunities, subject to eligibility and additional costs)",
          "21st-Century Skills Development (financial literacy, digital productivity, career readiness, entrepreneurship, job readiness, communication and problem-solving)",
          "Winter School – Quest Alliance (digital literacy, employability, career readiness, entrepreneurship, self-employment)",
          "Reskills Malaysia / ASEAN (online interactive sessions, webinars and seminars on 21st-century skills)",
        ],
        notes: "Certification and accreditation details are listed according to the applicable course and verified arrangements.",
      },
      {
        id: "internships",
        title: "Internships & International Fellowships",
        subtitle: "Applied Experience & Global Mobility",
        badge: "Fellowships",
        shortDescription: "National and international internships, remote and physical internships, project-based learning and fellowships.",
        ctaText: "Explore Opportunities",
        enquiryType: "Student or young person",
        fullOverview: "ADF coordinates structured national and international internships, remote and physical internships, project-based learning, professional and skill-development fellowships, and international exposure.",
        focusAreas: [
          "National and international internships",
          "Remote and physical internship formats",
          "Project-based experiential learning",
          "Professional and skill-development fellowships",
          "International institutional exposure",
        ],
        notes: "Selection, duration, eligibility and availability depend on the specific opportunity.",
      },
      {
        id: "leadership-meetings",
        title: "High-Level Education Leadership Meetings",
        subtitle: "Institutional Policy & Executive Dialogue",
        badge: "Executive Dialogue",
        shortDescription: "Dialogue for institutional leaders and decision-makers on higher education development and internationalisation.",
        ctaText: "Collaborate With ADF",
        enquiryType: "School, college or university",
        fullOverview: "Structured dialogue for institutional leaders and decision-makers on higher education development, institutional collaboration, internationalisation, skill development and employability, industry integration and emerging trends in education.",
        focusAreas: [
          "Higher education development strategies",
          "Cross-border institutional collaboration and MOUs",
          "Internationalisation of campus curricula",
          "Industry-academia integration frameworks",
          "Skill development and student employability trends",
        ],
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    headingPrefix: "Creating opportunities. Enabling ",
    headingEmphasized: "participation",
    headingSuffix: ".",
    intro: "ADF's work spans educational institutions, youth communities, international delegations and development initiatives.",
    stats: [
      { value: 200, suffix: "+", label: "Institutions engaged" },
      { value: 80, suffix: "+", label: "Institutions with signed MOUs" },
      { value: 3000, suffix: "+", label: "Students and delegates in international programmes" },
      { value: 5, suffix: "+", label: "Countries represented in international engagement" },
    ],
    tableTitle: "Programme-level reach",
    tableColumns: {
      programme: "Programme",
      institutions: "Institutions",
      participants: "Students & participants",
    },
    tableRows: [
      { programme: "UNICEF Passport to Earning", institutions: "40+", participants: "10,000+" },
      { programme: "Queen's Commonwealth Essay Competition", institutions: "35+", participants: "10,000+" },
      { programme: "Reskills", institutions: "15+", participants: "1,000+" },
      { programme: "Quest Alliance", institutions: "10+", participants: "1,000+" },
      { programme: "UN SDG Awareness Workshops", institutions: "30+", participants: "12,000+" },
      { programme: "UN SDG Expo", institutions: "30+", participants: "10,000+" },
      { programme: "Cadence – Music for Development", institutions: "30+", participants: "27,000+" },
      { programme: "Career Counselling", institutions: "20+", participants: "5,000+" },
      { programme: "Youth Exchange Programme – School Exchanges", institutions: "20+", participants: "1,000+" },
      { programme: "Youth Exchange – International Immersion / Internship", institutions: "10+", participants: "900+" },
      { programme: "Global Immersion – Engineering / Technology", institutions: "20+", participants: "900+" },
      { programme: "BODHI MUN", institutions: "30+", participants: "900+" },
      { programme: "Rotary Youth Leadership Award", institutions: "10+", participants: "1,300+" },
      { programme: "Commonwealth Youth Development Initiatives", institutions: "20+", participants: "4,000+" },
    ],
    footnote: "Individual programme-reported figures, not a deduplicated total of unique beneficiaries. Some participants may have taken part in multiple initiatives.",
  },
  inPractice: {
    eyebrow: "In Practice",
    headingPrefix: "From campus cohorts to ",
    headingEmphasized: "international",
    headingSuffix: " forums.",
    intro: "A field record of student delegations, campus-wide skill cohorts, and academic leadership dialogues across Tamil Nadu and partner nations.",
    moments: [
      {
        category: "International Immersion",
        title: "Malaysia Immersion & Internship Delegation",
        caption: "Tamil Nadu undergraduate scholars welcomed in Malaysia under the International Immersion and Internship Programme in collaboration with GUSD and the Malaysian Indian Youth Council.",
        image: "/images/international-immersion/malaysia-delegation-arrival.jpeg",
        alt: "Tamil Nadu undergraduate student delegation and ADF coordinators holding welcome banners upon arrival in Malaysia",
        objectPosition: "center",
      },
      {
        category: "International Immersion",
        title: "Bodhi MUN Future Changemakers, Malaysia",
        caption: "Cross-border youth diplomacy and SDG dialogue hosted at MAHSA International School, Selangor, presented by ADF, GUSD, and international associate partners.",
        image: "/images/international-immersion/malaysia-mun-stage-2026.jpeg",
        alt: "Presenters and youth leaders on stage before the Future Changemakers International Model United Nations Malaysia backdrop",
        objectPosition: "center",
      },
      {
        category: "Institutional Leadership",
        title: "High-Level Education Leaders Meeting",
        caption: "College principals, deans, and academic leaders convening in Puducherry to advance global academic collaboration and launch the Global Industry Integrated Programme (GIIP) in Tamil Nadu.",
        image: "/images/institutional-leadership/education-leaders-meeting-2025.jpeg",
        alt: "Academic leaders and institutional heads gathered at the High-Level Education Leaders Meeting 2025 in Puducherry",
        objectPosition: "leaders",
      },
      {
        category: "International Immersion",
        title: "Global Youth & Academic Forum",
        caption: "Student delegates addressing international audiences, faculty advisors, and partner organisation representatives during structured forum proceedings.",
        image: "/images/international-immersion/international-conference-auditorium.jpeg",
        alt: "Youth delegate speaking from a podium to a packed auditorium of students and international guests",
        objectPosition: "center",
      },
      {
        category: "Campus Engagement",
        title: "Campus-Wide Certification Cohorts",
        caption: "Participating undergraduate cohorts celebrating programme completion alongside college leadership and faculty coordinators.",
        image: "/images/campus-engagement/campus-cohort-scale-overview.jpeg",
        alt: "Large cohort of college students holding completion certificates in a campus courtyard alongside faculty and ADF leadership",
        objectPosition: "center",
      },
      {
        category: "Campus Engagement",
        title: "Student Leadership & Skill Mobilisation",
        caption: "Interactive orientation and skill-readiness assemblies equipping young people inside partner higher education campuses.",
        image: "/images/campus-engagement/student-auditorium-engagement.jpeg",
        alt: "Students raising hands in participation during a campus auditorium leadership session with faculty seated in the front row",
        objectPosition: "top",
      },
    ],
  },
  organisation: {
    eyebrow: "Organisation",
    headingPrefix: "Institutional structure and strategic ",
    headingEmphasized: "governance",
    headingSuffix: ".",
    tree: {
      root: {
        title: "Audacious Dreams Group",
        description: "Group of organisations and initiatives",
        isParent: true,
      },
      children: [
        {
          title: "Audacious Dreams Foundation",
          description: "Parent organisation for national and international projects",
        },
        {
          title: "Audacious Dreams Private Limited",
          description: "Group organisation",
        },
        {
          title: "My First Journey",
          description: "Group organisation / initiative",
        },
      ],
    },
    gusd: {
      title: "GUSD – Global Understanding for Sustainable Development",
      badge: "ADF Initiative",
      description: "An initiative of ADF focused on international projects, collaborations, exchanges and global engagement. GUSD functions as an initiative within ADF and is not a separate registered organisation.",
    },
    leadership: {
      name: "Mr. Dinesh Gajendran",
      role: "Catalyst & Executive Director",
      bio: "Leads the organisation's strategic direction and initiatives across youth development, education and international engagement.",
      initials: "DG",
      photoUrl: null, // Ready for future photo; renders monogram when null
    },
  },
  partners: {
    eyebrow: "Partners",
    headingPrefix: "Working together to create ",
    headingEmphasized: "opportunities",
    headingSuffix: ".",
    copy: "ADF believes in the value of collaboration in expanding educational opportunities, strengthening institutions and supporting youth development.",
    pillars: [
      {
        title: "Educational Institutions",
        description: "Universities, colleges and schools engaged through academic enrichment, skill development, student exchanges and institutional initiatives.",
      },
      {
        title: "Development Organisations",
        description: "Organisations working in education, youth development, sustainable development and community engagement.",
      },
      {
        title: "Industry & Corporate Stakeholders",
        description: "Organisations contributing through industry exposure, professional learning, skill development and career-related opportunities.",
      },
      {
        title: "International Networks",
        description: "Engagement with international institutions and youth networks through relevant projects, programmes and initiatives.",
      },
    ],
    cta: {
      text: "Become an Institutional Partner",
      href: "#contact",
    },
  },
  getInvolved: {
    eyebrow: "Get involved",
    headingPrefix: "Be part of the ",
    headingEmphasized: "journey",
    headingSuffix: ".",
    tiers: [
      {
        target: "For Students & Young People",
        description: "Explore opportunities in international exchanges, internships, skill development, fellowships and youth initiatives.",
        ctaText: "Explore Opportunities",
        enquiryType: "Student or young person",
      },
      {
        target: "For Schools, Colleges & Universities",
        description: "Collaborate with ADF to introduce skill-development programmes, international exposure, industry integration and student enrichment initiatives.",
        ctaText: "Partner With ADF",
        enquiryType: "School, college or university",
      },
      {
        target: "For Organisations & Industry",
        description: "Explore opportunities to contribute through training, industry exposure, mentorship, projects and collaborative initiatives.",
        ctaText: "Explore Collaboration",
        enquiryType: "Organisation or industry",
      },
      {
        target: "For International Organisations",
        description: "Connect with ADF to explore institutional engagement, youth exchanges, educational collaboration and development initiatives.",
        ctaText: "Connect With Us",
        enquiryType: "International organisation",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    headingPrefix: "Let's ",
    headingEmphasized: "connect",
    headingSuffix: ".",
    copy: "Whether you are an educational institution, student, organisation or stakeholder interested in working with us, we would be glad to hear from you.",
    address: "Audacious Dreams Foundation, Vellore, Tamil Nadu, India",
    email: null, // Stored as null per instructions; rendered only when configured
    phone: null, // Stored as null per instructions; rendered only when configured
    website: null, // Stored as null per instructions; rendered only when configured
    enquiryOptions: [
      "School, college or university",
      "Student or young person",
      "Organisation or industry",
      "International organisation",
      "Other",
    ],
    form: {
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Dr. A. Ramanathan",
      emailLabel: "Email Address",
      emailPlaceholder: "name@institution.edu",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+91 98765 43210",
      orgLabel: "Organisation / Institution",
      orgPlaceholder: "College, University, School or Entity name",
      designationLabel: "Designation",
      designationPlaceholder: "e.g. Principal / Dean / Director",
      typeLabel: "Enquiry Type",
      messageLabel: "Message",
      messagePlaceholder: "Please describe your institution's requirements or the areas of engagement you would like to explore...",
      submitButton: "Submit Enquiry",
      submittingButton: "Submitting Enquiry...",
      successHeading: "Enquiry Received",
      successMessage: "Thank you for reaching out. We have logged your enquiry and our institutional team will respond to your communication.",
      errorMessage: "An error occurred while submitting your enquiry. Please verify your details and try again.",
    },
  },
  footer: {
    tagline: "Empowering Youth. Enabling Opportunities. Building a Sustainable Future.",
    copyright: `© ${new Date().getFullYear()} Audacious Dreams Foundation. All Rights Reserved.`,
    socialLinks: [
      { name: "LinkedIn", url: null },
      { name: "Instagram", url: null },
      { name: "Facebook", url: null },
      { name: "YouTube", url: null },
    ],
    policyLinks: [
      { name: "Privacy Policy", url: null },
      { name: "Terms & Conditions", url: null },
      { name: "Cookie Policy", url: null },
      { name: "Disclaimer", url: null },
    ],
  },
};
