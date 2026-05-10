'use client';

import { useEffect, useRef } from 'react';

interface GoogleAdProps {
  client?: string;
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function GoogleAd({
  client = 'ca-pub-4618366384114056', // Replace with actual client ID
  slot = 'YOUR_AD_SLOT_ID',          // Replace with actual slot ID
  format = 'auto',
  responsive = true,
  className = '',
  style,
}: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (isDev) return;

    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as any).adsbygoogle || [];
        // Only push if the ins element is empty and hasn't been initialized
        if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
          adsbygoogle.push({});
        }
      }
    } catch (e) {
      console.error('Google Ads setup error:', e);
    }
  }, [slot, isDev]);

  if (isDev) {
    return (
      <div 
        className={`bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-400 border-dashed flex flex-col items-center justify-center p-4 text-yellow-800 dark:text-yellow-200 rounded-lg w-full ${className}`}
        style={{ minHeight: '120px', ...style }}
      >
        <span className="text-sm font-bold tracking-wider uppercase mb-2">Advertisement Placeholder</span>
        <span>(Google AdSense will appear here in production)</span>
        <span className="text-xs opacity-75 mt-2 font-mono">Client: {client} | Slot: {slot}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden flex flex-col items-center justify-center w-full ${className}`}>
      <span className="text-[10px] text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider mb-1">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle w-full"
        style={{ display: 'block', minHeight: '100px', ...style }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
