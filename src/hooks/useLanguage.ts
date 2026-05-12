import { useState, useEffect } from 'react';
import { Lang, getTranslations, TranslationsType } from '@/lib/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('botanique-lang');
    return (stored === 'ar' || stored === 'en') ? stored : 'en';
  });

  useEffect(() => {
    localStorage.setItem('botanique-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', lang === 'ar');
    document.body.classList.toggle('lang-en', lang === 'en');
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const t: TranslationsType = getTranslations(lang);

  return { lang, setLang, toggleLang, t, isRTL: lang === 'ar' };
}
