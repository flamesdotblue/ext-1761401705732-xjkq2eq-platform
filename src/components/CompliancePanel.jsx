import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { CheckCircle2, Shield } from 'lucide-react';

const items = [
  {
    id: 'material-nonpublic',
    title: 'Avoid material nonpublic information (MNPI)',
    desc: 'Do not trade based on information that is not publicly available and could impact a security\'s price.'
  },
  {
    id: 'blackout-windows',
    title: 'Respect blackout windows',
    desc: 'If you work for a public company, follow trading blackout periods set by your employer.'
  },
  {
    id: 'preclearance',
    title: 'Pre-clear trades if required',
    desc: 'Some roles require compliance pre-approval before trading. Always follow internal policies.'
  },
  {
    id: 'recordkeeping',
    title: 'Maintain records',
    desc: 'Keep accurate, timely records of trades, rationale, and confirmations for personal auditing.'
  }
];

export default function CompliancePanel() {
  const [checked, setChecked] = useState(() => Object.fromEntries(items.map(i => [i.id, false])));

  const completed = Object.values(checked).filter(Boolean).length;
  const total = items.length;

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ethical Trading Checklist</h3>
            <p className="text-sm text-white/60">Educational guidance only; consult your firm\'s policies and applicable laws.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs">
            <CheckCircle2 size={14} /> {completed}/{total} complete
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {items.map((i) => (
            <div key={i.id} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex-1">
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-white/60 mt-1">{i.desc}</div>
              </div>
              <label className="flex items-center gap-3 select-none">
                <span className="text-xs text-white/60">Done</span>
                <Switch.Root
                  className="w-10 h-6 bg-white/10 rounded-full relative data-[state=checked]:bg-emerald-500/20 outline-none"
                  checked={checked[i.id]}
                  onCheckedChange={(v) => setChecked((s) => ({ ...s, [i.id]: !!v }))}
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-0 data-[state=checked]:translate-x-5" />
                </Switch.Root>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
            <Shield size={18} />
          </span>
          <div>
            <div className="font-semibold">Why this matters</div>
            <div className="text-sm text-white/60">Upholding market integrity protects investors and ensures fair price discovery.</div>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
          <li>Never solicit or share confidential information for trading advantage.</li>
          <li>Use paper trading to practice strategies without real capital risk.</li>
          <li>Review reputable regulator resources for jurisdiction-specific rules.</li>
        </ul>
        <a href="#" className="mt-4 inline-flex text-sm rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2">Learn More</a>
      </div>
    </div>
  );
}
