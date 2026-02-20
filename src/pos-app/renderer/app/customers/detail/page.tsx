'use client';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CustomerProfileContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Customer Details" />

        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shrink-0">
           <div className="flex items-center gap-2 text-sm">
             <Link href="/customers" className="text-slate-500 hover:text-primary transition-colors">Customers</Link>
             <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
             <span className="font-semibold text-slate-900 dark:text-slate-100">Customer Details</span>
           </div>
           <div className="flex items-center gap-3">
             <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
               <span className="material-symbols-outlined text-lg">edit</span> Edit Profile
             </button>
             <button className="px-4 py-2 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
               <span className="material-symbols-outlined text-lg">delete</span> Delete
             </button>
           </div>
        </div>

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column (30%) */}
              <div className="lg:col-span-4 space-y-6">
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 flex flex-col items-center text-center">
                       <div className="relative mb-4">
                          <div className="size-24 rounded-full bg-cover bg-center border-4 border-white dark:border-slate-800 shadow-md" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3Rtx-pvhRPu66dNAcSguQg3OUMabyH1jyqX4moWjVIZq3L_HMIAQA0ZtpROeehP2bMaTqu86-ds73YqKBW7EMIZR1RqYjB6B3vWCJh2pCHPzS1fxG-DtNjXP-mB5B-VFlx7GeS_P1WhwM8vZRWW6--QtD0XtIisvpSW_i0UKJTv1J0Y8aRYmKdcN228bVG3Y7RicV4dAWfgGrs-jDMUvUzGkQOe_U6zQyA1RS4nfRJchlHU-Xykv2NZvurdc5XZx9K5WKm6AGZC0')` }}></div>
                          <div className="absolute bottom-0 right-0 bg-yellow-400 text-white p-1 rounded-full border-2 border-white dark:border-slate-800">
                             <span className="material-symbols-outlined text-xs block">star</span>
                          </div>
                       </div>
                       <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Nguyen Van A</h2>
                       <span className="mt-1 inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2.5 py-0.5 text-xs font-semibold text-yellow-800 dark:text-yellow-400">
                          Gold Member
                       </span>
                       <div className="w-full mt-6 space-y-3 text-left">
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                             <span className="material-symbols-outlined text-slate-400">alternate_email</span>
                             <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none mb-1">Email Address</p>
                                <p className="text-sm font-medium">nguyen.a@email.com</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                             <span className="material-symbols-outlined text-slate-400">call</span>
                             <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none mb-1">Phone Number</p>
                                <p className="text-sm font-medium">+84 901 234 567</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                             <span className="material-symbols-outlined text-slate-400">location_on</span>
                             <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none mb-1">Location</p>
                                <p className="text-sm font-medium">Ho Chi Minh City, VN</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-slate-200 dark:border-slate-800">
                       <div className="p-4 text-center border-r border-slate-200 dark:border-slate-800">
                          <p className="text-xs text-slate-500 mb-1">Total Spent</p>
                          <p className="text-lg font-bold text-primary">$12.4k</p>
                       </div>
                       <div className="p-4 text-center border-r border-slate-200 dark:border-slate-800">
                          <p className="text-xs text-slate-500 mb-1">Orders</p>
                          <p className="text-lg font-bold">48</p>
                       </div>
                       <div className="p-4 text-center">
                          <p className="text-xs text-slate-500 mb-1">Points</p>
                          <p className="text-lg font-bold">2.1k</p>
                       </div>
                    </div>
                 </div>
                 <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">mail</span> Contact Customer
                 </button>
              </div>

              {/* Right Column (70%) */}
              <div className="lg:col-span-8 space-y-6">
                 {/* Quick Stats */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                       <div className="size-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                          <span className="material-symbols-outlined">payments</span>
                       </div>
                       <div>
                          <p className="text-sm text-slate-500 font-medium">Average Order Value</p>
                          <p className="text-2xl font-bold">$258.40</p>
                       </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-sm">
                       <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <span className="material-symbols-outlined">category</span>
                       </div>
                       <div>
                          <p className="text-sm text-slate-500 font-medium">Most Frequent Category</p>
                          <p className="text-2xl font-bold">Electronics</p>
                       </div>
                    </div>
                 </div>

                 {/* Tabs & Table */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col min-h-[500px]">
                    <div className="border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto">
                       <nav aria-label="Tabs" className="flex space-x-8">
                          <a href="#" className="border-primary text-primary border-b-2 py-4 px-1 text-sm font-bold whitespace-nowrap flex items-center gap-2">
                             <span className="material-symbols-outlined text-lg">history</span> Purchase History
                          </a>
                          <a href="#" className="border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 py-4 px-1 text-sm font-medium whitespace-nowrap flex items-center gap-2">
                             <span className="material-symbols-outlined text-lg">loyalty</span> Reward Points
                          </a>
                          <a href="#" className="border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 py-4 px-1 text-sm font-medium whitespace-nowrap flex items-center gap-2">
                             <span className="material-symbols-outlined text-lg">notes</span> Notes
                          </a>
                          <a href="#" className="border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 border-b-2 py-4 px-1 text-sm font-medium whitespace-nowrap flex items-center gap-2">
                             <span className="material-symbols-outlined text-lg">tune</span> Preferences
                          </a>
                       </nav>
                    </div>
                    <div className="flex-1 overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                          <thead className="bg-slate-50 dark:bg-slate-800/50">
                             <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Items Purchased</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Total</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                             <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-bold text-primary">#ORD-7721</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 24, 2023</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 truncate max-w-[200px]">iPhone 15 Pro, MagSafe Case</td>
                                <td className="px-6 py-4 text-sm font-bold text-right">$1,049.00</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Credit Card</td>
                                <td className="px-6 py-4">
                                   <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-bold text-green-700 dark:text-green-400">Completed</span>
                                </td>
                             </tr>
                             <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-bold text-primary">#ORD-7690</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 18, 2023</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 truncate max-w-[200px]">AirPods Max (Pink)</td>
                                <td className="px-6 py-4 text-sm font-bold text-right">$549.00</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Apple Pay</td>
                                <td className="px-6 py-4">
                                   <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2 py-0.5 text-xs font-bold text-red-700 dark:text-red-400">Refunded</span>
                                </td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                       <p className="text-xs text-slate-500">Showing 5 of 48 orders</p>
                       <div className="flex gap-2">
                          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-primary/10 text-primary font-bold text-xs px-3">1</button>
                          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 font-bold text-xs px-3">2</button>
                          <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
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

export default function CustomerProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerProfileContent />
    </Suspense>
  );
}
