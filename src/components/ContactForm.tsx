"use client";

import { FormEvent, useState } from "react";
import { serviceSlugs, type Locale } from "@/lib/constants";
import type { Messages } from "@/messages/types";

export function ContactForm({ locale, dict }: { locale: Locale; dict: Messages }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, type: "contact" }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-navy">{dict.contact.formTitle}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.name} name="name" required />
        <Field label={dict.contact.company} name="company" />
        <Field label={dict.contact.phone} name="phone" required type="tel" />
        <Field label={dict.contact.email} name="email" type="email" />
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">{dict.contact.service}</span>
        <select
          name="service"
          className="w-full rounded-xl border border-line bg-soft/40 px-3 py-2.5 outline-none focus:border-blue"
          defaultValue=""
        >
          <option value="" disabled>
            {dict.contact.servicePlaceholder}
          </option>
          {serviceSlugs.map((slug) => (
            <option key={slug} value={slug}>
              {dict.services.items[slug].title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">{dict.contact.message}</span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-line bg-soft/40 px-3 py-2.5 outline-none focus:border-blue"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue disabled:opacity-60"
      >
        {status === "loading" ? dict.common.sending : dict.common.send}
      </button>
      {status === "success" && <p className="text-sm text-emerald-700">{dict.common.success}</p>}
      {status === "error" && <p className="text-sm text-red-600">{dict.common.error}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-soft/40 px-3 py-2.5 outline-none focus:border-blue"
      />
    </label>
  );
}
