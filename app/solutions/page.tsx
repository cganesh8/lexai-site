export default function SolutionsPage() {
  const blocks = [
    {
      h: 'Contract Review Copilot',
      p: 'Compare incoming drafts to your playbooks, flag risk, propose fallbacks, and generate markup. Supports bilingual matters (English/Bahasa Malaysia) where feasible.'
    },
    {
      h: 'E-discovery Summarizer',
      p: 'Summarise bundles and threads, extract parties/dates/issues, and produce chronology drafts—exportable to Word/PDF.'
    },
    {
      h: 'Matter Intake Assistant',
      p: 'Structured intake that reduces back-and-forth and gives partners cleaner, faster briefs.'
    },
    {
      h: 'Timekeeping & Admin',
      p: 'Nudge-style time capture, matter notes clean-up, and automated follow-ups—all opt-in and auditable.'
    },
    {
      h: 'Deployment & Security',
      p: 'Options include cloud pilot (Vercel) or on-premise PC for demos. Access control, audit logs, data retention, and PDPA-aware privacy by design.'
    }
  ];
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Solutions</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.h} className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">{b.h}</h2>
            <p className="mt-2 text-sm text-gray-600">{b.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
