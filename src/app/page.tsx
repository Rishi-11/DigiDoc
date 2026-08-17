'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n/config';

// Root page handles client-side redirection based on browser language
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      // Get browser language
      const browserLang = navigator.language;
      const primaryLang = browserLang.split('-')[0];

      // Check if the language is supported
      if ((locales as readonly string[]).includes(primaryLang)) {
        router.replace(`/${primaryLang}`);
      } else {
        router.replace(`/${defaultLocale}`);
      }
    } catch (error) {
      // Fallback to default locale if anything goes wrong
      router.replace(`/${defaultLocale}`);
    }
  }, [router]);

  // Immediate meta-refresh fallback in case client JS is delayed
  return (
    <head>
      <meta httpEquiv="refresh" content="0; url=en/" />
    </head>
  );
}
