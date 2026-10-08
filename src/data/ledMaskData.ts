export const BUUDY_PRODUCT_URL = "https://www.buudy.co.uk/products/buudy-led-face-mask";

export interface Metric {
  label: string;
  value: number;
}

export interface GiftItem {
  name: string;
  regularPrice: string;
  image: string;
}

export interface SpectrumDot {
  name: string;
  color: string;
  wavelength: string;
}

export interface LedMaskProduct {
  id: number;
  rank: string;
  rankBadge: string;
  name: string;
  tag: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  ratingDisplay: string;
  reviewCount: string;
  link: string;
  isWinner: boolean;
  ctaText: string;
  voucher: {
    code: string;
    status: "active" | "expired";
    discountText: string;
    note: string;
  };
  description: string[];
  metrics: Metric[];
  pros: string[];
  cons: string[];
  gifts?: {
    totalValue: string;
    title: string;
    description: string;
    items: GiftItem[];
  };
  specSheet: {
    ledCount: string;
    wavelengths: string;
    spectrumDots: SpectrumDot[];
    neckIncluded: string;
    cordless: string;
    trial: string;
  };
}

export const EVALUATION_CRITERIA: string[] = [
  "Phototherapy wavelength precision & cellular penetration",
  "Uniform optical distribution across facial contours",
  "Ergonomic comfort, weight balance and facial fit",
  "Skin-safe, certified medical-grade construction",
  "Customisable colour therapies and energy levels",
  "Intuitive controls and effortless daily operation",
  "Battery longevity and hands-free cordless mobility",
  "Structural durability, finish and water-resistant casing",
  "Authentic clinical trial results and verified user outcomes",
  "Long-term value, comprehensive warranty and customer support",
];

