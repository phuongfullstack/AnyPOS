"use client";
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VariantsSection } from '@/components/products/add/VariantsSection';
import { UploadCloud, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddProduct() {
  const [hasVariants, setHasVariants] = React.useState(false);
  const [trackInventory, setTrackInventory] = React.useState(true);

  return (
    <div className='flex flex-col space-y-6 max-w-6xl mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link href='/inventory'>
            <Button variant='ghost' size='icon'>
              <ChevronLeft className='h-5 w-5' />
            </Button>
          </Link>
          <h2 className='text-3xl font-bold tracking-tight'>Thêm sản phẩm mới</h2>
        </div>
        <div className='flex gap-2'>
          <Link href='/inventory'>
            <Button variant='outline'>Hủy bỏ</Button>
          </Link>
          <Button>Lưu & Thêm mới</Button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2 space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Thông tin chung</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Tên sản phẩm</label>
                <Input placeholder='Ví dụ: Áo thun cotton' />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>SKU</label>
                  <div className='flex gap-2'>
                    <Input placeholder='Mã sản phẩm' />
                    <Button variant='outline'>Tạo</Button>
                  </div>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Barcode</label>
                  <Input placeholder='Mã vạch' />
                </div>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Mô tả</label>
                <textarea className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Mô tả chi tiết sản phẩm...'></textarea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hình ảnh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 cursor-pointer transition-colors'>
                <UploadCloud className='h-10 w-10 mb-2' />
                <p>Kéo thả hình ảnh vào đây hoặc click để tải lên</p>
              </div>
            </CardContent>
          </Card>

          {hasVariants && <VariantsSection />}
        </div>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Tổ chức</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Danh mục</label>
                <select className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                  <option>Chọn danh mục</option>
                  <option>Đồ uống</option>
                  <option>Đồ ăn</option>
                </select>
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Thương hiệu</label>
                <select className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                  <option>Chọn thương hiệu</option>
                  <option>Brand A</option>
                  <option>Brand B</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Giá</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Giá bán</label>
                <Input type='number' placeholder='0' />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Giá vốn</label>
                <Input type='number' placeholder='0' />
              </div>
              <div className='flex items-center space-x-2'>
                <input type='checkbox' id='tax' className='h-4 w-4 rounded border-gray-300' defaultChecked />
                <label htmlFor='tax' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Giá đã bao gồm thuế</label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kho hàng</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between'>
                <label className='text-sm font-medium'>Theo dõi tồn kho</label>
                <input
                  type='checkbox'
                  className='toggle'
                  checked={trackInventory}
                  onChange={(e) => setTrackInventory(e.target.checked)}
                />
              </div>
              {trackInventory && (
                <>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium'>Tồn kho hiện tại</label>
                    <Input type='number' placeholder='0' />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-sm font-medium'>Ngưỡng cảnh báo</label>
                    <Input type='number' placeholder='10' />
                  </div>
                </>
              )}
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Đơn vị tính</label>
                <Input placeholder='Cái, Hộp, Kg...' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Biến thể</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  id='variants'
                  className='h-4 w-4 rounded border-gray-300'
                  checked={hasVariants}
                  onChange={(e) => setHasVariants(e.target.checked)}
                />
                <label htmlFor='variants' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Sản phẩm có nhiều biến thể
                </label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
