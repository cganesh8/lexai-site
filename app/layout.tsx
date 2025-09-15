import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'LexAI Consulting — AI for Malaysian Law Firms',
    template: '%s | LexAI Consulting'
  },
  description:
    'Prototype site showcasing PDPA-aware AI solutions for Malaysian legal practices: contract review, e-discovery summarization, intake assistants, and timekeeping.',
  applicationName: 'LexAI Consulting',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title: 'LexAI Consulting',
    description: 'AI for Malaysian law firms',
    url: '/',
    siteName: 'LexAI Consulting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LexAI Consulting',
    description: 'AI for Malaysian law firms'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          LexAI
        </Link>
        <ul className="flex gap-6 text-sm">
          {nav.map((n) => (
            <li key={n.href}>
              <Link className="hover:underline" href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} LexAI Consulting</p>
        <div className="flex gap-4">
          <Link className="hover:underline" href="/privacy">Privacy</Link>
          <Link className="hover:underline" href="/terms">Terms</Link>
          <Link className="hover:underline" href="/ai-use-policy">AI Use Policy</Link>
        </div>
      </div>
    </footer>
  );
}
