// File: src/app/page.tsx
'use client';

import { useEffect } from 'react';
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

export default function Home() {
  useEffect(() => {
    // Smooth Scroll - Lenis (UX Enhancement)
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
      {/* 1. Fixed Top Navigation */}
      <NavBar />
      
      {/* 2. Hero Section (Animated Particle + 3D) */}
      <HeroSection />
      
      {/* 3. Advanced About Section (Animated + Timeline) */}
      <AdvancedAboutSection />
      
      {/* 4. My Create App Collection */}
      <AppsCollection />
      
      {/* 5. Certificates Collections */}
      <CertificatesSection />
      
      {/* 6. Mail Collections */}
      <MailsSection />
      
      {/* 7. Lovable WPA Links */}
      <LovableSection />
      
      {/* 8. GitHub Collections */}
      <GitHubSection />
      
      {/* 9. Organizations */}
      <OrganizationsSection />
      
      {/* Footer (Fat Footer) */}
      <footer className="bg-dark py-12 border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="text-light font-bold mb-4">{i18n.t('footer.newsletter')}</h3>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-light/5 text-light rounded border border-primary/20 mb-2"
              />
              <button className="w-full px-4 py-2 bg-primary text-light rounded hover:bg-secondary">
                {i18n.t('footer.subscribe')}
              </button>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-light font-bold mb-4">{i18n.t('footer.social')}</h3>
              <div className="flex gap-4">
                <a href="https://github.com/yourusername" className="text-light hover:text-primary">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" className="text-light hover:text-primary">LinkedIn</a>
                <a href="mailto:your.email@example.com" className="text-light hover:text-primary">Email</a>
              </div>
            </div>
            
            {/* Location/Map */}
            <div>
              <h3 className="text-light font-bold mb-4">{i18n.t('footer.map')}</h3>
              <p className="text-light/70">Myanmar</p>
              <a 
                href="https://maps.google.com/?q=Myanmar"
                target="_blank"
                className="text-primary text-sm mt-2"
              >
                View on Map →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
