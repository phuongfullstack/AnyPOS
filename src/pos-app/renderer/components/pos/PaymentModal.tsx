"use client";
import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Banknote, CreditCard, QrCode, ArrowLeftRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onConfirm: () => void;
}

const denominations = [10000, 20000, 50000, 100000, 200000, 500000];

export function PaymentModal({ isOpen, onClose, totalAmount, onConfirm }: PaymentModalProps) {
  const [method, setMethod] = React.useState<'cash' | 'card' | 'qr' | 'transfer'>('cash');
  const [receivedAmount, setReceivedAmount] = React.useState<string>('');

  const received = parseInt(receivedAmount.replace(/\D/g, '') || '0', 10);
  const change = Math.max(0, received - totalAmount);

  const handleDenominationClick = (amount: number) => {
    setReceivedAmount((prev) => {
      const current = parseInt(prev.replace(/\D/g, '') || '0', 10);
      return (current + amount).toString();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl h-[600px] flex flex-col p-0 gap-0 overflow-hidden'>
        <div className='flex items-center justify-between p-6 border-b bg-muted/20'>
          <div>
            <h2 className='text-lg font-semibold'>Thanh toán đơn hàng #12345</h2>
          </div>
          <div className='text-right'>
            <div className='text-sm text-muted-foreground'>Tổng thanh toán</div>
            <div className='text-3xl font-bold text-primary'>{totalAmount.toLocaleString()} ₫</div>
          </div>
        </div>
        <div className='flex flex-1 overflow-hidden'>
          <div className='w-1/3 border-r bg-muted/10 p-4 space-y-2'>
            <Button
              variant={method === 'cash' ? 'default' : 'outline'}
              className={cn('w-full justify-start h-16 text-lg', method === 'cash' && 'border-primary')}
              onClick={() => setMethod('cash')}
            >
              <Banknote className='mr-3 h-6 w-6' /> Tiền mặt
            </Button>
            <Button
              variant={method === 'card' ? 'default' : 'outline'}
              className={cn('w-full justify-start h-16 text-lg', method === 'card' && 'border-primary')}
              onClick={() => setMethod('card')}
            >
              <CreditCard className='mr-3 h-6 w-6' /> Thẻ ngân hàng
            </Button>
            <Button
              variant={method === 'qr' ? 'default' : 'outline'}
              className={cn('w-full justify-start h-16 text-lg', method === 'qr' && 'border-primary')}
              onClick={() => setMethod('qr')}
            >
              <QrCode className='mr-3 h-6 w-6' /> Quét mã QR
            </Button>
            <Button
              variant={method === 'transfer' ? 'default' : 'outline'}
              className={cn('w-full justify-start h-16 text-lg', method === 'transfer' && 'border-primary')}
              onClick={() => setMethod('transfer')}
            >
              <ArrowLeftRight className='mr-3 h-6 w-6' /> Chuyển khoản
            </Button>
          </div>
          <div className='flex-1 p-6'>
            {method === 'cash' && (
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Khách đưa</label>
                  <Input
                    className='text-3xl h-16 font-bold'
                    value={receivedAmount ? parseInt(receivedAmount).toLocaleString() : ''}
                    onChange={(e) => setReceivedAmount(e.target.value.replace(/\D/g, ''))}
                    placeholder='0'
                  />
                </div>
                <div className='grid grid-cols-3 gap-3'>
                  {denominations.map((denom) => (
                    <Button
                      key={denom}
                      variant='outline'
                      className='h-12 text-lg'
                      onClick={() => handleDenominationClick(denom)}
                    >
                      {denom.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div className='p-4 bg-green-50 rounded-lg border border-green-100'>
                  <div className='flex justify-between items-center'>
                    <span className='text-green-800 font-medium'>Tiền thừa trả khách</span>
                    <span className='text-3xl font-bold text-green-600'>{change.toLocaleString()} ₫</span>
                  </div>
                </div>
              </div>
            )}
            {method === 'qr' && (
              <div className='flex flex-col items-center justify-center h-full space-y-4'>
                <div className='w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg'>
                  <QrCode className='h-32 w-32 text-gray-400' />
                </div>
                <p className='text-center text-muted-foreground'>Quét mã để thanh toán</p>
              </div>
            )}
            {(method === 'card' || method === 'transfer') && (
              <div className='flex flex-col items-center justify-center h-full space-y-4'>
                <div className='p-8 rounded-full bg-muted'>
                  {method === 'card' ? <CreditCard className='h-16 w-16' /> : <ArrowLeftRight className='h-16 w-16' />}
                </div>
                <p className='text-center text-muted-foreground'>Vui lòng thực hiện giao dịch trên thiết bị thanh toán</p>
              </div>
            )}
          </div>
        </div>
        <DialogFooter className='p-6 border-t bg-background'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-2'>
              <input type='checkbox' id='print-receipt' className='h-4 w-4 rounded border-gray-300' />
              <label htmlFor='print-receipt' className='text-sm font-medium'>In hóa đơn</label>
            </div>
            <div className='flex gap-2'>
              <Button variant='outline' size='lg' onClick={onClose}>Hủy bỏ</Button>
              <Button size='lg' className='px-8' onClick={onConfirm} disabled={method === 'cash' && received < totalAmount}>
                Xác nhận thanh toán
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
