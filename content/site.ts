// ─────────────────────────────────────────────────────────────
// Global site details. ALL VALUES BELOW ARE MOCK — replace them.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "TekProSys",
  legalName: "TekProSys Technologies",
  tagline: "Complex needs, simple solutions.",
  description:
    "TekProSys builds mobile apps for iOS and Android, then the software, AI and growth systems around them. Complex products, shipped as something people actually use.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tekprosys.com",

  // Contact (mock)
  email: "hello@tekprosys.com",
  phone: "+1 (555) 014-2290",
  phoneHref: "+15550142290",
  whatsapp: "15550142290", // digits only, with country code
  whatsappDisplay: "+1 555 014 2290",
  address: "221 Mock Avenue, Suite 400, Austin, TX 78701",
  location: "Remote-first · Clients in 9 countries",
  hours: "Mon – Fri · 09:00 – 18:00 (UTC)",
  responseTime: "24 hours",

  // Leave empty to hide "Book a call" buttons, e.g. "https://cal.com/tekprosys/audit"
  bookingUrl: "",

  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/tekprosys" },
    { name: "Instagram", href: "https://www.instagram.com/tekprosys" },
    { name: "X", href: "https://x.com/tekprosys" },
    { name: "GitHub", href: "https://github.com/vawcom-technologies" },
  ],

  // Hero headline variant — compare them with analytics and keep the winner:
  //  "value"   → H1 says what you sell ("Mobile apps that win customers.")
  //  "tagline" → H1 is the brand line ("Complex needs. Simple solutions.")
  heroVariant: "value" as "value" | "tagline",

  // Honest availability signal shown in the hero & footer. Keep it true — update or set to "" to hide.
  availability: "Now booking projects for November",

  founded: 2023,
  rating: "5.0",
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Us", href: "/why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const auditOffer = {
  title: "Free 30-minute App & Product Audit",
  short: "Free audit",
  promise: "You leave with a clear path to an iOS and Android app — whether you hire us or not.",
  bullets: [
    "Which parts of the product belong in the mobile app first",
    "A recommended stack: native, Flutter or React Native",
    "A rough cost and timeline — no obligation",
  ],
};

export const trustPoints = [
  "NDA on request",
  "You own 100% of the code",
  "Fixed quotes",
  "Demo every 2 weeks",
];

export const proofMetrics = [
  { value: "40+", label: "Projects shipped", href: "/projects" },
  { value: "12,000+", label: "Hours automated / year", href: "/projects/nestwise-realty" },
  { value: "9", label: "Countries served", href: "/about" },
];

// Placeholder client names (swap for real logos in /public/clients later)
export const clientNames = [
  "Nestwise",
  "Ledgerly",
  "Clinicare",
  "Atlas Freight",
  "Bloom & Co",
  "Shelfsight",
  "Docsy",
  "Pulse B2B",
];
