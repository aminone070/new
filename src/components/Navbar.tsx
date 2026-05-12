import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { Lang } from '@/lib/translations';

interface NavbarProps {
  lang: Lang;
  toggleLang: () => void;
  t: {
    brand: string;
    tagline: string;
    products: string;
    ingredients: string;
    results: string;
    about: string;
    contact: string;
    shopNow: string;
    langToggle: string;
  };
}

export default function Navbar({ toggleLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.products, href: '#products' },
    { label: t.ingredients, href: '#ingredients' },
    { label: t.results, href: '#gallery' },
    { label: t.about, href: '#features' },
    { label: t.contact, href: '#newsletter' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-forest-700/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Leaf className="w-7 h-7 text-forest-700 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-forest-700/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-forest-800 tracking-tight leading-none">
                  {t.brand}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-medium">
                  {t.tagline}
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-forest-900/70 hover:text-forest-700 transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-forest-700 to-emerald-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 text-xs font-medium border border-forest-700/20 rounded-full text-forest-700 hover:bg-forest-700 hover:text-white transition-all duration-300"
              >
                {t.langToggle}
              </button>

              <a
                href="#products"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-forest-700 text-white text-sm font-medium rounded-full hover:bg-forest-800 transition-all duration-300 shadow-glow-green hover:shadow-glow-green"
              >
                <ShoppingBag className="w-4 h-4" />
                {t.shopNow}
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-forest-700 hover:bg-forest-50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-4 text-lg font-serif text-forest-800 hover:text-forest-600 border-b border-forest-100 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center gap-2 px-8 py-3 bg-forest-700 text-white font-medium rounded-full shadow-glow-green"
              >
                <ShoppingBag className="w-5 h-5" />
                {t.shopNow}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
