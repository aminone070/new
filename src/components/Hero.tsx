import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';
import { Lang } from '@/lib/translations';

interface HeroProps {
  lang: Lang;
  t: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statSatisfied: string;
    statDerms: string;
    statIngredients: string;
    statResults: string;
    scrollDown: string;
  };
}

const stats = [
  { key: 'statSatisfied', value: '50K+' },
  { key: 'statDerms', value: '200+' },
  { key: 'statIngredients', value: '98%' },
  { key: 'statResults', value: '94%' },
] as const;

export default function Hero({ lang, t }: HeroProps) {
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-forest-50/30 to-cream" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-glow-green opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-gold opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-700/10 border border-forest-700/15 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="text-xs sm:text-sm font-medium text-forest-700 tracking-wide">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.05] mb-4"
            >
              <span className="text-forest-800">{t.titleLine1}</span>
              <br />
              <span className="shimmer-text">{t.titleLine2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-medium tracking-[0.15em] uppercase text-gold-600 mb-4"
            >
              {t.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-forest-900/60 leading-relaxed max-w-lg mb-8"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-forest-700 text-white font-medium rounded-full hover:bg-forest-800 transition-all duration-300 shadow-glow-green hover:shadow-glow-green text-sm sm:text-base"
              >
                {t.ctaPrimary}
                <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#newsletter"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-forest-700/20 text-forest-700 font-medium rounded-full hover:border-forest-700 hover:bg-forest-700/5 transition-all duration-300 text-sm sm:text-base"
              >
                {t.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.key} className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-forest-700">
                    {stat.value}
                  </div>
                  <div className="text-xs text-forest-900/50 mt-1">
                    {t[stat.key]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${isRTL ? 'lg:order-1' : 'lg:order-2'} relative`}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl glow-ring">
              <img
                src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Botanique skincare products"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 start-6 end-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-forest-800">94% Success Rate</div>
                    <div className="text-xs text-forest-700/60">Clinically proven results</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -end-4 w-24 h-24 bg-gold-500/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -start-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-forest-700/40 tracking-widest uppercase">{t.scrollDown}</span>
        <ChevronDown className="w-5 h-5 text-forest-700/40" />
      </motion.div>
    </section>
  );
}
