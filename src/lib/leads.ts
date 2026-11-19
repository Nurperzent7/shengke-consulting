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

  // Useful in local/dev logs; published hosting may surface these in runtime logs.
  console.info("[lead]", JSON.stringify(record));
  return record;
}

export function listLeads() {
  return [...leads];
}
