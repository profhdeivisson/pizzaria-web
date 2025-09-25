import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { CartProvider } from '../context/CartContext';
import Header from './components/Headr/Header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pizzaria Web',
  description: 'A melhor da região',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="bg-white h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
