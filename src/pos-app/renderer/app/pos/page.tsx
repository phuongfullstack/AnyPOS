"use client";
import * as React from 'react';
import { SidebarCollapsed } from '@/components/pos/SidebarCollapsed';
import { ProductGrid, Product } from '@/components/pos/ProductGrid';
import { CartPanel, CartItem } from '@/components/pos/CartPanel';
import { PaymentModal } from '@/components/pos/PaymentModal';

export default function POS() {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal * 1.1;

  return (
    <div className='flex h-screen w-full'>
      <SidebarCollapsed />
      <div className='flex-1 flex overflow-hidden'>
        <div className='flex-1 p-4 overflow-hidden'>
          <ProductGrid onAddToCart={handleAddToCart} />
        </div>
        <div className='w-96 border-l bg-background'>
          <CartPanel
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={() => setIsPaymentModalOpen(true)}
          />
        </div>
      </div>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        totalAmount={total}
        onConfirm={() => {
          alert('Thanh toán thành công!');
          setCart([]);
          setIsPaymentModalOpen(false);
        }}
      />
    </div>
  );
}
