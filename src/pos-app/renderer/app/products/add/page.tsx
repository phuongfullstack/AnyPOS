'use client';

import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Link from 'next/link';

export default function AddProductPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header title="Add Product" />

        {/* Action Header */}
        <div className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 shrink-0">
           <div className="flex flex-wrap items-center justify-between gap-4">
             <div className="flex items-center gap-3">
               <div className="bg-primary/10 p-2 rounded-lg text-primary">
                 <span className="material-symbols-outlined block">inventory_2</span>
               </div>
               <div>
                 <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Add New Product</h1>
                 <p className="text-xs text-slate-500 dark:text-slate-400">Inventory Management</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <Link href="/products" className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                 Cancel
               </Link>
               <button className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-blue-700 shadow-sm transition-colors flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm">save</span>
                 Save & Add New
               </button>
             </div>
           </div>
        </div>

        <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column (60%) */}
              <div className="lg:col-span-7 space-y-6">
                 {/* Basic Info */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <div className="space-y-6">
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Product Name</label>
                          <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-lg font-medium text-slate-900 dark:text-slate-100" placeholder="e.g. Wireless Ergonomic Mouse MX-2" type="text" />
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">SKU (Stock Keeping Unit)</label>
                             <div className="relative flex">
                                <input className="w-full px-4 py-2.5 rounded-l-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="SKU-00000" type="text" />
                                <button className="bg-primary/10 text-primary px-4 py-2.5 rounded-r-lg border border-l-0 border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-primary/20 transition-colors">
                                   Generate
                                </button>
                             </div>
                          </div>
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Barcode (UPC/EAN)</label>
                             <div className="relative">
                                <input className="w-full px-4 py-2.5 pl-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="Scan or enter barcode" type="text" />
                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400">barcode_scanner</span>
                             </div>
                          </div>
                       </div>
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Product Description</label>
                          <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                             <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-2 flex gap-2">
                                <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span className="material-symbols-outlined text-sm">format_bold</span></button>
                                <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span className="material-symbols-outlined text-sm">format_italic</span></button>
                                <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span className="material-symbols-outlined text-sm">format_list_bulleted</span></button>
                                <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded"><span className="material-symbols-outlined text-sm">link</span></button>
                             </div>
                             <textarea className="w-full px-4 py-3 bg-white dark:bg-slate-900 focus:outline-none border-none resize-none text-slate-900 dark:text-slate-100" placeholder="Describe the key features and benefits..." rows={5}></textarea>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Organization */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                       <span className="material-symbols-outlined text-primary">category</span>
                       Product Organization
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Category</label>
                          <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none text-slate-900 dark:text-slate-100">
                             <option>Select Category</option>
                             <option>Electronics</option>
                             <option>Office Supplies</option>
                             <option>Furniture</option>
                          </select>
                       </div>
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Brand</label>
                          <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none text-slate-900 dark:text-slate-100">
                             <option>Select Brand</option>
                             <option>AnyBrand Inc.</option>
                             <option>TechCorp</option>
                             <option>Global Logistics</option>
                          </select>
                       </div>
                    </div>
                 </div>

                 {/* Media */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                       <span className="material-symbols-outlined text-primary">add_a_photo</span>
                       Product Media
                    </h3>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                       <div className="size-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                       </div>
                       <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Click to upload or drag and drop</p>
                       <p className="text-xs text-slate-500 dark:text-slate-400">PNG, JPG or WebP (Max. 5MB per image)</p>
                    </div>
                 </div>
              </div>

              {/* Right Column (40%) */}
              <div className="lg:col-span-5 space-y-6">
                 {/* Pricing */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
                       <span className="material-symbols-outlined text-primary">payments</span>
                       Pricing & Tax
                    </h3>
                    <div className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Selling Price</label>
                             <div className="relative">
                                <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                                <input className="w-full px-8 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="0.00" type="number" />
                             </div>
                          </div>
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Cost Price</label>
                             <div className="relative">
                                <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                                <input className="w-full px-8 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="0.00" type="number" />
                             </div>
                          </div>
                       </div>
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Compare-at Price</label>
                          <div className="relative">
                             <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                             <input className="w-full px-8 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="0.00" type="number" />
                          </div>
                          <p className="text-[10px] text-slate-500 mt-1">Leave empty if no discount is applied.</p>
                       </div>
                       <div className="pt-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                             <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" defaultChecked />
                             <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Tax included in price</span>
                          </label>
                       </div>
                    </div>
                 </div>

                 {/* Inventory */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="text-base font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100">
                          <span className="material-symbols-outlined text-primary">inventory</span>
                          Inventory
                       </h3>
                       <label className="flex items-center gap-2 cursor-pointer">
                          <span className="text-xs font-semibold text-slate-500">Track Inventory</span>
                          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" defaultChecked />
                       </label>
                    </div>
                    <div className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Current Stock</label>
                             <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" type="number" defaultValue={0} />
                          </div>
                          <div>
                             <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Low Stock Threshold</label>
                             <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-red-600 dark:text-red-400 font-bold" type="number" defaultValue={5} />
                          </div>
                       </div>
                       <div>
                          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Unit of Measurement</label>
                          <input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-900 dark:text-slate-100" placeholder="e.g. Pcs, Box, Kg" type="text" />
                       </div>
                    </div>
                 </div>

                 {/* Variants */}
                 <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <label className="flex items-start gap-3 cursor-pointer group">
                       <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                       <div>
                          <span className="block text-sm font-bold text-slate-900 dark:text-slate-100">Multiple Variants</span>
                          <span className="block text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">This product has options like different sizes, colors, or materials.</span>
                       </div>
                    </label>
                    <div className="mt-4">
                       <Link href="/products/variants" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                          Configure Variants <span className="material-symbols-outlined text-sm">arrow_forward</span>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}
