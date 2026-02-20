"use client";
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Attribute {
  id: string;
  name: string;
  values: string[];
}

interface Variant {
  id: string;
  name: string;
  price: number;
  costPrice: number;
  sku: string;
  barcode: string;
  stock: number;
}

export function VariantsSection() {
  const [attributes, setAttributes] = React.useState<Attribute[]>([
    { id: '1', name: 'Kích thước', values: ['S', 'M', 'L'] },
  ]);

  const [variants, setVariants] = React.useState<Variant[]>([
    { id: '1', name: 'S', price: 0, costPrice: 0, sku: '', barcode: '', stock: 0 },
    { id: '2', name: 'M', price: 0, costPrice: 0, sku: '', barcode: '', stock: 0 },
    { id: '3', name: 'L', price: 0, costPrice: 0, sku: '', barcode: '', stock: 0 },
  ]);

  const handleAddAttribute = () => {
    const newId = (attributes.length + 1).toString();
    setAttributes([...attributes, { id: newId, name: '', values: [] }]);
  };

  const handleRemoveAttribute = (id: string) => {
    setAttributes(attributes.filter((attr) => attr.id !== id));
  };

  return (
    <Card className='bg-muted/10'>
      <CardHeader>
        <CardTitle className='text-lg'>Các tùy chọn biến thể</CardTitle>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          {attributes.map((attr) => (
            <div key={attr.id} className='flex items-start gap-4'>
              <div className='w-1/3'>
                <label className='text-sm font-medium mb-1 block'>Tên thuộc tính</label>
                <Input defaultValue={attr.name} placeholder='Ví dụ: Kích thước, Màu sắc' />
              </div>
              <div className='flex-1'>
                <label className='text-sm font-medium mb-1 block'>Giá trị</label>
                <Input defaultValue={attr.values.join(', ')} placeholder='Nhập giá trị cách nhau bởi dấu phẩy' />
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='mt-6 text-destructive hover:text-destructive'
                onClick={() => handleRemoveAttribute(attr.id)}
              >
                <Trash2 className='h-4 w-4' />
              </Button>
            </div>
          ))}
          <Button variant='outline' className='border-primary text-primary hover:bg-primary/10' onClick={handleAddAttribute}>
            <Plus className='mr-2 h-4 w-4' /> Thêm thuộc tính khác
          </Button>
        </div>

        <div className='border rounded-md bg-background'>
          <div className='p-2 border-b bg-muted/20 flex justify-between items-center'>
            <span className='text-sm font-medium pl-2'>Danh sách biến thể</span>
            <Button variant='secondary' size='sm'>Cập nhật hàng loạt</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[40px]'>
                  <input type='checkbox' className='rounded border-gray-300' />
                </TableHead>
                <TableHead>Biến thể</TableHead>
                <TableHead>Giá bán</TableHead>
                <TableHead>Giá vốn</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Barcode</TableHead>
                <TableHead>Tồn kho</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {variants.map((variant) => (
                <TableRow key={variant.id}>
                  <TableCell>
                    <input type='checkbox' className='rounded border-gray-300' />
                  </TableCell>
                  <TableCell className='font-medium'>{variant.name}</TableCell>
                  <TableCell>
                    <Input className='h-8 w-24' placeholder='0' />
                  </TableCell>
                  <TableCell>
                    <Input className='h-8 w-24' placeholder='0' />
                  </TableCell>
                  <TableCell>
                    <Input className='h-8 w-32' placeholder='Tự sinh' />
                  </TableCell>
                  <TableCell>
                    <Input className='h-8 w-32' />
                  </TableCell>
                  <TableCell>
                    <Input className='h-8 w-20' placeholder='0' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
