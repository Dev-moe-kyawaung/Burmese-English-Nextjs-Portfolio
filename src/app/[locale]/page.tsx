'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Lenis from '@studio-freight/lenis';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AdvancedAboutSection from '@/components/AdvancedAboutSection';
import AppsCollection from '@/components/AppsCollection';
import CertificatesSection from '@/components/CertificatesSection';
import MailsSection from '@/components/MailsSection';
import LovableSection from '@/components/LovableSection';
import GitHubSection from '@/components/GitHubSection';
import OrganizationsSection from '@/components/OrganizationsSection';
import Footer from '@/components/Footer';

export default function LocalizedHome() {
  const params = useParams<{ locale: string }>();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark" data-locale={params.locale}>
      <NavBar />
      <HeroSection />
      <AdvancedAboutSection />
      <AppsCollection />
      <CertificatesSection />
      <MailsSection />
      <LovableSection />
      <GitHubSection />
      <OrganizationsSection />
      <Footer />
    </main>
  );
}
