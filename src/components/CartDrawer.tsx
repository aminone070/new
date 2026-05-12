import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Lang } from '@/lib/translations';
import { useRouter } from '@/hooks/useRouter';

interface CartDrawerProps {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  emptyTitle: string;
  emptySubtitle: string;
  subtotalLabel: string;
  shippingLabel: string;
  freeShipping: string;
  checkoutBtn: string;
  continueShopping: string;
  removeLabel: string;
}

export default function CartDrawer({
  lang,
  isOpen,
  onClose,
  title,
  emptyTitle,
  emptySubtitle,
  subtotalLabel,
  shippingLabel,
  freeShipping,
  checkoutBtn,
  continueShopping,
  removeLabel,
}: CartDrawerProps) {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const { navigate } = useRouter();
  const isRTL = lang === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-forest-700/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-forest-700" />
                <h2 className="font-serif text-lg font-semibold text-forest-800">{title}</h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-forest-700 text-white text-xs font-medium">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-forest-50 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-forest-700" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-forest-200 mb-4" />
                  <h3 className="font-serif text-lg font-semibold text-forest-800 mb-1">{emptyTitle}</h3>
                  <p className="text-sm text-forest-900/40 mb-6">{emptySubtitle}</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-forest-700 text-white text-sm font-medium rounded-full hover:bg-forest-800 transition-colors"
                  >
                    {continueShopping}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                      className="flex gap-4 p-3 rounded-xl bg-cream/60 border border-forest-700/5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-forest-800 truncate">{item.name}</h4>
                        <p className="text-xs text-emerald-600 mt-0.5">{item.keyIngredient}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-lg bg-white border border-forest-700/10 flex items-center justify-center hover:bg-forest-50 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3 text-forest-700" />
                            </button>
                            <span className="text-sm font-medium text-forest-800 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-lg bg-white border border-forest-700/10 flex items-center justify-center hover:bg-forest-50 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3 text-forest-700" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-forest-700">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                              aria-label={removeLabel}
                            >
                              <Trash2 className="w-3.5 h-3.5 text-red-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-forest-700/10 px-6 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-forest-900/60">{subtotalLabel}</span>
                  <span className="text-sm font-bold text-forest-700">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-forest-900/60">{shippingLabel}</span>
                  <span className="text-sm font-medium text-emerald-600">{freeShipping}</span>
                </div>
                <div className="h-px bg-forest-700/10" />
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-forest-800">Total</span>
                  <span className="text-lg font-bold text-forest-700">${subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => { onClose(); navigate('checkout'); }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-forest-700 text-white font-medium rounded-xl hover:bg-forest-800 transition-colors shadow-glow-green"
                >
                  {checkoutBtn}
                  <Arrow className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
