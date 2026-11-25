"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contacts } from "@/lib/constants";
import type { Messages } from "@/messages/types";
import { WeChatPanel } from "@/components/WeChatPanel";

export function FloatingActions({ dict }: { dict: Messages }) {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <>
      <div className="floating-actions fixed right-3 bottom-3 z-50 flex flex-col gap-2.5 sm:right-4 sm:bottom-4 sm:gap-3">
        <button
          type="button"
          onClick={() => setWechatOpen(true)}
          className="min-h-11 rounded-full border border-line bg-cream/95 px-3.5 py-2.5 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(8,22,45,0.14)] backdrop-blur transition hover:-translate-y-0.5 sm:px-4 sm:py-3"
        >
          {dict.common.wechat}
        </button>
        <a
          href={contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 sm:px-4 sm:py-3"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {wechatOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-deep/55 p-3 backdrop-blur-sm sm:items-center sm:p-4">
          <div className="relative mb-[env(safe-area-inset-bottom,0px)] w-full max-w-sm rounded-t-[1.5rem] surface-card p-5 shadow-2xl sm:mb-0 sm:rounded-[1.5rem] sm:p-6">
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              className="absolute top-3 right-3 inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-muted hover:bg-soft"
              aria-label={dict.common.close}
            >
              <X size={18} />
            </button>
            <div className="eyebrow mb-3">WeChat</div>
            <h3 className="display mb-4 text-2xl font-semibold text-navy">{dict.common.wechat}</h3>
            <WeChatPanel dict={dict} />
          </div>
        </div>
      )}
    </>
  );
}
