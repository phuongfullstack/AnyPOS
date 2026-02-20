"use client";
import * as React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingCart, ShoppingBag, Package, Users, Warehouse, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  {
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Tổng quan',
  },
  {
    href: '/pos',
    icon: ShoppingCart,
    label: 'Bán hàng',
  },
  {
    href: '/orders',
    icon: ShoppingBag,
    label: 'Đơn hàng',
  },
  {
    href: '/products',
    icon: Package,
    label: 'Sản phẩm',
  },
  {
    href: '/customers',
    icon: Users,
    label: 'Khách hàng',
  },
  {
    href: '/inventory',
    icon: Warehouse,
    label: 'Kho',
  },
  {
    href: '/reports',
    icon: FileText,
    label: 'Báo cáo',
  },
  {
    href: '/settings',
    icon: Settings,
    label: 'Cài đặt',
  },
];

export function SidebarCollapsed() {
  const pathname = usePathname();

  return (
    <div className='flex h-full w-16 flex-col border-r bg-background items-center py-4 gap-2'>
      <div className='mb-4'>
        <span className='font-bold text-xl text-primary'>AP</span>
      </div>
      {sidebarItems.map((item, index) => (
        <Link key={index} href={item.href} title={item.label}>
          <Button
            variant={pathname === item.href ? 'default' : 'ghost'}
            size='icon'
            className={cn('rounded-lg', pathname === item.href && 'bg-primary text-primary-foreground')}
          >
            <item.icon className='h-5 w-5' />
          </Button>
        </Link>
      ))}
    </div>
  );
}
