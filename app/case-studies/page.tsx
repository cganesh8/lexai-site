// FILE: app/case-studies/page.tsx
import Link from "next/link";


export default function CaseStudies() {
return (
<div className="space-y-8">
<h1 className="text-3xl font-semibold">Case Studies (Illustrative)</h1>
<div className="grid gap-6 md:grid-cols-2">
{/* Case Study 1 */}
<div className="rounded-lg border p-6">
<h2 className="font-semibold">
Accelerating Contract Review with an AI Copilot
</h2>
<p className="mt-2 text-sm text-gray-600">
    A global law firm cut NDA and vendor agreement reviews by 50% using an
    AI-powered Contract Review Copilot trained on its negotiation playbooks.
    The tool flagged risky clauses, suggested fallback language, and generated
    partner-ready summaries.
</p>
<Link
href="/case-studies/contract-review-copilot"
className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
Read More
</Link>
</div>


{/* Case Study 2 */}
<div className="rounded-lg border p-6">
<h2 className="font-semibold">
Boutique Litigation — Discovery Summaries
</h2>
<p className="mt-2 text-sm text-gray-600">
Generated bundle summaries and party timelines for first-pass review;
partners reported faster issue spotting with better consistency.
</p>
<Link
href="/case-studies/boutique-litigation-discovery"
className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
Read More
</Link>
</div>


{/* Placeholder for future case studies */}
<div className="rounded-lg border p-6">
<h2 className="font-semibold">Enterprise Firm — Timekeeping & Admin</h2>
<p className="mt-2 text-sm text-gray-600">
Example case study: AI nudges and tidy notes reduced missed time
entries and streamlined admin across practice groups.
</p>
<Link
href="/case-studies/timekeeping-admin"
className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
Read More
</Link>
</div>


<div className="rounded-lg border p-6">
<h2 className="font-semibold">Regional Firm — E-discovery Summarizer</h2>
<p className="mt-2 text-sm text-gray-600">
Example case study: Extracted parties, dates, and issues to produce
chronologies and speed up issue spotting in litigation matters.
</p>
<Link
href="/case-studies/ediscovery-summarizer"
className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
Read More
</Link>
</div>
</div>
</div>
);
}
