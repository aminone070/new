import { useLanguage } from '@/hooks/useLanguage';
import { CartProvider, useCart } from '@/hooks/useCart';
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
import Checkout from '@/components/Checkout';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

function AppContent() {
  const { lang, toggleLang, t, isRTL } = useLanguage();
  const { isOpen, closeCart } = useCart();

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl-flip' : 'ltr-force'}`}>
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
        <Checkout lang={lang} t={t.checkout} />
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
