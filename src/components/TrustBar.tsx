import { motion } from 'framer-motion';

interface TrustBarProps {
  items: readonly string[];
}

export default function TrustBar({ items }: TrustBarProps) {
  const doubled = [...items, ...items];

  return (
    <section className="relative py-6 bg-forest-700 overflow-hidden">
      <div className="marquee-wrapper">
        <motion.div
          animate={{ x: [0, -50 + '%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-sm font-medium text-white/80 tracking-wide">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
