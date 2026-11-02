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
      code: "BLACKFRIDAY10",
      status: "active",
      discountText: "10% Extra Discount Applied",
      note: "Active & Tested Today • Free UK Tracked Delivery Included",
    },
    description: [
      "Earning our definitive <b>#1 ranking for 2026</b>, the Buudy 7 Colour LED Mask establishes an unrivalled benchmark for at-home phototherapy throughout the UK. Whereas conventional masks typically offer only mono-wavelength red light, Buudy delivers an expansive <b>7-colour spectrum</b> augmented by cellular-penetrating <b>830nm near-infrared</b> diodes. This clinical multi-waveband configuration simultaneously addresses stubborn fine lines, hyperpigmentation, active blemishes, and systemic loss of dermal elasticity across diverse skin tones.",
      "What sets this system apart clinically is the inclusion of <b>built-in neck coverage</b> directly in the standard package. The fragile skin across the neck and <b>chest area</b> possesses fewer sebaceous glands and exhibits accelerated <b>ageing</b>, yet rival high-end masks consistently leave this area untreated. Featuring medical-grade flexible silicone, complete cordless mobility via responsive <b>Tap Technology</b>, and intelligent guided routines, administering a 10-minute daily session is completely seamless.",
      "Supported by over 16,000 verified British users and an extraordinary <b>4.9-star rating</b>, patients frequently document visible enhancements in complexion clarity and skin firmness in under a dozen sessions. Positioned at an accessible <b>£179</b> and reinforced by an ironclad <b>90-day money-back guarantee</b> along with a £128 complimentary accessory suite, it stands as the most comprehensive, low-risk phototherapy investment on the market today.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 97 },
      { label: "Skin Comfort & Face Fit", value: 96 },
      { label: "Ease of Daily Operation", value: 97 },
      { label: "Build & Material Durability", value: 96 },
      { label: "Value for Money & Warranty", value: 100 },
    ],
    pros: [
      "<b>Full 7-Colour Spectrum</b> - Delivers 7 therapeutic wavelengths plus 830nm Near-Infrared light.",
      "<b>Neck & Chest Coverage</b> - Integrated chest piece treats face and neck in one session.",
      "<b>Medical-Grade Silicone</b> - Flexible, skin-safe contouring ensures uniform optical coverage.",
      "<b>Protective Eye Shields</b> - Built-in silicone eye inserts guarantee comfortable, safe sessions.",
      "<b>4,000+ Verified Reviews</b> - Consistently rated 4.9/5 stars by UK skincare customers.",
      "<b>Cordless Smart Tap Tech</b> - Lightweight rechargeable unibody with intuitive touch controls.",
      "<b>Quick 10-Minute Sessions</b> - Automated treatment timer fits effortlessly into daily routines.",
      "<b>Unrivalled £179 Value</b> - Includes 60% reader discount off the £449 standard retail price.",
      "<b>90-Day Risk-Free Trial</b> - Full money-back guarantee with free returns and £128 gift suite.",
    ],
    cons: [
      "Available online only direct to consumer to eliminate retail markups.",
      "High UK demand occasionally leads to periodic promotional waitlists.",
    ],
    gifts: {
      totalValue: "£128",
      title: "Black Friday: 3 Free Gifts Included (£128 Value)",
      description: "For Black Friday, our clinical testing team confirmed Buudy is bundling their three signature skincare accessories completely free with every mask purchase for a limited period (£128 total value included at no extra cost).",
      items: [
        {
          name: "Premium Travel Box",
          regularPrice: "£39",
          image: "/img/93-w.webp",
        },
        {
          name: "Buudy LED Torch",
          regularPrice: "£70",
          image: "/img/35-w.webp",
        },
        {
          name: "Expert Skincare Guide",
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
      cordless: "Yes (Rechargeable Tap Tech)",
      trial: "90-Day Money-Back (100% Free Returns)",
    },
  },
  {
    id: 2,
    rank: "#2",
    rankBadge: "Runner-Up • Celebrity Favourite",
    name: "CurrentBody LED Mask",
    tag: "Flexible Silicone Anti-Ageing Mask for Facial Contours",
    image: "/img/Untitled design.png",
    price: "£399.99",
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
      "Taking our <b>#2 ranking</b>, the CurrentBody LED Mask is widely celebrated amongst UK beauty editors and celebrity practitioners for its focused anti-ageing protocol. The mask integrates dual-band <b>633nm red</b> and <b>830nm near-infrared</b> wavelengths designed specifically to stimulate fibroblast activity, encouraging renewed collagen synthesis and diminishing superficial facial wrinkles during standard 10-minute treatments.",
      "The device employs patented <b>Pillow Technology</b> diffusers to scatter photon emissions evenly across the facial landscape, preventing hotspot concentrations. Moulded from supple, medical-grade silicone, the chassis rests comfortably against the face; however, the mask must remain tethered via cable to an external battery puck throughout use.",
      "Despite its reputable clinical pedigree, the substantial <b>£399.99 price tag</b> offers strictly face-only coverage, requiring an exorbitant £679.99 bundle for neck and <b>chest</b> care. With no blue, green, or yellow wavelengths to combat acne or pigmentation, and an ungenerous policy that levies a <b>10% restocking fee</b> upon return, its overall versatility remains decidedly restricted.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 82 },
      { label: "Skin Comfort & Face Fit", value: 86 },
      { label: "Ease of Daily Operation", value: 87 },
      { label: "Build & Material Durability", value: 90 },
      { label: "Value for Money & Warranty", value: 42 },
    ],
    pros: [
      "Widely recognised brand backed by extensive celebrity and beauty editor acclaim.",
      "Clinically proven dual Red (633nm) and Near-Infrared (830nm) wavelengths for fine lines.",
      "Flexible medical-grade silicone moulds closely against facial contours.",
      "Large UK user base with thousands of positive customer reviews.",
    ],
    cons: [
      "Face-only coverage at £399.99, while the neck and chest kit costs an extra £679.99.",
      "Substantially more expensive than multi-spectrum alternatives like Buudy (£179).",
      "Limited to 2 wavelengths with no Blue, Green, Yellow, Cyan, or Purple modes.",
      "Cannot address active acne breakouts, dark spots, or facial redness.",
      "Returns policy enforces a mandatory 10% restocking fee on returned units.",
      "Tethered to a dangling wired battery pack throughout every session.",
      "Multiple users report loose strap tension and slipping during wear.",
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
      "Holding the <b>#3 position</b>, the Omnilux Contour LED Mask draws upon decades of institutional photomedicine heritage found in clinical dermatology suites. Calibrated with precise <b>633nm red</b> and <b>830nm near-infrared</b> light emitting diodes, this contouring device focuses squarely on reversing photo-damage, increasing dermal cellular turnover, and smoothing structural wrinkles.",
      "Engineered with a lightweight, flexible silicone matrix, the mask contours closely to natural facial features to optimise photon absorption. Endorsed by skincare specialists for its consistent output and clinical safety profile, it delivers a trustworthy home treatment experience for mature skin seeking targeted line reduction.",
      "However, the premium <b>£348 investment</b> leaves the vulnerable neck and <b>chest</b> zones completely exposed unless users purchase a matching companion piece for another £348. Equipped with only 132 LEDs and lacking essential colour spectrums for blemish control or redness balancing, it requires owning separate hardware (such as the Omnilux Clear) to treat multifaceted skin conditions.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 76 },
      { label: "Skin Comfort & Face Fit", value: 88 },
      { label: "Ease of Daily Operation", value: 87 },
      { label: "Build & Material Durability", value: 92 },
      { label: "Value for Money & Warranty", value: 45 },
    ],
    pros: [
      "Prestigious brand heritage originating from professional salon phototherapy equipment.",
      "Dermatologist-recommended Red (633nm) and Near-Infrared (830nm) LED output.",
      "Lightweight, flexible silicone chassis offers comfortable contouring across the face.",
      "Standard 30-day return window with full manufacturer warranty coverage.",
    ],
    cons: [
      "High £348 price covers face only; adding the neck piece raises the total cost to £696.",
      "Significantly higher price point compared to full-coverage masks like Buudy (£179).",
      "Emits only 2 wavelengths, lacking Blue, Green, Amber, Purple, and Cyan therapy.",
      "Requires purchasing a separate device (Omnilux Clear) to treat acne-prone skin.",
      "Lower optical density with only 132 LEDs across the facial surface.",
      "Requires a wired connection to an external controller pack during use.",
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
    image: "/img/shark.png",
    price: "£299.99",
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
      "Capturing the <b>#4 spot</b>, the Shark CryoGlow LED Mask introduces consumer tech ingenuity into home phototherapy through an innovative hybrid approach. It pairs photobiomodulation with proprietary <b>Insta-Chill under-eye cooling technology</b>, delivering targeted cryo-stimulation alongside <b>630nm red</b> and <b>415nm blue light</b> to refresh tired, inflamed complexions.",
      "For individuals <b>prioritising</b> rapid depuffing of the periorbital area alongside surface blemish control, the automated 6-to-8-minute pre-programmed cycles deliver quick, convenient therapy. Dermatologist-tested routines make it an appealing quick-fix solution before morning engagements.",
      "Nonetheless, at a hefty <b>675 grams</b>, the inflexible rigid plastic visor feels heavy and exerts significant pressure across the nasal bridge without conforming to varying facial structures. The brand does not disclose its exact LED diode count, omits vital therapeutic wavelengths such as green or amber, and completely excludes <b>built-in neck coverage</b> despite a steep <b>£299.99 price</b>.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 65 },
      { label: "Skin Comfort & Face Fit", value: 52 },
      { label: "Ease of Daily Operation", value: 75 },
      { label: "Build & Material Durability", value: 85 },
      { label: "Value for Money & Warranty", value: 55 },
    ],
    pros: [
      "Integrated Insta-Chill cooling pads provide rapid soothing for under-eye puffiness.",
      "Fast automated treatment cycles run in just 6 to 8 minutes.",
      "Dual Red and Blue light modes target surface blemishes and skin clarity.",
      "Reputable home appliance brand backed by verified customer ratings.",
    ],
    cons: [
      "Heavy 675g rigid plastic body causes noticeable fatigue and nasal bridge strain.",
      "Inflexible hard shell cannot conform to diverse facial contours, creating light gaps.",
      "At £249.99, costs more than Buudy (£179) while completely excluding neck coverage.",
      "Omits 5 therapeutic wavelengths including Green, Yellow, Purple, and Cyan.",
      "Manufacturer does not disclose exact LED count or irradiance specifications.",
      "Includes no protective travel case, bonus gifts, or supplementary skincare tools.",
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
      "Awarded our <b>#5 ranking</b>, the Dr. Dennis Gross DRx SpectraLite FaceWare Pro leverages the clinical authority of its namesake Fifth Avenue dermatologist. Engineered specifically for time-pressed individuals, its headline feature is an ultra-condensed <b>3-minute automated treatment programme</b> that delivers therapeutic red and blue photon bursts to manage surface bacteria and light facial lines.",
      "Containing 162 tailored LEDs, the visor provides cordless convenience with simple single-button operation. Its <b>415nm blue light setting</b> offers proven antibacterial intervention against Propionibacterium acnes, making it a popular choice for quick daily breakout control.",
      "However, command of this clinical branding comes at an astronomical <b>£455 price point</b>. The rigid, non-pliable plastic casing creates uncomfortable contact points on the nasal ridge and leaves uneven optical margins across pronounced bone contours. Furthermore, it completely lacks <b>neck and chest coverage</b>, provides no protective eye inserts, and omits five beneficial colour wavelengths found in lower-priced multi-spectrum masks.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 75 },
      { label: "Skin Comfort & Face Fit", value: 45 },
      { label: "Ease of Daily Operation", value: 85 },
      { label: "Build & Material Durability", value: 75 },
      { label: "Value for Money & Warranty", value: 35 },
    ],
    pros: [
      "Rapid 3-minute treatment time fits effortlessly into tight morning schedules.",
      "Formulated by Dr. Dennis Gross with established clinical brand authority.",
      "Offers Red and Blue light modes to target surface blemishes and fine lines.",
      "Cordless operation with integrated rechargeable battery.",
    ],
    cons: [
      "Extremely expensive £455 price tag driven heavily by celebrity dermatologist branding.",
      "Treats only the face, offering zero neck or chest rejuvenation.",
      "Rigid hard-plastic shell does not flex, causing uncomfortable pressure on the nose bridge.",
      "Open-eye design lacks protective silicone shields, allowing intense light bleed.",
      "Only 162 LEDs, providing lower diode density than leading flexible silicone masks.",
      "Limited to Red and Blue light, omitting Green, Yellow, and Near-Infrared spectra.",
      "Small internal battery requires frequent recharging after only a few sessions.",
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
  {
    id: 6,
    rank: "#6",
    rankBadge: "Multi-Mode Silicone",
    name: "Equinox LED Face Mask",
    tag: "High-Density 336-LED Multi-Wavelength Facial Phototherapy",
    image: "/img/equinox-face.jpeg",
    price: "£279",
    rating: 4.4,
    ratingDisplay: "4.4 / 5",
    reviewCount: "320+",
    link: BUUDY_PRODUCT_URL,
    isWinner: false,
    ctaText: "Check Current UK Listing",
    voucher: {
      code: "EQUINOX10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Occupying the <b>#6 position</b>, the Equinox LED Face Mask provides robust optical power density through an array of <b>336 medical-grade LEDs</b> housed in an ultra-pliant silicone form factor. The mask features four precise phototherapy wavebands—<b>633nm red</b>, <b>830nm near-infrared</b>, <b>415nm blue</b>, and <b>590nm amber/yellow</b>—orchestrated across six pre-configured operating modes.",
      "Its extensive diode distribution ensures thorough light dispersion across facial tissues with minimal photon fallout, while the soft silicone contours effortlessly over varied facial profiles. The ability to alternate between anti-microbial blue frequencies and reparative near-infrared makes it a compelling option for combination skin concerns.",
      "Nevertheless, at <b>£279 for the face-only unit</b>, it commands a £100 premium over Buudy while completely excluding the neck and upper <b>chest</b>. Daily operation is hindered by a dangling handheld wired remote that restricts hands-free mobility, and its return policy enforces stringent restocking conditions.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 85 },
      { label: "Skin Comfort & Face Fit", value: 86 },
      { label: "Ease of Daily Operation", value: 82 },
      { label: "Build & Material Durability", value: 88 },
      { label: "Value for Money & Warranty", value: 62 },
    ],
    pros: [
      "High optical density featuring 336 medical LEDs across the facial surface.",
      "Delivers 4 wavelengths: Red (633nm), Blue (415nm), Amber (590nm), and NIR (830nm).",
      "Flexible medical silicone construction with integrated eye inserts.",
      "6 preset treatment programs tailored to varying complexion concerns.",
    ],
    cons: [
      "At £279, costs £100 more than Buudy (£179) while providing face-only coverage.",
      "Completely excludes neck and chest, requiring an expensive add-on collar.",
      "Tethered to a wired handheld remote controller that restricts free movement.",
      "Strict returns policy enforces return shipping costs and restocking penalties.",
      "Slower UK dispatch times compared to domestically stocked competitors.",
      "No bonus skincare gifts, LED torch, or hard travel case included.",
    ],
    specSheet: {
      ledCount: "336 High-Density LEDs",
      wavelengths: "Red (633nm) + Blue (415nm) + Yellow (590nm) + NIR (830nm)",
      spectrumDots: [
        { name: "Red 633nm", color: "#EF4444", wavelength: "633nm" },
        { name: "Blue 415nm", color: "#3B82F6", wavelength: "415nm" },
        { name: "Yellow 590nm", color: "#F59E0B", wavelength: "590nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Face Only)",
      cordless: "Wired Tethered Remote",
      trial: "30-Day Money-Back Trial",
    },
  },
  {
    id: 7,
    rank: "#7",
    rankBadge: "Optical Multi-Wave",
    name: "Silk'n LED Face Mask Pro",
    tag: "5-Wavelength Flexible Face & Jawline Phototherapy",
    image: "/img/silkn-face-mask-pro.jpg",
    price: "£220.15",
    rating: 4.3,
    ratingDisplay: "4.3 / 5",
    reviewCount: "78+",
    link: BUUDY_PRODUCT_URL,
    isWinner: false,
    ctaText: "Check LookFantastic Listing",
    voucher: {
      code: "SILKN10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Standard Retail Price Applies",
    },
    description: [
      "Positioned at <b>#7</b> in our clinical assessment, the Silk'n LED Face Mask Pro features specialised <b>Caeli-lens optical clusters</b> calibrated to scatter phototherapy across the facial envelope and jawline. Delivering five distinct wavebands—including <b>630nm red</b>, <b>460nm blue</b>, <b>590nm amber</b>, <b>850nm near-infrared</b>, and <b>940nm deep near-infrared</b>—it supplies seven pre-set treatment regimes for complexion maintenance.",
      "A distinct mechanical feature is its secondary lower strap, engineered to anchor the silicone closely beneath the submental region and mandibular line. Constructed from supple elastomer material, the mask folds neatly into a compact pouch, making it convenient for frequent travellers.",
      "However, the system relies on merely <b>100 LED optical nodes</b>, resulting in noticeably lower photon irradiance and wider energy gaps than market leaders. At <b>£220.15</b>, it leaves the lower neck and <b>chest area</b> entirely neglected, whilst the deep 940nm band offers less proven superficial dermatological benefit than traditional 830nm infrared diodes.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 78 },
      { label: "Skin Comfort & Face Fit", value: 85 },
      { label: "Ease of Daily Operation", value: 84 },
      { label: "Build & Material Durability", value: 80 },
      { label: "Value for Money & Warranty", value: 68 },
    ],
    pros: [
      "Emits 5 light wavebands including Red, Blue, Amber, NIR, and Deep NIR.",
      "Dedicated lower strap provides secure support under the chin and jawline.",
      "Flexible, lightweight silicone construction folds flat into included travel pouch.",
      "Readily available through established UK beauty retailers with swift delivery.",
    ],
    cons: [
      "Only 100 LED clusters, resulting in lower light density than category leaders.",
      "Face and chin coverage only, omitting the neck and chest.",
      "940nm Deep NIR wavelength has less clinical documentation than 830nm NIR.",
      "Thin silicone head strap tends to loosen and lose elasticity over time.",
      "Fixed automated timers offer no adjustable intensity or energy settings.",
      "Wide mouth cut-out leaves perioral lines and upper lip uncovered by light.",
    ],
    specSheet: {
      ledCount: "100 Optical LED Clusters",
      wavelengths: "5 Wavelengths (Red, Blue, Amber, NIR 850nm, Deep NIR 940nm)",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Blue 460nm", color: "#3B82F6", wavelength: "460nm" },
        { name: "Amber 590nm", color: "#F59E0B", wavelength: "590nm" },
        { name: "Near-Infrared 850nm", color: "#881337", wavelength: "850nm" },
        { name: "Deep NIR 940nm", color: "#4C0519", wavelength: "940nm" },
      ],
      neckIncluded: "No (Face & Chin Only)",
      cordless: "Rechargeable Wireless",
      trial: "Standard 30-Day Retail Return",
    },
  },
  {
    id: 8,
    rank: "#8",
    rankBadge: "Circadian & Cellular",
    name: "BlockBlueLight Face Mask",
    tag: "Targeted Anti-Ageing Quad-Wavelength Facial Device",
    image: "/img/blockbluelight-mask.png",
    price: "£274.95",
    rating: 4.2,
    ratingDisplay: "4.2 / 5",
    reviewCount: "37",
    link: BUUDY_PRODUCT_URL,
    isWinner: false,
    ctaText: "Check Official UK Listing",
    voucher: {
      code: "BLOCK10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Securing <b>#8</b> in our benchmark evaluation, the BlockBlueLight Face Mask is crafted by circadian lighting specialists with an emphasis on low-EMF photobiomodulation. It harnesses <b>132 dual-chip LEDs</b> tuned to four targeted wavebands: <b>590nm amber</b>, <b>630nm red</b>, <b>810nm near-infrared</b>, and <b>830nm near-infrared</b>.",
      "Boasting verified optical irradiance peaking at <b>45mW/cm²</b>, this mask delivers substantial photon energy into subcutaneous layers to encourage cellular adenosine triphosphate (ATP) production. An integrated digital remote allows users to customise treatment durations and select power intensities according to skin sensitivity.",
      "Despite these technical merits, the <b>£274.95 price point</b> covers solely facial contours. The intentional exclusion of blue light wavelengths leaves it incapable of treating active acne vulgaris or microbial congestion, and users wanting neck or <b>chest</b> phototherapy must invest heavily in a separate add-on collar.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 76 },
      { label: "Skin Comfort & Face Fit", value: 82 },
      { label: "Ease of Daily Operation", value: 80 },
      { label: "Build & Material Durability", value: 84 },
      { label: "Value for Money & Warranty", value: 58 },
    ],
    pros: [
      "Dual NIR wavelengths (810nm and 830nm) for layered dermal photo-stimulation.",
      "Strong optical irradiance reaching up to 45mW/cm² with variable power levels.",
      "High-grade flexible medical silicone shell with integrated eye cups.",
      "Certified low EMF emission design tailored for safe daily home phototherapy.",
    ],
    cons: [
      "High £274.95 price tag for face-only treatment with only 132 total LEDs.",
      "Zero Blue light mode, making it ineffective against active breakouts and acne bacteria.",
      "Omits neck coverage, requiring an expensive separate collar purchase (£170+).",
      "Internal eye inserts can leave temporary red pressure marks around the eye area.",
      "Tethered to a wired remote pack that requires frequent battery recharges.",
      "Lacks colour therapy for pigmentation (Green), calming (Cyan), and soothing (Purple).",
      "Strict return policy requires completely unopened packaging for full refund eligibility.",
    ],
    specSheet: {
      ledCount: "132 Dual-Chip LEDs",
      wavelengths: "Amber (590nm) + Red (630nm) + NIR (810nm/830nm)",
      spectrumDots: [
        { name: "Amber 590nm", color: "#F59E0B", wavelength: "590nm" },
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Near-Infrared 810nm", color: "#9F1239", wavelength: "810nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Face Only)",
      cordless: "Wired Remote Controller",
      trial: "30-Day Money-Back Guarantee",
    },
  },
  {
    id: 9,
    rank: "#9",
    rankBadge: "Medical Heritage",
    name: "Philips ReAura 7000 Series",
    tag: "Precision Red & Infrared Facial Phototherapy",
    image: "/img/philips-7000-mask.png",
    price: "£399.99",
    rating: 4.0,
    ratingDisplay: "4.0 / 5",
    reviewCount: "110+",
    link: BUUDY_PRODUCT_URL,
    isWinner: false,
    ctaText: "Check Philips UK Listing",
    voucher: {
      code: "PHILIPS10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Ranked at <b>#9</b>, the Philips ReAura 7000 Series brings the manufacturing heritage of a global health-technology titan to consumer phototherapy. The mask is engineered with clinically standardised <b>630nm red</b> and <b>830nm near-infrared</b> LEDs calibrated to stimulate fibroblasts and soften the appearance of expression lines across the face.",
      "Fabricated with an ergonomic, hypoallergenic silicone frame, it sits securely against facial contours, while an automated 10-minute dosing cycle guarantees consistent treatment compliance before powering down automatically. The integrated rechargeable battery allows for wire-free portability throughout the session.",
      "Nonetheless, its steep <b>£399.99 price tag</b> is difficult to justify for a device emitting only two fundamental wavelengths. It entirely lacks blue, green, or yellow spectrums to counteract blemishes or sun-induced discolouration, omits <b>built-in neck coverage</b>, and relies on delicate modular hinge clips that require careful handling during daily sanitisation.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 78 },
      { label: "Skin Comfort & Face Fit", value: 74 },
      { label: "Ease of Daily Operation", value: 76 },
      { label: "Build & Material Durability", value: 86 },
      { label: "Value for Money & Warranty", value: 45 },
    ],
    pros: [
      "Backed by Philips healthcare heritage and clinical optical engineering.",
      "Calibrated 630nm Red and 830nm Near-Infrared wavelengths for collagen support.",
      "Soft, ergonomic silicone chassis provides a comfortable facial fit.",
      "Automated 10-minute treatment timer with smart shut-off functionality.",
    ],
    cons: [
      "Steep £399.99 price tag for basic face-only dual-wavelength therapy.",
      "Emits only 2 wavelengths, lacking Blue for acne, Green for dark spots, and Yellow for redness.",
      "Modular plastic connector clips feel delicate with repeated daily handling.",
      "Face and neck cannot be treated at once without awkward component swapping.",
      "Small rechargeable battery requires frequent top-up charges between sessions.",
      "Manufacturer charges high replacement fees for spare parts and accessories.",
      "Rigid modular clips can cause uneven pressure points along the jawline.",
    ],
    specSheet: {
      ledCount: "Philips Medical LED Array",
      wavelengths: "Red (630nm) + Near-Infrared (830nm)",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Face Unit)",
      cordless: "Rechargeable Wireless",
      trial: "Standard 2-Year Warranty",
    },
  },
  {
    id: 10,
    rank: "#10",
    rankBadge: "Vibration Tech Visor",
    name: "Therabody TheraFace Mask",
    tag: "648 Micro-LED Facial Visor with VibraWave Massage",
    image: "/img/theraface-mask.jpeg",
    price: "£579.00",
    rating: 3.9,
    ratingDisplay: "3.9 / 5",
    reviewCount: "420+",
    link: BUUDY_PRODUCT_URL,
    isWinner: false,
    ctaText: "Check Therabody UK Listing",
    voucher: {
      code: "THERA10",
      status: "expired",
      discountText: "Promo Code Expired",
      note: "Expired at 12:00 Midnight UK Time • Full Retail Price Applies",
    },
    description: [
      "Concluding our evaluation at <b>#10</b>, the Therabody TheraFace Mask presents an avant-garde aesthetic by integrating high-density phototherapy with mechanical tension relief. The rigid visor incorporates an impressive array of <b>648 micro-LEDs</b> covering <b>630nm red</b>, <b>830nm near-infrared</b>, and <b>415nm blue light</b>, accompanied by 17 acoustic <b>VibraWave motors</b> providing targeted acupressure around periorbital and temple points.",
      "The combination of light therapy and soothing physical vibration creates an immersive, spa-grade experience during the automated 9-minute routine. Its high optical diode count ensures exceptionally homogeneous facial irradiance without noticeable dark zones.",
      "However, commanding an eye-watering <b>£579.00 retail price</b>, it represents the single most expensive facial device in our UK benchmark. Weighing an unwieldy <b>576 grams</b>, the inflexible rigid plastic helmet exerts uncomfortable pressure over the nose and forehead, while offering zero coverage for the neck and <b>chest area</b> and draining its internal battery rapidly under combined massage and LED usage.",
    ],
    metrics: [
      { label: "Light Output & Effectiveness", value: 85 },
      { label: "Skin Comfort & Face Fit", value: 48 },
      { label: "Ease of Daily Operation", value: 78 },
      { label: "Build & Material Durability", value: 82 },
      { label: "Value for Money & Warranty", value: 32 },
    ],
    pros: [
      "High density of 648 micro-LEDs delivers exceptionally even facial light distribution.",
      "17 integrated VibraWave motors provide tension-relieving acupressure massage.",
      "Features 3 preset modes combining Red, Near-Infrared, and Blue light with massage.",
      "Cordless design with removable eye shields and a dedicated charging stand.",
    ],
    cons: [
      "Astronomical £579.00 price makes it the most expensive mask on the UK market.",
      "Heavy 576g rigid visor causes noticeable forehead tension and nasal bridge strain.",
      "Inflexible hard visor cannot conform to unique face contours, causing light leakage.",
      "Face only with zero coverage for the neck, jawline, or chest.",
      "17 vibration motors rapidly drain the battery after just 2 to 3 sessions.",
      "Bulky rigid form factor is difficult to travel with and vulnerable to drop damage.",
      "Proprietary charging base is costly to replace if lost or damaged.",
    ],
    specSheet: {
      ledCount: "648 High-Density Micro-LEDs",
      wavelengths: "Red (630nm) + Blue (415nm) + NIR (830nm)",
      spectrumDots: [
        { name: "Red 630nm", color: "#EF4444", wavelength: "630nm" },
        { name: "Blue 415nm", color: "#3B82F6", wavelength: "415nm" },
        { name: "Near-Infrared 830nm", color: "#881337", wavelength: "830nm" },
      ],
      neckIncluded: "No (Face Only)",
      cordless: "Rechargeable Rigid Mask",
      trial: "30-Day Money-Back Trial",
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
    question: "Why is neck and chest treatment essential for mature skin (40+)?",
    answer:
      "The skin on the neck and chest is thinner, has fewer oil glands, and shows UV damage and sagging much earlier than facial skin. Using a face-only mask creates a noticeable disparity known as the 'floating head' effect. The Buudy mask includes an integrated neck unit to ensure harmonious, even anti-ageing results.",
  },
  {
    question: "How often should I use an at-home LED face mask for best results?",
    answer:
      "For optimal outcomes, we recommend 10-minute sessions, 3 to 5 times per week on clean, dry skin. Most users notice enhanced skin radiance within 1 to 2 weeks, with significant reductions in wrinkle depth and blemish frequency within 4 to 8 weeks.",
  },
];
