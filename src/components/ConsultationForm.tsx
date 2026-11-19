"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/constants";
import type { Messages } from "@/messages/types";

export function ConsultationForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Messages;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, type: "consultation" }),
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.name} name="name" required />
        <Field label={dict.contact.company} name="company" />
        <Field label={dict.contact.phone} name="phone" required type="tel" />
        <Field label={dict.contact.email} name="email" type="email" />
        <Field label={dict.consultation.date} name="date" required type="date" />
        <Field label={dict.consultation.time} name="time" required type="time" />
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">{dict.consultation.format}</span>
        <div className="flex flex-wrap gap-3">
          <label className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2">
            <input type="radio" name="format" value="online" defaultChecked />
            {dict.consultation.online}
          </label>
          <label className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2">
            <input type="radio" name="format" value="offline" />
            {dict.consultation.offline}
          </label>
        </div>
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">{dict.consultation.topic}</span>
        <textarea
          name="topic"
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
        {status === "loading" ? dict.common.sending : dict.common.bookConsultation}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-700">{dict.consultation.success}</p>
      )}
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
