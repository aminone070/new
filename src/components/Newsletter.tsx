import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Calendar, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react';
import { subscribeNewsletter, bookConsultation } from '@/lib/supabase';
import { Lang } from '@/lib/translations';

interface NewsletterProps {
  lang: Lang;
  sectionBadge: string;
  title: string;
  subtitle: string;
  form: {
    readonly namePlaceholder: string;
    readonly emailPlaceholder: string;
    readonly btnSubscribe: string;
    readonly btnLoading: string;
    readonly successTitle: string;
    readonly successMessage: string;
    readonly errorTitle: string;
    readonly privacyNote: string;
  };
  consultation: {
    readonly title: string;
    readonly subtitle: string;
    readonly namePlaceholder: string;
    readonly emailPlaceholder: string;
    readonly phonePlaceholder: string;
    readonly concernLabel: string;
    readonly concerns: readonly { readonly value: string; readonly label: string }[];
    readonly messagePlaceholder: string;
    readonly btnBook: string;
    readonly btnLoading: string;
    readonly successTitle: string;
    readonly successMessage: string;
  };
}

export default function Newsletter({ lang, sectionBadge, title, subtitle, form, consultation }: NewsletterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const [nlName, setNlName] = useState('');
  const [nlEmail, setNlEmail] = useState('');
  const [nlLoading, setNlLoading] = useState(false);
  const [nlStatus, setNlStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cConcern, setCConcern] = useState('general');
  const [cMessage, setCMessage] = useState('');
  const [cLoading, setCLoading] = useState(false);
  const [cStatus, setCStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlEmail) return;
    setNlLoading(true);
    setNlStatus('idle');
    try {
      await subscribeNewsletter({ email: nlEmail, name: nlName, language: lang });
      setNlStatus('success');
      setNlEmail('');
      setNlName('');
    } catch {
      setNlStatus('error');
    } finally {
      setNlLoading(false);
    }
  };

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName || !cEmail) return;
    setCLoading(true);
    setCStatus('idle');
    try {
      await bookConsultation({
        name: cName,
        email: cEmail,
        phone: cPhone,
        skin_concern: cConcern,
        message: cMessage,
      });
      setCStatus('success');
      setCName('');
      setCEmail('');
      setCPhone('');
      setCConcern('general');
      setCMessage('');
    } catch {
      setCStatus('error');
    } finally {
      setCLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-forest-700/10 text-forest-800 placeholder:text-forest-900/30 focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700/30 transition-all text-sm';

  return (
    <section id="newsletter" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-glow-green opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glow-gold opacity-30" />

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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-forest-700/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-forest-700/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-forest-700" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-800">
                Newsletter
              </h3>
            </div>

            {nlStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-semibold text-forest-800 mb-1">{form.successTitle}</h4>
                <p className="text-sm text-forest-900/55">{form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-4">
                <input
                  type="text"
                  value={nlName}
                  onChange={(e) => setNlName(e.target.value)}
                  placeholder={form.namePlaceholder}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  value={nlEmail}
                  onChange={(e) => setNlEmail(e.target.value)}
                  placeholder={form.emailPlaceholder}
                  className={inputClass}
                />
                {nlStatus === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {form.errorTitle}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={nlLoading}
                  className="w-full py-3 bg-forest-700 text-white font-medium rounded-xl hover:bg-forest-800 transition-all duration-300 shadow-glow-green disabled:opacity-60 flex items-center justify-center gap-2 text-sm"
                >
                  {nlLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {form.btnLoading}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {form.btnSubscribe}
                    </>
                  )}
                </button>
                <p className="text-xs text-forest-900/35 text-center">{form.privacyNote}</p>
              </form>
            )}
          </motion.div>

          {/* Consultation */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-card border border-forest-700/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-600/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-800">
                {consultation.title}
              </h3>
            </div>

            {cStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-serif text-lg font-semibold text-forest-800 mb-1">{consultation.successTitle}</h4>
                <p className="text-sm text-forest-900/55">{consultation.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleConsultation} className="space-y-4">
                <input
                  type="text"
                  required
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  placeholder={consultation.namePlaceholder}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  value={cEmail}
                  onChange={(e) => setCEmail(e.target.value)}
                  placeholder={consultation.emailPlaceholder}
                  className={inputClass}
                />
                <input
                  type="tel"
                  value={cPhone}
                  onChange={(e) => setCPhone(e.target.value)}
                  placeholder={consultation.phonePlaceholder}
                  className={inputClass}
                />
                <div>
                  <label className="block text-xs font-medium text-forest-700 mb-1.5">
                    {consultation.concernLabel}
                  </label>
                  <select
                    value={cConcern}
                    onChange={(e) => setCConcern(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    {consultation.concerns.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  value={cMessage}
                  onChange={(e) => setCMessage(e.target.value)}
                  placeholder={consultation.messagePlaceholder}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
                {cStatus === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {form.errorTitle}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={cLoading}
                  className="w-full py-3 bg-gold-600 text-white font-medium rounded-xl hover:bg-gold-700 transition-all duration-300 shadow-glow-gold disabled:opacity-60 flex items-center justify-center gap-2 text-sm"
                >
                  {cLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {consultation.btnLoading}
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      {consultation.btnBook}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
