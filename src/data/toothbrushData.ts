export const MIROOOO_PRODUCT_URL = "https://www.trymiroooo.com/products/miroooo-x";

export interface Metric {
  label: string;
  value: number;
}

export interface GiftItem {
  name: string;
  regularPrice: string;
  image: string;
  badge?: string;
}

export interface ToothbrushProduct {
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
    technology: string;
    weight: string;
    noiseLevel: string;
    batteryLife: string;
    chassisMaterial: string;
    dockType: string;
    trial: string;
  };
}

export const TOOTHBRUSH_EVALUATION_CRITERIA: string[] = [
  "Acoustic fluid dynamics & deep interdental plaque removal",
  "Enamel safety & gentle gumline micro-bubble action",
  "Featherlight ergonomic handling & unibody weight balance",
  "Acoustic noise dampening (<50dB whisper-quiet operation)",
  "Extended lithium battery endurance & universal USB-C charging",
  "End-rounded DuPont™ diamond bristle quality & density",
  "Mould-resistant aerospace materials & IPX7 waterproof rating",
  "Long-term refill head availability & honest recurring pricing",
  "Smart pressure halo guidance & dentist habit tracking",
  "Authentic UK customer satisfaction & 90-day risk-free trial",
];

export const TOOTHBRUSH_PRODUCTS: ToothbrushProduct[] = [
  {
    id: 1,
    rank: "#1",
    rankBadge: "Editor's Choice • #1 Best Overall",
    name: "Miroooo Brush X Electric Toothbrush",
    tag: "Ultra-Lightweight 51g Aerospace Aluminium Sonic Brush with 32,000 VPM Acoustic Motor, USB-C Magnetic Dock & 60+ Day Battery",
    image: "/img/toothbrushes/miroooo-brush-x-sonic-electric-toothbrush-rose-gold-space-grey-silver.webp",
    price: "£69",
    originalPrice: "£139",
    discount: "50% OFF",
    rating: 4.9,
    ratingDisplay: "4.9 / 5",
    reviewCount: "4,000+",
    link: MIROOOO_PRODUCT_URL,
    isWinner: true,
    ctaText: "Claim Discount & Free Gifts",
    voucher: {
      code: "MIROOOO10",
      status: "active",
      discountText: "10% Extra Discount Applied",
      note: "Active & Tested Today • Free UK Tracked Delivery Included",
    },
    description: [
      "The Miroooo Brush X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: heavy, bulky handles, loud motor noise, weak battery life, bulky 2-pin bathroom socket adapters, and extortionate ongoing refill head prices. Weighing just 51g with quiet sound under 50dB, its aerospace aluminium chassis delivers an ultra-comfortable, dentist-clean brushing experience.",
      "Its everyday convenience and comprehensive coverage are second to none. Charging is effortless: simply place the toothbrush onto the included magnetic charging dock, powered by a universal USB-C cable, for 60+ days of brushing per charge with no awkward 2-pin shaver adapters required. Backed by the Dental Care Companion App for smart brushing habits, a verified 4.9★ customer rating, an included £20 free gift bundle (2 free brush heads and a £10 Miroooo digital gift card), a 90-day money-back guarantee, and a 2-year comprehensive warranty, the Miroooo Brush X sets the gold standard for electric toothbrushes in the UK.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 97 },
      { label: "Durability", value: 96 },
      { label: "Lightweight & Ergonomic (51g)", value: 98 },
      { label: "Whisper Quiet (<50dB)", value: 96 },
      { label: "Battery Life & Endurance (60+ Days)", value: 99 },
    ],
    pros: [
      "<b>Proven Results</b> - Rated 4.9/5 stars from over 4,000 verified UK reviews.",
      "<b>Ultra-Lightweight (51g)</b> - Featherlight aluminium handle eliminates wrist fatigue.",
      "<b>Whisper Quiet (<50dB)</b> - Smooth acoustic motor with no harsh buzzing or handle rattle.",
      "<b>60+ Day Battery Life</b> - Magnetic USB-C charging dock with no 2-pin adapters needed.",
      "<b>Durable Aluminium Build</b> - Aerospace unibody resists drops, wear, and bathroom mould.",
      "<b>Free £20 Gift Bundle</b> - Includes 2 extra brush heads (£10) and a £10 digital gift card.",
      "<b>Dental Care Companion App</b> - Smart mobile app helps guide daily brushing habits.",
      "<b>90-Day Money-Back Guarantee</b> - 100% risk-free home trial with full refund protection.",
      "<b>2-Year Warranty</b> - Comprehensive manufacturer warranty for long-term peace of mind.",
    ],
    cons: [
      "Frequently sells out online during high-demand UK promotional periods.",
      "Available online only direct to consumer to eliminate retail markups.",
    ],
    gifts: {
      totalValue: "£20",
      title: "What's Included & Free Gifts Worth £20",
      description:
        "While doing our research, we found that Miroooo is currently running a limited-time promotional sale where you get these premium dental accessories bundled completely free with every brush.",
      items: [
        {
          name: "What's Included in the Box",
          regularPrice: "Included in Kit",
          image: "/img/toothbrushes/miroooo-brush-x-what-is-included-package.webp",
          badge: "IN THE BOX",
        },
        {
          name: "2 Extra Free Heads",
          regularPrice: "£10",
          image: "/img/toothbrushes/miroooo-brush-x-2-extra-free-brush-heads.webp",
          badge: "FREE GIFT",
        },
        {
          name: "Miroooo Digital Gift Card",
          regularPrice: "£10",
          image: "/img/toothbrushes/miroooo-digital-gift-card.webp",
          badge: "FREE GIFT",
        },
      ],
    },
    specSheet: {
      technology: "32,000 VPM Acoustic Clean",
      weight: "51g (Aluminium)",
      noiseLevel: "<50dB (Whisper Quiet)",
      batteryLife: "60+ Days (Magnetic USB-C)",
      chassisMaterial: "Aerospace Aluminium Unibody",
      dockType: "Magnetic Dock + USB-C",
      trial: "90-Day Money-Back",
    },
  },
  {
    id: 2,
    rank: "#2",
    rankBadge: "Runner Up • Smart Mechanical Clean",
    name: "Oral-B iO Series 6 Electric Toothbrush",
    tag: "High-End Oscillating Brush with Interactive OLED Screen & Smart Pressure Sensor",
    image: "/img/toothbrushes/oral-b-io6-comparison.png",
    price: "£129.99",
    originalPrice: "£299.99",
    discount: "56% OFF",
    rating: 4.3,
    ratingDisplay: "4.3 / 5",
    reviewCount: "1,850+",
    link: "https://amzn.to/4wLZUyf",
    isWinner: false,
    ctaText: "Check Availability",
    voucher: {
      code: "ORALB10",
      status: "expired",
      discountText: "Expired Offer",
      note: "Standard Amazon UK Terms Apply",
    },
    description: [
      "The Oral-B iO Series 6 captures our runner-up position for UK consumers who favour interactive digital guidance and traditional round-head oscillating mechanical action. The built-in monochrome OLED screen displays real-time 2-minute brushing timers and mode icons, while the 360-degree smart pressure ring illuminates green for correct pressure and red when brushing too aggressively.",
      "Where the iO6 loses ground against modern competitors is everyday convenience, acoustic comfort, and long-term running costs. Weighing roughly 140g, the chunky plastic handle feels bulky, and the mechanical oscillating gearbox generates a loud motor drone exceeding 64dB that reverberates directly through teeth and bone. Furthermore, its 14-day battery requires frequent recharges on a traditional 2-pin bathroom plug, and proprietary iO replacement heads cost an exorbitant £8 to £12 each.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 87 },
      { label: "Lightweight & Ergonomic (140g)", value: 78 },
      { label: "Whisper Quiet Sound (64dB)", value: 68 },
      { label: "Chassis Durability (Plastic)", value: 76 },
      { label: "Battery Life & Endurance (14 Days)", value: 70 },
    ],
    pros: [
      "Interactive OLED screen displays live brushing timers and mode icons.",
      "Smart 360° pressure ring glows red to protect sensitive gums from over-brushing.",
      "Classic round oscillating head cups each tooth for thorough mechanical cleaning.",
      "AI app connection maps 6 mouth zones to help spot unbrushed areas.",
    ],
    cons: [
      "Loud mechanical motor noise (>64dB) with harsh handle vibration.",
      "Heavy 140g bulky plastic body causes hand fatigue during use.",
      "Short 14-day battery life requires frequent fortnightly recharging.",
      "Requires an outdated 2-pin bathroom shaver socket instead of universal USB-C.",
      "Proprietary iO replacement heads cost £8 to £12 each, leading to high upkeep costs.",
      "Rubber grip seams easily trap moisture, soap scum, and bathroom grime.",
      "Comes with a basic 2-pin stand rather than a modern magnetic USB-C dock.",
      "Limited 30-day retailer return policy with no extended 90-day trial.",
    ],
    specSheet: {
      technology: "Oscillating Micro-Vibrations",
      weight: "~140g (Plastic)",
      noiseLevel: "~64dB (Loud Motor)",
      batteryLife: "14 Days (2-Pin)",
      chassisMaterial: "Polycarbonate Plastic & Rubber",
      dockType: "2-Pin Shaver Stand",
      trial: "30-Day Guarantee",
    },
  },
  {
    id: 3,
    rank: "#3",
    rankBadge: "Premium Sonic • Luxury Bathroom Glass",
    name: "Philips Sonicare DiamondClean 9000",
    tag: "High-Frequency Sonic Toothbrush with Countertop Charging Glass & BrushSync",
    image: "/img/toothbrushes/philips-sonicare-diamondclean-9000.webp",
    price: "£124.99",
    originalPrice: "£349.99",
    discount: "64% OFF",
    rating: 4.1,
    ratingDisplay: "4.1 / 5",
    reviewCount: "1,420+",
    link: "https://link.amazon/B0ad5Rtl8",
    isWinner: false,
    ctaText: "Check Availability",
    voucher: {
      code: "SONIC10",
      status: "expired",
      discountText: "Expired Offer",
      note: "Standard Amazon UK Terms Apply",
    },
    description: [
      "The Philips Sonicare DiamondClean 9000 is renowned for its high-end bathroom vanity presentation and signature inductive charging tumbler. Providing up to 62,000 bristle movements per minute, its sonic engine generates fluid micro-bubbles to sweep between teeth, while BrushSync technology automatically monitors head wear.",
      "Nevertheless, at an upfront price of £124.99 (and an RRP of £349.99), the value proposition is hard to justify. The handle weighs a hefty 135g, the sonic motor produces a sharp high-pitched 56–60dB humming, and the battery lasts only 14 days before needing placement in the bulky glass charging cup powered by a 2-pin bathroom cable. With replacement heads priced at £9 to £12 apiece, running costs remain substantially higher than newer unibody alternatives.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 86 },
      { label: "Lightweight & Ergonomic (135g)", value: 79 },
      { label: "Whisper Quiet Sound (56dB)", value: 76 },
      { label: "Chassis Durability (Composite)", value: 74 },
      { label: "Battery Life & Endurance (14 Days)", value: 68 },
    ],
    pros: [
      "Inductive glass charging tumbler creates a stylish look on bathroom vanity units.",
      "BrushSync microchip technology tracks head wear and alerts you when to replace.",
      "Smooth satin matt finish offers a comfortable, soft-touch grip.",
      "4 cleaning modes and 3 intensity settings for personalised brushing routines.",
    ],
    cons: [
      "High upfront price at £124.99, making it the most expensive brush in our review.",
      "High-pitched sonic buzzing sound (~56–60dB) can feel irritating during use.",
      "Short 14-day battery life demands recharging every fortnight.",
      "Bulky glass charging stand takes up sink space and requires a 2-pin shaver socket.",
      "Heavier 135g composite handle feels bulky compared to slim aluminium brushes.",
      "Official Sonicare replacement heads cost £9 to £12 each.",
      "Internal motor shaft seals can degrade over time from water exposure.",
      "Strict 28-day return policy with no extended 90-day satisfaction guarantee.",
    ],
    specSheet: {
      technology: "62k Sonic Micro-Bubbles",
      weight: "~135g (Composite)",
      noiseLevel: "~56dB (High Buzz)",
      batteryLife: "14 Days (Glass Cup)",
      chassisMaterial: "Composite Satin Finish",
      dockType: "Inductive Tumbler",
      trial: "28-Day Guarantee",
    },
  },
  {
    id: 4,
    rank: "#4",
    rankBadge: "Eco Alternative • Plant-Based Heads",
    name: "SURI Pro 2.0 Electric Toothbrush",
    tag: "Sustainable Aluminium Sonic Toothbrush with Recyclable Cornstarch Brush Heads",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£85",
    originalPrice: "£95",
    discount: "10% OFF",
    rating: 3.6,
    ratingDisplay: "3.6 / 5",
    reviewCount: "820+",
    link: "https://amzn.to/4wRV2YF",
    isWinner: false,
    ctaText: "Check Availability",
    voucher: {
      code: "SURI10",
      status: "expired",
      discountText: "Expired Offer",
      note: "Standard Amazon UK Terms Apply",
    },
    description: [
      "The SURI Pro 2.0 champions an eco-conscious design ethos, utilising recyclable cornstarch brush heads, plant-based castor oil bristles, and a modular aluminium body with an integrated Touchsense™ pressure sensor for £85.",
      "While its sustainability ethos is commendable, real-world testing highlights significant durability and value compromises. The £85 standalone package includes zero extra replacement heads or travel accessories. Moisture easily causes the plant-based cornstarch stems to develop hairline cracks or loosen on the vibrating metal shaft, diminishing cleaning power. Additionally, the charging base frequently gathers dark mildew, and replacement heads cost a steep £14.99 per 2-pack.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 74 },
      { label: "Lightweight & Ergonomic (85g)", value: 80 },
      { label: "Whisper Quiet Sound (54dB)", value: 78 },
      { label: "Chassis Durability (Aluminium)", value: 68 },
      { label: "Battery Life & Endurance (34 Days)", value: 78 },
    ],
    pros: [
      "Eco-friendly plant-based cornstarch heads with a free UK mail-back recycling programme.",
      "Sleek modular aluminium handle with convenient direct USB-C charging.",
      "Touchsense™ haptic sensor pulses gently if you press too hard on gums.",
      "Decent 34-day battery life outlasts standard 14-day high-street models.",
    ],
    cons: [
      "Plant-based cornstarch stems can develop hairline cracks or loosen on the metal motor shaft.",
      "Charging stand easily traps wet residue, leading to unsightly bathroom mould.",
      "Expensive replacement heads priced at £14.99 per 2-pack (£7.50 each).",
      "Standard £85 box includes no travel case or spare replacement brush heads.",
      "Audible sonic motor buzz (~54dB) is louder than whisper-quiet models.",
      "No Bluetooth connectivity or smart app coaching for brushing feedback.",
      "Only 2 cleaning modes with no dedicated sensitive setting.",
      "Standard 30-day retail return policy without a 90-day home trial.",
    ],
    specSheet: {
      technology: "33k VPM Sonic Clean",
      weight: "~85g (Aluminium)",
      noiseLevel: "~54dB (Motor Buzz)",
      batteryLife: "34 Days (USB-C)",
      chassisMaterial: "Modular Aluminium Alloy",
      dockType: "Magnetic Stand + USB-C",
      trial: "30-Day Guarantee",
    },
  },
  {
    id: 5,
    rank: "#5",
    rankBadge: "Budget Entry • Basic Oscillating",
    name: "Oral-B iO3 Matt Black Electric Toothbrush",
    tag: "Entry-Level iO Micro-Vibration Toothbrush with Smart Pressure Ring & Travel Case",
    image: "/img/toothbrushes/oral-b-io3-comparison.png",
    price: "£75",
    originalPrice: "£160",
    discount: "53% OFF",
    rating: 3.4,
    ratingDisplay: "3.4 / 5",
    reviewCount: "650+",
    link: "https://link.amazon/B0erAArJa",
    isWinner: false,
    ctaText: "Check Availability",
    voucher: {
      code: "IO3OFF",
      status: "expired",
      discountText: "Expired Offer",
      note: "Standard Amazon UK Terms Apply",
    },
    description: [
      "The Oral-B iO3 Matt Black functions as an entry-level tier into Oral-B's magnetic micro-vibration line at £75 (RRP £160). It features the brand's classic round head, a 360-degree smart pressure ring, 3 basic cleaning modes, and an included plastic travel case.",
      "However, in stripping down the unit to lower the cost, Oral-B removed the defining smart innovations of the iO ecosystem. The iO3 lacks an interactive OLED screen, has zero Bluetooth app coaching, and relies on an outdated 14-day battery that requires a sluggish 16-hour charge on an obsolete 2-pin bathroom plug. Crucially, it still locks users into pricey £8 to £12 iO refills, making long-term ownership expensive despite the stripped-down hardware.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 72 },
      { label: "Lightweight & Ergonomic (136g)", value: 72 },
      { label: "Whisper Quiet Sound (64dB)", value: 62 },
      { label: "Chassis Durability (Plastic)", value: 70 },
      { label: "Battery Life & Endurance (14 Days)", value: 65 },
    ],
    pros: [
      "Round oscillating brush head delivers classic tooth-by-tooth mechanical cleaning.",
      "360° smart pressure ring glows red to prevent harmful aggressive brushing.",
      "3 straightforward cleaning modes (Daily Clean, Sensitive, Whitening).",
      "Includes a simple hard plastic travel case for journeys and storage.",
    ],
    cons: [
      "Loud 64dB mechanical gearbox creates noticeable handle and jaw vibration.",
      "No interactive OLED screen to check brushing timer or battery level.",
      "Lacks Bluetooth connectivity or mobile app coverage tracking.",
      "Dated 14-day battery requires sluggish 16-hour charges via a 2-pin bathroom plug.",
      "Locks you into pricey £8 to £12 iO replacement heads for high annual running costs.",
      "Chunky 136g plastic handle feels heavy and cumbersome in hand.",
      "Flat base collects standing water and messy toothpaste residue on bathroom surfaces.",
      "Basic 30-day return policy with only a single brush head included in the box.",
    ],
    specSheet: {
      technology: "Basic Micro-Vibrations",
      weight: "~136g (Plastic)",
      noiseLevel: "~64dB (Loud Whine)",
      batteryLife: "14 Days (2-Pin)",
      chassisMaterial: "Matt Plastic & Rubber Grip",
      dockType: "2-Pin Shaver Stand",
      trial: "30-Day Guarantee",
    },
  },
];
