'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(var(--color-card))] border-t border-[hsl(var(--color-border))] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[hsl(var(--color-muted-foreground))] flex-1 text-center sm:text-left">
          We use cookies to enhance your experience and serve personalized ads. 
          By clicking "Accept", you consent to our use of cookies. 
          Read our <Link href="/en/cookies" className="text-[hsl(var(--color-primary))] hover:underline">Cookies Policy</Link> and <Link href="/en/privacy" className="text-[hsl(var(--color-primary))] hover:underline">Privacy Policy</Link> for more information.
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button onClick={handleAccept} className="w-full sm:w-auto px-8" variant="primary">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
