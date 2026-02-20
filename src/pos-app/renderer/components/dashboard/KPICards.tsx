import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const kpiData = [
  {
    title: 'Doanh thu hôm nay',
    value: '12.500.000 ₫',
    icon: DollarSign,
    trend: '+15%',
    trendColor: 'text-green-500',
  },
  {
    title: 'Số lượng đơn hàng',
    value: '45',
    icon: ShoppingCart,
    trend: '+8%',
    trendColor: 'text-green-500',
  },
  {
    title: 'Lợi nhuận ước tính',
    value: '4.200.000 ₫',
    icon: TrendingUp,
    trend: '+12%',
    trendColor: 'text-green-500',
  },
  {
    title: 'Khách hàng mới',
    value: '12',
    icon: Users,
    trend: '-5%',
    trendColor: 'text-red-500',
  },
];

export function KPICards() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {kpiData.map((item, index) => (
        <Card key={index}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              {item.title}
            </CardTitle>
            <item.icon className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{item.value}</div>
            <p className='text-xs text-muted-foreground'>
              <span className={item.trendColor}>{item.trend}</span> so với hôm qua
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
