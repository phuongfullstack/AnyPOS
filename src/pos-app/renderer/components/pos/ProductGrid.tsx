"use client";
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cà phê đá',
    price: 25000,
    image: 'https://via.placeholder.com/150',
    category: 'Đồ uống',
  },
  {
    id: '2',
    name: 'Bạc xỉu',
    price: 30000,
    image: 'https://via.placeholder.com/150',
    category: 'Đồ uống',
  },
  {
    id: '3',
    name: 'Trà đào cam sả',
    price: 45000,
    image: 'https://via.placeholder.com/150',
    category: 'Trà',
  },
  {
    id: '4',
    name: 'Bánh mì thịt',
    price: 20000,
    image: 'https://via.placeholder.com/150',
    category: 'Đồ ăn',
  },
  {
    id: '5',
    name: 'Croissant',
    price: 35000,
    image: 'https://via.placeholder.com/150',
    category: 'Bánh',
  },
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...Array.from(new Set(mockProducts.map((p) => p.category)))];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='relative flex-1'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Tìm sản phẩm...'
            className='pl-9'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='flex gap-2'>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pr-2'>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className='cursor-pointer hover:border-primary transition-colors'
            onClick={() => onAddToCart(product)}
          >
            <CardContent className='p-4 flex flex-col items-center text-center'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-32 object-cover rounded-md mb-2'
              />
              <h3 className='font-medium text-sm line-clamp-2 mb-1'>{product.name}</h3>
              <p className='text-primary font-bold'>{product.price.toLocaleString()} ₫</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
