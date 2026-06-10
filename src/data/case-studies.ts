export type CaseStudyMedia = {
  type: "image" | "video";
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  size?: "full" | "half";
};

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  description: string;
  role: string[];
  team: string;
  scope: string[];
  link?: string;
  problem: string;
  solution: string;
  result: string;
  media: CaseStudyMedia[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "xplace-crypto-card",
    category: "XPlace Neobank",
    title: "Crypto-backed credit card",
    description:
      "Building a crypto neobank with a Visa Platinum credit card backed by crypto assets.",
    role: ["Senior Product Manager", "Product Discovery"],
    team: "Crypto Neobank · Product Squad · 20 members",
    scope: [
      "Product Strategy",
      "Monetization",
      "User Research",
      "Unit Economics",
      "Growth",
      "Cross-functional Leadership",
    ],
    link: "https://x.place",
    problem:
      "Crypto-native users are forced to sell appreciating assets for fiat purchases — creating tax liabilities and reducing investment exposure. Traditional crypto cards lack differentiation due to market saturation.",
    solution:
      "Conducted market and user research, identified a key pain point and initiated a product pivot from a crypto card exchange to a neobank credit card company. Built monetization architecture: subscription tiers, interchange, FX, origination and trading fees. Led cross-functional team of 20 through discovery, MVP delivery and growth.",
    result:
      "MVP in 3 months. Revenue from $0 to $300K+ MRR within 3 months after launch. LTV +300%. Organic promotion from Web3 influencers, including Anatoly Yakovenko (Solana).",
    media: [
      {
        type: "image",
        src: "/images/main-xplace.webp",
        alt: "XPlace main screen",
        width: 3272,
        height: 5138,
      },
      {
        type: "image",
        src: "/images/select-card-xplace.webp",
        alt: "XPlace card selection",
        width: 3240,
        height: 1624,
      },
      {
        type: "image",
        src: "/images/select-card-info-xplace.webp",
        alt: "XPlace card details",
        width: 3240,
        height: 5678,
      },
      {
        type: "image",
        src: "/images/bank-account-xplace.webp",
        alt: "XPlace bank account",
        width: 2426,
        height: 1656,
      },
    ],
  },
  {
    slug: "alpha-one-onboarding",
    category: "Alpha One Exchange",
    title: "Onboarding & first-trade insurance",
    description:
      "Owning growth and monetization for an intraday crypto exchange across 5 blockchains.",
    role: ["Senior Product Manager", "Growth"],
    team: "Crypto Exchange · Growth Squad · 15 members",
    scope: [
      "Product Strategy",
      "Growth",
      "A/B Testing",
      "Unit Economics",
      "Monetization",
      "Retention",
    ],
    link: "https://alpha-one.io",
    problem:
      "Most new users came through referrals but lacked trading experience — low activation and first-trade conversion (5.6%). Low trading frequency constrained volume growth.",
    solution:
      "Built financial and unit-economic models to identify growth bottlenecks. Redesigned onboarding and launched first-trade insurance (loss coverage up to $50). Identified low trading frequency as the primary constraint and launched automated trading alongside order matching improvements. Optimized commission mechanics, referral incentives and trader rewards.",
    result:
      "Registration → First Trade conversion: 5.6% → 11.2% (+100%). Trading volume: $6M → $55M (+900%). Market share: 0.7% → 2.3%. Active traders: 10.5% → 24.5%. 7-day retention: 23% → 35%.",
    media: [
      {
        type: "image",
        src: "/images/alpha-main.webp",
        alt: "Alpha One main screen",
        width: 3416,
        height: 2332,
      },
      {
        type: "image",
        src: "/images/alpha-second.webp",
        alt: "Alpha One onboarding flow",
        width: 2848,
        height: 1304,
      },
      {
        type: "image",
        src: "/images/alpha-third.webp",
        alt: "Alpha One first-trade insurance",
        width: 3818,
        height: 6574,
      },
    ],
  },
  {
    slug: "yandex-hr-tech",
    category: "Yandex HR Tech",
    title: "HR social network mobile migration",
    description:
      "Migrating Yandex's internal employee social network to a native mobile app.",
    role: ["Product Designer", "Product Discovery"],
    team: "HR Tech · Internal Social Network · 8 members",
    scope: [
      "Product Discovery",
      "User Research",
      "Roadmap",
      "Cross-functional Delivery",
      "Mobile Product",
    ],
    link: "https://yandex.ru/jobs",
    problem:
      "The web version of the internal HR platform didn't provide a sufficient mobile experience. Service navigation, news feed and profiles needed a product rethink for a native app.",
    solution:
      "Led web-to-app migration into a WebView app. Redefined information architecture and navigation. Optimized news feed for mobile engagement: card layouts, comment threads, content discovery. Built Club Profile and User Profile. Integrated Random Coffee, Birthdays and Employee Profiles into a unified mobile experience.",
    result:
      "Improved mobile performance and platform accessibility. Increased internal community engagement. Smoother cross-service workflows between HR services.",
    media: [
      {
        type: "image",
        src: "/images/Feed.webp",
        alt: "Yandex HR Tech news feed",
        width: 4800,
        height: 16300,
      },
      {
        type: "image",
        src: "/images/group-profile-yandex.webp",
        alt: "Yandex HR Tech group profile",
        width: 3488,
        height: 3408,
        size: "half",
      },
      {
        type: "image",
        src: "/images/group-info-yandex.webp",
        alt: "Yandex HR Tech group info",
        width: 3488,
        height: 6984,
        size: "half",
      },
      {
        type: "image",
        src: "/images/create-group-yandex.webp",
        alt: "Yandex HR Tech create group",
        width: 3488,
        height: 7236,
        size: "half",
      },
      {
        type: "image",
        src: "/images/treads-yandex.webp",
        alt: "Yandex HR Tech threads",
        width: 2888,
        height: 16383,
      },
    ],
  },
  {
    slug: "whales-tonhub",
    category: "Whales / TON",
    title: "Staking pools & non-custodial wallet",
    description:
      "Product strategy and roadmap for Web3 products in the TON ecosystem: staking, wallet, crypto card.",
    role: ["Product Manager", "Web3"],
    team: "TON Ecosystem · Web3 Squad · 10 members",
    scope: [
      "Product Strategy",
      "Web3",
      "Monetization",
      "Payments",
      "Regulatory Compliance",
    ],
    link: "https://tonwhales.com",
    problem:
      "Staking users churned due to opaque economics and high gas costs. Cross-chain transaction costs eroded user value. No real-world spending path from crypto balances.",
    solution:
      "Identified retention challenges and launched a liquid staking pool with improved participation mechanics. Redesigned staking economics and incentive structures. Analyzed cross-chain costs and collaborated with engineering on gas optimization. Led Holders.io crypto card development and Visa integration. Implemented AML processes and operational back-office tooling.",
    result:
      "TVL scaled from $50M to $100M. Wallet scaled to 60K MAU. Liquid staking retention +~20%. Transfer costs −30–50%. Real-world spending from crypto balances via Visa card.",
    media: [
      {
        type: "image",
        src: "/images/Tonhub-1.webp",
        alt: "Tonhub wallet",
        width: 9936,
        height: 5120,
      },
      {
        type: "image",
        src: "/images/tonhub-2.webp",
        alt: "Tonhub staking pools",
        width: 4888,
        height: 10400,
        size: "half",
      },
      {
        type: "image",
        src: "/images/holders.webp",
        alt: "Holders.io crypto card",
        width: 2880,
        height: 16383,
      },
    ],
  },
  {
    slug: "berizaryad-map",
    category: "Beri Zariad",
    title: "Map clustering & rental funnel",
    description:
      "Optimizing map and rental funnel for a power bank sharing service.",
    role: ["Product Manager"],
    team: "Power Bank Rental · Product Squad · 6 members",
    scope: [
      "Product Discovery",
      "JTBD Research",
      "A/B Testing",
      "Backlog Ownership",
      "Unit Economics",
    ],
    link: "https://berizaryad.ru",
    problem:
      "Users with critically low battery couldn't find nearby stations on the map and abandoned the rental funnel. High mobile traffic consumption on the map made it worse.",
    solution:
      "Conducted field research and JTBD interviews. Initiated backlog reprioritization to fix the funnel bottleneck. Designed location clustering and map optimization logic. Implemented in-app feedback and rating system. Identified opportunity to improve unit economics through payment infrastructure optimization and led SBP integration.",
    result:
      "Mobile traffic consumption −40%. Rental conversion +15% among low-battery users. Actionable feedback ×3. Transaction costs −25%.",
    media: [
      { type: "image", src: "/images/berizaryad.png", alt: "Beri Zariad" },
    ],
  },
  {
    slug: "safesound-telegram",
    category: "SafeSound",
    title: "Telegram music streaming mini-app",
    description:
      "The first music streaming service natively integrated into Telegram.",
    role: ["Founder", "Product Strategy"],
    team: "Telegram Mini App · 8 members",
    scope: [
      "Product Discovery",
      "Go-to-Market",
      "Product Strategy",
      "Fundraising",
      "Viral Mechanics",
    ],
    problem:
      "No Telegram-native music streaming experience existed. Users had to switch between messenger and external music apps, losing conversation context.",
    solution:
      "Identified demand for a Telegram-native music streaming experience and validated the hypothesis through MVP at Telegram Hackathon. Led product strategy, development and go-to-market with a team of 8. Built viral distribution mechanics inside Telegram.",
    result:
      "TOP-100 out of 3,000+ Telegram Hackathon projects. 100K+ MAU through organic distribution. Presented at industry conferences, attracted Tier-1 investor interest and initiated Seed round discussions.",
    media: [
      {
        type: "image",
        src: "/images/main-0.webp",
        alt: "SafeSound main screen",
        width: 8204,
        height: 3312,
      },
      {
        type: "image",
        src: "/images/main-1.webp",
        alt: "SafeSound player",
        width: 3224,
        height: 5448,
        size: "half",
      },
      {
        type: "image",
        src: "/images/main-2.webp",
        alt: "SafeSound catalog",
        width: 3224,
        height: 6996,
        size: "half",
      },
      {
        type: "image",
        src: "/images/main-3.webp",
        alt: "SafeSound search",
        width: 6544,
        height: 3852,
      },
      {
        type: "image",
        src: "/images/main-4.webp",
        alt: "SafeSound playlists",
        width: 8204,
        height: 3312,
      },
      {
        type: "image",
        src: "/images/main-5.webp",
        alt: "SafeSound sharing",
        width: 3224,
        height: 14530,
        size: "half",
      },
      {
        type: "image",
        src: "/images/main-6.webp",
        alt: "SafeSound viral mechanics",
        width: 4884,
        height: 4184,
        size: "half",
      },
    ],
  },
  {
    slug: "synergy-loyalty",
    category: "Synergy University",
    title: "Token-based loyalty ecosystem",
    description:
      "Loyalty program and referral ecosystem for an educational holding.",
    role: ["Product Manager"],
    team: "Loyalty Program · Product Squad · 7 members",
    scope: [
      "Product Strategy",
      "Referral Programs",
      "Fraud Prevention",
      "Partnership Integration",
    ],
    link: "https://synergy.ru",
    problem:
      "Weak incentives in the referral program blocked organic student acquisition. Fraud in referral activity reduced trust. Loyalty program didn't scale to partner universities.",
    solution:
      "Analyzed referral funnel performance and identified weak incentives as the primary barrier. Designed and launched a token-based loyalty ecosystem: earning and spending rewards on tuition and partner products. Built monitoring and verification processes for referral activity. Led Alfa-Bank integration for student banking cards.",
    result:
      "Referral conversion ×2. Fraud −50%. Program revenue: 120M → 540M ₽/year. Scaled to 5 partner universities.",
    media: [
      {
        type: "image",
        src: "/images/synergy-main.webp",
        alt: "Synergy loyalty main screen",
        width: 2880,
        height: 7936,
      },
      {
        type: "image",
        src: "/images/synergy-second.webp",
        alt: "Synergy referral flow",
        width: 1338,
        height: 818,
      },
      {
        type: "image",
        src: "/images/synergy-third.webp",
        alt: "Synergy rewards catalog",
        width: 1161,
        height: 809,
      },
      {
        type: "image",
        src: "/images/synergy-4.webp",
        alt: "Synergy token ecosystem",
        width: 1181,
        height: 797,
      },
      {
        type: "image",
        src: "/images/synergy-5.webp",
        alt: "Synergy Alfa-Bank integration",
        width: 1189,
        height: 668,
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
