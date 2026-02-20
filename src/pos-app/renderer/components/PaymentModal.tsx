'use client';

import { useState } from 'react';

interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onConfirm: () => void;
}

export default function PaymentModal({ total, onClose, onConfirm }: PaymentModalProps) {
  const [method, setMethod] = useState('cash');
  const [received, setReceived] = useState<string>(total.toFixed(2));

  const change = (parseFloat(received) || 0) - total;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-background-dark w-full max-w-[1000px] rounded-xl shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="border-b border-slate-100 dark:border-slate-800 p-6 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Payment Amount</p>
            <div className="flex items-baseline gap-2">
              <span className="text-slate-400 text-2xl font-medium">$</span>
              <h1 className="text-slate-900 dark:text-slate-100 text-5xl font-extrabold tracking-tight">{total.toFixed(2)}</h1>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden min-h-[500px]">
          {/* Methods */}
          <div className="w-1/3 bg-slate-50 dark:bg-slate-900/50 border-r border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase mb-2">Select Method</p>
            {[
              { id: 'cash', name: 'Cash', icon: 'payments', desc: 'Immediate processing' },
              { id: 'card', name: 'Bank Card', icon: 'credit_card', desc: 'Swipe, Chip or Tap' },
              { id: 'wallet', name: 'E-Wallet', icon: 'qr_code_2', desc: 'Scan QR Code' },
              { id: 'transfer', name: 'Transfer', icon: 'account_balance', desc: 'Direct Bank Deposit' },
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all group text-left ${
                  method === m.id
                    ? 'border-primary bg-white dark:bg-slate-800 shadow-sm'
                    : 'border-transparent bg-white/50 dark:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <div className={`size-12 rounded-lg flex items-center justify-center ${method === m.id ? 'bg-primary/10 text-primary' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  <span className="material-symbols-outlined text-3xl">{m.icon}</span>
                </div>
                <div>
                  <p className={`font-bold text-lg ${method === m.id ? 'text-slate-900 dark:text-slate-100' : 'text-slate-700 dark:text-slate-300'}`}>{m.name}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{m.desc}</p>
                </div>
                {method === m.id && <div className="ml-auto text-primary"><span className="material-symbols-outlined">check_circle</span></div>}
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="flex-1 p-8 flex flex-col gap-8 bg-white dark:bg-background-dark">
             <div className="flex flex-col gap-3">
               <label className="text-slate-600 dark:text-slate-400 font-semibold text-base">Amount Received</label>
               <div className="relative group">
                 <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl font-medium">$</span>
                 <input
                   className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:ring-0 rounded-xl h-20 pl-12 pr-6 text-4xl font-bold text-slate-900 dark:text-white transition-all outline-none"
                   type="number"
                   value={received}
                   onChange={(e) => setReceived(e.target.value)}
                 />
               </div>
             </div>

             <div className="flex flex-col gap-4">
               <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Quick Selection</p>
               <div className="grid grid-cols-3 gap-3">
                 {[10, 20, 50, 100, 200, 500].map(val => (
                   <button
                     key={val}
                     onClick={() => setReceived(val.toString())}
                     className="h-14 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-lg hover:bg-primary/10 hover:text-primary hover:border-primary border-2 border-transparent transition-all"
                   >
                     ${val}
                   </button>
                 ))}
               </div>
             </div>

             <div className="mt-auto bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-xl p-6 flex justify-between items-center">
               <div className="flex flex-col">
                 <p className="text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-wide">Change to Return</p>
                 <p className="text-emerald-600 dark:text-emerald-500 text-xs">Customer balance after payment</p>
               </div>
               <div className="flex items-baseline gap-1">
                 <span className="text-emerald-500 dark:text-emerald-400 text-xl font-bold">$</span>
                 <p className="text-emerald-600 dark:text-emerald-400 text-4xl font-extrabold">{change > 0 ? change.toFixed(2) : '0.00'}</p>
               </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 dark:border-slate-800 p-6 flex items-center justify-between bg-white dark:bg-background-dark">
          <label className="relative inline-flex items-center cursor-pointer group">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            <span className="ms-3 text-sm font-bold text-slate-700 dark:text-slate-300">Print Receipt</span>
          </label>
          <div className="flex gap-4">
            <button onClick={onClose} className="px-8 h-14 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Cancel
            </button>
            <button onClick={onConfirm} className="px-12 h-14 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center gap-3">
              <span>Confirm Payment</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
