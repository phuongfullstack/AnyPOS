import * as React from 'react';
import { KPICards } from '@/components/dashboard/KPICards';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { RecentOrdersTable } from '@/components/dashboard/RecentOrdersTable';
import { RecentActivities } from '@/components/dashboard/RecentActivities';

export default function Dashboard() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>Tổng quan</h2>
      </div>
      <KPICards />
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-7'>
        <RevenueChart />
        <RecentActivities />
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-7'>
         <RecentOrdersTable />
      </div>
    </div>
  );
}
