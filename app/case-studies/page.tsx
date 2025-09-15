export default function CaseStudies() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Case Studies (Illustrative)</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Mid-size Kuala Lumpur Firm — Contract Intake</h2>
          <p className="mt-2 text-sm text-gray-600">
            Automated NDA screening & clause comparison reduced average review time from ~45 minutes to ~12 minutes on standard vendor forms.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Boutique Litigation — Discovery Summaries</h2>
          <p className="mt-2 text-sm text-gray-600">
            Generated bundle summaries and party timelines for first-pass review; partners reported faster issue spotting with better consistency.
          </p>
        </div>
      </div>
    </div>
  );
}
