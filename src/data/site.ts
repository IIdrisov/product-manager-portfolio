export const siteConfig = {
  name: "Ivan Idrisov",
  initials: "II",
  title: "Product Designer",
  email: "ivanidrisovp@yandex.ru",
  telegram: "https://t.me/iamidrisov",
  figma: "https://www.figma.com/proto/tTcB6GdIXXdwRGsHQHnEGi/Portfolio",
  avatar: "/images/avatar.png",
  available: true,
};

export const navItems = [
  { id: "work", label: "My work" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "offer", label: "Offer" },
  { id: "manifesto", label: "Manifesto" },
  { id: "faq", label: "FAQ" },
];

export const companies = [
  "Yandex",
  "XPlace",
  "Alpha One",
  "Whales",
  "Synergy",
];

export const projects = [
  {
    slug: "xplace-crypto-card",
    title: "Crypto-backed credit card",
    subtitle: "XPlace Neobank",
    tag: "Case Study Soon",
    gradient: "from-emerald-900 via-teal-800 to-cyan-900",
    video: "/videos/xplace-crypto-card.mp4",
  },
  {
    slug: "alpha-one-onboarding",
    title: "Onboarding & first-trade insurance",
    subtitle: "Alpha One Exchange",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    video: "/videos/alpha-one-bugatti.m4v",
  },
  {
    slug: "yandex-hr-tech",
    title: "HR social network mobile migration",
    subtitle: "Yandex HR Tech",
    gradient: "from-amber-900 via-orange-800 to-red-900",
    image: "/images/yandex-hrtech.png",
    imageOverlay: "light",
  },
  {
    slug: "whales-tonhub",
    title: "Staking pools & non-custodial wallet",
    subtitle: "Whales / TON",
    gradient: "from-blue-900 via-indigo-800 to-violet-900",
    image: "/images/tonhub.png",
    imageOverlay: "light",
  },
  // {
  //   slug: "berizaryad-map",
  //   title: "Map clustering & rental funnel",
  //   subtitle: "Beri Zariad",
  //   gradient: "from-slate-800 via-zinc-700 to-stone-600",
  //   image: "/images/berizaryad.png",
  //   imageOverlay: "light",
  // },
  {
    slug: "safesound-telegram",
    title: "Telegram music streaming mini-app",
    subtitle: "SafeSound",
    gradient: "from-rose-900 via-pink-800 to-purple-900",
    image: "/images/safesound.png",
  },
  {
    slug: "synergy-loyalty",
    title: "Token-based loyalty ecosystem",
    subtitle: "Synergy University",
    gradient: "from-lime-900 via-green-800 to-emerald-900",
    image: "/images/synergy.png",
  },
];

export const experiences = [
  {
    company: "XPlace",
    period: "2025 — Present",
    role: "Product Designer",
    employment: "Full-time",
    team: "Crypto Neobank · Product Squad · 20 members",
    projects: [
      {
        name: "Crypto-backed Visa Card",
        description: "Neobank with a credit card backed by crypto assets.",
      },
    ],
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "Product Strategy",
      "User Testing",
      "Design Systems",
      "Product Management",
    ],
    link: "https://xplace.com",
  },
  {
    company: "Alpha One",
    period: "2024 — 2025",
    role: "Product Designer",
    employment: "Full-time",
    team: "Crypto Exchange · Growth Squad · 15 members",
    projects: [
      {
        name: "Onboarding Redesign",
        description: "Registration → First Trade conversion from 5.6% to 11.2%.",
      },
      {
        name: "Automated Trading",
        description: "Trading volume from $6M to $55M (+900%).",
      },
    ],
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "A/B Testing",
      "Growth Design",
      "Metrics-Driven Design",
    ],
    link: "https://alpha-one.io",
  },
  {
    company: "Yandex",
    period: "2023 — 2024",
    role: "Product Designer",
    employment: "Full-time",
    team: "HR Tech · Internal Social Network · 8 members",
    projects: [
      {
        name: "Web-to-App Migration",
        description: "Migrated internal employee social network to a WebView app.",
      },
      {
        name: "News Feed & Profiles",
        description: "Redesigned feed, Club Profile and User Profile.",
      },
    ],
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "User Testing",
      "Mobile Design",
      "Design Systems",
    ],
    link: "https://yandex.ru/jobs",
  },
  {
    company: "SafeSound",
    period: "2024",
    role: "Product Designer / Founder",
    employment: "Part-time",
    team: "Telegram Mini App · 8 members",
    projects: [
      {
        name: "Music Streaming in Telegram",
        description: "TOP-100 out of 3,000+ Hackathon projects, 100K+ MAU.",
      },
    ],
    scope: [
      "Product Discovery",
      "UI Design",
      "Prototyping",
      "Go-to-Market",
    ],
    link: "#",
  },
  // {
  //   company: "Beri Zariad",
  //   period: "2023",
  //   role: "Product Designer",
  //   employment: "Full-time",
  //   team: "Power Bank Rental · Product Squad · 6 members",
  //   projects: [
  //     {
  //       name: "Map Clustering",
  //       description: "Traffic −40%, conversion +15% for low-battery users.",
  //     },
  //   ],
  //   scope: [
  //     "JTBD Research",
  //     "UI Design",
  //     "A/B Testing",
  //     "Payment UX",
  //   ],
  //   link: "https://berizaryad.ru",
  // },
  {
    company: "Whales",
    period: "2022 — 2023",
    role: "Product Designer",
    employment: "Full-time",
    team: "TON Ecosystem · Web3 Squad · 10 members",
    projects: [
      {
        name: "Staking Pools & Tonhub Wallet",
        description: "TVL ~$100M, 60K MAU, Visa crypto card integration.",
      },
    ],
    scope: [
      "Web3 UX",
      "UI Design",
      "Prototyping",
      "Onboarding Design",
      "Payment Flows",
    ],
    link: "https://tonwhales.com",
  },
  {
    company: "Synergy",
    period: "2020 — 2022",
    role: "Product Designer",
    employment: "Full-time",
    team: "Loyalty Program · Product Squad · 7 members",
    projects: [
      {
        name: "Token Loyalty Ecosystem",
        description: "Revenue 120M → 540M ₽/year, referral conversion ×2.",
      },
    ],
    scope: [
      "UX Research",
      "UI Design",
      "Product Strategy",
      "Fraud Prevention UX",
    ],
    link: "https://synergy.ru",
  },
];

