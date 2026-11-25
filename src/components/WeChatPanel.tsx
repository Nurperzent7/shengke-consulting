"use client";

import { useState } from "react";
import Image from "next/image";
import { contacts } from "@/lib/constants";
import type { Messages } from "@/messages/types";

export function WeChatPanel({
  dict,
  embedded = false,
}: {
  dict: Messages;
  embedded?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copyId() {
    try {
      await navigator.clipboard.writeText(contacts.wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={embedded ? "" : "text-center"}>
      <div className="flex flex-col items-center gap-3">
        <Image
          src={contacts.wechatQr}
          alt={`WeChat ${contacts.wechatId}`}
          width={180}
          height={180}
          className="rounded-xl border border-line bg-white p-2 shadow-sm"
        />
        <p className="text-sm text-muted">{dict.common.wechatScan}</p>
        <p className="text-sm font-semibold text-navy">ID: {contacts.wechatId}</p>
        <button
          type="button"
          onClick={copyId}
          className="rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:bg-soft"
        >
          {copied ? dict.common.wechatCopied : dict.common.wechatCopy}
        </button>
      </div>
    </div>
  );
}
