import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CircleCheck as CheckCircle } from 'lucide-react';
import { Lang } from '@/lib/translations';

interface QuizQuestion {
  readonly question: string;
  readonly options: readonly { readonly value: string; readonly label: string }[];
}

interface SkinQuizProps {
  lang: Lang;
  sectionBadge: string;
  title: string;
  subtitle: string;
  questions: readonly QuizQuestion[];
  cta: string;
  resultTitle: string;
  resultPrefix: string;
  resultSuffix: string;
  retake: string;
}

export default function SkinQuiz({ lang, sectionBadge, title, subtitle, questions, cta, resultTitle, resultPrefix, resultSuffix, retake }: SkinQuizProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isRTL = lang === 'ar';
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const handleSelect = (value: string) => {
    const key = questions[current].question;
    setAnswers((p) => ({ ...p, [key]: value }));
    if (current < questions.length - 1) {
      setCurrent((p) => p + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers({});
    setDone(false);
  };

  const concernMap: Record<string, string> = {
    dry: 'Hydration & Barrier Repair',
    oily: 'Oil Control & Pore Refinement',
    sensitive: 'Calming & Soothing',
    aging: 'Anti-Aging & Firming',
    acne: 'Acne Treatment & Prevention',
    dull: 'Brightening & Radiance',
    combination: 'Balancing & Even Tone',
    normal: 'Maintenance & Prevention',
  };

  const topConcern = Object.values(answers)[0] || 'normal';

  return (
    <section id="skin-quiz" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-glow-green opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-forest-700/10 text-forest-700 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            {sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-forest-800 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-forest-900/55 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {!started ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <button
              onClick={() => setStarted(true)}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-forest-700 text-white font-medium rounded-full hover:bg-forest-800 transition-all shadow-glow-green text-base"
            >
              <Sparkles className="w-5 h-5" />
              {cta}
              <NextArrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        ) : done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-card border border-forest-700/5 text-center"
          >
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-forest-800 mb-3">{resultTitle}</h3>
            <p className="text-lg text-forest-700 font-medium mb-2">
              {resultPrefix} <span className="text-gold-600">{concernMap[topConcern] || topConcern}</span> {resultSuffix}
            </p>
            <p className="text-sm text-forest-900/40 mb-6">
              {Object.entries(answers).map(([q, a], i) => (
                <span key={i} className="block">{q}: {a}</span>
              ))}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-forest-700 text-white text-sm font-medium rounded-full hover:bg-forest-800 transition-colors"
              >
                {cta}
              </a>
              <button
                onClick={reset}
                className="px-6 py-2.5 border-2 border-forest-700/20 text-forest-700 text-sm font-medium rounded-full hover:border-forest-700 transition-colors"
              >
                {retake}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-forest-700/5"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-forest-900/40">
                {current + 1} / {questions.length}
              </span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i <= current ? 'w-8 bg-forest-700' : 'w-4 bg-forest-700/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-xl font-semibold text-forest-800 mb-6">
                  {questions[current].question}
                </h3>
                <div className="space-y-3">
                  {questions[current].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full text-start px-5 py-4 rounded-xl border transition-all duration-300 text-sm font-medium ${
                        answers[questions[current].question] === opt.value
                          ? 'border-forest-700 bg-forest-700/5 text-forest-700'
                          : 'border-forest-700/10 bg-white text-forest-800 hover:border-forest-700/30 hover:bg-forest-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
