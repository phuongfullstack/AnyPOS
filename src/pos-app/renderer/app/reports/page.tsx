'use client';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

export default function ReportsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Sales Reports" />

        {/* Sub Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shrink-0">
           <div className="flex items-center gap-4">
             <h2 className="text-xl font-extrabold tracking-tight">Sales Reports</h2>
             <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
             <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
               <button className="px-3 py-1 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">Today</button>
               <button className="px-3 py-1 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">This Week</button>
               <button className="px-3 py-1 text-sm font-bold bg-white dark:bg-slate-700 text-primary shadow-sm rounded-md transition-all">This Month</button>
             </div>
           </div>
           <div className="flex items-center gap-3">
             <div className="relative">
               <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                 <span className="material-symbols-outlined text-lg">calendar_today</span>
                 Oct 1, 2023 - Oct 31, 2023
               </button>
             </div>
             <div className="flex items-center gap-2">
               <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">
                 <span className="material-symbols-outlined text-lg">download</span>
                 Export
               </button>
               <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                 <span className="material-symbols-outlined">notifications</span>
               </button>
             </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
           {/* KPI Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* KPI 1 */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
               <div className="flex justify-between items-start">
                 <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Revenue</p>
                 <div className="p-2 bg-primary/10 rounded-lg text-primary">
                   <span className="material-symbols-outlined">payments</span>
                 </div>
               </div>
               <div className="flex items-end gap-3 mt-1">
                 <h3 className="text-3xl font-extrabold">$125,400</h3>
                 <span className="text-green-600 text-sm font-bold flex items-center gap-0.5 mb-1">
                   <span className="material-symbols-outlined text-sm">trending_up</span> 12.5%
                 </span>
               </div>
               <div className="w-full h-8 mt-2 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 20">
                   <path className="text-primary" d="M0 15 Q 10 5, 20 12 T 40 8 T 60 15 T 80 5 T 100 10" fill="none" stroke="currentColor" strokeWidth="2"></path>
                 </svg>
               </div>
             </div>
             {/* KPI 2 */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
               <div className="flex justify-between items-start">
                 <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Orders</p>
                 <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600">
                   <span className="material-symbols-outlined">shopping_cart</span>
                 </div>
               </div>
               <div className="flex items-end gap-3 mt-1">
                 <h3 className="text-3xl font-extrabold">1,240</h3>
                 <span className="text-red-600 text-sm font-bold flex items-center gap-0.5 mb-1">
                   <span className="material-symbols-outlined text-sm">trending_down</span> 2.4%
                 </span>
               </div>
               <div className="w-full h-8 mt-2 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 20">
                   <path className="text-orange-500" d="M0 10 Q 15 15, 30 10 T 50 18 T 70 8 T 100 12" fill="none" stroke="currentColor" strokeWidth="2"></path>
                 </svg>
               </div>
             </div>
             {/* KPI 3 */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
               <div className="flex justify-between items-start">
                 <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Avg Order Value</p>
                 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                   <span className="material-symbols-outlined">receipt_long</span>
                 </div>
               </div>
               <div className="flex items-end gap-3 mt-1">
                 <h3 className="text-3xl font-extrabold">$101.12</h3>
                 <span className="text-green-600 text-sm font-bold flex items-center gap-0.5 mb-1">
                   <span className="material-symbols-outlined text-sm">trending_up</span> 5.1%
                 </span>
               </div>
               <div className="w-full h-8 mt-2 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 20">
                   <path className="text-blue-500" d="M0 18 Q 20 8, 40 12 T 60 5 T 80 15 T 100 2" fill="none" stroke="currentColor" strokeWidth="2"></path>
                 </svg>
               </div>
             </div>
             {/* KPI 4 */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
               <div className="flex justify-between items-start">
                 <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Net Profit</p>
                 <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                   <span className="material-symbols-outlined">account_balance_wallet</span>
                 </div>
               </div>
               <div className="flex items-end gap-3 mt-1">
                 <h3 className="text-3xl font-extrabold">$45,200</h3>
                 <span className="text-green-600 text-sm font-bold flex items-center gap-0.5 mb-1">
                   <span className="material-symbols-outlined text-sm">trending_up</span> 8.2%
                 </span>
               </div>
               <div className="w-full h-8 mt-2 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 20">
                   <path className="text-green-600" d="M0 12 Q 10 18, 30 10 T 50 5 T 80 8 T 100 2" fill="none" stroke="currentColor" strokeWidth="2"></path>
                 </svg>
               </div>
             </div>
           </div>

           {/* Main Chart Area */}
           <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="flex items-center justify-between mb-8">
               <div>
                 <h4 className="text-lg font-bold">Revenue vs Profit Comparison</h4>
                 <p className="text-sm text-slate-500">Daily performance trends for October 2023</p>
               </div>
               <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-primary"></span>
                   <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Revenue</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="w-3 h-3 rounded-full bg-green-500"></span>
                   <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Profit</span>
                 </div>
               </div>
             </div>
             <div className="relative w-full h-[400px]">
               {/* Chart Placeholder Grid */}
               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                 <div className="border-t border-slate-100 dark:border-slate-800 w-full"></div>
                 <div className="border-t border-slate-100 dark:border-slate-800 w-full"></div>
                 <div className="border-t border-slate-100 dark:border-slate-800 w-full"></div>
                 <div className="border-t border-slate-100 dark:border-slate-800 w-full"></div>
                 <div className="border-t border-slate-100 dark:border-slate-800 w-full"></div>
               </div>
               {/* Mock Line Chart */}
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
                 <defs>
                   <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                     <stop offset="0%" style={{ stopColor: '#0056b2', stopOpacity: 1 }} />
                     <stop offset="100%" style={{ stopColor: '#0056b2', stopOpacity: 0 }} />
                   </linearGradient>
                 </defs>
                 {/* Revenue Path */}
                 <path d="M0 320 L 100 280 L 200 300 L 300 180 L 400 220 L 500 120 L 600 150 L 700 80 L 800 110 L 900 40 L 1000 60" fill="none" stroke="#0056b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                 <path d="M0 320 L 100 280 L 200 300 L 300 180 L 400 220 L 500 120 L 600 150 L 700 80 L 800 110 L 900 40 L 1000 60 V 400 H 0 Z" fill="url(#grad1)" opacity="0.1"></path>
                 {/* Profit Path */}
                 <path d="M0 380 L 100 360 L 200 370 L 300 310 L 400 330 L 500 280 L 600 290 L 700 240 L 800 260 L 900 210 L 1000 220" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
               </svg>
             </div>
             <div className="flex justify-between mt-4 px-2">
               <span className="text-xs font-bold text-slate-400">Oct 01</span>
               <span className="text-xs font-bold text-slate-400">Oct 07</span>
               <span className="text-xs font-bold text-slate-400">Oct 14</span>
               <span className="text-xs font-bold text-slate-400">Oct 21</span>
               <span className="text-xs font-bold text-slate-400">Oct 28</span>
               <span className="text-xs font-bold text-slate-400">Oct 31</span>
             </div>
           </div>

           {/* Secondary Charts Row */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Sales by Category */}
             <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
               <h4 className="text-lg font-bold mb-6">Sales by Category</h4>
               <div className="flex items-center gap-12">
                 <div className="relative w-48 h-48 flex-shrink-0">
                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                     <circle className="text-slate-100 dark:text-slate-800" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeWidth="4"></circle>
                     <circle className="text-primary" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="4"></circle>
                     <circle className="text-green-500" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-60" strokeWidth="4"></circle>
                     <circle className="text-orange-400" cx="18" cy="18" fill="none" r="16" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></circle>
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                     <span className="text-xs font-bold text-slate-400 uppercase">Total</span>
                     <span className="text-xl font-extrabold">$125.4k</span>
                   </div>
                 </div>
                 <div className="flex-1 space-y-4">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <span className="w-3 h-3 rounded-full bg-primary"></span>
                       <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Food</span>
                     </div>
                     <span className="text-sm font-bold">$75,240 (60%)</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <span className="w-3 h-3 rounded-full bg-green-500"></span>
                       <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Drinks</span>
                     </div>
                     <span className="text-sm font-bold">$31,350 (25%)</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                       <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Merch</span>
                     </div>
                     <span className="text-sm font-bold">$18,810 (15%)</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Top 5 Products */}
             <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
               <h4 className="text-lg font-bold mb-6">Top 5 Selling Products</h4>
               <div className="space-y-6">
                 {[
                   { name: 'Classic Wagyu Burger', sales: '$12,450', percent: 85 },
                   { name: 'Caramel Iced Latte', sales: '$9,820', percent: 72 },
                   { name: 'Truffle Fries', sales: '$7,150', percent: 55 },
                   { name: 'Margherita Pizza', sales: '$6,400', percent: 48 },
                   { name: 'Avocado Toast', sales: '$4,900', percent: 35 },
                 ].map((p, i) => (
                   <div key={i} className="space-y-2">
                     <div className="flex justify-between text-sm font-bold">
                       <span>{p.name}</span>
                       <span>{p.sales}</span>
                     </div>
                     <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div className="bg-primary h-full rounded-full" style={{ width: `${p.percent}%` }}></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>

           {/* Detailed Table */}
           <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
             <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
               <h4 className="text-lg font-bold">Daily Sales Breakdown</h4>
               <div className="relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                 <input className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64 outline-none" placeholder="Filter by date..." type="text" />
               </div>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Orders</th>
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Gross Sales</th>
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Discounts</th>
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Net Sales</th>
                     <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Profit</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                   {[
                     { date: 'Oct 31, 2023', orders: 45, gross: 4520.00, discount: -120.50, net: 4399.50, profit: 1240.20 },
                     { date: 'Oct 30, 2023', orders: 38, gross: 3840.00, discount: -95.00, net: 3745.00, profit: 985.50 },
                     { date: 'Oct 29, 2023', orders: 52, gross: 5120.00, discount: -210.00, net: 4910.00, profit: 1540.00 },
                     { date: 'Oct 28, 2023', orders: 41, gross: 4100.00, discount: -85.20, net: 4014.80, profit: 1120.40 },
                     { date: 'Oct 27, 2023', orders: 36, gross: 3450.00, discount: -45.00, net: 3405.00, profit: 890.30 },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                       <td className="px-8 py-4 text-sm font-bold">{row.date}</td>
                       <td className="px-8 py-4 text-sm font-semibold text-center">{row.orders}</td>
                       <td className="px-8 py-4 text-sm font-semibold text-right">${row.gross.toFixed(2)}</td>
                       <td className="px-8 py-4 text-sm font-semibold text-right text-red-500">-${Math.abs(row.discount).toFixed(2)}</td>
                       <td className="px-8 py-4 text-sm font-bold text-right text-primary">${row.net.toFixed(2)}</td>
                       <td className="px-8 py-4 text-sm font-bold text-right text-green-600">${row.profit.toFixed(2)}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
             <div className="px-8 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
               <p className="text-sm text-slate-500 font-semibold">Showing last 5 of 31 days</p>
               <div className="flex items-center gap-2">
                 <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-all">
                   <span className="material-symbols-outlined text-lg">chevron_left</span>
                 </button>
                 <span className="text-sm font-bold px-2">Page 1 of 7</span>
                 <button className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded transition-all">
                   <span className="material-symbols-outlined text-lg">chevron_right</span>
                 </button>
               </div>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
}
