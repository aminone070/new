import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBg from '@/components/SectionBg';
import { Star, Quote } from 'lucide-react';

interface TestimonialItem {
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly rating: number;
  readonly text: string;
  readonly weeks: number | null;
}

interface TestimonialsProps {
  sectionBadge: string;
  title: string;
  subtitle: string;
  items: readonly TestimonialItem[];
}

export default function Testimonials({ sectionBadge, title, subtitle, items }: TestimonialsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <SectionBg variant="gold-top" />

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-cream rounded-2xl p-6 lg:p-8 border border-forest-700/5 hover:border-forest-700/15 transition-all duration-500 product-card-hover"
            >
              <Quote className="w-8 h-8 text-forest-700/10 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < item.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-200'}`}
                  />
                ))}
              </div>

              <p className="text-sm text-forest-900/65 leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-forest-700/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-forest-800 truncate">{item.name}</div>
                  <div className="text-xs text-forest-900/40 truncate">{item.role}</div>
                </div>
                {item.weeks && (
                  <span className="ms-auto px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-semibold shrink-0">
                    {item.weeks}w
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
