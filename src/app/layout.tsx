import { Inter, Manrope } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import { Providers } from '@/app/providers';
import Navigation from '@/shared/components/Navigation';
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Lazy load non-critical components
const MouseEffect = dynamic(() => import('@/shared/effects/MouseEffect'), { 
  ssr: false, 
  loading: () => null 
});

// Dynamically import Waves with lazy loading and no SSR
const ClientWaves = dynamic(() => import('@/shared/effects/ClientWaves'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#1a1b1e]/50" /> // Placeholder during loading
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0b0c',
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Bengi Portfolio | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in modern web applications with a focus on user experience and clean code.',
  keywords: ['Full-Stack Developer', 'Web Development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Bengi' }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bengi-portfolio.vercel.app/',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/placeholder.svg" as="image" />
        
        {/* Add resource hints for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-[#0a0b0c] text-base`}>
        <Providers>
          {/* Progressive enhancement - simple background first */}
          <div className="fixed inset-0 bg-[#0a0b0c] z-0" /> 
          
          <div className="relative min-h-screen overflow-x-hidden">
            {/* Base gradient - simplified for better initial load */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0b0c] via-[#1a1b1e] to-[#0a0b0c] z-0" />

            {/* Ambient background effects - loaded after critical content */}
            <div className="fixed inset-0 overflow-hidden z-0">
              {/* Radial gradient overlay - simplified */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              {/* Wave effects - loaded lazily after critical content */}
                <ClientWaves/>

            </div>

            {/* Navigation */}
            <Navigation />
            
            {/* Mouse Effect - load after critical content */}
            <MouseEffect />

            {/* Main Content */}
            <main className="relative z-10">
              {children}
            </main>
          </div>
        </Providers>
        
        {/* Add only essential scripts that improve performance */}
        <Script
          id="performance-improvements"
          strategy="afterInteractive"
        >
          {`
            // Set zoom level to 80% by default with fallback
            if ('zoom' in document.body.style) {
              // For browsers that support zoom
              document.body.style.zoom = "90%";
            } else {
              // Fallback for Firefox and others
              document.body.style.transform = "scale(0.9)";
              document.body.style.transformOrigin = "top center";
              document.body.style.height = "calc(100vh / 0.9)";
              document.body.style.overflow = "auto";
            }
            
            // Optimize rendering by deferring non-critical operations
            window.addEventListener('load', () => {
              // Execute after the page is fully loaded
              setTimeout(() => {
                // Remove any remaining loading placeholders
                const placeholders = document.querySelectorAll('.loading-placeholder');
                placeholders.forEach(el => el.classList.add('opacity-0'));
                
                // Mark page as fully loaded
                document.documentElement.classList.add('page-loaded');
              }, 200);
            });
          `}
        </Script>
      </body>
    </html>
  );
} 