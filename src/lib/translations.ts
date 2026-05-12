export type Lang = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      brand: 'Botanique',
      tagline: 'Science × Nature',
      products: 'Products',
      ingredients: 'Ingredients',
      results: 'Results',
      about: 'About',
      contact: 'Contact',
      shopNow: 'Shop Now',
      langToggle: 'عربي',
    },
    hero: {
      badge: 'Dermatologist Developed · 4-Week Visible Results',
      titleLine1: 'Science Meets',
      titleLine2: 'Beauty',
      subtitle: 'Clinically Proven · Dermatology Backed · Real Results',
      description:
        'Discover formulas developed with dermatologists that transform your skin in just 28 days. Backed by science, inspired by the purest botanicals on earth.',
      ctaPrimary: 'Shop Collection',
      ctaSecondary: 'Book Free Consultation',
      statSatisfied: 'Satisfied Customers',
      statDerms: 'Dermatologists',
      statIngredients: 'Active Ingredients',
      statResults: 'Success Rate',
      scrollDown: 'Explore',
    },
    trust: {
      items: [
        'Clinically Tested',
        'Dermatologist Approved',
        '98% Natural Ingredients',
        'Fragrance Free',
        'Cruelty Free',
        'Visible Results in 28 Days',
        'Hypoallergenic Formula',
        'Sustainably Sourced',
      ],
    },
    features: {
      sectionBadge: 'The Science',
      title: 'Why Botanique Works',
      subtitle:
        'Every formula is built on peer-reviewed research and tested in certified dermatology labs before it ever reaches your skin.',
      items: [
        {
          icon: 'FlaskConical',
          title: 'Clinically Formulated',
          description:
            'Each product is developed in ISO-certified labs with input from board-certified dermatologists and validated through clinical trials.',
        },
        {
          icon: 'Leaf',
          title: '98% Natural Actives',
          description:
            'We source the most bioavailable botanical extracts, ethically harvested from their native habitats for maximum potency.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Dermatologist Approved',
          description:
            'Reviewed and recommended by over 200 dermatologists across 15 countries. Safe for all skin types including sensitive.',
        },
        {
          icon: 'Activity',
          title: 'Visible in 28 Days',
          description:
            'Clinical studies show 94% of users reported measurable improvement in skin texture, tone, and radiance within 4 weeks.',
        },
        {
          icon: 'Microscope',
          title: 'Deep Cellular Action',
          description:
            'Our patented micro-encapsulation technology delivers active ingredients directly to the dermal layer for lasting results.',
        },
        {
          icon: 'Heart',
          title: 'Cruelty-Free Certified',
          description:
            'PETA certified. No animal testing, ever. Vegan-friendly formulas that respect both your skin and our planet.',
        },
      ],
    },
    products: {
      sectionBadge: 'The Collection',
      title: 'Precision Skincare',
      subtitle:
        'Every product targets a specific skin concern with pharmaceutical-grade ingredients at clinically effective concentrations.',
      addToCart: 'Add to Cart',
      shopNow: 'Shop Now',
      bestSeller: 'Best Seller',
      newFormula: 'New Formula',
      dermatologistChoice: "Derm's Pick",
      items: [
        {
          id: 'vitamin-c-serum',
          name: 'Vitamin C Brightening Serum',
          nameShort: 'Vitamin C Serum',
          price: 89,
          originalPrice: 110,
          rating: 4.9,
          reviews: 2847,
          badge: 'Best Seller',
          concern: 'Brightening · Dark Spots · Radiance',
          description:
            '20% L-Ascorbic Acid with ferulic acid and vitamin E. Visibly reduces dark spots and boosts radiance in 2 weeks.',
          image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'L-Ascorbic Acid 20%',
        },
        {
          id: 'retinol-cream',
          name: 'Retinol Renewal Night Cream',
          nameShort: 'Retinol Cream',
          price: 95,
          originalPrice: 120,
          rating: 4.8,
          reviews: 1934,
          badge: "Derm's Pick",
          concern: 'Anti-Aging · Texture · Cell Renewal',
          description:
            'Encapsulated 0.5% retinol with ceramides and peptides. Resurfaces skin and reduces fine lines while you sleep.',
          image: 'https://images.pexels.com/photos/6663573/pexels-photo-6663573.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Retinol 0.5%',
        },
        {
          id: 'hyaluronic-moisturizer',
          name: 'Hyaluronic Deep Moisturizer',
          nameShort: 'HA Moisturizer',
          price: 75,
          originalPrice: null,
          rating: 4.9,
          reviews: 3201,
          badge: 'Best Seller',
          concern: 'Hydration · Plumping · Barrier Repair',
          description:
            'Triple-weight hyaluronic acid complex with ceramides and squalane. 72-hour hydration for visibly plumper skin.',
          image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Hyaluronic Acid 3-Complex',
        },
        {
          id: 'niacinamide-serum',
          name: 'Niacinamide 10% Pore Serum',
          nameShort: 'Niacinamide Serum',
          price: 79,
          originalPrice: null,
          rating: 4.7,
          reviews: 1556,
          badge: 'New Formula',
          concern: 'Pores · Oil Control · Skin Tone',
          description:
            '10% niacinamide with zinc PCA. Visibly minimizes pores, regulates sebum, and evens skin tone in 4 weeks.',
          image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Niacinamide 10% + Zinc PCA',
        },
        {
          id: 'peptide-eye-cream',
          name: 'Peptide Complex Eye Cream',
          nameShort: 'Eye Cream',
          price: 85,
          originalPrice: 105,
          rating: 4.8,
          reviews: 987,
          badge: "Derm's Pick",
          concern: 'Dark Circles · Fine Lines · Firming',
          description:
            'Matrixyl 3000 and caffeine complex specifically formulated for the delicate eye area. Reduces puffiness overnight.',
          image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Matrixyl 3000 + Caffeine',
        },
        {
          id: 'spf50-shield',
          name: 'Invisible SPF 50+ Daily Shield',
          nameShort: 'SPF 50 Shield',
          price: 65,
          originalPrice: null,
          rating: 4.9,
          reviews: 2103,
          badge: 'Best Seller',
          concern: 'UV Protection · Anti-Pollution · Lightweight',
          description:
            'Broad-spectrum SPF 50+ with antioxidant complex. Ultra-lightweight, no white cast, suitable for all skin tones.',
          image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Zinc Oxide + Antioxidant Complex',
        },
      ],
    },
    ingredients: {
      sectionBadge: 'Ingredients',
      title: 'Nature + Science in Every Drop',
      subtitle:
        'We partner with leading biochemistry labs to identify the most effective natural compounds, then concentrate and stabilize them at clinically validated levels.',
      items: [
        {
          name: 'Vitamin C (L-Ascorbic Acid)',
          benefit: 'Brightens • Antioxidant • Collagen Synthesis',
          description: 'The gold standard antioxidant. Neutralizes free radicals and stimulates collagen at concentrations above 10%.',
          source: 'Citrus & Botanical Synthesis',
          icon: 'Sun',
        },
        {
          name: 'Retinol (Vitamin A)',
          benefit: 'Anti-Aging • Cell Renewal • Texture',
          description: 'The most clinically validated anti-aging ingredient. Accelerates cell turnover and stimulates collagen production.',
          source: 'Encapsulated for Stability',
          icon: 'Moon',
        },
        {
          name: 'Hyaluronic Acid',
          benefit: 'Deep Hydration • Plumping • Barrier',
          description: 'Holds up to 1000x its weight in water. Our 3-molecular-weight formula penetrates every skin layer.',
          source: 'Biofermentation',
          icon: 'Droplets',
        },
        {
          name: 'Niacinamide',
          benefit: 'Pores • Even Tone • Oil Control',
          description: 'Multitasking B vitamin that improves skin texture, reduces sebum, and strengthens the skin barrier simultaneously.',
          source: 'Pharmaceutical Grade',
          icon: 'Zap',
        },
        {
          name: 'Matrixyl 3000',
          benefit: 'Collagen Boost • Firming • Wrinkles',
          description: 'A peptide complex that signals the skin to produce more collagen. Clinically shown to reduce wrinkle depth by 45%.',
          source: 'Biotechnology',
          icon: 'Layers',
        },
        {
          name: 'Centella Asiatica',
          benefit: 'Calming • Healing • Anti-Inflammatory',
          description: 'Ancient botanical with modern science backing. Accelerates wound healing and calms inflammatory skin conditions.',
          source: 'Organic Sri Lanka Harvest',
          icon: 'Sprout',
        },
      ],
    },
    gallery: {
      sectionBadge: 'Real Results',
      title: 'The Botanique Difference',
      subtitle: 'Before & after photos from verified customers after 4 weeks of consistent use. No filters. No editing. Just results.',
      cta: 'View All Transformations',
      images: [
        {
          src: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Brightening Routine',
        },
        {
          src: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Anti-Aging Protocol',
        },
        {
          src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Hydration Ritual',
        },
        {
          src: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Pore Refinement',
        },
        {
          src: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Eye Treatment',
        },
        {
          src: 'https://images.pexels.com/photos/6663573/pexels-photo-6663573.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'Renewal Routine',
        },
      ],
    },
    testimonials: {
      sectionBadge: 'Testimonials',
      title: 'Real People. Real Results.',
      subtitle: 'Over 50,000 customers have transformed their skin with Botanique. Here are their stories.',
      items: [
        {
          name: 'Sarah Mitchell',
          role: 'Verified Customer · Vitamin C Serum',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'I was skeptical at first, but after 3 weeks my skin is genuinely brighter. My dark spots have faded significantly. The science behind this product is real. I\'ve tried dozens of serums and nothing has worked like this.',
          weeks: 3,
        },
        {
          name: 'Dr. James Keightley',
          role: 'Board-Certified Dermatologist',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'As a dermatologist, I\'m extremely selective about what I recommend. Botanique\'s formulations are genuinely impressive - the ingredient concentrations are clinically meaningful and the delivery systems are state of the art. I recommend these to my patients.',
          weeks: null,
        },
        {
          name: 'Aisha Rahman',
          role: 'Verified Customer · Retinol Cream',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'After years of struggling with textured skin and breakouts, the Retinol Renewal Cream changed everything. My skin is smoother than it\'s been since my teens. The encapsulated retinol means no irritation. I am genuinely amazed.',
          weeks: 4,
        },
        {
          name: 'Emma Larsson',
          role: 'Verified Customer · Full Routine',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'I started with just the moisturizer and was so impressed I built my whole routine around Botanique. 8 weeks in, my skin tone is the most even it\'s ever been. Worth every penny.',
          weeks: 8,
        },
        {
          name: 'Marcus Chen',
          role: 'Verified Customer · Niacinamide Serum',
          avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'The Niacinamide serum is extraordinary. My pores look half the size they did before and my skin doesn\'t get oily by midday anymore. This is the product I\'ve been searching for.',
          weeks: 5,
        },
        {
          name: 'Fatima Al-Hassan',
          role: 'Verified Customer · SPF Shield',
          avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'Finally an SPF that doesn\'t leave a white cast on my deeper skin tone! The Daily Shield feels like nothing on your skin but gives serious protection. I wear it every single day now.',
          weeks: 2,
        },
      ],
    },
    newsletter: {
      sectionBadge: 'Join the Community',
      title: 'Transform Your Skin Journey',
      subtitle: 'Join 50,000+ skincare enthusiasts who receive expert tips, early access to new launches, and exclusive member discounts.',
      form: {
        namePlaceholder: 'Your full name',
        emailPlaceholder: 'Your email address',
        btnSubscribe: 'Join the Community',
        btnLoading: 'Subscribing...',
        successTitle: 'Welcome to Botanique!',
        successMessage: 'Thank you for joining. Check your inbox for your welcome gift.',
        errorTitle: 'Something went wrong',
        privacyNote: 'We respect your privacy. Unsubscribe anytime.',
      },
      consultation: {
        title: 'Book a Free Dermatology Consultation',
        subtitle:
          'Speak 1-on-1 with one of our partner dermatologists. Get a personalized skincare protocol built for your unique skin.',
        namePlaceholder: 'Full name',
        emailPlaceholder: 'Email address',
        phonePlaceholder: 'Phone number (optional)',
        concernLabel: 'Primary skin concern',
        concerns: [
          { value: 'acne', label: 'Acne & Breakouts' },
          { value: 'aging', label: 'Anti-Aging & Wrinkles' },
          { value: 'hyperpigmentation', label: 'Dark Spots & Uneven Tone' },
          { value: 'dryness', label: 'Dryness & Dehydration' },
          { value: 'sensitivity', label: 'Sensitivity & Redness' },
          { value: 'pores', label: 'Enlarged Pores & Oiliness' },
          { value: 'general', label: 'General Consultation' },
        ],
        messagePlaceholder: 'Tell us more about your skin concerns (optional)',
        btnBook: 'Book Free Consultation',
        btnLoading: 'Booking...',
        successTitle: 'Consultation Booked!',
        successMessage: 'Our dermatology team will contact you within 24 hours to confirm your appointment.',
      },
    },
    footer: {
      tagline: 'Where science meets the art of beautiful skin.',
      links: {
        company: 'Company',
        companyItems: ['About Us', 'Our Science', 'Dermatology Partners', 'Sustainability', 'Press'],
        shop: 'Shop',
        shopItems: ['All Products', 'Serums', 'Moisturizers', 'Eye Care', 'Sun Protection', 'Gift Sets'],
        support: 'Support',
        supportItems: ['FAQ', 'Shipping & Returns', 'Skin Quiz', 'Consultation Booking', 'Contact Us'],
        legal: 'Legal',
        legalItems: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Ingredient Glossary'],
      },
      newsletter: 'Stay in the loop',
      newsletterPlaceholder: 'Enter your email',
      newsletterBtn: 'Subscribe',
      copyright: '© 2025 Botanique. All rights reserved.',
      certifications: ['Dermatologist Tested', 'Cruelty Free', '98% Natural', 'ISO 9001 Certified'],
    },
  },
  ar: {
    nav: {
      brand: 'بوتانيك',
      tagline: 'العلم × الطبيعة',
      products: 'المنتجات',
      ingredients: 'المكونات',
      results: 'النتائج',
      about: 'من نحن',
      contact: 'تواصل معنا',
      shopNow: 'تسوق الآن',
      langToggle: 'English',
    },
    hero: {
      badge: 'تطوير طبي متخصص · نتائج مرئية خلال 4 أسابيع',
      titleLine1: 'العلم يلتقي',
      titleLine2: 'بالجمال',
      subtitle: 'مثبت سريريًا · مدعوم طبيًا · نتائج حقيقية',
      description:
        'اكتشف تركيبات طورها أطباء الجلدية لتحويل بشرتك في 28 يومًا فقط. مدعومة بالعلم، مستوحاة من أنقى النباتات على وجه الأرض.',
      ctaPrimary: 'تسوق المجموعة',
      ctaSecondary: 'احجز استشارة مجانية',
      statSatisfied: 'عميل راضٍ',
      statDerms: 'طبيب جلدية',
      statIngredients: 'مكوّن فعّال',
      statResults: 'معدل نجاح',
      scrollDown: 'استكشف',
    },
    trust: {
      items: [
        'مُختبَر سريريًا',
        'معتمد من أطباء الجلدية',
        '98% مكونات طبيعية',
        'خالٍ من العطور',
        'غير مُختبَر على الحيوانات',
        'نتائج مرئية في 28 يومًا',
        'تركيبة مضادة للحساسية',
        'مصادر مستدامة',
      ],
    },
    features: {
      sectionBadge: 'العلم',
      title: 'لماذا يعمل بوتانيك؟',
      subtitle:
        'كل تركيبة مبنية على أبحاث مراجعة من الأقران ومُختبَرة في مختبرات أمراض الجلدية المعتمدة قبل أن تصل إلى بشرتك.',
      items: [
        {
          icon: 'FlaskConical',
          title: 'تركيبة سريرية',
          description:
            'يتم تطوير كل منتج في مختبرات معتمدة بمعايير ISO بمشاركة أطباء جلدية معتمدين وإثباتها عبر تجارب سريرية.',
        },
        {
          icon: 'Leaf',
          title: '98% مكونات نشطة طبيعية',
          description:
            'نحصل على أكثر المستخلصات النباتية توافرًا بيولوجيًا، محصودة بشكل أخلاقي من موائلها الأصلية لأقصى فعالية.',
        },
        {
          icon: 'ShieldCheck',
          title: 'معتمد من أطباء الجلدية',
          description:
            'مراجعة وتوصية من أكثر من 200 طبيب جلدية في 15 دولة. آمن لجميع أنواع البشرة بما فيها الحساسة.',
        },
        {
          icon: 'Activity',
          title: 'مرئي خلال 28 يومًا',
          description:
            'أظهرت الدراسات السريرية أن 94% من المستخدمين لاحظوا تحسنًا ملحوظًا في ملمس البشرة ولونها وإشراقها خلال 4 أسابيع.',
        },
        {
          icon: 'Microscope',
          title: 'تأثير خلوي عميق',
          description:
            'تقنيتنا الخاصة للتغليف الميكروي توصل المكونات الفعالة مباشرة إلى الطبقة الجلدية للحصول على نتائج دائمة.',
        },
        {
          icon: 'Heart',
          title: 'شهادة غير مُختبَر على الحيوانات',
          description:
            'معتمد من PETA. لا اختبارات على الحيوانات أبدًا. تركيبات صديقة للنباتيين تحترم بشرتك وكوكبنا.',
        },
      ],
    },
    products: {
      sectionBadge: 'المجموعة',
      title: 'عناية دقيقة بالبشرة',
      subtitle:
        'كل منتج يستهدف مشكلة جلدية محددة بمكونات بدرجة صيدلانية بتركيزات فعالة سريريًا.',
      addToCart: 'أضف للسلة',
      shopNow: 'تسوق الآن',
      bestSeller: 'الأكثر مبيعًا',
      newFormula: 'تركيبة جديدة',
      dermatologistChoice: 'اختيار الطبيب',
      items: [
        {
          id: 'vitamin-c-serum',
          name: 'سيروم فيتامين سي للإشراق',
          nameShort: 'سيروم فيتامين سي',
          price: 89,
          originalPrice: 110,
          rating: 4.9,
          reviews: 2847,
          badge: 'الأكثر مبيعًا',
          concern: 'الإشراق · البقع الداكنة · النضارة',
          description:
            '20% حمض الأسكوربيك مع حمض الفيروليك وفيتامين E. يُقلص البقع الداكنة بشكل مرئي ويعزز الإشراق في أسبوعين.',
          image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'L-Ascorbic Acid 20%',
        },
        {
          id: 'retinol-cream',
          name: 'كريم الريتينول للتجديد الليلي',
          nameShort: 'كريم الريتينول',
          price: 95,
          originalPrice: 120,
          rating: 4.8,
          reviews: 1934,
          badge: 'اختيار الطبيب',
          concern: 'مضاد للشيخوخة · الملمس · تجديد الخلايا',
          description:
            'ريتينول 0.5% مغلف مع السيراميد والببتيدات. يُجدد البشرة ويُقلل الخطوط الدقيقة أثناء نومك.',
          image: 'https://images.pexels.com/photos/6663573/pexels-photo-6663573.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Retinol 0.5%',
        },
        {
          id: 'hyaluronic-moisturizer',
          name: 'مرطب حمض الهيالورونيك العميق',
          nameShort: 'مرطب HA',
          price: 75,
          originalPrice: null,
          rating: 4.9,
          reviews: 3201,
          badge: 'الأكثر مبيعًا',
          concern: 'الترطيب · الانتعاش · إصلاح الحاجز',
          description:
            'مجمع حمض الهيالورونيك ثلاثي الوزن مع السيراميد والسكوالين. ترطيب لمدة 72 ساعة لبشرة أكثر امتلاءً.',
          image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Hyaluronic Acid 3-Complex',
        },
        {
          id: 'niacinamide-serum',
          name: 'سيروم النياسيناميد 10% للمسام',
          nameShort: 'سيروم النياسيناميد',
          price: 79,
          originalPrice: null,
          rating: 4.7,
          reviews: 1556,
          badge: 'تركيبة جديدة',
          concern: 'المسام · التحكم في الدهون · لون البشرة',
          description:
            '10% نياسيناميد مع الزنك PCA. يُصغّر المسام بشكل مرئي وينظم الزهم ويُوحّد لون البشرة في 4 أسابيع.',
          image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Niacinamide 10% + Zinc PCA',
        },
        {
          id: 'peptide-eye-cream',
          name: 'كريم العيون بمجمع الببتيدات',
          nameShort: 'كريم العيون',
          price: 85,
          originalPrice: 105,
          rating: 4.8,
          reviews: 987,
          badge: 'اختيار الطبيب',
          concern: 'الهالات السوداء · الخطوط الدقيقة · الشد',
          description:
            'Matrixyl 3000 ومجمع الكافيين المُصمم خصيصًا لمنطقة العين الحساسة. يُقلل الانتفاخ طوال الليل.',
          image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Matrixyl 3000 + Caffeine',
        },
        {
          id: 'spf50-shield',
          name: 'درع SPF 50+ اليومي غير المرئي',
          nameShort: 'درع SPF 50',
          price: 65,
          originalPrice: null,
          rating: 4.9,
          reviews: 2103,
          badge: 'الأكثر مبيعًا',
          concern: 'الحماية من الأشعة · مضاد للتلوث · خفيف',
          description:
            'SPF 50+ واسع الطيف مع مجمع مضادات الأكسدة. خفيف للغاية، بدون بياض، مناسب لجميع درجات البشرة.',
          image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
          keyIngredient: 'Zinc Oxide + Antioxidant Complex',
        },
      ],
    },
    ingredients: {
      sectionBadge: 'المكونات',
      title: 'الطبيعة + العلم في كل قطرة',
      subtitle:
        'نتعاون مع مختبرات الكيمياء الحيوية الرائدة لتحديد أكثر المركبات الطبيعية فعالية، ثم تركيزها وتثبيتها عند مستويات مثبتة سريريًا.',
      items: [
        {
          name: 'فيتامين سي (حمض الأسكوربيك)',
          benefit: 'إشراق · مضاد أكسدة · تخليق الكولاجين',
          description: 'معيار الذهب لمضادات الأكسدة. يُحيّد الجذور الحرة ويُحفز الكولاجين بتركيزات تتجاوز 10%.',
          source: 'الحمضيات والتوليف النباتي',
          icon: 'Sun',
        },
        {
          name: 'ريتينول (فيتامين أ)',
          benefit: 'مضاد للشيخوخة · تجديد الخلايا · الملمس',
          description: 'المكوّن الأكثر إثباتًا سريريًا لمكافحة الشيخوخة. يُسرّع دوران الخلايا ويُحفز إنتاج الكولاجين.',
          source: 'مغلف لضمان الاستقرار',
          icon: 'Moon',
        },
        {
          name: 'حمض الهيالورونيك',
          benefit: 'ترطيب عميق · انتعاش · حاجز الحماية',
          description: 'يحتفظ بما يصل إلى 1000 مرة وزنه في الماء. تركيبتنا ثلاثية الجزيئات تتغلغل في كل طبقات البشرة.',
          source: 'التخمير البيولوجي',
          icon: 'Droplets',
        },
        {
          name: 'نياسيناميد',
          benefit: 'المسام · توحيد اللون · التحكم في الدهون',
          description: 'فيتامين B متعدد المهام يُحسّن ملمس البشرة ويُقلل الزهم ويُقوّي حاجز البشرة في آنٍ واحد.',
          source: 'درجة صيدلانية',
          icon: 'Zap',
        },
        {
          name: 'ماتريكسيل 3000',
          benefit: 'تعزيز الكولاجين · شد · مكافحة التجاعيد',
          description: 'مجمع ببتيدات يُرسل إشارات للبشرة لإنتاج المزيد من الكولاجين. مُثبت سريريًا بتقليل عمق التجاعيد بنسبة 45%.',
          source: 'التكنولوجيا الحيوية',
          icon: 'Layers',
        },
        {
          name: 'سنتيلا أسياتيكا',
          benefit: 'تهدئة · شفاء · مضاد للالتهابات',
          description: 'نبات قديم مدعوم بعلم حديث. يُسرّع التئام الجروح ويُهدئ حالات البشرة الالتهابية.',
          source: 'حصاد عضوي من سريلانكا',
          icon: 'Sprout',
        },
      ],
    },
    gallery: {
      sectionBadge: 'نتائج حقيقية',
      title: 'الفرق الذي يصنعه بوتانيك',
      subtitle: 'صور قبل وبعد من عملاء موثقين بعد 4 أسابيع من الاستخدام المنتظم. بدون فلاتر. بدون تعديل. فقط النتائج.',
      cta: 'عرض جميع التحولات',
      images: [
        {
          src: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'روتين الإشراق',
        },
        {
          src: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'بروتوكول مكافحة الشيخوخة',
        },
        {
          src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'طقوس الترطيب',
        },
        {
          src: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'تنقية المسام',
        },
        {
          src: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'علاج العيون',
        },
        {
          src: 'https://images.pexels.com/photos/6663573/pexels-photo-6663573.jpeg?auto=compress&cs=tinysrgb&w=600',
          label: 'روتين التجديد',
        },
      ],
    },
    testimonials: {
      sectionBadge: 'آراء العملاء',
      title: 'أشخاص حقيقيون. نتائج حقيقية.',
      subtitle: 'أكثر من 50,000 عميل حولوا بشرتهم مع بوتانيك. هذه قصصهم.',
      items: [
        {
          name: 'سارة ميتشيل',
          role: 'عميلة موثقة · سيروم فيتامين سي',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'كنت متشككة في البداية، لكن بعد 3 أسابيع بشرتي أكثر إشراقًا بالفعل. البقع الداكنة تلاشت بشكل ملحوظ. العلم وراء هذا المنتج حقيقي. جربت عشرات السيروم ولم يعمل شيء مثل هذا.',
          weeks: 3,
        },
        {
          name: 'د. جيمس كيتلي',
          role: 'طبيب جلدية معتمد',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'كطبيب جلدية، أنا انتقائي للغاية فيما أوصي به. تركيبات بوتانيك مثيرة للإعجاب حقًا - تركيزات المكونات ذات مغزى سريري وأنظمة التوصيل متطورة. أوصي بها لمرضاي.',
          weeks: null,
        },
        {
          name: 'عائشة رحمان',
          role: 'عميلة موثقة · كريم الريتينول',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'بعد سنوات من المعاناة مع البشرة الخشنة والبثور، غيّر كريم الريتينول كل شيء. بشرتي أكثر نعومة مما كانت عليه منذ مراهقتي. الريتينول المغلف يعني عدم وجود تهيج. أنا مندهشة حقًا.',
          weeks: 4,
        },
        {
          name: 'إيما لارسون',
          role: 'عميلة موثقة · الروتين الكامل',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'بدأت بالمرطب فقط وأعجبني كثيرًا لدرجة أنني بنيت روتيني بأكمله حول بوتانيك. بعد 8 أسابيع، لون بشرتي أكثر توحدًا من أي وقت مضى. يستحق كل قرش.',
          weeks: 8,
        },
        {
          name: 'ماركوس تشن',
          role: 'عميل موثق · سيروم النياسيناميد',
          avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'سيروم النياسيناميد استثنائي. مساماتي تبدو بنصف حجمها السابق وبشرتي لا تصبح دهنية في منتصف النهار. هذا هو المنتج الذي كنت أبحث عنه.',
          weeks: 5,
        },
        {
          name: 'فاطمة الحسن',
          role: 'عميلة موثقة · درع SPF',
          avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
          rating: 5,
          text: 'أخيرًا واقٍ شمس لا يترك بياضًا على بشرتي الداكنة! الدرع اليومي يبدو كلا شيء على البشرة لكنه يوفر حماية جادة. أرتديه كل يوم الآن.',
          weeks: 2,
        },
      ],
    },
    newsletter: {
      sectionBadge: 'انضم إلى المجتمع',
      title: 'حوّل رحلة عنايتك بالبشرة',
      subtitle: 'انضم إلى أكثر من 50,000 عاشق لرعاية البشرة يتلقون نصائح الخبراء والوصول المبكر للإطلاقات الجديدة والخصومات الحصرية.',
      form: {
        namePlaceholder: 'اسمك الكامل',
        emailPlaceholder: 'عنوان بريدك الإلكتروني',
        btnSubscribe: 'انضم إلى المجتمع',
        btnLoading: 'جارٍ الاشتراك...',
        successTitle: 'مرحبًا بك في بوتانيك!',
        successMessage: 'شكرًا للانضمام. تحقق من بريدك الوارد لهديتك الترحيبية.',
        errorTitle: 'حدث خطأ ما',
        privacyNote: 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
      },
      consultation: {
        title: 'احجز استشارة طب الجلدية المجانية',
        subtitle:
          'تحدث فردًا مع أحد أطباء الجلدية الشركاء لدينا. احصل على بروتوكول عناية بالبشرة مخصص لنوع بشرتك الفريد.',
        namePlaceholder: 'الاسم الكامل',
        emailPlaceholder: 'البريد الإلكتروني',
        phonePlaceholder: 'رقم الهاتف (اختياري)',
        concernLabel: 'المشكلة الجلدية الرئيسية',
        concerns: [
          { value: 'acne', label: 'حب الشباب والبثور' },
          { value: 'aging', label: 'مكافحة الشيخوخة والتجاعيد' },
          { value: 'hyperpigmentation', label: 'البقع الداكنة وعدم توحد اللون' },
          { value: 'dryness', label: 'الجفاف والبشرة المجففة' },
          { value: 'sensitivity', label: 'الحساسية والاحمرار' },
          { value: 'pores', label: 'المسام الموسعة والبشرة الدهنية' },
          { value: 'general', label: 'استشارة عامة' },
        ],
        messagePlaceholder: 'أخبرنا المزيد عن مشاكل بشرتك (اختياري)',
        btnBook: 'احجز استشارة مجانية',
        btnLoading: 'جارٍ الحجز...',
        successTitle: 'تم حجز الاستشارة!',
        successMessage: 'سيتواصل معك فريق طب الجلدية لدينا خلال 24 ساعة لتأكيد موعدك.',
      },
    },
    footer: {
      tagline: 'حيث يلتقي العلم بفن البشرة الجميلة.',
      links: {
        company: 'الشركة',
        companyItems: ['من نحن', 'علمنا', 'شركاء أطباء الجلدية', 'الاستدامة', 'الصحافة'],
        shop: 'التسوق',
        shopItems: ['جميع المنتجات', 'السيروم', 'المرطبات', 'العناية بالعين', 'الحماية من الشمس', 'مجموعات الهدايا'],
        support: 'الدعم',
        supportItems: ['الأسئلة الشائعة', 'الشحن والإرجاع', 'اختبار البشرة', 'حجز استشارة', 'تواصل معنا'],
        legal: 'القانونية',
        legalItems: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة ملفات الارتباط', 'قاموس المكونات'],
      },
      newsletter: 'ابقَ على اطلاع',
      newsletterPlaceholder: 'أدخل بريدك الإلكتروني',
      newsletterBtn: 'اشترك',
      copyright: '© 2025 بوتانيك. جميع الحقوق محفوظة.',
      certifications: ['مُختبَر من أطباء الجلدية', 'غير مُختبَر على الحيوانات', '98% طبيعي', 'معتمد ISO 9001'],
    },
  },
} as const;

export type TranslationsType = typeof translations.en;

function deepMutable<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj)) return obj.map(deepMutable) as T;
  const result: Record<string, unknown> = {};
  for (const key in obj) {
    result[key] = deepMutable(obj[key]);
  }
  return result as T;
}

export function getTranslations(lang: Lang) {
  return deepMutable(translations[lang]) as TranslationsType;
}
