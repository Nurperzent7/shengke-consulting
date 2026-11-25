export const locales = ["kk", "ru", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "kk";

export const localeLabels: Record<Locale, string> = {
  kk: "KZ",
  ru: "RU",
  en: "EN",
  zh: "中文",
};

export const siteUrl = "https://shengkeconsulting.kz";

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
  email: "theseitov@outlook.com",
  wechatId: "lawyer-alikhan",
  wechatQr: "/images/wechat_qr.png",
  map2gis: "https://2gis.kz/astana/geo/70000001119344388",
  bin: "260540027212",
  address: {
    ru: "Республика Казахстан, 010000, г. Астана, район Есиль, ул. Сарайшық, д. 9, н.п. 15",
    en: "9 Saraishyk Street, premises 15, Yesil District, Astana 010000, Republic of Kazakhstan",
    zh: "哈萨克斯坦共和国阿斯塔纳市叶西尔区萨赖什克街9号15室，邮编010000",
    kk: "Қазақстан Республикасы, 010000, Астана қаласы, Есіл ауданы, Сарайшық көшесі, 9 үй, т.е.б. 15",
  },
  legalName: {
    ru: "ТОО «Shengke Consulting»",
    en: "Shengke Consulting LLP",
    zh: "Shengke Consulting 有限责任合伙公司",
    kk: "«Shengke Consulting» ЖШС",
  },
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
