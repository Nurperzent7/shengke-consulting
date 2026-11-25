import type { ServiceSlug } from "@/lib/constants";

export type PageMeta = { title: string; description: string };

export type Messages = {
  meta: PageMeta;
  pageMeta: {
    about: PageMeta;
    services: PageMeta;
    cases: PageMeta;
    team: PageMeta;
    contact: PageMeta;
    consultation: PageMeta;
    privacy: PageMeta;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    team: string;
    contact: string;
    consultation: string;
    privacy: string;
  };
  common: {
    learnMore: string;
    allServices: string;
    contactUs: string;
    bookConsultation: string;
    send: string;
    sending: string;
    success: string;
    consultationSuccess: string;
    error: string;
    required: string;
    openWhatsApp: string;
    wechat: string;
    wechatScan: string;
    wechatCopy: string;
    wechatCopied: string;
    close: string;
    backToServices: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    clients: { value: string; label: string };
    languages: { value: string; label: string };
    since: { value: string; label: string };
    cities: { value: string; label: string };
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
    partnerBadge: string;
    members: {
      name: string;
      role: string;
      bio: string;
      tags: string[];
      isPartner?: boolean;
      photoAlt: string;
    }[];
  };
  partnerNetwork: {
    title: string;
    text: string;
    cities: string;
  };
  contact: {
    title: string;
    subtitle: string;
    office: string;
    phones: string;
    map: string;
    legal: string;
    tax: string;
    china: string;
    requisites: string;
    goConsultation: string;
  };
  consultation: {
    title: string;
    subtitle: string;
    date: string;
    time: string;
    topic: string;
    topicPlaceholder: string;
    other: string;
    format: string;
    online: string;
    offline: string;
    name: string;
    company: string;
    phone: string;
    email: string;
    consent: string;
  };
  privacy: {
    title: string;
    updated: string;
    body: string[];
  };
  footer: {
    rights: string;
    tagline: string;
    quickLinks: string;
    contacts: string;
    year: string;
  };
  aboutPage: {
    title: string;
    intro: string;
  };
  legalEntity: {
    name: string;
    binLabel: string;
    bin: string;
    address: string;
  };
};
