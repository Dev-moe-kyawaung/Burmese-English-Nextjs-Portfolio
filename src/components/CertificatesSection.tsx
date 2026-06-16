'use client';

import { motion } from 'framer-motion';
import i18n from '@/i18n/config';
import { personalInfo } from '@/data/personalInfo';
import { ExternalLink } from 'lucide-react';

export default function CertificatesSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-light mb-4 text-center">
          {i18n.t('certificates.title')}
        </h2>
        <p className="text-light/70 text-center mb-12">
          {i18n.t('certificates.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-light/5 p-6 rounded-xl border border-primary/20"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg text-light font-bold mb-2">{cert.title}</h3>
              <p className="text-light/70 text-sm">{cert.issuer} • {cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary text-sm mt-3"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
