'use client';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Link from 'next/link';

export default function CustomersPage() {
  const customers = [
    { id: '1209', name: 'Alex Johnson', email: 'alex.j@example.com', phone: '(555) 123-4567', level: 'Platinum', orders: 42, spent: 2840.00, points: 2450, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC62vbxenDNMMnLtHFzxS-8OV98MwJpHf0OkNXmbaMPyXGJlCuL1eCM1bM8l4d2Z0bbDFqwY8F3aiavf9g9IIww4UDNESVZho1jPUuLv5xHoG4TmM1aa2OHglPNGhRpX-PDCWJikdAAmKWG2zxmJKU6HuHe2qipY6JU9mHAFlVyv_QXHxyIDQJ95Ef4DrD4WqfJnMzyXX_QX7EBj8CpmNIizCIaI7-qn632pVKi7y4HZlyWUlBzKKajaD3moLcTRpmSBltsx5NX2ic' },
    { id: '1185', name: 'Sarah Miller', email: 'sarah.m@web.com', phone: '(555) 987-6543', level: 'Gold', orders: 18, spent: 1120.50, points: 890, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUJTFfwB0n8RiNPI7aD1GpiaHuYGjSmtDRiBCNUvKOqvXIvrh5p-14DxgsJwt-6kmVAQvD9mrU6cG5JnElaZVbTA86gdJWWPSVzRmFcfRxsJtgHGEJ9zKxhjhr1tg0HZXEuNHLrCtSCuP6cOhwFYtbwJnGEXoKi1kkZNKNrFh7dzX7KcalqZRmx70QdWy8_ZyB4DGxQL9_cT0Gi13YJp-zts0xoMH-yccmLrlocwNkynbOFQLrUd70nw9_sAaOIplYpMWQ_vd190c' },
    { id: '1152', name: 'Marcus Chen', email: 'mchen@mail.org', phone: '(555) 444-3322', level: 'Silver', orders: 12, spent: 645.00, points: 420, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhKxETwLiKuBs7gxk8y-XAu1Eu1CEahvCeMPBOBvrvGsF2M7MGI6NvRc2FHTV60NG2PFTtQrXlFz9wdYx5oW_cnGg9NQeeIlWu5EilAjjm8c6aFJlRJ5giKJj9V1HYuWNNK2ky3G50x13Hy_mNE8fTapQ2i5B6zMALOiuH6U-mNj-JlknO5icBC9eNYQPw5IwkG-Escm_Yr-zdHWzxopCMHx1lCCq8SEtQ8xJCgIu5JEYmCf-rlrK8cliptjolWYUq0wrKPJPQG14' },
    { id: '1104', name: 'Elena Rodriguez', email: 'elena.r@test.com', phone: '(555) 222-1111', level: 'Bronze', orders: 4, spent: 185.20, points: 125, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQm53vSkXuD3wkzwpC1116SkYFgEeJHIJYFvVHeXokKeGVvWYm0AKVPE8OWKmN8c9GDD6Vu6t0VMzQU1qRsJmXLwtpud7Z59Xk4T60pTg6Z9YqtY2BzpbJtt6f8AksOqJ6L7-v1Tvbv8Wn2f862AUa4bbWYph6KQ4zf0YTQDgtRG-LL7p7Lu6uxH_IUU9jrIMT6JXicWvdIA30pIJJ3lY2SnIWZtpZXL8yfOxdgFSSRXaNrJc_AaoWAKg_WEIXjHtMBwt9wzdp_U' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Customer Management" />

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           {/* Header & Actions */}
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
             <div>
               <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Customer Management</h2>
               <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your relationships and track loyalty rewards</p>
             </div>
             <div className="flex items-center gap-3">
               <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                 <span className="material-symbols-outlined text-lg">ios_share</span>
                 <span>Export List</span>
               </button>
               <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                 <span className="material-symbols-outlined text-lg">person_add</span>
                 <span>Add New Customer</span>
               </button>
             </div>
           </div>

           {/* KPI Row */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
               <div className="flex items-center justify-between mb-4">
                 <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                   <span className="material-symbols-outlined">groups</span>
                 </div>
                 <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+12.5%</span>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Customers</p>
               <h3 className="text-3xl font-extrabold mt-1">12,482</h3>
             </div>
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
               <div className="flex items-center justify-between mb-4">
                 <div className="p-2 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-lg">
                   <span className="material-symbols-outlined">person_celebrate</span>
                 </div>
                 <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">+5.4%</span>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Members (MTD)</p>
               <h3 className="text-3xl font-extrabold mt-1">1,154</h3>
             </div>
             <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/10 shadow-sm">
               <div className="flex items-center justify-between mb-4">
                 <div className="p-2 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-lg">
                   <span className="material-symbols-outlined">military_tech</span>
                 </div>
                 <span className="text-amber-600 text-xs font-bold bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded-full">Total Lifetime</span>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Points Issued</p>
               <h3 className="text-3xl font-extrabold mt-1">850,230</h3>
             </div>
           </div>

           {/* Filters */}
           <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-primary/10 mb-6 flex flex-wrap items-center gap-4 shadow-sm">
             <div className="flex-1 relative min-w-[300px]">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
               <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 dark:text-slate-200 outline-none" placeholder="Search by name, phone number, or email..." type="text" />
             </div>
             <div className="flex items-center gap-2">
               <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">Level:</span>
               <div className="flex gap-2">
                 <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">Bronze</button>
                 <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">Silver</button>
                 <button className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold">Gold</button>
                 <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all">Platinum</button>
               </div>
             </div>
             <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
             <button className="flex items-center gap-1 text-primary text-sm font-bold px-3 py-1.5 hover:bg-primary/5 rounded-lg transition-all">
               <span className="material-symbols-outlined text-lg">filter_list</span>
               <span>More Filters</span>
             </button>
           </div>

           {/* Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             {/* Table */}
             <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-primary/5">
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Level</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Orders</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Loyalty Points</th>
                       <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                     {customers.map(c => (
                       <tr key={c.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                         <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                             <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden shrink-0">
                               <img src={c.avatar} className="w-full h-full object-cover" alt={c.name} />
                             </div>
                             <div>
                               <Link href={`/customers/detail?id=${c.id}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{c.name}</Link>
                               <p className="text-xs text-slate-500 dark:text-slate-400">ID: #C-{c.id}</p>
                             </div>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-xs">
                             <p className="text-slate-700 dark:text-slate-300 font-medium">{c.email}</p>
                             <p className="text-slate-500">{c.phone}</p>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-white ${
                             c.level === 'Platinum' ? 'bg-[#E5E4E2] text-[#4A4A4A]' :
                             c.level === 'Gold' ? 'bg-[#D4AF37] text-white' :
                             c.level === 'Silver' ? 'bg-[#C0C0C0] text-slate-800' :
                             'bg-[#CD7F32] text-white'
                           }`}>
                             {c.level}
                           </span>
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-xs">
                             <p className="text-slate-900 dark:text-white font-bold">{c.orders} Orders</p>
                             <p className="text-slate-500">${c.spent.toFixed(2)} spent</p>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                             <span className="text-sm font-bold text-amber-600">{c.points.toLocaleString()} pts</span>
                           </div>
                         </td>
                         <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                             <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors" title="Adjust Points">
                               <span className="material-symbols-outlined text-lg">add_circle</span>
                             </button>
                             <Link href={`/customers/detail?id=${c.id}`} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 rounded-lg transition-colors" title="Edit Profile">
                               <span className="material-symbols-outlined text-lg">edit</span>
                             </Link>
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-t border-primary/5 flex items-center justify-between">
                 <p className="text-xs text-slate-500 font-bold">Showing 1 to 4 of 12,482 customers</p>
                 <div className="flex gap-2">
                   <button className="p-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all">
                     <span className="material-symbols-outlined text-sm">chevron_left</span>
                   </button>
                   <button className="p-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all">
                     <span className="material-symbols-outlined text-sm">chevron_right</span>
                   </button>
                 </div>
               </div>
             </div>

             {/* Sidebar */}
             <div className="space-y-6">
               <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                 <div className="bg-primary/5 p-4 border-b border-primary/5">
                   <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest">Earning Rules</h4>
                 </div>
                 <div className="p-6">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="size-12 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                       <span className="material-symbols-outlined text-3xl">currency_exchange</span>
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">Active Rule</p>
                       <p className="text-lg font-extrabold text-slate-900 dark:text-white">$1 = 1 Point</p>
                     </div>
                   </div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Customers earn points on every dollar spent before tax and shipping.</p>
                   <button className="w-full text-center text-sm font-bold text-primary hover:underline">Edit Rules</button>
                 </div>
               </div>

               <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                 <div className="bg-primary/5 p-4 border-b border-primary/5 flex items-center justify-between">
                   <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest">Available Rewards</h4>
                   <button className="text-primary hover:text-primary/80 transition-colors">
                     <span className="material-symbols-outlined text-lg">add</span>
                   </button>
                 </div>
                 <div className="p-4 space-y-3">
                   {/* Rewards */}
                   <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                     <div className="flex justify-between items-start mb-2">
                       <h5 className="text-sm font-bold text-slate-900 dark:text-white">$10 Coupon</h5>
                       <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded">500 PTS</span>
                     </div>
                     <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-primary h-full" style={{ width: '75%' }}></div>
                     </div>
                     <p className="text-[10px] text-slate-400 mt-2 font-medium">Redeemed 124 times this month</p>
                   </div>
                   <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                     <div className="flex justify-between items-start mb-2">
                       <h5 className="text-sm font-bold text-slate-900 dark:text-white">Free Drink</h5>
                       <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded">150 PTS</span>
                     </div>
                     <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-primary h-full" style={{ width: '45%' }}></div>
                     </div>
                     <p className="text-[10px] text-slate-400 mt-2 font-medium">Redeemed 342 times this month</p>
                   </div>
                   <button className="w-full mt-2 text-center text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">View All Rewards</button>
                 </div>
               </div>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
}
