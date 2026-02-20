'use client';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useState } from 'react';

export default function PromotionsPage() {
  const [showDrawer, setShowDrawer] = useState(false);

  const promotions = [
    { id: 1, name: 'Summer Flash Sale', desc: 'Global site-wide 20% discount', type: 'Percentage (20%)', typeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400', validity: 'Jun 01 — Jun 15, 2024', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400', usage: 142, usagePercent: 71 },
    { id: 2, name: 'BOGO Coffee Morning', desc: 'Buy 1 Latte, Get 1 Pastry Free', type: 'Buy 1 Get 1', typeColor: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400', validity: 'Jul 01 — Jul 07, 2024', status: 'Scheduled', statusColor: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400', usage: 0, usagePercent: 0 },
    { id: 3, name: 'First Order Discount', desc: 'New customer sign-up bonus', type: 'Fixed Amount ($10)', typeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400', validity: 'Jan 01 — Dec 31, 2024', status: 'Active', statusColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400', usage: 482, usagePercent: 95 },
    { id: 4, name: 'Holiday 2023 Clearance', desc: 'End of year inventory flush', type: 'Percentage (50%)', typeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400', validity: 'Dec 01 — Dec 25, 2023', status: 'Expired', statusColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500', usage: 1000, usagePercent: 100 },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Promotions & Discounts" />

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
           {/* Top Actions */}
           <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shrink-0">
              <div className="relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                 <input className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-slate-900 dark:text-slate-100" placeholder="Search promotions..." type="text" />
              </div>
              <button onClick={() => setShowDrawer(true)} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm">
                 <span className="material-symbols-outlined text-base">add_circle</span>
                 Create New Promotion
              </button>
           </div>

           <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {/* Filters */}
              <div className="flex items-center justify-between mb-6">
                 <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
                    <button className="px-6 py-1.5 rounded-lg text-sm font-bold bg-white dark:bg-slate-700 shadow-sm text-primary">All Promotions</button>
                    <button className="px-6 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900">Active</button>
                    <button className="px-6 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900">Scheduled</button>
                    <button className="px-6 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900">Expired</button>
                 </div>
                 <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 transition-colors">
                       <span className="material-symbols-outlined text-slate-600">filter_list</span>
                    </button>
                    <button className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-50 transition-colors">
                       <span className="material-symbols-outlined text-slate-600">file_download</span>
                    </button>
                 </div>
              </div>

              {/* Table */}
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Promotion Name</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Validity Period</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Usage Count</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                       {promotions.map(promo => (
                          <tr key={promo.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                             <td className="px-6 py-4">
                                <div className="flex flex-col">
                                   <span className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">{promo.name}</span>
                                   <span className="text-xs text-slate-500">{promo.desc}</span>
                                </div>
                             </td>
                             <td className="px-6 py-4">
                                <div className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${promo.typeColor}`}>
                                   {promo.type}
                                </div>
                             </td>
                             <td className="px-6 py-4">
                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                   <span className="material-symbols-outlined text-sm">calendar_today</span>
                                   <span>{promo.validity}</span>
                                </div>
                             </td>
                             <td className="px-6 py-4 text-center">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase ring-1 ring-inset ${promo.statusColor.replace('text-', 'ring-').split(' ')[0]} ${promo.statusColor}`}>
                                   {promo.status}
                                </span>
                             </td>
                             <td className="px-6 py-4 text-right">
                                <div className="flex flex-col items-end">
                                   <span className="text-sm font-bold">{promo.usage}</span>
                                   <div className="w-16 h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                                      <div className={`h-full ${promo.status === 'Expired' ? 'bg-slate-300 dark:bg-slate-600' : 'bg-primary'}`} style={{ width: `${promo.usagePercent}%` }}></div>
                                   </div>
                                </div>
                             </td>
                             <td className="px-6 py-4 text-right">
                                <button className="text-slate-400 hover:text-primary transition-colors">
                                   <span className="material-symbols-outlined">more_vert</span>
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-500 font-semibold">Showing 4 of 12 promotions</p>
                    <div className="flex gap-2">
                       <button className="px-3 py-1 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">Previous</button>
                       <button className="px-3 py-1 text-xs font-bold bg-primary text-white rounded shadow-sm">Next</button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Create Drawer */}
           {showDrawer && (
              <div className="absolute inset-0 z-50 flex justify-end bg-slate-900/20 backdrop-blur-sm transition-all">
                 <aside className="w-[420px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl h-full animate-in slide-in-from-right duration-300">
                    <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
                       <h3 className="font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">add_circle</span>
                          Create Promotion
                       </h3>
                       <button onClick={() => setShowDrawer(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                          <span className="material-symbols-outlined">close</span>
                       </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                       {/* Basic Info */}
                       <section className="space-y-4">
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Basic Information</h4>
                          <div className="space-y-4">
                             <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Promotion Name</label>
                                <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2.5 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-slate-100" placeholder="e.g. Seasonal Clearance" type="text" />
                             </div>
                             <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Description</label>
                                <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2.5 focus:ring-primary focus:border-primary transition-all outline-none text-slate-900 dark:text-slate-100" placeholder="Visible only to staff..." rows={2}></textarea>
                             </div>
                          </div>
                       </section>
                       {/* Type */}
                       <section className="space-y-4">
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Promotion Type</h4>
                          <div className="space-y-3">
                             <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-all">
                                <input type="radio" name="promo_type" className="text-primary focus:ring-primary h-4 w-4" defaultChecked />
                                <div className="flex flex-col">
                                   <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Discount on Total Bill</span>
                                   <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Applied at checkout</span>
                                </div>
                             </label>
                             <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-all">
                                <input type="radio" name="promo_type" className="text-primary focus:ring-primary h-4 w-4" />
                                <div className="flex flex-col">
                                   <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Specific Product Discount</span>
                                   <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Applied to individual items</span>
                                </div>
                             </label>
                             <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-all">
                                <input type="radio" name="promo_type" className="text-primary focus:ring-primary h-4 w-4" />
                                <div className="flex flex-col">
                                   <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Buy X Get Y (BOGO)</span>
                                   <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Bundle and reward deals</span>
                                </div>
                             </label>
                          </div>
                       </section>
                       {/* Value */}
                       <section className="space-y-4">
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Value Settings</h4>
                          <div className="flex gap-4">
                             <div className="flex-1 space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Discount Value</label>
                                <div className="relative">
                                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                   <input className="w-full pl-7 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary outline-none text-slate-900 dark:text-slate-100" type="number" defaultValue="10.00" />
                                </div>
                             </div>
                             <div className="flex-1 space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Unit</label>
                                <select className="w-full py-2.5 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary outline-none text-slate-900 dark:text-slate-100">
                                   <option>Fixed Amount ($)</option>
                                   <option>Percentage (%)</option>
                                </select>
                             </div>
                          </div>
                       </section>
                       {/* Schedule */}
                       <section className="space-y-4">
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Schedule & Limits</h4>
                          <div className="space-y-4">
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                   <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Start Date</label>
                                   <input className="w-full py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-primary outline-none text-slate-900 dark:text-slate-100" type="date" />
                                </div>
                                <div className="space-y-1.5">
                                   <label className="text-xs font-bold text-slate-700 dark:text-slate-300">End Date</label>
                                   <input className="w-full py-2 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-primary outline-none text-slate-900 dark:text-slate-100" type="date" />
                                </div>
                             </div>
                             <div className="space-y-3 pt-2">
                                <label className="flex items-center gap-2 group cursor-pointer">
                                   <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300" />
                                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">One use per customer</span>
                                </label>
                                <label className="flex items-center gap-2 group cursor-pointer">
                                   <input type="checkbox" className="rounded text-primary focus:ring-primary border-slate-300" defaultChecked />
                                   <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Minimum order amount</span>
                                </label>
                             </div>
                             <div className="relative pl-6 border-l-2 border-primary/20 ml-2">
                                <div className="space-y-1.5">
                                   <label className="text-xs font-bold text-slate-500 uppercase">Min Spend Required ($)</label>
                                   <input className="w-full py-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary outline-none text-slate-900 dark:text-slate-100" type="number" defaultValue="50.00" />
                                </div>
                             </div>
                          </div>
                       </section>
                    </div>
                    {/* Footer Actions */}
                    <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-col gap-3">
                       <button onClick={() => setShowDrawer(false)} className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-base">check_circle</span>
                          Create Promotion
                       </button>
                       <button onClick={() => setShowDrawer(false)} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 py-3 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                          Discard Draft
                       </button>
                    </div>
                 </aside>
              </div>
           )}
        </main>
      </div>
    </div>
  );
}
