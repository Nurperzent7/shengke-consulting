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
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setWechatOpen(true)}
          className="rounded-full border border-line bg-cream/95 px-4 py-3 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(8,22,45,0.14)] backdrop-blur transition hover:-translate-y-0.5"
        >
          {dict.common.wechat}
        </button>
        <a
          href={contacts.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {wechatOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/55 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-[1.5rem] surface-card p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              className="absolute top-3 right-3 rounded-full p-1 text-muted hover:bg-soft"
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
