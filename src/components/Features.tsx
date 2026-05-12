import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FlaskConical,
  Leaf,
  ShieldCheck,
  Activity,
  Microscope,
  Heart,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Leaf,
  ShieldCheck,
  Activity,
  Microscope,
  Heart,
};

interface FeatureItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface FeaturesProps {
  sectionBadge: string;
  title: string;
  subtitle: string;
  items: readonly FeatureItem[];
}

export default function Features({ sectionBadge, title, subtitle, items }: FeaturesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-green opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow-gold opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-forest-700/10 text-forest-700 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            {sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-800 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-forest-900/55 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || FlaskConical;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-forest-700/5 product-card-hover"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-50/50 via-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-forest-700/10 flex items-center justify-center mb-5 group-hover:bg-forest-700 group-hover:shadow-glow-green transition-all duration-500">
                    <Icon className="w-6 h-6 text-forest-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-forest-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest-900/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
