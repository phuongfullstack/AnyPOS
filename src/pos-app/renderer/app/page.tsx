'use client';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Dashboard" />

        <main className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {/* KPI Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Revenue */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div className="flex items-center text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 12%
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Today's Revenue</p>
              <h3 className="text-2xl font-bold mt-1">$12,450.00</h3>
            </div>

            {/* Orders */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <div className="flex items-center text-red-500 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                  <span className="material-symbols-outlined text-sm mr-1">trending_down</span> 3%
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Order Volume</p>
              <h3 className="text-2xl font-bold mt-1">148</h3>
            </div>

            {/* Profit */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div className="flex items-center text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                   <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 5%
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Estimated Profit</p>
              <h3 className="text-2xl font-bold mt-1">$4,200.00</h3>
            </div>

            {/* Customers */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div className="flex items-center text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                   <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 8%
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">New Customers</p>
              <h3 className="text-2xl font-bold mt-1">12</h3>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-lg font-bold">Revenue Overview</h4>
                    <p className="text-sm text-slate-500">Weekly revenue performance</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 shadow-sm rounded-md">Weekly</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Monthly</button>
                  </div>
               </div>
               <div className="flex-1 min-h-[250px] relative flex items-end justify-between px-4 gap-2">
                  {/* Mock Bar Chart */}
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="w-full bg-primary/10 rounded-t-md relative group hover:bg-primary/20 transition-colors" style={{ height: `${h}%` }}>
                       <div className="absolute bottom-0 w-full bg-primary rounded-t-md transition-all group-hover:bg-primary/80" style={{ height: `${h}%` }}></div>
                    </div>
                  ))}
               </div>
               <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest px-4">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
               </div>
            </div>

            {/* Category Chart */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
               <h4 className="text-lg font-bold mb-1">Revenue by Category</h4>
               <p className="text-sm text-slate-500 mb-8">Performance breakdown</p>
               <div className="flex justify-center mb-8">
                 <div className="relative size-40 rounded-full border-[16px] border-slate-100 dark:border-slate-800 border-t-primary border-r-primary border-b-primary/40 flex items-center justify-center">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-2xl font-bold">100%</span>
                       <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Sales Share</span>
                    </div>
                 </div>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <div className="size-3 rounded-full bg-primary"></div>
                     <span className="font-medium text-slate-700 dark:text-slate-300">Retail</span>
                   </div>
                   <span className="font-bold">60%</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <div className="size-3 rounded-full bg-primary/40"></div>
                     <span className="font-medium text-slate-700 dark:text-slate-300">F&B</span>
                   </div>
                   <span className="font-bold">30%</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                     <div className="size-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                     <span className="font-medium text-slate-700 dark:text-slate-300">Services</span>
                   </div>
                   <span className="font-bold">10%</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-8">
             <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                   <h4 className="text-lg font-bold">Recent Orders</h4>
                   <a href="#" className="text-sm font-bold text-primary hover:underline">View All</a>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                           <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Order ID</th>
                           <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Customer</th>
                           <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Total</th>
                           <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Status</th>
                           <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                         <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                            <td className="px-6 py-4 font-bold text-sm">#ORD-9023</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Sarah Jenkins</td>
                            <td className="px-6 py-4 text-sm font-bold">$142.50</td>
                            <td className="px-6 py-4">
                               <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Success</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500">2 mins ago</td>
                         </tr>
                         <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                            <td className="px-6 py-4 font-bold text-sm">#ORD-9022</td>
                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Mark Thompson</td>
                            <td className="px-6 py-4 text-sm font-bold">$64.00</td>
                            <td className="px-6 py-4">
                               <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Pending</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500">14 mins ago</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>

             {/* Activities */}
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-bold mb-6">Activity Logs</h4>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                         <div className="size-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                           <span className="material-symbols-outlined text-sm">inventory_2</span>
                         </div>
                         <div className="w-px h-full bg-slate-200 dark:bg-slate-800 mt-2"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm font-bold">Stock received</p>
                        <p className="text-xs text-slate-500 mt-0.5">24 units of "Espresso Beans" added.</p>
                        <span className="text-[10px] font-medium text-slate-400 mt-2 block">10:45 AM</span>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                         <div className="size-8 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                           <span className="material-symbols-outlined text-sm">person_add</span>
                         </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold">New customer added</p>
                        <p className="text-xs text-slate-500 mt-0.5">Sarah Jenkins joined.</p>
                        <span className="text-[10px] font-medium text-slate-400 mt-2 block">09:12 AM</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
