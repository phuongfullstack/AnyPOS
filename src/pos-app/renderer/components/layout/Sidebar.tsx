"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  ShoppingBag,
  Package,
  Users,
  Warehouse,
  FileText,
  Settings,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const sidebarItems = [
  {
    title: 'Tổng quan',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Bán hàng',
    href: '/pos',
    icon: ShoppingCart,
  },
  {
    title: 'Đơn hàng',
    href: '/orders',
    icon: ShoppingBag,
  },
  {
    title: 'Sản phẩm',
    href: '/products',
    icon: Package,
  },
  {
    title: 'Khách hàng',
    href: '/customers',
    icon: Users,
  },
  {
    title: 'Kho',
    href: '/inventory',
    icon: Warehouse,
  },
  {
    title: 'Báo cáo',
    href: '/reports',
    icon: FileText,
  },
  {
    title: 'Cài đặt',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='flex h-full w-64 flex-col border-r bg-background'>
      <div className='flex h-16 items-center border-b px-6'>
        <Link href='/dashboard' className='flex items-center gap-2 font-bold text-2xl text-primary'>
          <span>AnyPOS</span>
        </Link>
      </div>
      <div className='flex-1 overflow-y-auto py-4'>
        <nav className='grid gap-1 px-2'>
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'text-muted-foreground'
              )}
            >
              <item.icon className='h-5 w-5' />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
