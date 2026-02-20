'use client';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Link from 'next/link';

export default function OrdersPage() {
  const orders = [
    { id: 'ORD-8821', date: 'May 24, 2024', time: '14:32 PM', customer: 'Jonathan Smith', fulfillment: 'Delivery', total: 124.50, payment: 'Paid', status: 'Shipping', statusColor: 'bg-primary/10 text-primary' },
    { id: 'ORD-8820', date: 'May 24, 2024', time: '12:15 PM', customer: 'Sarah Jenkins', fulfillment: 'In-store', total: 45.00, payment: 'Paid', status: 'Success', statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    { id: 'ORD-8819', date: 'May 23, 2024', time: '18:02 PM', customer: 'Michael Chen', fulfillment: 'Takeaway', total: 210.30, payment: 'Partially Paid', status: 'Processing', statusColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: 'ORD-8818', date: 'May 23, 2024', time: '10:45 AM', customer: 'Emily Davis', fulfillment: 'Delivery', total: 89.99, payment: 'Unpaid', status: 'Cancelled', statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Order Management" />

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           {/* Filters */}
           <div className="mb-8">
             <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 overflow-x-auto">
               <button className="pb-4 text-sm font-bold border-b-4 border-primary text-primary whitespace-nowrap">All Orders</button>
               <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap">Pending</button>
               <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap">Processing</button>
               <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap">Completed</button>
               <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap">Cancelled</button>
               <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors whitespace-nowrap">Refunded</button>
             </div>
             <div className="flex flex-wrap gap-4 mt-6">
               <div className="flex-1 min-w-[300px] relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                 <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-slate-900 dark:text-slate-100" placeholder="Search by Order ID or Customer name..." type="text" />
               </div>
               <div className="w-64 relative">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">calendar_today</span>
                 <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm text-slate-900 dark:text-slate-100" placeholder="Select date range" type="text" />
               </div>
             </div>
           </div>

           {/* Table */}
           <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Order ID</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date & Time</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Customer</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Fulfillment</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Total</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Payment</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                     <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                   {orders.map(order => (
                     <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                       <td className="px-6 py-4">
                         <Link href={`/orders/detail?id=${order.id}`} className="text-primary font-bold hover:underline">{order.id}</Link>
                       </td>
                       <td className="px-6 py-4">
                         <div className="text-sm font-medium">{order.date}</div>
                         <div className="text-xs text-slate-500">{order.time}</div>
                       </td>
                       <td className="px-6 py-4">
                         <span className="text-sm font-semibold">{order.customer}</span>
                       </td>
                       <td className="px-6 py-4">
                         <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                           <span className="material-symbols-outlined text-lg">
                             {order.fulfillment === 'Delivery' ? 'local_shipping' : order.fulfillment === 'In-store' ? 'storefront' : 'shopping_bag'}
                           </span>
                           {order.fulfillment}
                         </div>
                       </td>
                       <td className="px-6 py-4">
                         <span className="text-sm font-bold text-slate-900 dark:text-slate-100">${order.total.toFixed(2)}</span>
                       </td>
                       <td className="px-6 py-4">
                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${order.payment === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : order.payment === 'Unpaid' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                           {order.payment}
                         </span>
                       </td>
                       <td className="px-6 py-4">
                         <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase ${order.statusColor}`}>
                           {order.status}
                         </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                         <div className="flex justify-end gap-2">
                           <Link href={`/orders/detail?id=${order.id}`} className="p-1 hover:text-primary transition-colors" title="View Details">
                             <span className="material-symbols-outlined">visibility</span>
                           </Link>
                           <button className="p-1 hover:text-primary transition-colors" title="Print Receipt">
                             <span className="material-symbols-outlined">print</span>
                           </button>
                           <button className="p-1 hover:text-primary transition-colors">
                             <span className="material-symbols-outlined">more_vert</span>
                           </button>
                         </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>

           {/* Footer */}
           <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-8 py-4 mt-auto rounded-b-xl border-x border-b">
             <div className="flex items-center justify-between flex-wrap gap-4">
               <div className="text-sm text-slate-500">
                 Showing <span className="font-bold text-slate-900 dark:text-slate-100">1</span> to <span className="font-bold text-slate-900 dark:text-slate-100">4</span> of <span className="font-bold text-slate-900 dark:text-slate-100">1,248</span> orders
               </div>
               <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                   <span className="text-sm text-slate-500 whitespace-nowrap">Rows per page:</span>
                   <select className="text-sm border-none bg-slate-50 dark:bg-slate-800 rounded-lg py-1 pl-2 pr-8 focus:ring-1 focus:ring-primary outline-none">
                     <option>10</option>
                     <option>20</option>
                     <option>50</option>
                   </select>
                 </div>
                 <div className="flex items-center gap-1">
                   <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                     <span className="material-symbols-outlined">chevron_left</span>
                   </button>
                   <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
                   <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">2</button>
                   <button className="size-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">3</button>
                   <span className="mx-1 text-slate-400">...</span>
                   <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors">
                     <span className="material-symbols-outlined">chevron_right</span>
                   </button>
                 </div>
               </div>
             </div>
           </footer>
        </main>
      </div>
    </div>
  );
}
