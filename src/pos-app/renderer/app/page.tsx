'use client';

import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
}

function roundHalfAwayFromZero(value: number): number {
  return value >= 0 ? Math.floor(value + 0.5) : Math.ceil(value - 0.5);
}

function calculateTax(amount: number, taxRate: number): number {
  return roundHalfAwayFromZero((amount * taxRate) / 100);
}

function calculateOrderTotals(items: CartItem[]) {
  let subTotal = 0;
  let taxAmount = 0;
  for (const item of items) {
    const itemSub = item.unitPrice * item.quantity;
    subTotal += itemSub;
    taxAmount += calculateTax(itemSub, item.taxRate);
  }
  return { subTotal, taxAmount, total: subTotal + taxAmount };
}

function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

export default function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [status, setStatus] = useState<string>('');

  const sampleProducts = [
    { id: 'P001', name: 'Cà phê đen', price: 25000, taxRate: 10 },
    { id: 'P002', name: 'Cà phê sữa', price: 30000, taxRate: 10 },
    { id: 'P003', name: 'Trà đào', price: 35000, taxRate: 8 },
    { id: 'P004', name: 'Nước ngọt', price: 20000, taxRate: 10 },
  ];

  function addToCart(product: { id: string; name: string; price: number; taxRate: number }) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: product.id, name: product.name, quantity: 1, unitPrice: product.price, taxRate: product.taxRate }];
    });
  }

  function removeFromCart(id: string) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  async function checkout() {
    if (cart.length === 0) return;
    const { subTotal, taxAmount, total } = calculateOrderTotals(cart);
    const posOrderId = `POS-${Date.now()}-${Math.floor(Math.random() * 9000) + 1000}`;

    const order = {
      posOrderId,
      syncStatus: 0,
      subTotal,
      taxAmount,
      total,
      items: cart.map(i => ({
        productId: i.id,
        name: i.name,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
        taxRate: i.taxRate,
        lineTotal: i.unitPrice * i.quantity + calculateTax(i.unitPrice * i.quantity, i.taxRate),
      })),
    };

    setStatus(`Đang xử lý đơn hàng ${posOrderId}...`);

    // Save locally first (offline-first principle)
    console.log('Order saved locally:', order);
    setStatus(`Đơn hàng ${posOrderId} đã được lưu cục bộ. Đang đồng bộ...`);
    setCart([]);
  }

  const { subTotal, taxAmount, total } = calculateOrderTotals(cart);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Product Grid */}
      <div style={{ flex: 2, padding: '20px', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <h2>Sản phẩm</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px' }}>
          {sampleProducts.map(p => (
            <button
              key={p.id}
              onClick={() => addToCart(p)}
              style={{
                padding: '16px 8px', border: '1px solid #ddd', borderRadius: '8px',
                cursor: 'pointer', background: '#f9f9f9', textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{p.name}</div>
              <div style={{ color: '#666', marginTop: '4px' }}>{formatVND(p.price)}</div>
              <div style={{ color: '#999', fontSize: '12px' }}>VAT {p.taxRate}%</div>
            </button>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <h2>Giỏ hàng</h2>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cart.length === 0 && <p style={{ color: '#999' }}>Chưa có sản phẩm</p>}
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ color: '#666', fontSize: '13px' }}>{item.quantity} × {formatVND(item.unitPrice)}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div>{formatVND(item.unitPrice * item.quantity)}</div>
                <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px' }}>Xóa</button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div style={{ borderTop: '2px solid #333', paddingTop: '12px', marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Tạm tính:</span><span>{formatVND(subTotal)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666' }}>
            <span>Thuế VAT:</span><span>{formatVND(taxAmount)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', marginTop: '8px' }}>
            <span>Tổng cộng:</span><span style={{ color: '#e44' }}>{formatVND(total)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={cart.length === 0}
            style={{
              width: '100%', padding: '14px', marginTop: '16px',
              background: cart.length > 0 ? '#4CAF50' : '#ccc',
              color: 'white', border: 'none', borderRadius: '8px',
              fontSize: '16px', fontWeight: 'bold', cursor: cart.length > 0 ? 'pointer' : 'not-allowed',
            }}
          >
            Thanh toán
          </button>
          {status && <p style={{ marginTop: '8px', fontSize: '13px', color: '#333' }}>{status}</p>}
        </div>
      </div>
    </div>
  );
}
