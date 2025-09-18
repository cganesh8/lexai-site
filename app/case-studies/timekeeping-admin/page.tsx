// app/case-studies/timekeeping-admin/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Case Study: Enterprise Firm — Timekeeping & Admin | LexAI",
  description:
    "AI nudges, tidy notes, and passive capture reduced missed time entries, cut admin, and improved billing outcomes—grounded in real deployments.",
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
          <li className="text-gray-900">Enterprise Firm — Timekeeping & Admin</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Case Study: Enterprise Firm — Timekeeping & Admin
        </h1>
        <p className="text-gray-600">
          Illustrative case study grounded in real deployments: AI nudges, tidy notes, and
          passive capture reduced missed time entries and streamlined admin across practice groups.
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700">
          A large multi-practice law firm faced chronic challenges in timekeeping and administrative
          overhead: missed entries, weekend rewrites, inconsistent narratives, and delayed financial close.
          By piloting AI nudges and structured “tidy notes,” the firm followed a path already validated by
          peers in the industry, realizing measurable gains without disrupting core workflows.
        </p>
      </section>

      {/* The Challenge */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Challenge</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Missed Entries:</span> Internal audit showed ~10% of billable work
            was never logged due to reconstructing from memory at day/week end.
          </li>
          <li>
            <span className="font-medium">Weekend Rewrites:</span> Partners spent hours cleaning up vague or
            noncompliant narratives before billing cycles.
          </li>
          <li>
            <span className="font-medium">Admin Churn:</span> Staff chased down late entries, costing ~1 hour
            per lawyer per week.
          </li>
          <li>
            <span className="font-medium">Client Compliance Risk:</span> Generic phrases (e.g., “review docs”)
            triggered write-downs or invoice rejections.
          </li>
        </ul>
      </section>

      {/* The Solution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">The Solution: AI Nudges + Tidy Notes</h2>
        <p className="text-gray-700">
          The firm adopted a blended model that combines behavioral nudges with structured capture:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">AI Nudges</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Contextual reminders in Teams/Outlook after emails, calls, or edits.</li>
              <li>Escalation ladder for late entries ahead of billing close.</li>
              <li>Human-in-the-loop: lawyers review and approve suggestions.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Tidy Notes</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Standardized template: task, actions, stakeholders, duration, next steps.</li>
              <li>Passive capture + autofill from documents, email, and calendar context.</li>
              <li>Real-time compliance checks to avoid weekend rewrites.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proof Points from Real Deployments */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Real‑World Proof Points</h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Spruson & Ferguson → WiseTime (Pilot)</h3>
            <p className="text-gray-700 mt-2">
              IP firm (APAC, 400+ staff) ran WiseTime alongside manual timers. Attorneys recorded
              <span className="font-medium"> 2× more time (12.8 → 27.8 hrs/week)</span> and saved
              approximately <span className="font-medium">1 hour/week per attorney</span> on admin.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference:&nbsp;
              <a href="https://wisetime.com/spruson-ferguson-pilot/" target="_blank" className="underline">
                WiseTime × Spruson & Ferguson pilot case study
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Lexia (Finland) → TIQ Time</h3>
            <p className="text-gray-700 mt-2">
              Integrated with Office 365 / Teams / iManage to suggest entries continuously. Outcomes
              included <span className="font-medium">fewer write‑offs, faster billing cycles, and better narrative quality</span>,
              reducing end‑of‑month reconstruction.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference:&nbsp;
              <a href="https://tiqtime.com/cases/lexia/" target="_blank" className="underline">
                TIQ Time × Lexia case story
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Bernstein Shur (US) → Aderant iTimekeep</h3>
            <p className="text-gray-700 mt-2">
              Attorneys recovered <span className="font-medium">≥1 extra billable hour/day</span> and saved
              ~<span className="font-medium">2 hours/week</span> on reconstruction. Time-entry lag dropped from 3+ days to
              <span className="font-medium"> 0.7 days</span>; contemporaneous timecards rose from <span className="font-medium">30% → 86%</span>.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference:&nbsp;
              <a href="https://www.aderant.com/resources/bernstein-shur-itimekeep-case-study/" target="_blank" className="underline">
                Aderant iTimekeep × Bernstein Shur case study
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">McMillan LLP (Canada) → Intapp Time</h3>
            <p className="text-gray-700 mt-2">
              Reported a <span className="font-medium">29% increase in billable time entries released</span> after rollout,
              as prompts reduced forgotten work and improved realization.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference:&nbsp;
              <a href="https://www.intapp.com/resource-download/mcmillan-llp-improves-timekeeping-and-billing-efficiency/" target="_blank" className="underline">
                Intapp Time × McMillan LLP case study
              </a>
            </p>
          </div>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h3 className="font-semibold">Johnson Winter & Slattery (AU) → Intapp Time</h3>
            <p className="text-gray-700 mt-2">
              Deployed to <span className="font-medium">250+ lawyers/staff</span> across Australia to reduce time-entry burden
              and improve client‑centric transparency and reporting.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Reference:&nbsp;
              <a href="https://www.intapp.com/resource-download/johnson-winter-slattery-improves-timekeeping/" target="_blank" className="underline">
                Intapp Time × Johnson Winter & Slattery overview
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes for the Enterprise Firm */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Outcomes & Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 shadow-sm">
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-medium">Missed entries ↓ 60%</span> (10% → ~4%).</li>
              <li><span className="font-medium">Admin time ↓ ~40%</span> across practice groups.</li>
              <li><span className="font-medium">Write-offs ↓</span> from ~3% to ~1% via better narratives.</li>
              <li><span className="font-medium">Faster monthly close</span> (day 7 → day 3) and better forecasting.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm bg-gray-50">
            <p className="text-gray-700">
              Adoption best practices: start with a single practice pilot, calibrate nudge cadence, enforce
              a simple notes template, and maintain transparency and privacy with audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Bring AI nudges & tidy notes to your firm</h3>
          <p className="text-gray-700">Pilot in one practice group, measure lift, then scale safely.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-gray-50">
            Book a discovery call
          </Link>
          <Link href="/downloads/timekeeping-admin-onepager.pdf" className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-gray-50">
            Download one‑pager
          </Link>
        </div>
      </section>
    </main>
  );
}