export type ValuePropCategory =
  | "Business Value"
  | "Product Development"
  | "Product Discovery";

export type ValuePropIcon =
  | "zap"
  | "target"
  | "chart"
  | "layers"
  | "code"
  | "pencil-ruler"
  | "lightbulb"
  | "palette"
  | "users";

export const valuePropCategoryColors: Record<ValuePropCategory, string> = {
  "Business Value": "bg-[#029F4B]",
  "Product Development": "bg-[#036AEF]",
  "Product Discovery": "bg-[#6E55FF]",
};

export const valueProps: Array<{
  category: ValuePropCategory;
  icon: ValuePropIcon;
  title: string;
}> = [
  {
    category: "Business Value",
    icon: "zap",
    title:
      "Accelerating product growth through data-driven design with measurable impact on conversion and retention.",
  },
  {
    category: "Business Value",
    icon: "target",
    title:
      "Building competitive advantage through high-quality UX in fintech, crypto and payments.",
  },
  {
    category: "Business Value",
    icon: "chart",
    title:
      "Reducing launch risk through fast hypothesis validation — JTBD, A/B tests, prototypes.",
  },
  {
    category: "Product Development",
    icon: "layers",
    title:
      "Speeding up delivery with clear design specs, states and edge cases in Figma.",
  },
  {
    category: "Product Development",
    icon: "code",
    title:
      "Prototyping interactive flows for fast validation before development.",
  },
  {
    category: "Product Development",
    icon: "pencil-ruler",
    title:
      "Securing quality through design reviews during development.",
  },
  {
    category: "Product Discovery",
    icon: "lightbulb",
    title:
      "Shaping product vision based on research, CJM and unit economics.",
  },
  {
    category: "Product Discovery",
    icon: "palette",
    title:
      "Providing clarity on next steps through funnel analytics and UX recommendations.",
  },
  {
    category: "Product Discovery",
    icon: "users",
    title:
      "Aligning teams through workshops and cross-functional collaboration.",
  },
];

export const offers = [
  {
    available: true,
    theme: "light" as const,
    title: "Project",
    description: "I'll structure and design your product end-to-end.",
    price: "from $5,000",
    priceNote: "net starting price",
    features: [
      "Freelance Consultant role",
      "Flexible commitment",
      "Remote",
      "Worldwide",
      "Not satisfied with the results? I will refund you 100%, and no questions asked.",
    ],
  },
  {
    available: true,
    theme: "dark" as const,
    title: "Full-time",
    description: "I join your team as Senior Product Designer.",
    price: "from $4,000",
    priceNote: "net per month",
    features: [
      "Senior / Lead Designer role",
      "Minimum 6 months",
      "Remote or hybrid",
      "Fintech · Crypto · Web3",
      "Not satisfied with the results? We will cancel the contract prior to the full term. Hassle-free.",
    ],
  },
];

