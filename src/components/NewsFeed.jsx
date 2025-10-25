import React from 'react';
import { Newspaper } from 'lucide-react';

const ITEMS = [
  {
    title: 'Market opens higher as tech leads early gains',
    source: 'Global Markets Wire',
    time: '2h ago',
    url: '#'
  },
  {
    title: 'Understanding blackout windows for corporate insiders',
    source: 'Compliance Daily',
    time: '4h ago',
    url: '#'
  },
  {
    title: 'What moves semiconductor stocks? A primer',
    source: 'Investor Insights',
    time: '7h ago',
    url: '#'
  },
  {
    title: 'Macro outlook: inflation cools, yields steady',
    source: 'EcoBrief',
    time: 'Yesterday',
    url: '#'
  },
];

export default function NewsFeed() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {ITEMS.map((n, i) => (
        <a key={i} href={n.url} className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-4 hover:bg-white/[0.06] transition-colors">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white/90">
              <Newspaper size={18} />
            </span>
            <div className="min-w-0">
              <div className="font-medium group-hover:underline truncate">{n.title}</div>
              <div className="mt-1 text-xs text-white/60">{n.source} • {n.time}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
