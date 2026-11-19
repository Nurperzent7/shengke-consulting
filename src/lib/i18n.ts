import { defaultLocale, locales, type Locale } from "./constants";
import { messages } from "@/messages";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocale(param?: string): Locale {
  if (param && isLocale(param)) return param;
  return defaultLocale;
}

export function t(locale: Locale) {
  return messages[locale];
}

export function localizedPath(locale: Locale, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}
