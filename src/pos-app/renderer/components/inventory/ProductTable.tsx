import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Copy, MoreHorizontal } from 'lucide-react';

export interface Product {
  id: string;
  image: string;
  name: string;
  sku: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  stock: number;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const mockProducts: Product[] = [
  {
    id: '1',
    image: 'https://via.placeholder.com/40',
    name: 'Cà phê đá',
    sku: 'CF001',
    category: 'Đồ uống',
    costPrice: 10000,
    sellingPrice: 25000,
    stock: 150,
    status: 'in-stock',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/40',
    name: 'Bạc xỉu',
    sku: 'CF002',
    category: 'Đồ uống',
    costPrice: 12000,
    sellingPrice: 30000,
    stock: 20,
    status: 'low-stock',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/40',
    name: 'Trà đào cam sả',
    sku: 'TEA001',
    category: 'Trà',
    costPrice: 15000,
    sellingPrice: 45000,
    stock: 0,
    status: 'out-of-stock',
  },
];

const statusMap = {
  'in-stock': { label: 'Còn hàng', color: 'success' },
  'low-stock': { label: 'Sắp hết', color: 'warning' },
  'out-of-stock': { label: 'Hết hàng', color: 'destructive' },
};

export function ProductTable() {
  return (
    <div className='rounded-md border bg-card'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[60px]'></TableHead>
            <TableHead>Tên sản phẩm</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Danh mục</TableHead>
            <TableHead className='text-right'>Giá vốn</TableHead>
            <TableHead className='text-right'>Giá bán</TableHead>
            <TableHead className='text-right'>Tồn kho</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className='w-[100px]'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img src={product.image} alt={product.name} className='h-10 w-10 rounded-md object-cover' />
              </TableCell>
              <TableCell className='font-medium'>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className='text-right'>{product.costPrice.toLocaleString()} ₫</TableCell>
              <TableCell className='text-right'>{product.sellingPrice.toLocaleString()} ₫</TableCell>
              <TableCell className='text-right font-medium'>{product.stock}</TableCell>
              <TableCell>
                <Badge variant={statusMap[product.status].color as any}>
                  {statusMap[product.status].label}
                </Badge>
              </TableCell>
              <TableCell>
                <div className='flex items-center justify-end gap-2'>
                  <Button variant='ghost' size='icon' className='h-8 w-8'>
                    <Edit className='h-4 w-4' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-8 w-8 text-destructive hover:text-destructive'>
                    <Trash2 className='h-4 w-4' />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
