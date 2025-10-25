import React, { useMemo } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SAMPLE = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.42, change: 1.24, data: [180,183,181,184,186,185,187,189] },
  { symbol: 'MSFT', name: 'Microsoft', price: 412.33, change: -0.56, data: [420,418,417,415,414,413,412,412] },
  { symbol: 'NVDA', name: 'NVIDIA', price: 882.19, change: 2.91, data: [820,835,842,860,870,875,880,882] },
  { symbol: 'TSLA', name: 'Tesla', price: 212.08, change: -1.12, data: [230,228,225,220,218,215,214,212] },
];

function Sparkline({ points, width = 120, height = 40 }) {
  const path = useMemo(() => {
    if (!points || points.length === 0) return '';
    const min = Math.min(...points);
    const max = Math.max(...points);
    const norm = points.map((p) => (p - min) / (max - min || 1));
    return norm.map((n, i) => `${(i / (points.length - 1)) * width},${height - n * height}`).join(' ');
  }, [points, width, height]);

  const lastDelta = points[points.length - 1] - points[0];
  const stroke = lastDelta >= 0 ? 'url(#gradUp)' : 'url(#gradDown)';

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-10">
      <defs>
        <linearGradient id="gradUp" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="gradDown" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={stroke} strokeWidth="2" points={path} />
    </svg>
  );
}

export default function Watchlist() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {SAMPLE.map((item) => {
        const isUp = item.change >= 0;
        return (
          <div key={item.symbol} className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-4 hover:bg-white/[0.06] transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-white/60">{item.name}</div>
                <div className="text-lg font-semibold mt-0.5">{item.symbol}</div>
              </div>
              <div className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}> 
                {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {isUp ? '+' : ''}{item.change}%
              </div>
            </div>
            <div className="mt-3">
              <Sparkline points={item.data} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-white/60">Last</span>
              <span className="font-medium">${item.price.toLocaleString()}</span>
            </div>
            <button className="mt-3 w-full rounded-lg bg-white/10 hover:bg-white/20 py-2 text-sm">Add to Paper Trade</button>
          </div>
        );
      })}
    </div>
  );
}
