"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contacts } from "@/lib/constants";
import type { Messages } from "@/messages/types";

export function FloatingActions({ dict }: { dict: Messages }) {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setWechatOpen(true)}
          className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-navy shadow-lg ring-1 ring-line transition hover:-translate-y-0.5"
        >
          {dict.common.wechat}
        </button>
        <a
          href={contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {wechatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              className="absolute top-3 right-3 rounded-full p-1 text-muted hover:bg-soft"
              aria-label={dict.common.close}
            >
              <X size={18} />
            </button>
            <h3 className="text-lg font-semibold text-navy">{dict.common.wechat}</h3>
            <p className="mt-2 text-sm text-muted">
              {contacts.tax} / {contacts.luoChina}
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 rounded-xl border border-dashed border-line bg-soft p-6">
              <div className="grid h-40 w-40 place-items-center rounded-lg bg-white text-center text-xs text-muted shadow-sm">
                WeChat QR
                <br />
                {contacts.tax}
              </div>
              <p className="text-center text-xs text-muted">
                Scan WeChat QR or add by phone number
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
