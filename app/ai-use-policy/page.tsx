// app/ai-use-policy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "AI Use Policy | LexAI",
  description:
    "LexAI's responsible AI principles: human-in-the-loop, confidentiality, transparency, accuracy, and no unauthorized training on client data.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900">AI Use Policy</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">AI Use Policy</h1>
        <p className="text-gray-600">Last updated: 18 September 2025</p>
      </header>

      <section className="space-y-4">
        <p className="text-gray-700">
          This policy describes how LexAI designs, deploys, and governs AI features used in our solutions
          for legal and enterprise clients.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Guiding Principles</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><span className="font-medium">Human-in-the-Loop:</span> Professionals retain final judgment and review AI outputs before client use.</li>
          <li><span className="font-medium">Confidentiality:</span> Client data is handled in accordance with PDPA (Malaysia) and the Privacy Act 1988 (Australia), plus client confidentiality obligations.</li>
          <li><span className="font-medium">Transparency:</span> We disclose when/where AI is used and the role it plays (e.g., drafting assistant, summarizer, risk flagger).</li>
          <li><span className="font-medium">Accuracy & Limitations:</span> AI can err or omit context; our workflows include validation, auditability, and correction.</li>
          <li><span className="font-medium">Bias & Fairness:</span> We evaluate tools to mitigate bias and monitor outcomes for unintended impacts.</li>
          <li><span className="font-medium">Security-by-Design:</span> Access controls, encryption, and logging protect sensitive data.</li>
          <li><span className="font-medium">No Unauthorized Training:</span> We do not use client data to train third‑party foundation models without explicit written consent.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Data Handling & Hosting</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Client environments can be configured for region‑based processing (e.g., AU).</li>
          <li>We minimize data retention; temporary processing data is purged on defined schedules.</li>
          <li>Access is role‑based; administrator actions are auditable.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Model & Tooling Selection</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>We evaluate vendors for security, privacy, performance, and reliability SLAs.</li>
          <li>Where feasible, we prefer models that support data controls (no training on inputs by default).</li>
          <li>We track model/versioning changes and communicate material impacts.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Acceptable Use</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Do not use AI outputs as legal advice without professional review.</li>
          <li>Do not input highly sensitive client data unless your environment is appropriately secured and authorized.</li>
          <li>Respect third‑party IP rights when using generated content.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Incident Response</h2>
        <p className="text-gray-700">
          We maintain incident response playbooks. If we become aware of a security incident impacting your data, we
          will notify designated contacts in line with contractual and regulatory requirements.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          Questions about this policy: <a className="underline" href="mailto:ai-governance@lexai.com">ai-governance@lexai.com</a>.
        </p>
      </section>
    </main>
  );
}
