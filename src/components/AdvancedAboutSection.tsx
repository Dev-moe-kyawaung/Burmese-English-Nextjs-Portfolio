import { motion } from 'framer-motion';
import { useI18n } from 'next-i18next';
import { personalInfo } from '@/data/personalInfo';

export default function AdvancedAboutSection() {
  const { intl } = useI18n();

  const timelineEvents = [
    { year: "2020", event: "timeline.start", color: "primary" },
    { year: "2021", event: "timeline.junior", color: "secondary" },
    { year: "2022", event: "timeline.mid", color: "accent" },
    { year: "2023", event: "timeline.senior", color: "primary" },
    { year: "2024", event: "timeline.current", color: "accent" },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-light mb-12 text-center">
          {intl.t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-light/5 p-8 rounded-xl border border-primary/20"
          >
            <p className="text-light/80 text-lg mb-8">
              {intl.t('about.bio')}
            </p>

            {/* Tech-heavy Roles */}
            <h3 className="text-xl text-primary font-bold mb-4">
              {intl.t('tech_focus.title')}
            </h3>
            <div className="space-y-3">
              {personalInfo.techRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-dark/50 p-3 rounded border border-primary/10 text-light/70 text-sm font-mono"
                >
                  {role}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
            
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-20 mb-8"
              >
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-${event.color} border-2 border-dark`}
                />
                <div className="text-primary font-bold mb-1">{event.year}</div>
                <div className="text-light/80">{intl.t(event.event)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