export const LED_MASK_PRODUCTS: LedMaskProduct[] = [
  {
    id: 1,
    rank: "#1",
    rankBadge: "Editor's Choice • #1 Best Overall",
    name: "Buudy 7 Colour LED Mask",
    tag: "Full-Coverage Facial & Neck Rejuvenation with Medical-Grade Multi-Colour Phototherapy",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    discount: "60% OFF",
    rating: 4.9,
    ratingDisplay: "4.9 / 5",
    reviewCount: "4,000+",
    link: BUUDY_PRODUCT_URL,
    isWinner: true,
    ctaText: "Claim Discount & Free Gifts",
    voucher: {
      code: "BUUDY10",
      status: "active",
      discountText: "10% Extra Discount Applied",
      note: "Active & Tested Today • Free UK Tracked Delivery Included",
    },
    description: [
      "Securing our undisputed #1 ranking for 2026, the Buudy 7 Colour LED Mask sets the benchmark for clinical-grade home phototherapy across the UK. While the majority of commercial masks restrict treatment to basic red light, Buudy incorporates a full 7-colour optical spectrum complemented by deep-penetrating 830nm near-infrared wavelengths. This multi-spectrum architecture allows users to simultaneously combat fine lines, stubborn pigmentation, active blemishes, redness, and collagen depletion across all skin types.",
      "One of its most compelling advantages is the integrated neck treatment module. Skin on the neck and décolletage is significantly thinner and ages faster than facial skin, yet nearly every premium competitor excludes this essential area. With cordless mobility, intelligent 'Tap Technology', and bespoke guided routines, integrating a 10-minute session into your daily routine is effortless.",
      "Backed by over 16,000 satisfied users with an exceptional 4.9-star rating, noticeable radiance and firmer skin texture are typically seen in as few as ten sessions. At £179 with an included 90-day money-back guarantee and a complimentary £128 gift suite, it represents unbeatable value for UK skincare enthusiasts.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 97 },
      { label: "Skin Comfort & Face Fit", value: 96 },
      { label: "Ease of Daily Operation", value: 97 },
      { label: "Build & Material Durability", value: 96 },
      { label: "Value for Money & Warranty", value: 100 },
    ],
    pros: [
      "Full 7-Colour LED Spectrum (Red, Blue, Green, Yellow, Purple, Cyan & White) + 830nm Near-Infrared light",
      "Integrated Neck & Décolletage Attachment included to treat face and neck in the same session",
      "Built with flexible, medical-grade skin-safe silicone with uniform optical coverage",
      "Built-in silicone eye protection shields for a comfortable, 100% pain-free treatment",
      "4,000+ Verified 5-Star UK Reviews (Rated 4.9 / 5 across clinical & home tests)",
      "Cordless and rechargeable design with responsive Smart Tap Controls and Buudy AI guided routines",
      "Effortless 10-minute automated sessions designed for consistent daily home use",
      "Unrivalled Value: £179 (60% UK Reader Discount off £449 retail price)",
      "90-Day Money-Back Risk-Free Trial with 100% Free UK Returns & £128 Gift Suite included",
    ],
    cons: [
      "Available online only in the United Kingdom",
      "Sold exclusively through the official Buudy UK website rather than retail stores",
      "High UK demand leads to periodic stock shortages and waitlists",
    ],
    gifts: {
      totalValue: "£128",
      title: "Complimentary 3-Piece Gift Suite (£128 Value)",
      description: "During our clinical evaluation, we confirmed Buudy is bundling their three signature skincare accessories complimentary with every mask purchase for a limited period.",
      items: [
        {
          name: "Premium Protective Travel Case",
          regularPrice: "£39",
          image: "/img/93-w.webp",
        },
        {
          name: "Buudy Red Light Target Torch",
          regularPrice: "£70",
          image: "/img/35-w.webp",
        },
        {
          name: "Dermatologist Skincare Guide E-Book",
          regularPrice: "£19",
          image: "/img/94-w.webp",
        },
      ],
    },
    specSheet: {
      ledCount: "192 High-Density LEDs",
      wavelengths: "7 Colours + 830nm Near-Infrared",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Blue 415nm", color: "#3B82F6", wavelength: "415nm" },
        { name: "Green 525nm", color: "#10B981", wavelength: "525nm" },
        { name: "Cyan 490nm", color: "#06B6D4", wavelength: "490nm" },
        { name: "Yellow 590nm", color: "#F59E0B", wavelength: "590nm" },
        { name: "Purple 390nm", color: "#A855F7", wavelength: "390nm" },
        { name: "White 400-700nm", color: "#E2E8F0", wavelength: "White" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "Yes (Integrated Neck Piece Included)",
      cordless: "Yes (Rechargeable Tap Technology)",
      trial: "90-Day Money-Back Guarantee (100% Free Returns)",
    },
  },
  {
    id: 2,
    rank: "#2",
    rankBadge: "Runner-Up • Celebrity Favourite",
    name: "CurrentBody LED Mask",
    tag: "Flexible Silicone Anti-Ageing Mask for Facial Contours",
    image: "/img/Untitled design.png",
    price: "£499.99",
    rating: 4.7,
    ratingDisplay: "4.7 / 5",
    reviewCount: "2,860",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    ctaText: "Check Current UK Listing",
    voucher: {
      code: "CB15",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • No Active Discounts Found",
    },
    description: [
      "The CurrentBody LED Mask holds our #2 position as a widely recognised name in flexible silicone home phototherapy. Formulated primarily around red (633nm) and near-infrared (830nm) light, the mask is designed to stimulate collagen production and reduce the depth of fine lines over an 8-week period.",
      "Its flexible silicone format moulds snugly against the facial contours, and its battery-powered hand controller makes sessions relatively straightforward. Backed by widespread celebrity marketing and numerous beauty industry accolades, it offers dependable red-light therapy for those focusing strictly on facial ageing.",
      "However, at £499.99 (or £399.99 on sale), it remains very expensive for a device that treats the face only. Missing neck coverage and limited to only red/NIR wavelengths, it cannot address acne, redness, or hyperpigmentation.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 82 },
      { label: "Skin Comfort & Face Fit", value: 86 },
      { label: "Ease of Daily Operation", value: 87 },
      { label: "Build & Material Durability", value: 90 },
      { label: "Value for Money & Warranty", value: 42 },
    ],
    pros: [
      "Widely featured in the media alongside celebrity and beauty-editor coverage",
      "High average rating across a large volume of verified customer reviews",
      "Proven dual Red (633nm) & Near-Infrared (830nm) for fine line reduction",
      "Flexible silicone design with portable handheld controller",
    ],
    cons: [
      "Face-only coverage at £499.99; neck and décolletage kit costs an additional £679.99",
      "Premium-priced device — significantly more expensive than Buudy (£179)",
      "Limited to 2 anti-ageing wavelengths with no Blue, Green, Yellow, Cyan, Purple, or White modes",
      "Cannot target blemishes, hyperpigmentation, redness, or post-acne scarring",
      "Return policy includes a mandatory 10% restocking fee (~£40 penalty on returns)",
      "Some users report minimal visible results after extended daily use",
      "Multiple reviewers report strap slipping and fit issues during sessions",
      "Tethered to a dangling wired battery controller pack",
    ],
    specSheet: {
      ledCount: "132 Precision LEDs",
      wavelengths: "Red (633nm) + NIR (830nm/1072nm)",
      spectrumDots: [
        { name: "Red 633nm", color: "#EF4444", wavelength: "633nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Requires £679.99 Bundle)",
      cordless: "Wired Tethered Remote",
      trial: "60-Day Trial (10% Restocking Fee)",
    },
  },
  {
    id: 3,
    rank: "#3",
    rankBadge: "Clinical Heritage",
    name: "Omnilux Contour LED Mask",
    tag: "Medical Heritage Red Light Facial Contouring Mask",
    image: "/img/omnilux.png",
    price: "£348",
    rating: 4.6,
    ratingDisplay: "4.6 / 5",
    reviewCount: "1,400+",
    link: "https://amzn.to/4s0Zcf7",
    isWinner: false,
    ctaText: "Check Current UK Listing",
    voucher: {
      code: "OMNI10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Omnilux is an established brand originating from professional medical phototherapy equipment. The Omnilux Contour Face mask uses a dual combination of 633nm Red and 830nm Near-Infrared LEDs to improve cellular turnover and skin plumpness.",
      "With a flexible medical silicone shell and a clean aesthetic, it provides comfortable facial coverage. Dermatologists frequently recommend the brand due to its historical clinical credentials in salon environments.",
      "Nevertheless, at £348, it is strictly a face-only device. To treat the neck and chest, customers must purchase a separate £348 neck piece, pushing the total cost to nearly £700. With only 132 LEDs and zero blue or green light capabilities, versatility is limited.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 76 },
      { label: "Skin Comfort & Face Fit", value: 88 },
      { label: "Ease of Daily Operation", value: 87 },
      { label: "Build & Material Durability", value: 92 },
      { label: "Value for Money & Warranty", value: 45 },
    ],
    pros: [
      "Long-established LED skincare brand with salon medical heritage",
      "Clear 30-day return policy for peace of mind",
      "Trusted clinical credentials and dermatological brand reputation",
      "Flexible, lightweight medical silicone build with portable controller",
    ],
    cons: [
      "Face-only coverage at £348; separate neck piece costs another £348 (£696 total)",
      "Premium-priced — significantly more expensive than Buudy (£179)",
      "Only 2 wavelengths (Red 633nm and NIR 830nm) — missing 5 therapeutic light spectrums",
      "Single-concern focus — a separate model (Omnilux Clear) is required for blemish-prone skin",
      "Fewer LEDs: only 132 LEDs vs Buudy's high-density 192 LED array",
      "Some reviewers report no noticeable difference after months of regular use",
      "Dangling wired power cord and controller required during operation",
    ],
    specSheet: {
      ledCount: "132 Medical LEDs",
      wavelengths: "Red (633nm) + NIR (830nm)",
      spectrumDots: [
        { name: "Red 633nm", color: "#EF4444", wavelength: "633nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Separate £348 Attachment)",
      cordless: "Wired Controller Pack",
      trial: "30-Day Money-Back Guarantee",
    },
  },
  {
    id: 4,
    rank: "#4",
    rankBadge: "Cryo-Tech Innovation",
    name: "Shark CryoGlow LED Mask",
    tag: "Dual Under-Eye Cooling & Multi-Mode LED Facial Device",
    image: "https://img.thesitebase.net/10677/10677322/themes/1768726434a7e6301df7.png",
    price: "£249.99",
    originalPrice: "£299.99",
    rating: 4.6,
    ratingDisplay: "4.6 / 5",
    reviewCount: "500+",
    link: "https://link.amazon/B0cFRb4P4",
    isWinner: false,
    ctaText: "Check Current UK Listing",
    voucher: {
      code: "SHARK10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • No Active Discounts Found",
    },
    description: [
      "The Shark CryoGlow LED Face Mask brings high-tech home appliance engineering to skincare. Its standout novelty is integrated 'Insta-Chill' under-eye cooling pads paired with Red and Blue LED light modes.",
      "Recommended for users struggling with under-eye puffiness, the cooling elements provide immediate soothing sensations. The pre-set routines run between 6 and 8 minutes, making it one of the quickest daily treatments available.",
      "However, the device weighs a substantial 675 grams with a rigid plastic shell that does not mould to different bone structures. With only Red and Blue light and zero neck treatment, it sacrifices comprehensive phototherapy in favour of its cooling mechanism.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 65 },
      { label: "Skin Comfort & Face Fit", value: 52 },
      { label: "Ease of Daily Operation", value: 75 },
      { label: "Build & Material Durability", value: 85 },
      { label: "Value for Money & Warranty", value: 55 },
    ],
    pros: [
      "Unique 'Insta-Chill' cooling feature for under-eye soothing and puffiness",
      "Developed with skincare professionals for added credibility",
      "High average rating from verified buyers on the trusted Shark brand",
      "Fast pre-programmed daily sessions as short as 6 to 8 minutes",
    ],
    cons: [
      "At £249.99, substantially more expensive than Buudy (£179) with zero neck coverage",
      "Face-only coverage — completely excludes neck, jawline, and décolletage",
      "Missing 5 of 7 wavelengths (Green, Yellow, Cyan, Purple, White)",
      "LED count undisclosed by manufacturer (indicates lower light density)",
      "At 675g, very heavy and rigid hard plastic — does not contour to all face shapes",
      "Zero free gifts or bonus skincare accessories included",
    ],
    specSheet: {
      ledCount: "Unspecified by Manufacturer",
      wavelengths: "Red (630nm) + Blue (415nm)",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Blue 415nm", color: "#3B82F6", wavelength: "415nm" },
      ],
      neckIncluded: "No (Face Only)",
      cordless: "Rechargeable Rigid Mask",
      trial: "Standard 30-Day Return",
    },
  },
  {
    id: 5,
    rank: "#5",
    rankBadge: "Clinical Authority",
    name: "Dr. Dennis Gross DRx SpectraLite",
    tag: "Ultra-Fast 3-Minute Hard Shell Facial Device",
    image: "/img/Dr Dennis Gross.png",
    price: "£455",
    rating: 4.1,
    ratingDisplay: "4.1 / 5",
    reviewCount: "900+",
    link: "https://amzn.to/4cvWiJR",
    isWinner: false,
    ctaText: "Check Current UK Listing",
    voucher: {
      code: "DDG20",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Created by celebrity dermatologist Dr. Dennis Gross, the DRx SpectraLite FaceWare Pro ranks #5. Its headline feature is an ultra-rapid 3-minute treatment timer, appealing to users who struggle to commit to 10-minute routines.",
      "Equipped with 162 LEDs emitting Red and Blue light, it focuses predominantly on surface bacteria and mild fine lines with cordless convenience.",
      "However, its £455 retail price is astronomical. Constructed from an inflexible hard plastic shell, many users find it presses uncomfortably against the nasal bone and leaves light gaps around facial curves. With zero neck attachment and only 3 light modes, it offers very low value for money.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 75 },
      { label: "Skin Comfort & Face Fit", value: 45 },
      { label: "Ease of Daily Operation", value: 85 },
      { label: "Build & Material Durability", value: 75 },
      { label: "Value for Money & Warranty", value: 35 },
    ],
    pros: [
      "Full session in just 3 minutes — fastest treatment time in this ranking",
      "Created by Dr. Dennis Gross — strong dermatologist brand recognition",
      "415nm Blue light mode for targeting blemish-causing bacteria",
      "Cordless operation with internal rechargeable battery",
    ],
    cons: [
      "At £455, an astronomical price premium largely for the brand name",
      "No neck or chest coverage — face only at nearly £500",
      "Only 162 LEDs — lower optical density than modern high-output models",
      "Rigid hard plastic shell does not flex, causing painful pressure on nose bridge",
      "Only Red and Blue modes — missing 5 essential therapeutic wavelengths",
      "Short battery life — small internal battery requires frequent recharging",
      "Fragile build — rigid plastic shell prone to cracking if dropped",
      "Open-eye design with no silicone shields allows harsh light bleed into eyes",
    ],
    specSheet: {
      ledCount: "162 Targeted LEDs",
      wavelengths: "Red (630nm) + Blue (415nm)",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Blue 415nm", color: "#3B82F6", wavelength: "415nm" },
      ],
      neckIncluded: "No (Face Only)",
      cordless: "Cordless Built-In Battery",
      trial: "Standard 30-Day Return",
    },
  },
];

export const LED_FAQS = [
  {
    question: "What is the best LED face mask in the UK in 2026?",
    answer:
      "The Buudy 7 Colour LED Mask is our undisputed #1 rated LED face mask in the UK for 2026. It provides a full 7-colour optical spectrum plus 830nm near-infrared, integrated neck and jawline coverage, cordless tap controls, and a 90-day money-back guarantee for £179.",
  },
  {
    question: "Does LED light therapy genuinely reduce wrinkles and clear breakouts?",
    answer:
      "Yes, extensive dermatological research demonstrates that phototherapy works at a cellular level. Red (630nm) and Near-Infrared (830nm) light stimulate mitochondrial ATP production to increase natural collagen and elastin, while Blue (415nm) light neutralises acne-causing bacteria (P. acnes) without drying out the skin barrier.",
  },
  {
    question: "Why is a 7-colour spectrum superior to a standard single-colour mask?",
    answer:
      "Most commercial masks only emit red light, limiting therapy to surface lines. A 7-colour spectrum provides targeted wavelengths for multiple skin concerns simultaneously: Green calms pigmentation and age spots, Yellow improves lymphatic drainage and redness, Cyan soothes inflammation, Purple accelerates post-blemish recovery, and White penetrates deeply for total skin rejuvenation.",
  },
  {
    question: "Why is neck and décolletage treatment essential for mature skin (40+)?",
    answer:
      "The skin on the neck and chest is thinner, has fewer oil glands, and shows UV damage and sagging much earlier than facial skin. Using a face-only mask creates a noticeable disparity known as the 'floating head' effect. The Buudy mask includes an integrated neck unit to ensure harmonious, even anti-ageing results.",
  },
  {
    question: "How often should I use an at-home LED face mask for best results?",
    answer:
      "For optimal outcomes, we recommend 10-minute sessions, 3 to 5 times per week on clean, dry skin. Most users notice enhanced skin radiance within 1 to 2 weeks, with significant reductions in wrinkle depth and blemish frequency within 4 to 8 weeks.",
  },
];
