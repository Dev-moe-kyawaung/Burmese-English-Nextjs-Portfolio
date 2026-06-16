'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AdvancedAboutSection from '@/components/AdvancedAboutSection';
import AppsCollection from '@/components/AppsCollection';
import CertificatesSection from '@/components/CertificatesSection';
import GitHubSection from '@/components/GitHubSection';

export default function Home() {
  useEffect(() => {
    // Smooth Scroll - Lenis
    const lenis = new Lenis({
      duration: 750,
      inertia: 0.85,
      smoothWheel: true,
    });
    
    const scrollListener = lenis.listen();
    window.addEventListener('scroll', scrollListener);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark">
      <NavBar />
      <HeroSection />
      <AdvancedAboutSection />
      <AppsCollection />
      <CertificatesSection />
      <GitHubSection />
      
      {/* Add more sections: Mails, Lovable, Organizations */}
    </main>
  );
}
