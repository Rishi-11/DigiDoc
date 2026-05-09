'use client';

import { useTranslations } from 'next-intl';
import { Cookie } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface CookiesPageClientProps {
  locale: Locale;
}

export default function CookiesPageClient({ locale }: CookiesPageClientProps) {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Cookie className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Cookies Policy
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                How and why we use cookies on {t('common.brand')}.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-8">
                Last updated: May 2026
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information and show personalized advertisements.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                How We Use Cookies
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>Essential Cookies:</strong> These are required for the website to function properly, such as remembering your language preferences or the state of a tool you are using.</li>
                <li><strong>Advertising Cookies (Google AdSense):</strong> We use Google AdSense to serve ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                Managing Cookies
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--color-muted-foreground))] mb-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</li>
                <li><strong>Google Ads Settings:</strong> You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--color-primary))] hover:underline">Google Ads Settings</a>.</li>
                <li><strong>Third-Party Opt-Out:</strong> You can opt out of some third-party vendors' uses of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--color-primary))] hover:underline">www.aboutads.info</a>.</li>
              </ul>

            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
