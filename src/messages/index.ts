import type { Locale } from "@/lib/constants";
import type { Messages } from "./types";
import { ru } from "./ru";
import { en } from "./en";
import { zh } from "./zh";
import { kk } from "./kk";

export const messages: Record<Locale, Messages> = { ru, en, zh, kk };
