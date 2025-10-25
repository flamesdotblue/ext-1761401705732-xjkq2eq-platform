import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0b0f] to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Learn, practice, and trade ethically with a modern, beautiful toolkit
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Explore a clean UI with paper trading, curated news, and an educational compliance checklist. No real-money transactions here—just insights and practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-4 py-2 font-medium shadow-lg shadow-blue-600/20">
                <Play size={16} /> Demo Paper Trade
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 font-medium">
                <TrendingUp size={16} /> View Watchlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
