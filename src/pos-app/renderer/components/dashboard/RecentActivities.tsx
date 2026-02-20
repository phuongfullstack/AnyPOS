import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Nhập kho',
    description: 'Nhập 500 cái áo thun',
    time: '2 giờ trước',
  },
  {
    id: 2,
    title: 'Thêm khách hàng mới',
    description: 'Nguyễn Văn A',
    time: '4 giờ trước',
  },
  {
    id: 3,
    title: 'Đơn hàng mới',
    description: 'Đơn hàng #12345 đã được tạo',
    time: '6 giờ trước',
  },
];

export function RecentActivities() {
  return (
    <Card className='col-span-3'>
      <CardHeader>
        <CardTitle>Hoạt động gần đây</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {activities.map((activity) => (
            <div key={activity.id} className='flex items-center space-x-4'>
              <div className='rounded-full bg-primary/10 p-2 text-primary'>
                <Activity className='h-4 w-4' />
              </div>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {activity.title}
                </p>
                <p className='text-xs text-muted-foreground'>
                  {activity.description}
                </p>
              </div>
              <div className='text-xs text-muted-foreground'>
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
