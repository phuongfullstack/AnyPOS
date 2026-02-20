'use client';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function OrderDetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title={`Order Details`} />

        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 sticky top-0 z-10 shrink-0">
           <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between flex-wrap gap-4">
               <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-2 text-sm text-slate-500">
                   <Link href="/orders" className="hover:text-primary transition-colors">Orders</Link>
                   <span className="material-symbols-outlined text-xs">chevron_right</span>
                   <span className="text-slate-900 dark:text-slate-100 font-medium">{id}</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Order {id}</h2>
                   <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Completed</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                   <span className="material-symbols-outlined text-xl">print</span>
                   Print Receipt
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                   <span className="material-symbols-outlined text-xl">assignment_return</span>
                   Refund
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-sm shadow-primary/20">
                   <span className="material-symbols-outlined text-xl">mail</span>
                   Send Email
                 </button>
               </div>
             </div>
           </div>
        </div>

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                 {/* Items */}
                 <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                       <h3 className="font-bold text-slate-900 dark:text-white">Order Items</h3>
                       <span className="text-sm text-slate-500">3 Items</span>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                             <tr>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Variant</th>
                                <th className="px-6 py-4 text-right">Unit Price</th>
                                <th className="px-6 py-4 text-center">Qty</th>
                                <th className="px-6 py-4 text-right">Total</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                             <tr>
                                <td className="px-6 py-4">
                                   <div className="flex items-center gap-4">
                                      <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                                         <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpEQgikHCJlojjhNbBH9U2yNcMFc-WrhR3erLmryOOXko8XX-DUw4i7MbiSS5jZ4szNBshc3fdPF2bvUtNzx5aetH638ecxbwzBkS4VyBCohK53sIOdpLqjxlc5lc_2E3K7_Xz5WHwr9_4SRt3858LsclVL3dXjpFcLyiPnkZdkdqvTgwcWugwzX-HH2McRj-FGtCAuZokUSdd8QhYi9DKittdI5aXjOrPYyJkkKJGzqammONcVCxiJe-gJm18pSMz8ejHMzHsVYQ" alt="Product" />
                                      </div>
                                      <div>
                                         <p className="font-bold text-slate-900 dark:text-white text-sm">Velocity Runners</p>
                                         <p className="text-xs text-slate-500">SKU: VR-RED-42</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Size 42, Red</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white text-right">$120.00</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 text-center">1</td>
                                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">$120.00</td>
                             </tr>
                             <tr>
                                <td className="px-6 py-4">
                                   <div className="flex items-center gap-4">
                                      <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                                         <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtMWMse7Eyk1179WDtvACjuMjlLePWsgScuvZ7gR61ny4ataROkYqg03jiCCy7YeTXrF-hODkRqHSbThwPFRh92rPpwlsdP8-RJBq0kPRqedaWd9E8_4LBSJHpDIcmFi97OpZpFSnTc4bShHZWY4WZvh2ATndBndC2frIsrWAMagGkmbLe24l7F4c5VKRv5HnakcTWMTEsXKMnMF4yu-QNVNCl2LtnIK77ikb0ZvDSt6Az_jMFjaI3S0ZWehV8XVFKITXlmth-s4Q" alt="Product" />
                                      </div>
                                      <div>
                                         <p className="font-bold text-slate-900 dark:text-white text-sm">Minimalist Watch</p>
                                         <p className="text-xs text-slate-500">SKU: MW-WHT-01</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Default</td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white text-right">$85.00</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 text-center">2</td>
                                <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right">$170.00</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </section>

                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 space-y-6">
                       {/* Payment Info */}
                       <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                          <div className="flex items-center gap-3 mb-4">
                             <span className="material-symbols-outlined text-primary">payments</span>
                             <h3 className="font-bold text-slate-900 dark:text-white">Payment Details</h3>
                          </div>
                          <div className="space-y-3">
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Method</span>
                                <div className="flex items-center gap-2">
                                   <span className="material-symbols-outlined text-[16px] text-slate-400">credit_card</span>
                                   <span className="font-medium text-slate-900 dark:text-slate-100">Credit Card (Visa **** 4421)</span>
                                </div>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Transaction ID</span>
                                <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-900 dark:text-slate-100">TRX-778119020</span>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500">Date & Time</span>
                                <span className="font-medium text-slate-900 dark:text-slate-100">Oct 24, 2023 - 10:14 AM</span>
                             </div>
                          </div>
                       </section>
                    </div>
                    <div className="md:w-1/2">
                       {/* Totals */}
                       <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4">
                          <div className="flex justify-between text-slate-600 dark:text-slate-400 text-sm">
                             <span>Subtotal</span>
                             <span className="font-medium">$290.00</span>
                          </div>
                          <div className="flex justify-between text-green-600 text-sm">
                             <span>Discount</span>
                             <span className="font-medium">-$0.00</span>
                          </div>
                          <div className="flex justify-between text-slate-600 dark:text-slate-400 text-sm pb-2 border-b border-slate-100 dark:border-slate-800">
                             <span>Tax (8%)</span>
                             <span className="font-medium">$23.20</span>
                          </div>
                          <div className="flex justify-between items-end">
                             <span className="font-bold text-slate-900 dark:text-white">Grand Total</span>
                             <span className="text-3xl font-extrabold text-primary">$313.20</span>
                          </div>
                       </section>
                    </div>
                 </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                 {/* Customer */}
                 <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <div className="flex items-center justify-between mb-6">
                       <h3 className="font-bold text-slate-900 dark:text-white">Customer</h3>
                       <Link href="/customers/detail?id=123" className="text-primary text-sm font-bold hover:underline">View Profile</Link>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                       <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                          JS
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 dark:text-white">Jane Simmons</p>
                          <p className="text-xs text-slate-500">Customer since 2021</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">jane.simmons@example.com</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-400 text-[20px]">call</span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">+1 (555) 012-3456</span>
                       </div>
                    </div>
                 </section>

                 {/* Fulfillment */}
                 <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6">Fulfillment</h3>
                    <div className="space-y-6">
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Delivery Method</p>
                          <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
                             <span className="text-sm font-bold text-slate-900 dark:text-white">Home Delivery - Express</span>
                          </div>
                       </div>
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Shipping Address</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                             1234 Emerald Street<br/>
                             Apt 4B, Manhattan<br/>
                             New York, NY 10001
                          </p>
                       </div>
                    </div>
                 </section>

                 {/* Timeline */}
                 <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-6">Order Timeline</h3>
                    <div className="relative space-y-6">
                       <div className="absolute left-[11px] top-[10px] bottom-[10px] w-0.5 bg-slate-100 dark:bg-slate-800"></div>
                       <div className="relative flex gap-4">
                          <div className="size-6 rounded-full bg-green-500 flex items-center justify-center text-white z-10">
                             <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="flex-1">
                             <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Delivered</p>
                             <p className="text-xs text-slate-500 mt-1">Today, 2:45 PM</p>
                          </div>
                       </div>
                       <div className="relative flex gap-4">
                          <div className="size-6 rounded-full bg-green-500 flex items-center justify-center text-white z-10">
                             <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="flex-1">
                             <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Shipped</p>
                             <p className="text-xs text-slate-500 mt-1">Oct 25, 4:15 PM</p>
                          </div>
                       </div>
                       <div className="relative flex gap-4">
                          <div className="size-6 rounded-full bg-green-500 flex items-center justify-center text-white z-10">
                             <span className="material-symbols-outlined text-[14px]">check</span>
                          </div>
                          <div className="flex-1">
                             <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Order Placed</p>
                             <p className="text-xs text-slate-500 mt-1">Oct 24, 10:14 AM</p>
                          </div>
                       </div>
                    </div>
                 </section>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}

export default function OrderDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderDetailContent />
    </Suspense>
  );
}
