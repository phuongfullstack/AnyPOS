'use client';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Organic Coffee Beans', desc: 'Dark Roast, 500g', sku: 'CF-001', category: 'Beverages', cost: 12.00, price: 25.00, stock: 45, status: 'In Stock', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe5s8UhDBzGKhFwap2cyDfKKU2IbWrsz0qGhHhe0b6PGSlat703-O6zTnwrNxC0pbC-fCfqsdTYwmeP-P6g_vYFuFcPGzdYC3fUgj1V38651i0NPAYdAIfRGvnkhrrwmtQYlZJkuF05E7K4yZ5DRsP8VJlJsJVJ18KMbvpfNgdRl2vbP658MKPdzIGKZNvi3jgxuqu7MDtQlng4hjO55uriJbn47sl0TNiNdmuns7zmUmGwhPeJ04jqMvD9lp6B4mgvBSd4E0xUZs' },
    { id: 2, name: 'Paper Filters', desc: 'Standard V60, 100pk', sku: 'PF-092', category: 'Equipment', cost: 2.00, price: 5.50, stock: 3, status: 'Low Stock', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCosatlF2CqIv707e2h-zm_PZw_Bl39pvJ0vBL19YkVtu4pwy9O0AP9tUbVN1aAR1AtHYiMqWPfOuxndRHy0Gokt1DvXVGZ48GmEUwEQUxCmf0kn27xHqIR_5hX8pkD7PsOU-gIZVJEnXHnkfBx-WT2ggjvqNtgv-eGkbHjZSYkbJ1HWMZ4oDH6JPJrYFdOT-ntFoy9ZE1EiWFW70ZzzmKXoCAKkqCPmxO_9EndIa9bM-PQv77ebV1HY4GObM3ie2HdebqBpSye8ok' },
    { id: 3, name: 'Electric Grinder', desc: 'Titanium burr, Silver', sku: 'EG-114', category: 'Appliances', cost: 85.00, price: 199.00, stock: 0, status: 'Out of Stock', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkIkpf9jsfDgtwilLsmCoGlNE9XMBJJwlRe5MQ766mbNq00Ec1lyPYL8iMAwgsHYyHn_Yu8rBcs8pLU_dEsAYzK30tuFcBpFIbJgY8scNsaO545pobEUkATBw7AjCbQbGFFSx7VHpeli4s36NAfx5DOgisxNTLHu8p7ZIzzdVKEcyJwMWrnxt39pL4dTgg9zHyDILT71FmHqjRPI3Iz9xaNt1THRf82Gzm-GY68BPpwLhVdTAShX7eB-iV1qYy114ASkSkVgtgzJE' },
    { id: 4, name: 'Ceramic Mug', desc: 'Handcrafted, Matte Black', sku: 'CM-202', category: 'Merchandise', cost: 4.50, price: 12.99, stock: 128, status: 'In Stock', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAumxKA5kr5cXYnXLpV20ngfX3e-3FoDGSUJuBs2AgLvuEf_djuejAYiLSHFKh-NTlCBy76XMZ91KnIbTWhEV_rtHR4c66y6wZIJQGRGSw8ZK3I51IASHH0y_Xk8ip4kuSPFA-W1xq8su-e--koz1XQkZNIUI-BGvOC5f06Gkom-AsWTkA8ITx5UdMhGgite3Y4m09hOzoeG1LPFKXOCR4ahQuvjaz6JdIIp0eAwOEf2gibV3QtWeUtonXFPLtT2zXnayrCEN1_EXM' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Product Management" />

        <main className="flex-1 overflow-y-auto min-w-0 custom-scrollbar">
           {/* Header Actions */}
           <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6">
             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
               <div>
                 <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">Product List</h2>
                 <p className="text-slate-500 text-sm">Manage your store inventory and product details.</p>
               </div>
               <div className="flex flex-wrap items-center gap-3">
                 <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 h-10 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                   <span className="material-symbols-outlined text-lg">upload</span>
                   Import
                 </button>
                 <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 h-10 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                   <span className="material-symbols-outlined text-lg">download</span>
                   Export
                 </button>
                 <Link href="/products/add" className="bg-primary text-white px-5 h-10 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                   <span className="material-symbols-outlined text-lg">add</span>
                   Add New Product
                 </Link>
               </div>
             </div>
           </div>

           {/* Filters */}
           <div className="p-6 bg-slate-50/50 dark:bg-slate-900/50">
             <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center shadow-sm">
               <div className="relative flex-1 w-full">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                 <input className="w-full pl-10 pr-4 h-11 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm outline-none text-slate-900 dark:text-slate-100" placeholder="Search by name, SKU, or category..." type="text" />
               </div>
               <div className="flex gap-3 w-full md:w-auto">
                 <div className="relative w-full md:w-48">
                   <select className="w-full pl-4 pr-10 h-11 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none font-medium text-slate-900 dark:text-slate-100 outline-none">
                     <option>All Categories</option>
                     <option>Electronics</option>
                     <option>Food & Beverage</option>
                     <option>Home Decor</option>
                   </select>
                   <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                 </div>
                 <div className="relative w-full md:w-48">
                   <select className="w-full pl-4 pr-10 h-11 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm appearance-none font-medium text-slate-900 dark:text-slate-100 outline-none">
                     <option>Stock Status: All</option>
                     <option>In Stock</option>
                     <option>Low Stock</option>
                     <option>Out of Stock</option>
                   </select>
                   <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">filter_list</span>
                 </div>
               </div>
             </div>
           </div>

           {/* Table */}
           <div className="flex-1 px-6 overflow-x-auto pb-6">
             <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cost</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Selling Price</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                     <th className="px-4 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                   {products.map(p => (
                     <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                       <td className="px-4 py-3">
                         <div className="flex items-center gap-3">
                           <div className="size-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                             <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{p.name}</p>
                             <p className="text-xs text-slate-500">{p.desc}</p>
                           </div>
                         </div>
                       </td>
                       <td className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400">{p.sku}</td>
                       <td className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400">{p.category}</td>
                       <td className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400">${p.cost.toFixed(2)}</td>
                       <td className="px-4 py-3 text-sm font-bold text-primary">${p.price.toFixed(2)}</td>
                       <td className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400">{p.stock}</td>
                       <td className="px-4 py-3">
                         <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                           p.status === 'In Stock' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                           p.status === 'Low Stock' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                           'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                         }`}>
                           {p.status}
                         </span>
                       </td>
                       <td className="px-4 py-3 text-right">
                         <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                             <span className="material-symbols-outlined text-xl">edit</span>
                           </button>
                           <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all">
                             <span className="material-symbols-outlined text-xl">content_copy</span>
                           </button>
                           <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all">
                             <span className="material-symbols-outlined text-xl">delete</span>
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
           <footer className="p-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto bg-white dark:bg-slate-900">
             <div className="flex items-center gap-4">
               <p className="text-sm text-slate-500 font-medium">Showing 1-10 of 248 products</p>
               <div className="flex items-center gap-2">
                 <span className="text-sm text-slate-500">Rows per page:</span>
                 <select className="h-8 py-0 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded text-xs font-bold focus:ring-primary/20 outline-none text-slate-700 dark:text-slate-300">
                   <option>10</option>
                   <option>25</option>
                   <option>50</option>
                 </select>
               </div>
             </div>
             <div className="flex items-center gap-1">
               <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                 <span className="material-symbols-outlined">chevron_left</span>
               </button>
               <button className="size-9 rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20">1</button>
               <button className="size-9 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
               <button className="size-9 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
               <span className="px-2 text-slate-400">...</span>
               <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                 <span className="material-symbols-outlined">chevron_right</span>
               </button>
             </div>
           </footer>
        </main>
      </div>
    </div>
  );
}
