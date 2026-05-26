import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'Monster Stock Dashboard', description: 'AI investing watchlist and radar dashboard' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold text-white">Monster Stock Dashboard</Link>
            <div className="flex gap-4 text-sm text-slate-300">
              <Link href="/">Dashboard</Link>
              <Link href="/radar">Stock Radar</Link>
              <Link href="/legend">Help Legend</Link>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
