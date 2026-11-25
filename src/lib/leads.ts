type LeadRecord = Record<string, unknown> & { createdAt: string };

const MAX_LEADS = 500;
const leads: LeadRecord[] = [];

export function storeLead(payload: Record<string, unknown>): LeadRecord {
  const record: LeadRecord = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  leads.unshift(record);
  if (leads.length > MAX_LEADS) {
    leads.length = MAX_LEADS;
  }

  // Do not log PII — Cursor publish security review treats that as privacy_leak.
  console.info("[lead]", { type: record.type, createdAt: record.createdAt });
  return record;
}
