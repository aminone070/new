import { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Lang } from '@/lib/translations';

interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  lang: Lang;
  title: string;
  subtitle: string;
  placeholder: string;
  sendBtn: string;
  greeting: string;
}

const botResponses: Record<string, Record<string, string>> = {
  en: {
    hello: "Hello! Welcome to Botanique. I'm here to help you find the perfect skincare routine. What's your main skin concern?",
    acne: "For acne and breakouts, I'd recommend our Niacinamide 10% Pore Serum combined with the Retinol Renewal Night Cream. These work together to reduce inflammation and accelerate cell turnover. Would you like to know more?",
    aging: "For anti-aging concerns, our Retinol Renewal Night Cream and Peptide Complex Eye Cream are our top performers. Clinical studies show visible reduction in fine lines within 4 weeks. Want product details?",
    dry: "For dryness and dehydration, our Hyaluronic Deep Moisturizer provides 72-hour hydration with a triple-weight HA complex. Layer it with the Vitamin C Serum for best results. Shall I help you build a routine?",
    brightening: "Our Vitamin C Brightening Serum with 20% L-Ascorbic Acid is our #1 brightener. Users report visible radiance improvement in just 2 weeks. Pair it with our SPF 50 Shield for daytime protection.",
    sensitive: "All Botanique products are hypoallergenic and fragrance-free, perfect for sensitive skin. I'd recommend starting with our Hyaluronic Deep Moisturizer — it's our gentlest formula. Want a personalized routine?",
    shipping: "We offer free shipping on orders over $50! Standard delivery takes 3-7 business days. We also offer express shipping for $9.99 with 1-3 day delivery.",
    returns: "We accept returns within 30 days for unopened products and 14 days for opened ones if defective. Your satisfaction is our priority!",
    consultation: "You can book a free 1-on-1 dermatology consultation on our website. Our partner dermatologists will create a personalized skincare protocol just for you. Scroll down to the consultation section!",
    default: "That's a great question! For personalized advice, I'd recommend booking a free consultation with one of our dermatologists. In the meantime, feel free to browse our products or ask me about specific skin concerns.",
  },
  ar: {
    hello: "مرحبًا! أهلاً بك في بوتانيك. أنا هنا لمساعدتك في العثور على روتين العناية بالبشرة المثالي. ما هو اهتمامك الرئيسي بالبشرة؟",
    acne: "لحب الشباب والبثور، أوصي بسيروم النياسيناميد 10% مع كريم الريتينول للتجديد الليلي. يعملان معًا لتقليل الالتهاب وتسريع دوران الخلايا. هل تريد معرفة المزيد؟",
    aging: "لمكافحة الشيخوخة، كريم الريتينول وكريم العيون بمجمع الببتيدات هما الأفضل لدينا. الدراسات السريرية تُظهر تقليلًا مرئيًا في الخطوط الدقيقة خلال 4 أسابيع.",
    dry: "للجفاف، مرطب حمض الهيالورونيك العميق يوفر ترطيبًا لمدة 72 ساعة. استخدمه مع سيروم فيتامين سي لأفضل النتائج. هل أساعدك في بناء روتين؟",
    brightening: "سيروم فيتامين سي بتركيز 20% هو الأفضل للإشراق. المستخدمون يلاحظون تحسنًا في النضارة خلال أسبوعين فقط.",
    sensitive: "جميع منتجات بوتانيك مضادة للحساسية وخالية من العطور. أوصي بالبدء بمرطب حمض الهيالورونيك — إنه أكثر تركيباتنا لطفًا.",
    shipping: "نقدم شحنًا مجانيًا على الطلبات التي تزيد عن 50 دولارًا! التوصيل القياسي يستغرق 3-7 أيام عمل.",
    returns: "نقبل الإرجاع خلال 30 يومًا للمنتجات غير المفتوحة و14 يومًا للمفتوحة إذا كانت معيبة.",
    consultation: "يمكنك حجز استشارة مجانية مع أحد أطباء الجلدية لدينا. انتقل لأسفل الصفحة إلى قسم الاستشارة!",
    default: "سؤال رائع! للحصول على نصائح مخصصة، أوصي بحجز استشارة مجانية. في غضون ذلك، تصفح منتجاتنا أو اسألني عن مخاوف بشرة محددة.",
  },
};

function getBotResponse(text: string, lang: Lang): string {
  const lower = text.toLowerCase();
  const responses = botResponses[lang] || botResponses.en;
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('مرحب') || lower.includes('أهلا')) return responses.hello;
  if (lower.includes('acne') || lower.includes('breakout') || lower.includes('حب الشباب') || lower.includes('بثور')) return responses.acne;
  if (lower.includes('aging') || lower.includes('wrinkle') || lower.includes('شيخوخة') || lower.includes('تجاعيد')) return responses.aging;
  if (lower.includes('dry') || lower.includes('dehydrat') || lower.includes('جفاف')) return responses.dry;
  if (lower.includes('bright') || lower.includes('dark spot') || lower.includes('إشراق') || lower.includes('بقع')) return responses.brightening;
  if (lower.includes('sensit') || lower.includes('حساس')) return responses.sensitive;
  if (lower.includes('ship') || lower.includes('deliver') || lower.includes('شحن') || lower.includes('توصيل')) return responses.shipping;
  if (lower.includes('return') || lower.includes('refund') || lower.includes('إرجاع') || lower.includes('استرجاع')) return responses.returns;
  if (lower.includes('consult') || lower.includes('doctor') || lower.includes('derm') || lower.includes('استشار') || lower.includes('طبيب')) return responses.consultation;
  return responses.default;
}

export default function ChatWidget({ lang, title, subtitle, placeholder, greeting }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasGreeted = useRef(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasGreeted.current) {
      hasGreeted.current = true;
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'bot',
            text: greeting,
            timestamp: new Date(),
          },
        ]);
      }, 600);
    }
  }, [isOpen, greeting]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      await supabase.from('chat_messages').insert({
        session_id: 'web',
        role: 'user',
        content: text,
        language: lang,
      }).then(() => {});
    } catch {
      // silently fail - chat is best effort
    }

    setTimeout(() => {
      const response = getBotResponse(text, lang);
      const botMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'bot',
        text: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 end-6 z-40 w-14 h-14 rounded-full bg-forest-700 text-white shadow-glow-green flex items-center justify-center hover:bg-forest-800 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -end-1 w-4 h-4 rounded-full bg-gold-500 border-2 border-white"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 end-6 z-40 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-forest-700/10 overflow-hidden flex flex-col"
            style={{ height: 'min(520px, 70vh)' }}
          >
            {/* Header */}
            <div className="bg-forest-700 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-xs text-white/60">{subtitle}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'bot' ? 'bg-forest-700/10' : 'bg-gold-600/10'
                  }`}>
                    {msg.role === 'bot' ? (
                      <Bot className="w-4 h-4 text-forest-700" />
                    ) : (
                      <User className="w-4 h-4 text-gold-600" />
                    )}
                  </div>
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'bot'
                      ? 'bg-cream text-forest-800 rounded-start-sm'
                      : 'bg-forest-700 text-white rounded-end-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-forest-700/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-forest-700" />
                  </div>
                  <div className="bg-cream px-4 py-3 rounded-2xl rounded-start-sm">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-forest-700/30"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-forest-700/10 p-3">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-cream border border-forest-700/10 text-sm text-forest-800 placeholder:text-forest-900/30 focus:outline-none focus:ring-2 focus:ring-forest-700/20"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-forest-700 text-white flex items-center justify-center hover:bg-forest-800 transition-colors disabled:opacity-40 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
