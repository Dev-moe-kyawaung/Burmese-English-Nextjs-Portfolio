import { motion } from 'framer-motion';
import { useI18n } from 'next-i18next';

export default function HeroSection() {
  const { intl } = useI18n();

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-[800px] h-[800px] bg-primary/10 rounded-full absolute -top-1/2 -left-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, -180],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="w-[600px] h-[600px] bg-accent/10 rounded-full absolute -bottom-1/2 -right-1/2"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-light mb-4"
        >
          {intl.t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-primary mb-6 font-mono"
        >
          {intl.t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-light/70"
        >
          {intl.t('hero.description')}
        </motion.p>
      </div>
    </section>
  );
}
