import React from 'react';
import Hero from './components/Hero';
import Watchlist from './components/Watchlist';
import NewsFeed from './components/NewsFeed';
import CompliancePanel from './components/CompliancePanel';
import { Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg">
              <Shield size={20} />
            </span>
            <span className="font-semibold tracking-tight">Market Integrity</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#watchlist" className="hover:text-white">Watchlist</a>
            <a href="#news" className="hover:text-white">News</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
            <a href="#" className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5">Sign In</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />

        <section id="watchlist" className="mx-auto max-w-7xl px-4 pt-10 md:pt-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Your Watchlist</h2>
              <p className="text-white/60 text-sm">Track favorite tickers and trends in real time.</p>
            </div>
            <button className="rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-sm">Add Symbol</button>
          </div>
          <Watchlist />
        </section>

        <section id="news" className="mx-auto max-w-7xl px-4 pt-12 md:pt-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Market News</h2>
              <p className="text-white/60 text-sm">Curated headlines for learning and awareness.</p>
            </div>
          </div>
          <NewsFeed />
        </section>

        <section id="compliance" className="mx-auto max-w-7xl px-4 pt-12 md:pt-16 pb-20">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Compliance & Education</h2>
              <p className="text-white/60 text-sm">Learn best practices and strengthen ethical trading habits.</p>
            </div>
          </div>
          <CompliancePanel />
        </section>
      </main>

      <footer className="border-t border-white/10"><div className="mx-auto max-w-7xl px-4 py-8 text-xs text-white/50">This demo is for educational purposes only and does not provide financial or legal advice.</div></footer>
    </div>
  );
}
