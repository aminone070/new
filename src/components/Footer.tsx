import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';
interface FooterProps {
  tagline: string;
  links: {
    readonly company: string;
    readonly companyItems: readonly string[];
    readonly shop: string;
    readonly shopItems: readonly string[];
    readonly support: string;
    readonly supportItems: readonly string[];
    readonly legal: string;
    readonly legalItems: readonly string[];
  };
  newsletter: string;
  newsletterPlaceholder: string;
  newsletterBtn: string;
  copyright: string;
  certifications: readonly string[];
}

export default function Footer({
  tagline,
  links,
  newsletter,
  newsletterPlaceholder,
  newsletterBtn,
  copyright,
  certifications,
}: FooterProps) {
  const linkGroups = [
    { title: links.company, items: links.companyItems },
    { title: links.shop, items: links.shopItems },
    { title: links.support, items: links.supportItems },
    { title: links.legal, items: links.legalItems },
  ];

  return (
    <footer className="relative bg-forest-800 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <span className="font-serif text-xl font-semibold">Botanique</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">{tagline}</p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/30 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/30 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500/30 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4 tracking-wide uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <h4 className="text-sm font-semibold text-white/80">{newsletter}</h4>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder={newsletterPlaceholder}
                className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-l-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 w-full sm:w-64"
              />
              <button className="px-5 py-2.5 bg-emerald-500 text-white text-sm font-medium rounded-r-xl hover:bg-emerald-600 transition-colors shrink-0">
                {newsletterBtn}
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-3 mb-8">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50"
              >
                {cert}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <span>{copyright}</span>
            <span>Botanique Skincare Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
