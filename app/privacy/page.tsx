// app/privacy-policy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | LexAI",
  description:
    "LexAI privacy policy describing what data we collect, how we use it, sharing, your rights, and contact details.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 space-y-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900">Privacy Policy</li>
        </ol>
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: 18 September 2025</p>
      </header>

      <section className="space-y-4">
        <p className="text-gray-700">
          LexAI ({"\"we\",\"our\",\"us\""}) respects your privacy and is committed to protecting your personal data.
          This policy explains what we collect, how we use it, and the rights available to you.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><span className="font-medium">Information you provide:</span> contact forms, email/phone, demo requests.</li>
          <li><span className="font-medium">Usage data:</span> pages visited, referring URLs, session duration.</li>
          <li><span className="font-medium">Technical data:</span> IP address, browser/OS, device identifiers, cookies.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Provide, operate, and improve our website and services.</li>
          <li>Respond to enquiries, schedule demos, and provide customer support.</li>
          <li>Send updates about services and case studies (you can opt out at any time).</li>
          <li>Comply with legal or regulatory obligations.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Legal Bases for Processing</h2>
        <p className="text-gray-700">
          Depending on your location, we rely on one or more of: consent, performance of a contract, legitimate
          interests (such as website security and service improvement), or compliance with law.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Data Sharing</h2>
        <p className="text-gray-700">
          We do not sell personal information. We may share limited data with trusted providers (hosting,
          analytics, communications) under contracts that require confidentiality and security. We may disclose
          information if required by law or to protect rights and safety.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">International Transfers</h2>
        <p className="text-gray-700">
          We operate in Malaysia and Australia and may process data in other jurisdictions. Where required, we
          implement appropriate safeguards for cross‑border transfers.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p className="text-gray-700">
          We retain personal data only as long as necessary for the purposes above, unless a longer period is
          required by law, regulation, or to establish/defend legal claims.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Request access to the personal data we hold about you.</li>
          <li>Request correction or deletion, or object to/limit certain processing.</li>
          <li>Withdraw consent for marketing communications.</li>
        </ul>
        <p className="text-gray-700">
          To exercise your rights, contact us at <a className="underline" href="mailto:privacy@lexai.com">privacy@lexai.com</a>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Security</h2>
        <p className="text-gray-700">
          We use technical and organizational measures appropriate to the risk to protect personal data from
          unauthorized access, disclosure, alteration, or destruction.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p className="text-gray-700">
          We use necessary cookies to operate the site and analytics cookies to understand usage. You can
          control cookies via your browser settings.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          For questions about this policy, email <a className="underline" href="mailto:privacy@lexai.com">privacy@lexai.com</a>.
        </p>
      </section>
    </main>
  );
}
