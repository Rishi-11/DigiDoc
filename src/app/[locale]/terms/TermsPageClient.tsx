'use client';

import { useTranslations } from 'next-intl';
import { Shield, FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';

interface TermsPageClientProps {
  locale: Locale;
}

export default function TermsPageClient({ locale }: TermsPageClientProps) {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                Please read these terms carefully before using {t('common.brand')}.
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
                1. Acceptance of Terms
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                By accessing and using {t('common.brand')}, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                2. Description of Service
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} provides a suite of browser-based PDF tools. All processing is done locally on your device using WebAssembly and JavaScript technologies.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                You are solely responsible for the content of the files you process using our tools. You agree not to use the service for any illegal or unauthorized purpose.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                4. Privacy and Data Security
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                Because {t('common.brand')} processes files entirely within your browser, we do not upload, store, or have access to any of your files or their contents. Please review our Privacy Policy for more details.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                5. Modifications to Service
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                The service is provided on an "as is" and "as available" basis. We expressly disclaim all warranties of any kind, whether express or implied.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mt-8 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] mb-4">
                {t('common.brand')} shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from the use or the inability to use the service.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
