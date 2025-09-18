export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '#';
  return (
    <div className="max-w-lg">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-gray-600 text-sm">
        Tell us about your firm and a workflow you’d like to pilot.
      </p>

      <form action={endpoint} method="POST" className="mt-6 space-y-4">
        <input type="hidden" name="_subject" value="LexAI site enquiry" />
        <label className="block text-sm">
          Firm name
          <input name="firm" required className="mt-1 w-full rounded border px-3 py-2" />
        </label>
        <label className="block text-sm">
          Your name
          <input name="name" required className="mt-1 w-full rounded border px-3 py-2" />
        </label>
        <label className="block text-sm">
          Email
          <input name="email" type="email" required className="mt-1 w-full rounded border px-3 py-2" />
        </label>
        <label className="block text-sm">
          What workflow would you like to explore?
          <textarea name="message" rows={5} className="mt-1 w-full rounded border px-3 py-2" />
        </label>
        <button className="rounded bg-black px-5 py-3 text-white text-sm" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
