import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Lang } from '@/lib/translations';
import { useCart } from '@/hooks/useCart';
import SectionBg from '@/components/SectionBg';

interface ProductItem {
  readonly id: string;
  readonly name: string;
  readonly nameShort: string;
  readonly price: number;
  readonly originalPrice: number | null;
  readonly rating: number;
  readonly reviews: number;
  readonly badge: string;
  readonly concern: string;
  readonly description: string;
  readonly image: string;
  readonly keyIngredient: string;
}

interface ProductsProps {
  lang: Lang;
  sectionBadge: string;
  title: string;
  subtitle: string;
  addToCart: string;
  shopNow: string;
  items: readonly ProductItem[];
}

export default function Products({ lang, sectionBadge, title, subtitle, addToCart, shopNow, items }: ProductsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const { addItem } = useCart();

  const badgeColor: Record<string, string> = {
    'Best Seller': 'bg-emerald-500 text-white',
    'الأكثر مبيعًا': 'bg-emerald-500 text-white',
    "Derm's Pick": 'bg-gold-600 text-white',
    'اختيار الطبيب': 'bg-gold-600 text-white',
    'New Formula': 'bg-forest-700 text-white',
    'تركيبة جديدة': 'bg-forest-700 text-white',
  };

  return (
    <section id="products" className="relative py-20 sm:py-28 overflow-hidden">
      <SectionBg variant="gold-left" />

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
          {items.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-forest-700/5 product-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 start-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor[product.badge] || 'bg-forest-700 text-white'}`}>
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-3.5 h-3.5 ${si < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-gray-200'}`}
                    />
                  ))}
                  <span className="text-xs text-forest-900/40 ms-1">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-forest-800 text-base mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-emerald-600 font-medium mb-2">{product.concern}</p>
                <p className="text-xs text-forest-900/50 leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded bg-forest-50 text-forest-700 text-[10px] font-semibold">
                    {product.keyIngredient}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-forest-700">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-forest-900/30 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        keyIngredient: product.keyIngredient,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest-700 text-white text-xs font-medium rounded-full hover:bg-forest-800 transition-all duration-300 shadow-glow-green"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    {addToCart}
                  </button>
                </div>
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
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border-2 border-forest-700 text-forest-700 font-medium rounded-full hover:bg-forest-700 hover:text-white transition-all duration-300"
          >
            {shopNow}
            <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
