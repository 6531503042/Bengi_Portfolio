import { Inter, Manrope } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navigation from '@/components/Navigation';
import MouseEffect from '@/components/effects/MouseEffect';
import dynamic from 'next/dynamic';

const Waves = dynamic(() => import('@/components/effects/Waves'), {
  ssr: false,
});

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
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-[#0a0b0c]`}>
        <Providers>
          <div className="relative min-h-screen overflow-x-hidden">
            {/* Base gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0b0c] via-[#1a1b1e] to-[#0a0b0c] z-0" />

            {/* Ambient background effects */}
            <div className="fixed inset-0 overflow-hidden z-0">
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
              
              {/* Wave effects */}
              <div className="absolute inset-0">
                <Waves
                  lineColor="rgba(255, 255, 255, 0.2)"
                  backgroundColor="transparent"
                  waveSpeedX={0.02}
                  waveSpeedY={0.01}
                  waveAmpX={40}
                  waveAmpY={20}
                  friction={0.9}
                  tension={0.01}
                  maxCursorMove={120}
                  xGap={12}
                  yGap={36}
                />
              </div>
            </div>

            {/* Navigation */}
            <Navigation />
            
            {/* Mouse Effect */}
            <MouseEffect />

            {/* Main Content */}
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
} 