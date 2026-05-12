import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  readonly src: string;
  readonly label: string;
}

interface GalleryProps {
  sectionBadge: string;
  title: string;
  subtitle: string;
  cta: string;
  images: readonly GalleryImage[];
}

export default function Gallery({ sectionBadge, title, subtitle, cta, images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-glow-green opacity-30" />

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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-500"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-sm font-medium">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3.5 border-2 border-forest-700/20 text-forest-700 font-medium rounded-full hover:border-forest-700 hover:bg-forest-700/5 transition-all duration-300">
            {cta}
          </button>
        </motion.div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.src} alt={selected.label} className="w-full" />
            <div className="bg-white p-4 text-center font-serif text-forest-800">
              {selected.label}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
