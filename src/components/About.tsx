import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Microscope, Heart, Globe } from 'lucide-react';
import SectionBg from '@/components/SectionBg';

interface AboutProps {
  sectionBadge: string;
  title: string;
  subtitle: string;
  mission: string;
  missionText: string;
  story: string;
  storyText: string;
  values: readonly { readonly icon: string; readonly title: string; readonly description: string }[];
  stats: readonly { readonly value: string; readonly label: string }[];
}

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Microscope,
  Heart,
  Globe,
};

export default function About({ sectionBadge, title, subtitle, mission, missionText, story, storyText, values, stats }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <SectionBg variant="green-right" />

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

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cream rounded-2xl p-8 border border-forest-700/5"
          >
            <h3 className="font-serif text-2xl font-bold text-forest-800 mb-4">{mission}</h3>
            <p className="text-forest-900/55 leading-relaxed">{missionText}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-cream rounded-2xl p-8 border border-forest-700/5"
          >
            <h3 className="font-serif text-2xl font-bold text-forest-800 mb-4">{story}</h3>
            <p className="text-forest-900/55 leading-relaxed">{storyText}</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((val, i) => {
            const Icon = iconMap[val.icon] || Leaf;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-cream border border-forest-700/5"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-700/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-forest-700" />
                </div>
                <h4 className="font-serif font-semibold text-forest-800 mb-2">{val.title}</h4>
                <p className="text-sm text-forest-900/50 leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-forest-700 mb-1">{stat.value}</div>
              <div className="text-xs text-forest-900/40 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
