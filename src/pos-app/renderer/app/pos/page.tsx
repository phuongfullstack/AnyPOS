'use client';

import { useState } from 'react';
import Link from 'next/link';
import PaymentModal from '../../components/PaymentModal';

export default function POSPage() {
  const [showPayment, setShowPayment] = useState(false);
  const [cart, setCart] = useState([
    { id: 1, name: 'Espresso Macchiato', price: 4.50, qty: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCobsAXatA1kEd2piNYhqOs8lE8i8fFejZvJIem2-fjgph7OwIuFLZ-2990DSjtbUY1pJx20JoJcW-9fyiQqbdnqMx1mUxWjXRnrkV7QlcBw-cnLYCu3LRDMOMYyeIIAQ5WbOLJWMVXQ8NF8JYnFKriba4jNX3n8bZkYdDmeNki76uBiaruJvCyJDhXHnY8W_gfIeHvzRDdgDPsUz2HAwu8zdsp9ro9kY3-UEp2bgqfyvZpGXSz6A_XISQiN4sbnHYkoxlR58OsVTg' },
    { id: 2, name: 'Butter Croissant', price: 3.25, qty: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC31xyatNe62lmLrKXmpKyXA6UJPYUDWDrHrt-nfu3-H7wTlFVhX6CKk0nUp61j5RI5TnlBLHyT3nQnDwbVxBkcNoO6SuLlxGsKFrEUgubKXiqRULIbF8wg9wfQhlwWD6M7DkQaTUI155P6afJ551QpvTVPFtn7Wm7AJa0XHM19CRtiRVdYGSYK9741SYA7YAyWdwttFE87mfdkZqtmnRmfUGgejP-ltK1hnY-aaKZ-KPu8JdzXF6YEF8cCbeZ7mbZ5IXKuFQ20je8' },
    { id: 3, name: 'Avocado Chicken Salad', price: 12.50, qty: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA9KdLF-FSC89rUtXCrElBQFzPrFRrSQpj06434uRNhkoXJMrBG33JL0pNHGiyZwsvUO7rfym6XUp2ND1IDHP5Y60KnsuQgXh-i7nqhT0rnISaszsxL9wpPQ6omLazos8gc5DZL-y_-qykZPKIfl90OlGMJ1KK71XkBCnhEZDuM_9WYsNR2K3PkBVytCAmaRDHiybY6o5ImsbRdcQ7rRi4uyGmcKNAxv3D1398-qY-D4g1y2jN5AqzRItMpA7UFKvmqllXd7U5BfI' },
  ]);

  const products = [
    { id: 1, name: 'Espresso Macchiato', price: 4.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJXgY_bFQ50gy1s0QBhMhnhKXhdCtiVATcw96EE9U6hDcuRFY6n12js9nRI_F_GBijtOU2nBMTJ-XznEYEOYe9BTVEz15jGVNBMshSoGUyXU_b6qDubkaj6hmhXgxjfnfZSgWgv7vkeFc3y__ZU7T4RI4CjjmdW4pTy2_alJTvE-UQHRlcXofHC9A4zfWrvEdGOJdG5_CiTr85hsK6UidCu8kuJWUvj-6ycQtVGbjGjcuvRfZtPywKQOhcc-gfJiv1ayZVeqT6Uk' },
    { id: 2, name: 'Butter Croissant', price: 3.25, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_hiUEmH7tYlImqsfBzv2GtaqtABsYNslfxRcZ4A_Et_cvC8YpCJ9nTnW9zbg52obagPpVcyXEfxTCfQ1NQQRQ7YXklg15Vm0FSOMogD6yYJUGhKstM_1pyXSlXcpvj0cDmxl3CnVycvdYY3HO7Itbe9cJ1OJvUeQU-q1xkSQl6IpR5--foB_5eZ2oSCvL0pcee7TiBl58dkPg4e-e5mHJGGBQmq5TAAXKG4g16bzohcrNTjthKlE-XeYxa4N3TZfWxHtr258M_Ng' },
    { id: 3, name: 'Caffè Latte', price: 5.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrd1WlHqHgnSlSIeX7xmdDPB8PpqpVTCj-Gndfbu5hjxFnxvWfCx0PA8iXx0mu3YRDDXN22wfV90JSD7YhsOOPtRyMhxw0AanR3YI2dlwNEgbCTug5J3LnT6O3uE9xqAlAiYKSZuzM4KJm0uCT1g2PJX6kJd8MXx9zmh-7uCsAg-jG24g1OwbKJ9rBJdYIjHw7Li5qwTp327_e3v34z-ci7rPTa70owtSfeV-ET6b2AidJSuTZQlcLlSGaZLuP_Bu-UHFPeG43hB0' },
    { id: 4, name: 'Signature Hot Chocolate', price: 5.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA35Mvcrd05F7yl2D_cSU6o7C7IQBGQC74MRjVFu3lKsLaE2lGAOLTaz44qNUqbFNq8dLp-y3anaQ2m8h8_dMY0qbsRCiEFKNmE7qGVVQjje36Z-SCqR34gYm_JcSpea1JjfrtTvr6eH2Dgp8yG0EqKDJTHqfQ28GUleKnsL_bZyHPasK_w81awcUSxWEJYJDibk8zunNs9S5_7nrUKxVCqIoBLzuIt7mfOjBWzW4u55sKc8o7fXCydUTAAgtdbv1034E6mwjpaalw' },
    { id: 5, name: 'Glazed Artisan Donut', price: 4.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQCsHf0oJSWiGY0f0wpVLFWMR82W0oucxCm_T8WnzRWfva-DT4mkrLYOlX0t4EqND3PuJKAdM3Kx6Z6dc2ODvte8h4aHK28KdStxz4LFGzBpejlFxESmZVl5AhuWQJdv3bd2VinZTEjt2XTviSJJi94S2QbGi5mWvhN9U0MuNG3oP8wt_h_0EsUzsfBQnCb5RF-SW-VMNYRBALPeeFxTTyuxh3RhRMrQ_v-wwWOmneDjc9vp5EuKL-yc88MaTv1T-3Dh8ZxxDzilg' },
    { id: 6, name: 'Choco Chip Cookie', price: 2.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxGPwhnlo9bS9-BD5p97pw8N_3o85dPaYUk4J6hXpQd0zeBKmvvmcObf7wm4L6_ZRPHQuICRwyohl9QDJRly02eLS1pF5rRNLaRBR5IN9v-V_DOnZUOWEfTavntCFz5c0hgrG36NSRGk74lJuWdB1NX5mplhgpI4ckRJchjuiYvJv2c6xrLwGnMQf3KKsMTOYLaWRgBurWr9OvqvXV66zkbMw2lNoZOoUxUO9n6gct9SDjEdJE3EQ02xyfegzQxbJzZhyCXWP9TvY' },
    { id: 7, name: 'Fresh Orange Juice', price: 6.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgVKtg_2mSfGuAWv3FvID26FPFTUtkl3szNvUcFI_9aam2t3QPE0RfiWtWuR55jm36DDmOZ08P0sa87V2qKOU7MWXnghzRmMtIcU9mjSMEN4iE_RxmuLDLUonxQECS1SHX2cRtjJFuQLIxj_lYQ5Ipe2TgvY-jAJrteK0lEaWetSO5m7h-1wQIn46qHar08aS21f_UXODCcnbYqX_vIuQKnCEBBPSaF-btWGwcncigIZNxHoBrPzSGlBeUkCkpViwsx3V9l86IL0' },
    { id: 8, name: 'Avocado Chicken Salad', price: 12.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq-fXedB7t-5bFZ7hgNXTJmEqjwLhTynevsmKgcAEVpxmQdm3ImeHb4HB7heWz4mxaP-eg7o0V5CTOViR7IYLAWTFEzgIGdYkhMPLjRPOX2er7w6GJowFvo5kePcAYad7MiXyLx5mbH8rvC4CGNj1b-xArxjRLKTuqoQgl60gJeLRGQBsT1wHJ0-AI5QVqIbYluYTHS2UaFHZO8GmubDa0VObWwJnk-jLM6yH22hyIhlErtQ9xkiwsERZ7I2F1wjmxH1vFdcbGy30' },
  ];

  const subTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subTotal * 0.08;
  const discount = 2.00;
  const total = subTotal + tax - discount;

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Collapsed Sidebar */}
      <aside className="w-20 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-6 gap-8 shrink-0">
        <Link href="/" className="size-12 bg-primary rounded-xl flex items-center justify-center text-white mb-4">
          <span className="material-symbols-outlined text-3xl">point_of_sale</span>
        </Link>
        <nav className="flex flex-col gap-4 flex-1">
          <Link href="/" className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5">
            <span className="material-symbols-outlined">dashboard</span>
          </Link>
          <button className="p-3 text-primary bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined fill-1">calculate</span>
          </button>
          <Link href="/orders" className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5">
            <span className="material-symbols-outlined">receipt_long</span>
          </Link>
          <Link href="/products" className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5">
            <span className="material-symbols-outlined">inventory_2</span>
          </Link>
          <Link href="/customers" className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5">
             <span className="material-symbols-outlined">group</span>
          </Link>
        </nav>
        <Link href="/settings" className="p-3 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 mt-auto">
          <span className="material-symbols-outlined">settings</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 p-6 overflow-hidden">
        {/* Top Header */}
        <header className="flex flex-col gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 text-base outline-none text-slate-900 dark:text-slate-100"
                placeholder="Search products or scan barcode..."
                type="text"
              />
            </div>
            <button className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:bg-slate-50 transition-colors text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">barcode_scanner</span>
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
            <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap">All Items</button>
            <button className="px-6 py-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">Food</button>
            <button className="px-6 py-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">Drinks</button>
            <button className="px-6 py-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">Electronics</button>
          </div>
        </header>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white dark:bg-slate-900 rounded-xl p-3 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all cursor-pointer group flex flex-col h-full">
                <div className="aspect-square rounded-lg bg-slate-100 dark:bg-slate-800 mb-3 overflow-hidden relative shrink-0">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src={product.image} alt={product.name} />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate">{product.name}</h3>
                <p className="text-primary font-extrabold text-base mt-auto">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Panel */}
      <aside className="w-[450px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-hidden shadow-xl z-20">
         <div className="p-6 border-b border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-3">
             <div className="relative flex-1">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person_search</span>
               <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-1 focus:ring-primary text-sm outline-none text-slate-900 dark:text-slate-100" placeholder="Add customer..." type="text" />
             </div>
             <button className="size-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
               <span className="material-symbols-outlined">person_add</span>
             </button>
           </div>
         </div>

         <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
           <div className="flex flex-col gap-6">
             {cart.map(item => (
               <div key={item.id} className="flex items-center gap-4 group">
                 <div className="size-14 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                   <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate">{item.name}</h4>
                   <p className="text-xs text-slate-500">${item.price.toFixed(2)}</p>
                 </div>
                 <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                   <button className="size-7 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                     <span className="material-symbols-outlined text-lg">remove</span>
                   </button>
                   <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                   <button className="size-7 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                     <span className="material-symbols-outlined text-lg">add</span>
                   </button>
                 </div>
                 <div className="text-right min-w-[60px]">
                   <p className="text-sm font-bold text-slate-800 dark:text-slate-100">${(item.price * item.qty).toFixed(2)}</p>
                 </div>
                 <button className="text-slate-300 hover:text-red-500 transition-colors">
                   <span className="material-symbols-outlined text-xl">delete</span>
                 </button>
               </div>
             ))}
           </div>
         </div>

         <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold">${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Discount</span>
                <span className="font-semibold text-green-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Tax (8%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={() => setShowPayment(true)} className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">payments</span>
                Checkout
              </button>
              <div className="grid grid-cols-3 gap-3">
                <button className="flex flex-col items-center justify-center gap-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                   <span className="material-symbols-outlined text-xl">save</span>
                   <span className="text-[10px] uppercase font-bold tracking-wider">Save</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                   <span className="material-symbols-outlined text-xl">print</span>
                   <span className="text-[10px] uppercase font-bold tracking-wider">Print</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1 py-3 bg-white dark:bg-slate-800 border border-red-100 dark:border-red-900/30 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                   <span className="material-symbols-outlined text-xl">close</span>
                   <span className="text-[10px] uppercase font-bold tracking-wider">Cancel</span>
                </button>
              </div>
            </div>
         </div>
      </aside>

      {showPayment && (
        <PaymentModal
          total={total}
          onClose={() => setShowPayment(false)}
          onConfirm={() => { alert('Payment Processed!'); setShowPayment(false); }}
        />
      )}
    </div>
  );
}
