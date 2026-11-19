import type { ServiceSlug } from "@/lib/constants";

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    team: string;
    contact: string;
    consultation: string;
    request: string;
  };
  common: {
    learnMore: string;
    allServices: string;
    contactUs: string;
    bookConsultation: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    openWhatsApp: string;
    wechat: string;
    close: string;
    readMore: string;
    backToServices: string;
    partnerNote: string;
    from: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    clientsLocal: string;
    clientsPartner: string;
    cases: string;
    recovered: string;
    staff: string;
    years: string;
  };
  aboutPreview: {
    title: string;
    text: string;
    missionTitle: string;
    mission: string;
  };
  advantages: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; text: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    mainService: string;
    pricingNote: string;
    audience: string;
    items: Record<
      ServiceSlug,
      { title: string; short: string; details: string[] }
    >;
  };
  cases: {
    title: string;
    subtitle: string;
    amount: string;
    year: string;
    items: { title: string; amount?: string; year: string }[];
  };
  results: {
    title: string;
    items: string[];
  };
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      role: string;
      bio: string;
      tags: string[];
    }[];
  };
  partner: {
    title: string;
    subtitle: string;
    text: string;
    cities: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
    service: string;
    servicePlaceholder: string;
    office: string;
    phones: string;
    map: string;
    legal: string;
    tax: string;
    china: string;
  };
  consultation: {
    title: string;
    subtitle: string;
    date: string;
    time: string;
    topic: string;
    format: string;
    online: string;
    offline: string;
    success: string;
  };
  footer: {
    rights: string;
    tagline: string;
    quickLinks: string;
    contacts: string;
  };
  aboutPage: {
    title: string;
    intro: string;
    founded: string;
    geography: string;
    advantage: string;
    certificatesTitle: string;
    certificates: string[];
  };
};
