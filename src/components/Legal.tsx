import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glow-green opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-forest-800 mb-3">
            {title}
          </h1>
          <p className="text-sm text-forest-900/40 mb-10">{lastUpdated}</p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="font-serif text-xl font-semibold text-forest-800 mb-3">
                  {section.heading}
                </h2>
                <p className="text-sm text-forest-900/55 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
