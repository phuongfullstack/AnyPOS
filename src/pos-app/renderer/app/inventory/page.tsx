import * as React from 'react';
import { ProductTable } from '@/components/inventory/ProductTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, FileDown, FileUp } from 'lucide-react';
import Link from 'next/link';

export default function Inventory() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>Quản lý Sản phẩm</h2>
        <div className='flex items-center gap-2'>
          <Button variant='outline'>
            <FileUp className='mr-2 h-4 w-4' />
            Nhập Excel
          </Button>
          <Button variant='outline'>
            <FileDown className='mr-2 h-4 w-4' />
            Xuất Excel
          </Button>
          <Link href='/products/add'>
            <Button>
              <Plus className='mr-2 h-4 w-4' />
              Thêm sản phẩm mới
            </Button>
          </Link>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='relative flex-1 max-w-sm'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Tìm kiếm theo tên, SKU...' className='pl-9' />
        </div>
        <select className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
          <option value='all'>Tất cả danh mục</option>
          <option value='food'>Đồ ăn</option>
          <option value='drink'>Đồ uống</option>
        </select>
        <select className='h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
          <option value='all'>Tất cả trạng thái</option>
          <option value='in-stock'>Còn hàng</option>
          <option value='low-stock'>Sắp hết</option>
          <option value='out-of-stock'>Hết hàng</option>
        </select>
      </div>

      <ProductTable />

      <div className='flex items-center justify-center space-x-2 py-4'>
        <Button variant='outline' size='sm' disabled>
          Trước
        </Button>
        <Button variant='outline' size='sm' className='bg-primary text-primary-foreground hover:bg-primary/90'>
          1
        </Button>
        <Button variant='outline' size='sm'>
          2
        </Button>
        <Button variant='outline' size='sm'>
          3
        </Button>
        <Button variant='outline' size='sm'>
          Sau
        </Button>
      </div>
    </div>
  );
}
