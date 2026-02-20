'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', href: '/' },
    { name: 'POS', icon: 'point_of_sale', href: '/pos' },
    { name: 'Orders', icon: 'shopping_bag', href: '/orders' },
    { name: 'Inventory', icon: 'inventory_2', href: '/products' },
    { name: 'Customers', icon: 'group', href: '/customers' },
    { name: 'Reports', icon: 'bar_chart', href: '/reports' },
    { name: 'Promotions', icon: 'campaign', href: '/promotions' },
    { name: 'Settings', icon: 'settings', href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-2xl">storefront</span>
        </div>
        <div className="min-w-0">
          <h1 className="text-xl font-bold tracking-tight text-primary truncate">AnyPOS</h1>
          <p className="text-xs text-slate-500 font-medium truncate">Desktop Console</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                isActive
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          <div className="size-8 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden shrink-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv_V7oxYcI6RZmFYyNqCkY0Udk83fz8tw2mnfillPF5YAU8iQ03KQZc4NYFsN-rXp8TNzB4WySvr16g4DtJyRB9wD435cUBXLAentz3LEmLnAzOMvmLQDjcEUVeGcWfC0q3UKvEDNVLt7_ObVkKz0XJbz93so_IyF_WHjsnMHBIDPZVrGR8FQtvXoa8TS2kHwv8V4uuidNzpCfK-b0WZ_b3gb5gJnJwminuGA5BYaGetfi5Uo8u5WrGkdH5pJjGc3NiWjjpwrrERY" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">Alex Morgan</span>
            <span className="text-[10px] text-slate-500 truncate">Store Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
