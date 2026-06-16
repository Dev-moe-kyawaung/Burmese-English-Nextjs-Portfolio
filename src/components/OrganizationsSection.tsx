// File: src/components/OrganizationsSection.tsx
'use client';

import { motion } from 'framer-motion';
import i18n from '@/i18n/config';
import { personalInfo } from '@/data/personalInfo';
import { ExternalLink, Users } from 'lucide-react';

export default function OrganizationsSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-dark mb-4 text-center">
          {i18n.t('organizations.title')}
        </h2>
        <p className="text-dark/70 text-center mb-12">
          {i18n.t('organizations.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.organizations.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h3 className="text-xl text-light font-bold">{org.name}</h3>
              </div>
              
              <p className="text-light/80 mb-4">
                <span className="text-primary font-bold">Role:</span> {org.role}
              </p>
              
              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-light rounded hover:bg-secondary transition-colors"
              >
                <ExternalLink size={18} />
                Visit Organization
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
