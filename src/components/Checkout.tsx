import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CreditCard, Truck, ShieldCheck, Loader as Loader2, CircleAlert as AlertCircle, CircleCheck as CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { supabase } from '@/lib/supabase';
import SectionBg from '@/components/SectionBg';
import { Lang } from '@/lib/translations';

interface CheckoutProps {
  lang: Lang;
  t: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    orderSummary: string;
    subtotal: string;
    shipping: string;
    freeShipping: string;
    total: string;
    items: string;
    contactInfo: string;
    emailLabel: string;
    fullNameLabel: string;
    phoneLabel: string;
    shippingAddress: string;
    address1Label: string;
    address2Label: string;
    cityLabel: string;
    stateLabel: string;
    postalLabel: string;
    countryLabel: string;
    placeOrder: string;
    placing: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    emptyCart: string;
    emptyCartMessage: string;
    continueShopping: string;
    backToShop: string;
    secureNote: string;
  };
}

export default function Checkout({ lang, t }: CheckoutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const { items, subtotal, clearCart } = useCart();
  const isRTL = lang === 'ar';
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [orderId, setOrderId] = useState('');

  const [form, setForm] = useState({
    email: '',
    fullName: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postal: '',
    country: 'US',
  });

  const update = (key: string, value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-forest-700/10 text-forest-800 placeholder:text-forest-900/30 focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700/30 transition-all text-sm';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setLoading(true);
    setStatus('idle');

    try {
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          email: form.email,
          full_name: form.fullName,
          phone: form.phone,
          address_line1: form.address1,
          address_line2: form.address2,
          city: form.city,
          state: form.state,
          postal_code: form.postal,
          country: form.country,
          subtotal,
          shipping: 0,
          tax: 0,
          total: subtotal,
          language: lang,
        })
        .select('id')
        .single();

      if (orderError) throw orderError;

      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      setOrderId(order.id);
      setStatus('success');
      clearCart();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <section id="confirmation" className="relative py-20 sm:py-28 overflow-hidden">
        <SectionBg variant="green-left" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-800 mb-3">
            {t.successTitle}
          </h2>
          <p className="text-base text-forest-900/55 mb-2">{t.successMessage}</p>
          <p className="text-sm text-forest-900/40 mb-8">
            Order ID: {orderId.slice(0, 8).toUpperCase()}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-forest-700 text-white font-medium rounded-full hover:bg-forest-800 transition-colors shadow-glow-green"
          >
            {t.continueShopping}
          </a>
        </div>
      </section>
    );
  }

  if (items.length === 0 && status === 'idle') {
    return (
      <section id="checkout" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-forest-800 mb-3">{t.emptyCart}</h2>
          <p className="text-base text-forest-900/55 mb-8">{t.emptyCartMessage}</p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-forest-700 text-white font-medium rounded-full hover:bg-forest-800 transition-colors"
          >
            <BackArrow className="w-4 h-4" />
            {t.backToShop}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="relative py-20 sm:py-28 overflow-hidden">
      <SectionBg variant="mixed" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-forest-700/10 text-forest-700 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-800 mb-2">
            {t.title}
          </h2>
          <p className="text-base text-forest-900/55">{t.subtitle}</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-forest-700/5">
                <div className="flex items-center gap-3 mb-5">
                  <CreditCard className="w-5 h-5 text-forest-700" />
                  <h3 className="font-serif text-lg font-semibold text-forest-800">{t.contactInfo}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.emailLabel}</label>
                    <input type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.fullNameLabel}</label>
                    <input type="text" required value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.phoneLabel}</label>
                    <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-forest-700/5">
                <div className="flex items-center gap-3 mb-5">
                  <Truck className="w-5 h-5 text-forest-700" />
                  <h3 className="font-serif text-lg font-semibold text-forest-800">{t.shippingAddress}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.address1Label}</label>
                    <input type="text" required value={form.address1} onChange={(e) => update('address1', e.target.value)} className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.address2Label}</label>
                    <input type="text" value={form.address2} onChange={(e) => update('address2', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.cityLabel}</label>
                    <input type="text" required value={form.city} onChange={(e) => update('city', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.stateLabel}</label>
                    <input type="text" value={form.state} onChange={(e) => update('state', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.postalLabel}</label>
                    <input type="text" required value={form.postal} onChange={(e) => update('postal', e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-forest-700 mb-1.5">{t.countryLabel}</label>
                    <input type="text" value={form.country} onChange={(e) => update('country', e.target.value)} className={inputClass} />
                  </div>
                </div>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {t.errorTitle}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-forest-700/5 sticky top-24">
                <h3 className="font-serif text-lg font-semibold text-forest-800 mb-5">{t.orderSummary}</h3>

                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-forest-800 truncate">{item.name}</div>
                        <div className="text-xs text-forest-900/40">Qty: {item.quantity}</div>
                      </div>
                      <span className="text-sm font-bold text-forest-700">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 py-4 border-t border-forest-700/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-forest-900/55">{t.subtotal}</span>
                    <span className="font-medium text-forest-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-forest-900/55">{t.shipping}</span>
                    <span className="font-medium text-emerald-600">{t.freeShipping}</span>
                  </div>
                </div>

                <div className="flex justify-between py-3 border-t border-forest-700/10">
                  <span className="text-base font-semibold text-forest-800">{t.total}</span>
                  <span className="text-lg font-bold text-forest-700">${subtotal.toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-forest-700 text-white font-medium rounded-xl hover:bg-forest-800 transition-colors shadow-glow-green disabled:opacity-60 flex items-center justify-center gap-2 text-sm mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t.placing}
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      {t.placeOrder}
                    </>
                  )}
                </button>

                <p className="text-xs text-forest-900/35 text-center mt-3 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {t.secureNote}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
