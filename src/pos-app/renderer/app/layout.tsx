import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnyPOS',
  description: 'Offline-first Point of Sale System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
