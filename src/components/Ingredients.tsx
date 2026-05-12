import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBg from '@/components/SectionBg';
import { Sun, Moon, Droplets, Zap, Layers, Sprout } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Moon,
  Droplets,
  Zap,
  Layers,
  Sprout,
};

interface IngredientItem {
  readonly name: string;
  readonly benefit: string;
  readonly description: string;
  readonly source: string;
  readonly icon: string;
}

interface IngredientsProps {
  sectionBadge: string;
  title: string;
  subtitle: string;
  items: readonly IngredientItem[];
}

export default function Ingredients({ sectionBadge, title, subtitle, items }: IngredientsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="ingredients" className="relative py-20 sm:py-28 overflow-hidden bg-white">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sun;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-6 lg:p-8 bg-cream border border-forest-700/5 hover:border-forest-700/15 transition-all duration-500 product-card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-forest-700 to-emerald-500 flex items-center justify-center shrink-0 shadow-glow-green">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-semibold text-forest-800 text-base mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-emerald-600 font-medium">{item.benefit}</p>
                  </div>
                </div>

                <p className="text-sm text-forest-900/55 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-forest-700/40">
                  <Sprout className="w-3 h-3" />
                  <span>{item.source}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
