import { Inter, Manrope } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Bengi Portfolio | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in modern web applications with a focus on user experience and clean code.',
  keywords: ['Full-Stack Developer', 'Web Development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Bengi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Bengi Portfolio',
    title: 'Bengi Portfolio | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in modern web applications with a focus on user experience and clean code.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bengi Portfolio',
      },
    ],
  },
  twitter: {
    creator: '@yourusername',
    site: '@yourusername',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 