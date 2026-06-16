'use client';

import { Github, Mail, MapPin, Linkedin, Globe } from 'lucide-react';
import i18n from '@/i18n/config';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-light font-bold text-xl mb-4">Your Name</h3>
            <p className="text-light/70 leading-relaxed mb-4">
              Senior Android Developer focused on Kotlin, Jetpack Compose, MVVM, Clean Architecture, Flutter, and production-ready mobile experiences.
            </p>
            <div className="flex items-center gap-3 text-light/70">
              <MapPin size={18} />
              <span>Myanmar / London</span>
            </div>
          </div>

          <div>
            <h3 className="text-light font-bold text-xl mb-4">{i18n.t('footer.newsletter')}</h3>
            <p className="text-light/70 mb-4">
              Updates on Android, Flutter, portfolio building, and UI engineering.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-primary/20 bg-light/5 px-4 py-3 text-light outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-secondary transition-colors"
              >
                {i18n.t('footer.subscribe')}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-light font-bold text-xl mb-4">{i18n.t('footer.social')}</h3>
            <div className="space-y-3 text-light/70">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:text-primary">
                <Mail size={18} /> Email
              </a>
              <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary">
                <Globe size={18} /> Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-light/50">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, and love.</p>
        </div>
      </div>
    </footer>
  );
}
