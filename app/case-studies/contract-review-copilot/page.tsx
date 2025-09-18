// FILE: app/case-studies/contract-review-copilot/page.tsx
import Link from "next/link";


export const metadata = {
title: "Case Study: Accelerating Contract Review with an AI Copilot",
description:
"How a global law firm used an AI Contract Review Copilot to speed reviews by 50%, improve consistency, and delight clients.",
};


export default function ContractReviewCopilotCaseStudy() {
return (
<main className="mx-auto max-w-4xl space-y-10 px-6 py-12">
{/* Breadcrumb / Back link */}
<nav aria-label="Breadcrumb">
<ol className="flex items-center gap-2 text-sm text-gray-500">
<li>
<Link href="/case-studies" className="hover:underline">
Case Studies
</Link>
</li>
<li aria-hidden className="px-1">/</li>
<li className="text-gray-700">Contract Review Copilot</li>
</ol>
</nav>


{/* Header */}
<header className="space-y-4">
<h1 className="text-3xl font-semibold">
Case Study: Accelerating Contract Review with an AI Copilot
</h1>
<p className="text-gray-600">
By embedding the Contract Review Copilot into daily workflows, the firm
transformed contract review from a manual bottleneck into a scalable,
consistent, and client‑friendly process.
</p>


{/* Primary CTAs */}
<div className="flex flex-wrap gap-3 pt-2">
<Link
href="/contact"
className="inline-flex items-center justify-center rounded-xl border border-blue-700 bg-blue-700 px-4 py-2 text-white shadow-sm transition hover:bg-blue-800"
>
Book a Demo
</Link>
<Link
href="/case-studies"
className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-gray-700 transition hover:bg-gray-50"
>
Back to Case Studies
</Link>
</div>
</header>


{/* Body */}
<article className="prose prose-gray max-w-none">

<h2 className="text-2xl font-semibold mt-8">
The Challenge
</h2>


<p>
A global law firm faced mounting pressure to review hundreds of vendor
agreements and NDAs each month. Junior associates spent hours combing
through boilerplate clauses, manually spotting deviations from firm
standards, and drafting markup. This slowed deal timelines, introduced
inconsistencies, and consumed valuable billable hours that could have
been directed to higher-value client work.
</p>


<h2 className="text-2xl font-semibold mt-8">
The Solution
</h2>
<p>
The firm deployed a Contract Review Copilot trained on its
negotiation playbooks and clause libraries. The Copilot:
</p>
<ul className="list-disc list-inside space-y-2 text-gray-700">
<li>
Flagged non-standard clauses (e.g., indemnities, liability caps,
termination rights).
</li>
<li>
Surfaced deviations from firm-approved fallback positions.
</li>
<li>
Suggested markup automatically, producing a first-pass redline for
lawyer review.
</li>
<li>
Generated summary reports for partners, showing where agreements
aligned or diverged from client policy.
</li>
</ul>


<h2 className="text-2xl font-semibold mt-8">
The Results
</h2>
<ul>
<li>
<strong>50% faster reviews:</strong> Routine NDA reviews dropped from
days to minutes.
</li>
<li>
<strong>Improved consistency:</strong> Every contract aligned with the
firm’s playbook, reducing the risk of missed terms.
</li>
<li>
<strong>Higher-value work:</strong> Associates spent less time on
“needle-in-the-haystack” clause hunting and more on strategy and
negotiation.
</li>
<li>
<strong>Client satisfaction:</strong> Faster turnaround improved
client experience and reduced the number of clarification calls.
</li>
</ul>


<h2 className="text-2xl font-semibold mt-8">
The Impact</h2>
<p>
By embedding the Contract Review Copilot into daily workflows, the firm
transformed contract review from a manual bottleneck into a scalable,
consistent, and client-friendly process. Partners noted not just
efficiency gains, but also better risk control and the ability to
handle high-volume work without increasing headcount.
</p>
</article>

{/* Footer CTA */}
<section className="rounded-2xl border p-6 shadow-sm">
<div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
<div>
<h3 className="text-lg font-semibold">See it in action</h3>
<p className="text-gray-600">
Get a tailored walkthrough of the Contract Review Copilot for your
firm’s playbooks and clause libraries.
</p>
</div>
<Link
href="/contact"
className="inline-flex items-center justify-center rounded-xl border border-blue-700 bg-blue-700 px-4 py-2 text-white shadow-sm transition hover:bg-blue-800"
>
Book a Demo
</Link>
</div>
</section>
</main>
);
}

