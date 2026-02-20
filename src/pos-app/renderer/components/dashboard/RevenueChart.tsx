"use client";
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'T2', value: 4000000 },
  { name: 'T3', value: 3000000 },
  { name: 'T4', value: 2000000 },
  { name: 'T5', value: 2780000 },
  { name: 'T6', value: 1890000 },
  { name: 'T7', value: 2390000 },
  { name: 'CN', value: 3490000 },
];

export function RevenueChart() {
  return (
    <Card className='col-span-4'>
      <CardHeader>
        <CardTitle>Doanh thu theo tuần</CardTitle>
      </CardHeader>
      <CardContent className='pl-2'>
        <ResponsiveContainer width='100%' height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='value' stroke='#0056b3' />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
