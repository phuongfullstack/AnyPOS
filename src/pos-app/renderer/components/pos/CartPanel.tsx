"use client";
import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus, UserPlus } from 'lucide-react';
import { Product } from './ProductGrid';

export interface CartItem extends Product {
  quantity: number;
}

interface CartPanelProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function CartPanel({ cart, onUpdateQuantity, onRemoveItem, onCheckout }: CartPanelProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <Card className='flex flex-col h-full rounded-none border-l'>
      <CardHeader className='pb-4 border-b'>
        <div className='flex items-center gap-2'>
          <Input placeholder='Tìm khách hàng...' className='flex-1' />
          <Button size='icon' variant='outline'>
            <UserPlus className='h-4 w-4' />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='flex-1 overflow-y-auto py-4 space-y-4'>
        {cart.length === 0 ? (
          <div className='text-center text-muted-foreground mt-10'>Giỏ hàng trống</div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className='flex items-center justify-between gap-2'>
              <div className='flex-1'>
                <div className='font-medium'>{item.name}</div>
                <div className='text-sm text-muted-foreground'>{item.price.toLocaleString()} ₫</div>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  size='icon'
                  variant='ghost'
                  className='h-8 w-8'
                  onClick={() => onUpdateQuantity(item.id, -1)}
                >
                  <Minus className='h-3 w-3' />
                </Button>
                <span className='w-4 text-center text-sm'>{item.quantity}</span>
                <Button
                  size='icon'
                  variant='ghost'
                  className='h-8 w-8'
                  onClick={() => onUpdateQuantity(item.id, 1)}
                >
                  <Plus className='h-3 w-3' />
                </Button>
                <Button
                  size='icon'
                  variant='ghost'
                  className='h-8 w-8 text-destructive hover:text-destructive'
                  onClick={() => onRemoveItem(item.id)}
                >
                  <Trash2 className='h-3 w-3' />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
      <CardFooter className='flex-col gap-4 border-t pt-4 bg-muted/20'>
        <div className='w-full space-y-2'>
          <div className='flex justify-between text-sm'>
            <span>Tạm tính</span>
            <span>{subtotal.toLocaleString()} ₫</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span>Thuế (10%)</span>
            <span>{tax.toLocaleString()} ₫</span>
          </div>
          <div className='flex justify-between font-bold text-lg'>
            <span>Tổng cộng</span>
            <span className='text-primary'>{total.toLocaleString()} ₫</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 w-full'>
          <Button variant='outline'>Lưu đơn</Button>
          <Button variant='destructive' onClick={() => cart.forEach(i => onRemoveItem(i.id))}>Hủy</Button>
          <Button className='col-span-2' size='lg' onClick={onCheckout} disabled={cart.length === 0}>
            Thanh toán
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
