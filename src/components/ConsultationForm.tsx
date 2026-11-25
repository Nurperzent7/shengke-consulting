"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { serviceSlugs, type Locale } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import type { Messages } from "@/messages/types";
import { WeChatPanel } from "@/components/WeChatPanel";

export function ConsultationForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [consent, setConsent] = useState(false);

  const topics = useMemo(
    () =>
      serviceSlugs.map((slug) => ({
        value: slug,
        label: dict.services.items[slug].title,
      })),
    [dict.services.items],
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          locale,
          type: "consultation",
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-cream/70 px-3.5 py-2.5 outline-none transition focus:border-gold/60 focus:bg-white";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={onSubmit} className="space-y-4 rounded-[1.75rem] surface-card p-6 md:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={dict.consultation.name} name="name" required className={fieldClass} />
          <Field label={dict.consultation.company} name="company" className={fieldClass} />
          <Field label={dict.consultation.phone} name="phone" required type="tel" className={fieldClass} />
          <Field label={dict.consultation.email} name="email" type="email" className={fieldClass} />
          <Field label={dict.consultation.date} name="date" required type="date" className={fieldClass} />
          <Field label={dict.consultation.time} name="time" required type="time" className={fieldClass} />
        </div>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">{dict.consultation.format}</span>
          <select name="format" required defaultValue="online" className={fieldClass}>
            <option value="online">{dict.consultation.online}</option>
            <option value="offline">{dict.consultation.offline}</option>
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">{dict.consultation.topic}</span>
          <select name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              {dict.consultation.topicPlaceholder}
            </option>
            {topics.map((topic) => (
              <option key={topic.value} value={topic.label}>
                {topic.label}
              </option>
            ))}
            <option value={dict.consultation.other}>{dict.consultation.other}</option>
          </select>
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-line bg-soft/50 p-3.5 text-sm text-muted">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1"
          />
          <span>
            {dict.consultation.consent}{" "}
            <Link
              href={localizedPath(locale, "/privacy")}
              className="font-semibold text-navy underline-offset-2 hover:underline"
            >
              {dict.nav.privacy}
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "loading" || !consent}
          className="btn-primary w-full !w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? dict.common.sending : dict.common.bookConsultation}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-700">{dict.common.consultationSuccess}</p>
        )}
        {status === "error" && <p className="text-sm text-red-600">{dict.common.error}</p>}
      </form>

      <div className="rounded-[1.75rem] surface-card p-6 md:p-8">
        <div className="eyebrow mb-4">WeChat</div>
        <h3 className="display text-2xl font-semibold text-navy">{dict.common.wechat}</h3>
        <div className="mt-5">
          <WeChatPanel dict={dict} embedded />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  className: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </span>
      <input name={name} type={type} required={required} className={className} />
    </label>
  );
}
