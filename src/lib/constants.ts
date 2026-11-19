export const locales = ["ru", "en", "zh", "kk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "kk";

export const localeLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  zh: "中文",
  kk: "KZ",
};

export const contacts = {
  alikhan: "+7 778 308 5560",
  alikhanTel: "+77783085560",
  tax: "+7 747 212 6280",
  taxTel: "+77472126280",
  luoChina: "+86 180 8083 8700",
  luoChinaTel: "+8618080838700",
  luoKz: "+7 707 202 4876",
  luoKzTel: "+77072024876",
  whatsapp: "77783085560",
  whatsappUrl: "https://wa.me/77783085560",
  email: "info@shengke.kz",
  address: {
    ru: "г. Астана, район Есиль, ул. Сарайшык, д. 9, ВП-15",
    en: "9 Saraishyk Street, premises 15, Yesil District, Astana, Kazakhstan",
    zh: "哈萨克斯坦阿斯塔纳市叶西尔区萨赖希克街 9 号，VP-15",
    kk: "Астана қ., Есіл ауданы, Сарайшық к-сі, 9 үй, 15 тұрғын емес үй-жай",
  },
  map2gis: "https://2gis.kz/astana/geo/70000001119344388",
};

export const brand = {
  primary: "#133269",
  accent: "#2F5BD3",
  gold: "#C9A227",
  soft: "#EEF2F9",
  white: "#FFFFFF",
};

export const serviceSlugs = [
  "corporate",
  "contracts",
  "projects",
  "government",
  "disputes",
  "bookkeeping",
  "tax-reporting",
  "payroll",
  "statistics",
  "tax-advisory",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
