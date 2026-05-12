import { useLanguage } from '@/hooks/useLanguage';
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
import Footer from '@/components/Footer';

export default function App() {
  const { lang, toggleLang, t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl-flip' : 'ltr-force'}`}>
      <FloatingElements />
      <Navbar lang={lang} toggleLang={toggleLang} t={t.nav} />
      <main>
        <Hero lang={lang} t={t.hero} />
        <TrustBar items={t.trust.items} />
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
    </div>
  );
}
