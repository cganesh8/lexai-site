// app/case-studies/boutique-litigation-discovery/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Case Study: Boutique Litigation — Discovery Summaries",
  description:
    "How a boutique litigation team used AI to speed first-pass discovery review and improve issue spotting consistency.",
};

export default function BoutiqueLitigationDiscoveryCaseStudy() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-6 py-12">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/case-studies" className="hover:underline">
              Case Studies
            </Link>
          </li>
          <li aria-hidden className="px-1">/</li>
          <li className="text-gray-700">Discovery Summaries</li>
        </ol>
      </nav>

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">
          Case Study: Boutique Litigation — Discovery Summaries
        </h1>
        <p className="text-gray-600">
          Generated bundle summaries and party timelines for first-pass review; partners reported faster issue spotting with better consistency.
        </p>
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

      <article className="prose prose-gray max-w-none">

        <h2 className="text-2xl font-semibold mt-10">
		The Challenge
	</h2>
        <p>
          Boutique litigation firms face unique resource constraints. While they handle complex disputes—often against larger, better-resourced opponents—they cannot always afford extensive junior teams to conduct first-pass reviews.
        </p>

	<p>
	Discovery is particularly burdensome:
	</p>

	<ul className="list-disc pl-5 space-y-1">
	<li>Tens of thousands of emails, contracts, and exhibits to sift.</li>
	<li>Partners need clear timelines of party interactions and issue evolution.</li>
	<li>Manual bundling and chronology prep consumes hundreds of hours clients resist paying.</li>
	<li>Output quality and format vary across associates and matters.</li>
	</ul>

        <h3 className="text-lg italic text-gray-700 mt-8">
		A partner at one boutique firm put it simply:
	</h3>

	<p className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
	“The first‑pass review is repetitive and low‑margin work. It delays strategic thinking and frustrates clients
	when the bills come in.”
	</p>

        <h2 className="text-2xl font-semibold mt-10">
        The Solution</h2>
	<p>
	The firm piloted an <strong>AI discovery summarization tool</strong> trained on litigation documents.
	</p>
	<p>
	The system was designed to:
	</p>
	<ul className="list-disc pl-5 space-y-1">
	<li><strong>Bundle related documents</strong> (e.g., emails, memos, exhibits) around parties and issues.</li>
	<li><strong>Generate timeline summaries</strong> showing when communications occurred, who was involved, and what issues were discussed.</li>
	<li><strong>Surface key events and anomalies</strong> (e.g., missing attachments, sudden changes in contract terms, late-night communications).</li>
	</ul>

	<p></p>
	<p>
	Instead of junior associates manually preparing chronologies, the AI produced <strong>structured summaries and
	party timelines</strong> with citations back to source documents for partner review.
	</p>

        <h3 className="text-xl font-semibold mt-8">
		Features Deployed
	</h3>
	<ul className="list-disc pl-5 space-y-1">
	<li><strong>Party Mapping</strong>: AI automatically linked documents to named entities (companies, individuals, counsel).</li>
	<li><strong>Chronology Builder</strong>: Emails, letters, and filings were sorted into event timelines.</li>
	<li><strong>First-Pass Summaries</strong>: Generated bundles provided concise “what, when, who” narratives.</li>
	</ul>

        <h2 className="text-2xl font-semibold mt-10">
        Outcomes</h2>

        <h3 className="text-xl font-semibold mt-8">
		Faster Issue Spotting
	</h3>
	<ul className="list-disc pl-5 space-y-1">
	<li>Partners reported that <strong>strategic issues emerged within hours, not weeks.</strong></li>
	<li>For example, a key liability defense was identified early when the AI showed an anomalous pattern of indemnity negotiations buried across 4,000+ emails.</li>
	</ul>

        <h3 className="text-xl font-semibold mt-8">
		Better Consistency
	</h3>
	<ul className="list-disc pl-5 space-y-1">
	<li>Summaries standardized the review output.</li>
	<li>Instead of associates drafting timelines in different formats, every bundle followed the same structure, which partners found “instantly reviewable.”</li>
	</ul>

        <h3 className="text-xl font-semibold mt-8">
		Efficiency Gains
	</h3>
	<ul className="list-disc pl-5 space-y-1">
	<li>What previously took <strong>80–100 hours of associate review</strong> was reduced to under <strong>20 hours of partner-guided oversight.</strong></li>
	<li>Clients were reassured by seeing consistent outputs and lower bills.</li>
	</ul>

        <h2 className="text-2xl font-semibold mt-10">
        Real-World Industry Examples
	</h2>

	<ul className="list-disc pl-5 space-y-1">
	<li><strong>Herbert Smith Freehills (global firm)</strong>: Piloted AI-driven e-discovery to reduce costs in cross-border litigation, reporting <strong>30–40% faster document review</strong> in high-volume matters.</li>
	<li><strong>Clifford Chance (UK/US)</strong>: Used AI-powered chronologies in investigations to quickly map communications between parties, improving regulator-facing submissions.</li>
	<li><strong>Boutique Antitrust Firm in New York (public case study by Everlaw)</strong>: Leveraged discovery AI to surface timelines in a cartel case, spotting collusive communications far earlier than manual review would allow.</li>
	</ul>

        <h2 className="text-2xl font-semibold mt-10">
        Why It Matters for Boutique Firms
	</h2>

	<p>
	Unlike global firms with large review teams, boutiques must punch above their weight:
	</p>

	<ul className="list-disc pl-5 space-y-1">
          <li><strong>Compete with efficiency:</strong> Automated timelines give small firms the same visibility into facts as firms with dozens of associates</li>
          <li><strong>Client-facing advantage:</strong> Firms can pitch this as a way to reduce client cost exposure while maintaining high-quality strategic oversight.</li>
          <li><strong>Risk Mitigation:</strong> AI reduces the chance that important communications are missed during manual first-pass review.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
        Key Takeaway
	</h2>

	<p>
	AI-powered discovery summaries don’t replace lawyers—they free them. Instead of combing through thousands of communications, partners can move straight to strategy, confident that the foundational timelines are consistent, accurate, and reviewable.
	</p>

      </article>
    </main>
  );
}
