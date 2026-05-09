import type { Metadata } from 'next';
import Script from 'next/script';
import '@/app/globals.css';
import { CookieBanner } from '@/components/legal/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://Rishi-11.github.io/DigiDoc' : 'http://localhost:3000'),
  title: 'DigiDoc - Professional PDF Tools',
  description: 'Free online PDF tools for merging, splitting, compressing, and converting PDF files. All processing happens in your browser for maximum privacy.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

// Root layout - provides the basic HTML structure
// The actual layout with i18n is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <style dangerouslySetInnerHTML={{ __html: 'html{scrollbar-gutter:stable}' }} />
        <link rel="icon" href={`${process.env.GITHUB_ACTIONS === 'true' ? '/DigiDoc' : ''}/favicon.svg`} type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        {/* Google AdSense Script - Replace client ID with your actual ID */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <CookieBanner />
      </body>
    </html>
  );
}
