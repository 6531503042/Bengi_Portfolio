'use client';

import { Inter } from 'next/font/google';
import App from '../src/App';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
} 