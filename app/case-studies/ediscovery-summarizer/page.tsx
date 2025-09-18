// app/case-studies/e-discovery-summarizer/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Case Study: Regional Firm — E‑discovery Summarizer | LexAI",
  description:
    "AI-driven extraction of parties, dates, and issues to build chronologies and accelerate issue spotting in litigation matters—grounded in real deployments.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 space-y-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/case-studies" className="hover:underline">Case Studies</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">Regional Firm — E‑discovery Summarizer</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Case Study: Regional Firm — E‑discovery Summarizer
        </h1>
        <p className="text-gray-600">
          Extracted parties, dates, and issues to produce chronologies and speed up issue spotting in
          litigation matters. Built on capabilities proven in the market by platforms like Everlaw,
          DISCO, Reveal, Relativity, and Casepoint.
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700">
          A regional litigation firm operating across two states struggled to quickly answer the core
          questions of any dispute—who did what, when, and why—across tens of thousands of emails,
          attachments, and exhibits. They piloted an AI‑assisted summarizer that extracted entities
          (people, organizations), normalized dates, and tagged issues, then assembled those facts into
          timelines and evidence bundles for partner review.
        </p>
      </section>

      {/* The Challenge */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Challenge</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Scattered facts:</span> Critical signals were buried across PSTs, PDFs,
            chat exports, and shared drives.
          </li>
          <li>
            <span className="font-medium">Manual chronologies:</span> Associates built timelines by hand over weeks,
            risking gaps and inconsistencies under tight deadlines.
          </li>
          <li>
            <span className="font-medium">Redundant review:</span> Late insights forced duplicative passes and write‑offs.
          </li>
        </ul>
      </section>

      {/* Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Solution: AI Summaries → Timelines & Bundles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Entity & Event Extraction</h3>
            <p className="text-gray-700">
              Automated extraction of people/organizations, dates, and issues from ingested collections
              (email, chats, documents). Reviewers validate suggestions and link key exhibits.
            </p>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Automated Timelines</h3>
            <p className="text-gray-700">
              Events are stitched into case chronologies with citations, enabling rapid navigation from
              a timeline row to the original source for context.
            </p>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Story‑building Workspace</h3>
            <p className="text-gray-700">
              Structured spaces for outlines, themes, and deposition prep; labels and filters make
              chronology review fast and consistent.
            </p>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Prioritization & Clustering</h3>
            <p className="text-gray-700">
              Analytics (concept clustering, predictive coding) prioritize likely‑relevant sets so
              attorneys see the most informative material first.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Points from Real Deployments */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Real‑World Proof Points</h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Everlaw Storybuilder & Timeline</h3>
            <p className="text-gray-700 mt-2">
              Used for chronology building and narrative prep (labels, sorting by date/Bates where
              applicable) with deep linkage back to source documents.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Learn more:&nbsp;
              <a href="https://support.everlaw.com/hc/en-us/articles/360038816812-Story-Timeline" target="_blank" className="underline">
                Everlaw: Story Timeline
              </a>
              ,&nbsp;
              <a href="https://support.everlaw.com/hc/en-us/articles/206439403-Introduction-to-Storybuilder-and-Setting-up-a-Story" target="_blank" className="underline">
                Intro to Storybuilder
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">DISCO Timelines + Cecilia AI</h3>
            <p className="text-gray-700 mt-2">
              Markets AI‑assisted timelines “in minutes” with citations from evidence, designed to jump
              from timeline to source for quick context.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Learn more:&nbsp;
              <a href="https://www.csdisco.com/solutions/disco-timelines" target="_blank" className="underline">
                DISCO Timelines
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Relativity aiR for Review</h3>
            <p className="text-gray-700 mt-2">
              Featured outcomes include significant hours saved, high recall in accelerated projects,
              and material cost reductions when analytics steer review to what matters.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Learn more:&nbsp;
              <a href="https://www.relativity.com/solutions/air/" target="_blank" className="underline">
                Relativity aiR
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Reveal Platform</h3>
            <p className="text-gray-700 mt-2">
              Entity extraction, concept clustering, and sentiment analysis used widely to surface key
              people/threads early; adopted by large firms and ALSPs.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Learn more:&nbsp;
              <a href="https://www.revealdata.com/" target="_blank" className="underline">
                Reveal official site
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Casepoint AI (Lewis Roca case study)</h3>
            <p className="text-gray-700 mt-2">
              Published results include up to ~90% reduction in review hours and notable under‑budget
              delivery on complex matters when analytics and automation drive prioritization.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Learn more:&nbsp;
              <a href="https://www.casepoint.com/resources/case-studies/lewis-roca/" target="_blank" className="underline">
                Lewis Roca × Casepoint
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes for the Regional Firm */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Outcomes & Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 shadow-sm">
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-medium">Chronologies in days, not weeks:</span> first usable timelines in 48–72 hours.</li>
              <li><span className="font-medium">Major review savings:</span> 50–90% reduction possible where analytics/timelines guide focus.</li>
              <li><span className="font-medium">Earlier issue spotting:</span> rapid identification of anomalies (e.g., missing attachments, late‑night email bursts).</li>
              <li><span className="font-medium">Higher realization:</span> fewer redundant passes and clearer narratives cut write‑offs.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm bg-gray-50">
            <p className="text-gray-700">
              Rollout playbook: run a two‑matter pilot, enable nightly ingestion, assign a validation sprint
              (entities/dates/issues), and review timelines weekly with partners.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Bring timeline‑first e‑discovery to your matters</h3>
          <p className="text-gray-700">Pilot on two cases, measure speed‑to‑insight, then scale confidently.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-gray-50">
            Book a discovery call
          </Link>
          <Link href="/downloads/e-discovery-summarizer-onepager.pdf" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-gray-50">
            Download one‑pager
          </Link>
        </div>
      </section>
    </main>
  );
}