export const testimonials = [
  {
    name: "Maria Skryabina",
    role: "Product Lead, Alfa-Bank",
    note: "ex-Head of Design, Yandex",
    quote:
      "Ivan combines product thinking with strong UX — a rare profile for fintech products.",
  },
  {
    name: "Konstantin Serga",
    role: "CTO",
    note: "Synergy University",
    quote:
      "Delivered a loyalty product at scale with measurable revenue impact and clear architecture.",
  },
  {
    name: "Artem Kravtsov",
    role: "Frontend Developer",
    note: "Marketing Lab",
    quote:
      "Clear mockups and detailed states — development moves without unnecessary iterations.",
  },
];

export const manifestoParagraphs = [
  "Over the last six years, I've worked across fintech, crypto, payments, and consumer products. One thing has remained constant: successful products are rarely built by following assumptions.",
  "I believe great products start with understanding real user problems. Too many teams fall in love with solutions before validating whether anyone actually needs them. The most impactful products I've worked on came from challenging initial ideas and digging deeper into customer behavior.",
  "I believe speed is a competitive advantage. The goal is not to ship fast for the sake of shipping fast, but to learn faster than everyone else. The sooner users interact with a product, the sooner we discover whether we're solving the right problem. Design should accelerate learning through prototypes, experiments, user interviews, and rapid iterations.",
  "I also believe that product design sits at the intersection of user needs, business goals, and technical reality. The best products emerge when design is treated as a strategic function that helps shape outcomes, not just interfaces.",
  "Finally, I believe great products are built collaboratively. My role as a designer is often to create clarity: turning ideas into prototypes, aligning teams around a shared vision, and helping everyone move faster toward the same goal.",
];

export type FaqCategory = "Offer" | "Collaboration" | "Contact";

export const faqItems: Array<{
  category: FaqCategory;
  question: string;
  answer: string;
}> = [
  {
    category: "Offer",
    question: "Who do you typically work with?",
    answer:
      "Startups, fintech, crypto, Web3 and product teams in big tech. Experience in neobank, crypto exchange, HR tech, loyalty and marketplace.",
  },
  {
    category: "Offer",
    question: "What types of designs can you realize?",
    answer:
      "Web, mobile, Telegram Mini Apps. Onboarding, payment flows, trading UI, design systems, landing pages. Branding — in collaboration with brand designers.",
  },
  {
    category: "Offer",
    question: "What makes you different from others?",
    answer:
      "6+ years at the intersection of design and product management. Data-driven approach with real metrics: +100% conversion, +52% retention, $300K+ MRR.",
  },
  {
    category: "Offer",
    question: "What roles can you fill in a product team?",
    answer:
      "Senior Product Designer, Lead Product Designer, or Founding Designer. Titles matter less to me than accountability and ownership.",
  },
  {
    category: "Collaboration",
    question: "What are your typical design turnaround times?",
    answer:
      "I can start delivering specs within the first week. It depends on team goals and bottlenecks, but I bias the process toward the fastest product validation.",
  },
  {
    category: "Collaboration",
    question: "How does your process look?",
    answer:
      "I adjust it to fit your timeline. MVP in 2 weeks — focus on key flows. Discovery — research and CJM. Growth — A/B testing and funnel optimization.",
  },
  {
    category: "Collaboration",
    question: "What tools do you use on a project?",
    answer:
      "Figma, Amplitude, Jira, Notion. Research: JTBD, CustDev, corridor tests. Handoff with detailed specs and states. For code: React, Next.js, Tailwind.",
  },
  {
    category: "Contact",
    question: "How can I reach you?",
    answer:
      "Telegram or email. I typically respond within 24 hours.",
  },
];

export const footerAboutParagraphs = [
  "Hi, I'm Ivan. With 6+ years of experience, I help build products in fintech, crypto, and consumer tech. I don't like overcomplicating, long shipping cycles, or lousy design.",
  "I'm biased toward speed, quality, and measurable impact. If you need this at this stage of your product, then don't hesitate—let's talk about how I can help you.",
];

export const socialLinks = [
  {
    name: "Telegram",
    description: "Fastest way to reach me",
    href: "https://t.me/iamidrisov",
    stat: "@iamidrisov",
  },
  {
    name: "Figma",
    description: "Portfolio and case studies",
    href: "https://www.figma.com/proto/tTcB6GdIXXdwRGsHQHnEGi/Portfolio",
    stat: "Portfolio",
  },
];
