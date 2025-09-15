import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Practical AI for Malaysian Law Firms
          </h1>
          <p className="mt-4 text-gray-600">
            Win hours back each week with PDPA-aware AI: contract review copilots, e-discovery summarizers,
            matter intake assistants, and timekeeping support—securely deployed and tailored to your workflows.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="rounded bg-black px-5 py-3 text-white text-sm">
              Book a 30-min intro
            </Link>
            <Link href="/solutions" className="rounded border px-5 py-3 text-sm">
              Explore solutions
            </Link>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Built with privacy in mind and aligned to Malaysia’s PDPA principles.
          </p>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border">
          <Image
            src="https://images.pexels.com/photos/442781/pexels-photo-442781.jpeg"
            alt="Legal team reviewing documents with AI assistant"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* VALUE */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Contract Review Copilot',
            desc: 'Flag clauses, deviations, and risks. Generate redlines and fallback language from your playbook.'
          },
          {
            title: 'E-discovery Summarizer',
            desc: 'Summarise large bundles. Extract entities, timelines, and issues—quickly and consistently.'
          },
          {
            title: 'Matter Intake Assistant',
            desc: 'Guide clients through structured intake; produce clean briefs for partners and associates.'
          }
        ].map((f) => (
          <div key={f.title} className="rounded-lg border p-6">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* MINI-CTA */}
      <section className="rounded-lg border p-6 md:p-10">
        <h2 className="text-2xl font-semibold">Pilot in 2–4 weeks</h2>
        <p className="mt-2 text-gray-600">
          Start with a low-risk pilot on a narrow workflow (e.g., vendor NDAs or basic discovery summarisation).
          We set up guardrails, access controls, and auditability from day one.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded bg-black px-5 py-3 text-white text-sm">
          Start a pilot conversation
        </Link>
      </section>
    </div>
  );
}
