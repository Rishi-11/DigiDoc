'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, FileCheck, ServerOff } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';

interface SecurityPageClientProps {
  locale: Locale;
}

export default function SecurityPageClient({ locale }: SecurityPageClientProps) {
  const t = useTranslations('securityPage');

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <Header locale={locale} />

      <main id="main-content" className="flex-1 container mx-auto px-4 py-12 lg:py-20" tabIndex={-1}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--color-success)/0.1)] mb-6 text-[hsl(var(--color-success))]">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          <section id="architecture" className="mb-16">
            <Card className="p-8 lg:p-10 glass-card border-[hsl(var(--color-border))/0.6]">
              <div className="flex items-center gap-4 mb-6">
                <FileCheck className="w-6 h-6 text-[hsl(var(--color-primary))]" />
                <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))]">
                  {t('architecture.title')}
                </h2>
              </div>
              <div className="space-y-4 text-[hsl(var(--color-foreground))/0.8] leading-relaxed">
                <p>{t('architecture.description')}</p>
                <p>{t('architecture.p1')}</p>
                <p>{t('architecture.p2')}</p>
              </div>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-8 text-center">
              {t('features.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 glass-card border-0 hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--color-primary)/0.1)] mb-4 text-[hsl(var(--color-primary))]">
                  <ServerOff className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-2">
                  {t('features.zeroUploads.title')}
                </h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {t('features.zeroUploads.description')}
                </p>
              </Card>

              <Card className="p-6 glass-card border-0 hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--color-success)/0.1)] mb-4 text-[hsl(var(--color-success))]">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-2">
                  {t('features.wasm.title')}
                </h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {t('features.wasm.description')}
                </p>
              </Card>

              <Card className="p-6 glass-card border-0 hover:-translate-y-1 transition-transform duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--color-accent)/0.1)] mb-4 text-[hsl(var(--color-accent))]">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-2">
                  {t('features.ephemeral.title')}
                </h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {t('features.ephemeral.description')}
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="p-8 lg:p-10 glass-card bg-gradient-to-br from-[hsl(var(--color-success)/0.05)] to-transparent border-[hsl(var(--color-success)/0.2)]">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {t('compliance.title')}
              </h2>
              <p className="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                {t('compliance.description')}
              </p>
            </Card>
          </section>

        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
