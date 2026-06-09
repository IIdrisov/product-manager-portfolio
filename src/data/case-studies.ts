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

const placeholderMedia = (count: number): CaseStudyMedia[] =>
  Array.from({ length: count }, (_, i) => ({
    type: i % 2 === 0 ? "video" : "image",
    alt: `Media ${i + 1}`,
  }));

export const caseStudies: CaseStudy[] = [
  {
    slug: "xplace-crypto-card",
    category: "XPlace Neobank",
    title: "Crypto-backed credit card",
    description:
      "Designing a crypto neobank with a Visa Platinum credit card backed by crypto assets.",
    role: ["Product Designer", "Product Discovery"],
    team: "Crypto Neobank · Product Squad · 20 members",
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "Product Strategy",
      "User Testing",
      "Design Systems",
    ],
    link: "https://xplace.com",
    problem:
      "Crypto-native users are forced to sell appreciating assets for fiat purchases — creating tax liabilities and reducing investment exposure. Traditional crypto cards lack differentiation due to market saturation.",
    solution:
      "Conducted market and user research, built CJM and designed a crypto-backed credit card model: DeFi lending + card issuing + banking. End-to-end UX/UI — onboarding, asset linking, card management, subscription tiers and monetization touchpoints in Figma.",
    result:
      "MVP in 3 months. Revenue from $0 to $300K+ MRR within 3 months after launch. LTV +300%. Organic promotion from Web3 influencers, including Anatoly Yakovenko (Solana).",
    media: [
      { type: "video", src: "/videos/xplace-crypto-card.mp4" },
      ...placeholderMedia(3),
    ],
  },
  {
    slug: "alpha-one-onboarding",
    category: "Alpha One Exchange",
    title: "Onboarding & first-trade insurance",
    description:
      "Redesigning onboarding and pre-trade funnel for an intraday crypto exchange.",
    role: ["Product Designer", "Growth Design"],
    team: "Crypto Exchange · Growth Squad · 15 members",
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "A/B Testing",
      "Growth Design",
      "Metrics-Driven Design",
    ],
    link: "https://alpha-one.io",
    problem:
      "Most new users came through referrals but lacked trading experience — low activation and first-trade conversion (5.6%). Low trading frequency constrained volume growth.",
    solution:
      "Redesigned onboarding and pre-trade funnel with beginner-friendly flows. Launched first-trade insurance (loss coverage up to $50). Built automated trading UX and improved order matching. A/B tests and iterations based on unit economics.",
    result:
      "Registration → First Trade conversion: 5.6% → 11.2% (+100%). Trading volume: $6M → $55M (+900%). Market share: 0.7% → 2.3%. Active traders: 10.5% → 24.5%. 7-day retention: 23% → 35%.",
    media: [
      { type: "video", src: "/videos/alpha-one-bugatti.m4v" },
      ...placeholderMedia(3),
    ],
  },
  {
    slug: "yandex-hr-tech",
    category: "Yandex HR Tech",
    title: "HR social network mobile migration",
    description:
      "Migrating Yandex's internal employee social network to a native mobile app.",
    role: ["Product Designer"],
    team: "HR Tech · Internal Social Network · 8 members",
    scope: [
      "UX Research",
      "UI Design",
      "Prototyping",
      "User Testing",
      "Mobile Design",
      "Design Systems",
    ],
    link: "https://yandex.ru/jobs",
    problem:
      "The web version of the internal HR platform didn't provide a sufficient mobile experience. Service navigation, news feed and profiles needed redesign for a native app.",
    solution:
      "Designed web-to-app migration into a WebView app. Redesigned information architecture and navigation. Optimized news feed: card layouts, comment threads, content discovery. Built Club Profile and User Profile. Integrations with Random Coffee, Birthdays, Employee Profiles.",
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
      "UX/UI for Web3 products in the TON ecosystem: staking, wallet, NFT, crypto card.",
    role: ["Product Designer", "Web3 UX"],
    team: "TON Ecosystem · Web3 Squad · 10 members",
    scope: [
      "Web3 UX",
      "UI Design",
      "Prototyping",
      "Onboarding Design",
      "Payment Flows",
    ],
    link: "https://tonwhales.com",
    problem:
      "Complex blockchain scenarios (staking, cross-chain transfers, seed phrase backup) created a high barrier to entry. Staking users churned due to opaque economics and high gas costs.",
    solution:
      "Designed 3 staking pools, non-custodial wallet Tonhub, NFT Whales500 gated access flows. Low-friction onboarding with security patterns. Liquid staking UX and gas optimization. Holders.io crypto card + Visa integration flows.",
    result:
      "TVL ~$100M. Wallet scaled to 60K MAU. Liquid staking retention +~20%. Transfer costs −30–50%. Real-world spending from crypto balances via Visa card.",
    media: [
      { type: "image", src: "/images/tonhub.png", alt: "Tonhub wallet & card" },
      ...placeholderMedia(3),
    ],
  },
  {
    slug: "berizaryad-map",
    category: "Beri Zariad",
    title: "Map clustering & rental funnel",
    description:
      "Optimizing map and rental funnel for a power bank sharing service.",
    role: ["Product Designer"],
    team: "Power Bank Rental · Product Squad · 6 members",
    scope: [
      "JTBD Research",
      "UI Design",
      "A/B Testing",
      "Payment UX",
      "Map Design",
    ],
    link: "https://berizaryad.ru",
    problem:
      "Users with critically low battery (<3%) couldn't find nearby stations on the map and abandoned the rental funnel. High mobile traffic consumption on the map made it worse.",
    solution:
      "Field research and JTBD interviews. Designed location clustering and map optimization logic. In-app feedback system. Payment UX for SBP and alternative providers. A/B and multivariate testing.",
    result:
      "Mobile traffic consumption −40%. Rental conversion +15% among low-battery users. Actionable feedback ×3. Transaction costs −25%.",
    media: [
      { type: "image", src: "/images/berizaryad.png", alt: "Beri Zariad" },
      ...placeholderMedia(3),
    ],
  },
  {
    slug: "safesound-telegram",
    category: "SafeSound",
    title: "Telegram music streaming mini-app",
    description:
      "The first music streaming service natively integrated into Telegram.",
    role: ["Product Designer / Founder"],
    team: "Telegram Mini App · 8 members",
    scope: [
      "Product Discovery",
      "UI Design",
      "Prototyping",
      "Go-to-Market",
      "Viral Mechanics",
    ],
    problem:
      "No Telegram-native music streaming experience existed. Users had to switch between messenger and external music apps, losing conversation context.",
    solution:
      "Validated hypothesis through MVP at Telegram Hackathon. End-to-end UX/UI mini-app: music player, catalog, search, playlists, sharing mechanics. Figma prototypes. Go-to-market and viral distribution inside Telegram.",
    result:
      "TOP-100 out of 3,000+ Telegram Hackathon projects. 100K+ MAU through organic distribution. Tier-1 investor interest, Seed round initiated.",
    media: [
      { type: "image", src: "/images/safesound.png", alt: "SafeSound" },
      ...placeholderMedia(3),
    ],
  },
  {
    slug: "synergy-loyalty",
    category: "Synergy University",
    title: "Token-based loyalty ecosystem",
    description:
      "Loyalty program and referral ecosystem for an educational holding.",
    role: ["Product Designer"],
    team: "Loyalty Program · Product Squad · 7 members",
    scope: [
      "UX Research",
      "UI Design",
      "Product Strategy",
      "Fraud Prevention UX",
      "Loyalty Design",
    ],
    link: "https://synergy.ru",
    problem:
      "Weak incentives in the referral program blocked organic student acquisition. Fraud in referral activity reduced trust. Loyalty program didn't scale to partner universities.",
    solution:
      "Analyzed referral funnel. Designed token-based loyalty ecosystem: earning and spending rewards on tuition and partner products. Fraud prevention and verification UX. Alfa-Bank integration: student cards and cross-service loyalty.",
    result:
      "Referral conversion ×2. Fraud −50%. Program revenue: 120M → 540M ₽/year. Scaled to 5 partner universities.",
    media: [
      { type: "image", src: "/images/synergy.png", alt: "Synergy Friends" },
      ...placeholderMedia(3),
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
