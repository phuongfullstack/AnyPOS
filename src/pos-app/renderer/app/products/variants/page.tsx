'use client';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Link from 'next/link';

export default function VariantsPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Product Variants" />

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           {/* Breadcrumbs & Header */}
           <div className="mb-8">
             <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
               <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
               <span className="material-symbols-outlined text-xs">chevron_right</span>
               <Link href="/products/add" className="hover:text-primary transition-colors">Add New Product</Link>
               <span className="material-symbols-outlined text-xs">chevron_right</span>
               <span className="text-slate-900 dark:text-slate-100 font-medium">Product Variants</span>
             </div>
             <div className="flex flex-wrap justify-between items-end gap-4">
               <div className="flex flex-col gap-1">
                 <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Product Variants</h1>
                 <p className="text-slate-500 text-base">Define attributes like size or color to generate multiple SKU variations for your product.</p>
               </div>
               <div className="flex gap-3">
                 <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                   Cancel Changes
                 </button>
                 <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                   <span className="material-symbols-outlined text-sm">save</span>
                   Save All Variants
                 </button>
               </div>
             </div>
           </div>

           {/* Attributes */}
           <div className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                 <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">tune</span>
                    Configure Attributes
                 </h3>
              </div>
              <div className="p-6 space-y-6">
                 {/* Row 1 */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-4 flex flex-col gap-2">
                       <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Option Name</label>
                       <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 text-sm outline-none" placeholder="e.g. Size" type="text" defaultValue="Size" />
                    </div>
                    <div className="md:col-span-7 flex flex-col gap-2">
                       <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Option Values</label>
                       <div className="flex flex-wrap items-center gap-2 p-2 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 min-h-[48px]">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                             Small <span className="material-symbols-outlined text-sm cursor-pointer hover:text-red-500">close</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                             Medium <span className="material-symbols-outlined text-sm cursor-pointer hover:text-red-500">close</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                             Large <span className="material-symbols-outlined text-sm cursor-pointer hover:text-red-500">close</span>
                          </span>
                          <input className="flex-1 min-w-[120px] border-none focus:ring-0 p-0 text-sm bg-transparent outline-none" placeholder="Type and press enter..." type="text" />
                       </div>
                    </div>
                    <div className="md:col-span-1 pt-8 flex justify-center">
                       <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined">delete</span>
                       </button>
                    </div>
                 </div>
                 {/* Row 2 */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-4 flex flex-col gap-2">
                       <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Option Name</label>
                       <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary h-12 px-4 text-sm outline-none" type="text" defaultValue="Color" />
                    </div>
                    <div className="md:col-span-7 flex flex-col gap-2">
                       <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Option Values</label>
                       <div className="flex flex-wrap items-center gap-2 p-2 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 min-h-[48px]">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                             Navy <span className="material-symbols-outlined text-sm cursor-pointer hover:text-red-500">close</span>
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                             Charcoal <span className="material-symbols-outlined text-sm cursor-pointer hover:text-red-500">close</span>
                          </span>
                          <input className="flex-1 min-w-[120px] border-none focus:ring-0 p-0 text-sm bg-transparent outline-none" placeholder="Type and press enter..." type="text" />
                       </div>
                    </div>
                    <div className="md:col-span-1 pt-8 flex justify-center">
                       <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined">delete</span>
                       </button>
                    </div>
                 </div>
                 <button className="mt-4 flex items-center gap-2 text-primary font-bold text-sm border-2 border-primary/20 hover:border-primary/40 px-4 py-2 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add another option
                 </button>
              </div>
           </div>

           {/* Variant List */}
           <div className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="bg-primary px-6 py-3 flex items-center justify-between">
                 <div className="flex items-center gap-4 text-white">
                    <span className="font-bold text-sm">3 Variants Selected</span>
                    <div className="h-4 w-px bg-white/30"></div>
                    <div className="flex gap-2">
                       <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs font-bold transition-colors flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">payments</span> Update Price
                       </button>
                       <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs font-bold transition-colors flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">inventory</span> Update Stock
                       </button>
                    </div>
                 </div>
                 <button className="text-white hover:text-white/70 transition-colors">
                    <span className="material-symbols-outlined">close</span>
                 </button>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse min-w-[1000px]">
                    <thead>
                       <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                          <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" defaultChecked /></th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Variant Name</th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Price ($)</th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cost ($)</th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">SKU</th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Barcode</th>
                          <th className="p-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Stock</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                       <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors bg-blue-50/20 dark:bg-primary/5">
                          <td className="p-4 text-center"><input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" defaultChecked /></td>
                          <td className="p-4"><span className="font-bold text-slate-900 dark:text-slate-100 text-sm">Small / Navy</span></td>
                          <td className="p-4"><input className="w-24 px-2 py-1 text-sm border border-transparent focus:border-primary focus:ring-0 rounded bg-transparent dark:text-slate-100 outline-none" type="number" defaultValue="29.99" /></td>
                          <td className="p-4"><input className="w-24 px-2 py-1 text-sm border border-transparent focus:border-primary focus:ring-0 rounded bg-transparent dark:text-slate-100 outline-none" type="number" defaultValue="12.50" /></td>
                          <td className="p-4"><input className="w-32 px-2 py-1 text-sm border border-transparent focus:border-primary focus:ring-0 rounded bg-transparent dark:text-slate-100 font-mono outline-none" type="text" defaultValue="TSH-NVY-S" /></td>
                          <td className="p-4"><input className="w-32 px-2 py-1 text-sm border border-transparent focus:border-primary focus:ring-0 rounded bg-transparent dark:text-slate-100 outline-none" type="text" defaultValue="892100342" /></td>
                          <td className="p-4 text-right"><input className="w-20 px-2 py-1 text-sm text-right border border-transparent focus:border-primary focus:ring-0 rounded bg-transparent dark:text-slate-100 outline-none" type="number" defaultValue="45" /></td>
                       </tr>
                       {/* Add more rows if needed based on design, staying concise for now */}
                    </tbody>
                 </table>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}
