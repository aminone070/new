import { lazy, Suspense } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { CartProvider, useCart } from '@/hooks/useCart';
import { useRouter } from '@/hooks/useRouter';
import type { Lang, TranslationsType } from '@/lib/translations';
import FloatingElements from '@/components/FloatingElements';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Ingredients from '@/components/Ingredients';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import About from '@/components/About';
import SkinQuiz from '@/components/SkinQuiz';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Checkout = lazy(() => import('@/components/Checkout'));
const ChatWidget = lazy(() => import('@/components/ChatWidget'));

function HomePage({ lang, toggleLang, t }: { lang: Lang; toggleLang: () => void; t: TranslationsType }) {
  const { isOpen, closeCart } = useCart();

  return (
    <>
      <FloatingElements />
      <Navbar lang={lang} toggleLang={toggleLang} t={t.nav} />
      <CartDrawer
        lang={lang}
        isOpen={isOpen}
        onClose={closeCart}
        title={t.cart.title}
        emptyTitle={t.cart.emptyTitle}
        emptySubtitle={t.cart.emptySubtitle}
        subtotalLabel={t.cart.subtotalLabel}
        shippingLabel={t.cart.shippingLabel}
        freeShipping={t.cart.freeShipping}
        checkoutBtn={t.cart.checkoutBtn}
        continueShopping={t.cart.continueShopping}
        removeLabel={t.cart.removeLabel}
      />
      <main>
        <Hero lang={lang} t={t.hero} />
        <TrustBar lang={lang} items={t.trust.items} />
        <Features
          sectionBadge={t.features.sectionBadge}
          title={t.features.title}
          subtitle={t.features.subtitle}
          items={t.features.items}
        />
        <Products
          lang={lang}
          sectionBadge={t.products.sectionBadge}
          title={t.products.title}
          subtitle={t.products.subtitle}
          addToCart={t.products.addToCart}
          shopNow={t.products.shopNow}
          items={t.products.items}
        />
        <Ingredients
          sectionBadge={t.ingredients.sectionBadge}
          title={t.ingredients.title}
          subtitle={t.ingredients.subtitle}
          items={t.ingredients.items}
        />
        <Gallery
          sectionBadge={t.gallery.sectionBadge}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          cta={t.gallery.cta}
          images={t.gallery.images}
        />
        <Testimonials
          sectionBadge={t.testimonials.sectionBadge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          items={t.testimonials.items}
        />
        <About
          sectionBadge={t.about.sectionBadge}
          title={t.about.title}
          subtitle={t.about.subtitle}
          mission={t.about.mission}
          missionText={t.about.missionText}
          story={t.about.story}
          storyText={t.about.storyText}
          values={t.about.values}
          stats={t.about.stats}
        />
        <SkinQuiz
          lang={lang}
          sectionBadge={t.skinQuiz.sectionBadge}
          title={t.skinQuiz.title}
          subtitle={t.skinQuiz.subtitle}
          questions={t.skinQuiz.questions}
          cta={t.skinQuiz.cta}
          resultTitle={t.skinQuiz.resultTitle}
          resultPrefix={t.skinQuiz.resultPrefix}
          resultSuffix={t.skinQuiz.resultSuffix}
          retake={t.skinQuiz.retake}
        />
        <Newsletter
          lang={lang}
          sectionBadge={t.newsletter.sectionBadge}
          title={t.newsletter.title}
          subtitle={t.newsletter.subtitle}
          form={t.newsletter.form}
          consultation={t.newsletter.consultation}
        />
      </main>
      <Footer
        tagline={t.footer.tagline}
        links={t.footer.links}
        newsletter={t.footer.newsletter}
        newsletterPlaceholder={t.footer.newsletterPlaceholder}
        newsletterBtn={t.footer.newsletterBtn}
        copyright={t.footer.copyright}
        certifications={t.footer.certifications}
      />
    </>
  );
}

function CheckoutPage({ lang, t }: { lang: string; t: ReturnType<typeof useLanguage>['t'] }) {
  return (
    <>
      <FloatingElements />
      <Navbar lang={lang as 'en' | 'ar'} toggleLang={() => {}} t={t.nav} />
      <main className="pt-20">
        <Suspense fallback={<div className="py-20" />}>
          <Checkout lang={lang as 'en' | 'ar'} t={t.checkout} />
        </Suspense>
      </main>
      <Footer
        tagline={t.footer.tagline}
        links={t.footer.links}
        newsletter={t.footer.newsletter}
        newsletterPlaceholder={t.footer.newsletterPlaceholder}
        newsletterBtn={t.footer.newsletterBtn}
        copyright={t.footer.copyright}
        certifications={t.footer.certifications}
      />
    </>
  );
}

function AppContent() {
  const { lang, toggleLang, t, isRTL } = useLanguage();
  const { route } = useRouter();

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl-flip' : 'ltr-force'}`}>
      {route === 'checkout' || route === 'confirmation' ? (
        <CheckoutPage lang={lang} t={t} />
      ) : (
        <HomePage lang={lang} toggleLang={toggleLang} t={t} />
      )}
      <Suspense fallback={null}>
        <ChatWidget
          lang={lang}
          title={t.chat.title}
          subtitle={t.chat.subtitle}
          placeholder={t.chat.placeholder}
          sendBtn={t.chat.sendBtn}
          greeting={t.chat.greeting}
        />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            border: '1px solid rgba(22,101,52,0.1)',
            color: '#166534',
            fontFamily: 'Inter, sans-serif',
          },
        }}
        richColors
      />
      <AppContent />
    </CartProvider>
  );
}
