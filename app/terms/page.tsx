// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | LexAI",
  description:
    "Terms governing your use of the LexAI website, resources, and downloadable materials.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900">Terms of Use</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">Terms of Use</h1>
        <p className="text-gray-600">Last updated: 18 September 2025</p>
      </header>

      <section className="space-y-4">
        <p className="text-gray-700">
          These Terms govern your access to and use of the LexAI website and related materials. By using this site,
          you agree to these Terms. If you do not agree, please discontinue use.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Permitted Use</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Website content is provided for informational purposes only.</li>
          <li>Do not reproduce, redistribute, or publish content without written permission.</li>
          <li>Do not use the site in a manner that could damage, disable, or impair it.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">No Legal Advice</h2>
        <p className="text-gray-700">
          Nothing on this site constitutes legal advice. Case studies may be anonymized or illustrative.
          Consult a qualified professional for advice tailored to your situation.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Third‑Party Links</h2>
        <p className="text-gray-700">
          Our site may link to third‑party websites or resources. We are not responsible for their content,
          policies, or practices.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Disclaimer & Limitation of Liability</h2>
        <p className="text-gray-700">
          The site is provided on an {"\"as is\""} and {"\"as available\""} basis without warranties of any kind. To the
          fullest extent permitted by law, we disclaim all warranties and will not be liable for any indirect,
          incidental, consequential, special, or exemplary damages arising from your use of the site.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Governing Law</h2>
        <p className="text-gray-700">
          These Terms are governed by the laws of Australia. You agree to the exclusive jurisdiction of
          the courts of Australia to resolve any disputes.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Changes</h2>
        <p className="text-gray-700">
          We may update these Terms from time to time. Material changes will be posted on this page with an updated
          effective date.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          Questions about these Terms: <a className="underline" href="mailto:legal@lexai.com">legal@lexai.com</a>.
        </p>
      </section>
    </main>
  );
}
