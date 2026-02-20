import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const recentOrders = [
  {
    id: '#12345',
    customer: 'Nguyễn Văn A',
    total: '1.250.000 ₫',
    status: 'Hoàn thành',
    statusColor: 'success',
  },
  {
    id: '#12346',
    customer: 'Trần Thị B',
    total: '890.000 ₫',
    status: 'Đang xử lý',
    statusColor: 'warning',
  },
  {
    id: '#12347',
    customer: 'Lê Văn C',
    total: '2.500.000 ₫',
    status: 'Đã hủy',
    statusColor: 'destructive',
  },
];

export function RecentOrdersTable() {
  return (
    <Card className='col-span-7'>
      <CardHeader>
        <CardTitle>Đơn hàng gần đây</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Mã đơn</TableHead>
              <TableHead>Khách hàng</TableHead>
              <TableHead>Tổng tiền</TableHead>
              <TableHead className='text-right'>Trạng thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className='font-medium'>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell className='text-right'>
                  <Badge variant={order.statusColor as 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'danger'}>{order.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
