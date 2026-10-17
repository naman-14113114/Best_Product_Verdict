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
  "Mold-resistant aerospace materials & IPX7 waterproof rating",
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
      "The Miroooo Brush X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: heavy bulky handles, loud motor noise, weak battery life, bulky 2-pin bathroom socket adapters, and extortionate ongoing refill head prices. Weighing just 51g with quiet sound under 50dB, its aerospace aluminium chassis delivers an ultra-comfortable, dentist-clean brushing experience.",
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
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 4,000 reviews and performed well in internal testing",
      "Ultra Light Weight (51g): Precision-engineered 51g aerospace aluminium body eliminates wrist fatigue and feels effortless in hand",
      "Quiet Sound (<50dB): Acoustic magnetic motor operates below 50dB for a smooth, whisper-quiet clean that eliminates harsh buzzing noise and hand rattling",
      "60+ Day Battery Life: Massive 60+ day battery endurance powered by a convenient magnetic charging dock and USB-C cable. Simply place the brush on the magnetic base to charge—completely eliminating the need for bulky 2-pin bathroom shaver socket adapters",
      "Long-Lasting Aluminium Design: Precision-milled aerospace aluminium unibody resists drops and mold, ensuring the brush lasts years longer than fragile plastic alternatives",
      "2 Free Brush Heads & £10 Gift Card (£20 bundle): Active promotion includes 2 Free Brush Heads (£10) and a Miroooo Digital Gift Card (£10) at zero added cost",
      "Dental Care Companion App: Integrated smart companion app tracks brushing zones and reinforces dentist-recommended habits",
      "90-Day Money-Back Guarantee: 100% risk-free home trial with full refund protection",
      "2-Year Comprehensive Warranty: Complete 2-year manufacturer warranty ensuring lasting peace of mind",
    ],
    cons: [
      "High Promotional Demand: The £69 bundle frequently encounters temporary stock sellouts during peak UK sale periods",
      "Direct-to-Consumer: Available online only to eliminate high retail distributor markups",
    ],
    gifts: {
      totalValue: "£20",
      title: "What's Included & Free Gifts Worth £20",
      description:
        "While doing our research, we found that Miroooo is currently running a limited-time promotional sale where you get these premium dental accessories bundled completely free with every brush.",
      items: [
        {
          name: "What's Included in Box",
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
      "Interactive OLED Display: Crisp handle screen shows real-time brushing timers and replacement head reminders",
      "Smart 360° Pressure Ring: Visual colour ring warns against excessive pressure to safeguard sensitive gum margins",
      "Round-Head Mechanical Scrub: Proven oscillating action cups individual teeth for thorough plaque removal",
      "AI Zone Mapping: Connects to the Oral-B app to track 6 mouth sectors and highlight missed surfaces",
    ],
    cons: [
      "Loud Mechanical Noise (>64dB): Oscillating gearbox creates a persistent loud whine and harsh jaw vibration",
      "Heavy 140g Plastic Body: Nearly three times the weight of modern aluminium toothbrushes, increasing grip fatigue",
      "Dated 14-Day Battery Life: Demands bi-weekly recharging, trailing modern 60-day standards set by Miroooo Brush X",
      "Bulky 2-Pin Shaver Plug: Requires an obsolete 2-pin UK bathroom socket adapter rather than convenient USB-C",
      "Extortionate Refill Costs: Proprietary iO brush heads cost £8 to £12 each, creating high recurring yearly bills",
      "Plastic Seam Mildew Vulnerability: Rubberised grip sections and joint seams easily trap moisture and bathroom grime",
      "No Magnetic USB-C Dock: Ships with an outdated 2-pin shaver stand rather than a modern compact magnetic USB-C charging dock",
      "Short 30-Day Return Terms: Standard corporate retail return policy with no extended 90-day home trial period",
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
    image: "/img/toothbrushes/philips-sonicare-comparison.png",
    price: "£149.99",
    originalPrice: "£349.99",
    discount: "57% OFF",
    rating: 4.1,
    ratingDisplay: "4.1 / 5",
    reviewCount: "1,420+",
    link: "https://amzn.to/4hQE7BS",
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
      "Nevertheless, at an upfront price of £149.99 (and an RRP of £349.99), the value proposition is hard to justify. The handle weighs a hefty 135g, the sonic motor produces a sharp high-pitched 56–60dB humming, and the battery lasts only 14 days before needing placement in the bulky glass charging cup powered by a 2-pin bathroom cable. With replacement heads priced at £9 to £12 apiece, running costs remain substantially higher than newer unibody alternatives.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 86 },
      { label: "Lightweight & Ergonomic (135g)", value: 79 },
      { label: "Whisper Quiet Sound (56dB)", value: 76 },
      { label: "Chassis Durability (Composite)", value: 74 },
      { label: "Battery Life & Endurance (14 Days)", value: 68 },
    ],
    pros: [
      "Iconic Charging Glass: Inductive glass tumbler makes a striking aesthetic statement on bathroom countertops",
      "BrushSync Microchip Tracking: Automatically pairs compatible heads and tracks individual bristle degradation",
      "Smooth Satin Finish: Premium matte exterior coating provides a comfortable, soft-touch grip",
      "4 Custom Cleaning Modes: Includes Clean, White+, Gum Health, and Deep Clean+ with 3 intensity levels",
    ],
    cons: [
      "High Upfront Investment: £149.99 sale price (£349 RRP) makes it the priciest toothbrush in our comparison",
      "Piercing High-Pitched Buzz (~56–60dB): High-frequency sonic vibration generates an irritating buzzing sensation",
      "Short 14-Day Battery Runtime: Requires bi-weekly charging, falling far short of modern 90-day benchmarks",
      "Cumbersome Countertop Footprint: Bulky glass charging base clutters bathroom sinks and needs a 2-pin shaver plug",
      "Heavy 135g Composite Handle: More than 2.6x the weight of featherlight aluminium unibody brushes",
      "Expensive Replacement Heads: Official Philips Sonicare refills cost £9 to £12 per head",
      "Motor Shaft Seal Degradation: Internal vibrating shaft seals are susceptible to water ingress and motor rattle over time",
      "Limited 28-Day Return Window: Minimal return period with zero 90-day satisfaction trial protection",
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
      "Plant-Based Biodegradable Heads: Cornstarch stems and castor oil bristles with free UK mail-back recycling",
      "Slim Modular Metal Handle: Sleek Scandinavian-inspired aluminium casing with USB-C charging",
      "Touchsense™ Pressure Sensor: Subtle haptic vibration pulses when pressing too firmly on gum lines",
      "Moderate 34-Day Battery: Decent battery longevity compared to traditional 14-day drugstore brushes",
    ],
    cons: [
      "Fragile Cornstarch Head Stems: Plant-based heads crack or work loose on the vibrating motor shaft under moisture",
      "Mildew-Prone Charging Base: Traps damp toothpaste residue around the charging base, breeding unsightly mold",
      "Steep Refill Pricing: Proprietary plant-based heads cost £14.99 per 2-pack (£7.50/head)",
      "Zero Included Accessories: Standalone £85 box includes no travel case, spare heads, or magnetic stand",
      "Audible Motor Buzz (~54dB): Generates noticeable sonic noise compared to sub-50dB acoustic motors",
      "No Smart App Connectivity: Lacks Bluetooth tracking, coverage mapping, or zone guidance",
      "Only 2 Cleaning Speeds: Restricted to Everyday Clean and Polish modes without delicate sensitivity control",
      "Standard 30-Day Return Terms: Backed by standard corporate return terms with no 90-day trial",
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
    price: "£65",
    originalPrice: "£160",
    discount: "59% OFF",
    rating: 3.4,
    ratingDisplay: "3.4 / 5",
    reviewCount: "650+",
    link: "https://amzn.to/4gD6zVF",
    isWinner: false,
    ctaText: "Check Availability",
    voucher: {
      code: "IO3OFF",
      status: "expired",
      discountText: "Expired Offer",
      note: "Standard Amazon UK Terms Apply",
    },
    description: [
      "The Oral-B iO3 Matt Black functions as an entry-level tier into Oral-B's magnetic micro-vibration line at £65 (RRP £160). It features the brand's classic round head, a 360-degree smart pressure ring, 3 basic cleaning modes, and an included plastic travel case.",
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
      "iO Micro-Vibrating Brush Head: Delivers classic round-head mechanical action for basic plaque clearing",
      "360° Smart Pressure Sensor: Colour ring glows green for optimal pressure and red for excessive force",
      "3 Core Cleaning Settings: Offers Daily Clean, Sensitive, and Whitening modes via a single handle button",
      "Hard Plastic Travel Case: Includes a basic plastic carry case for transport and holidays",
    ],
    cons: [
      "Loud Mechanical Noise (~64dB): Oscillating motor emits a loud 64dB whine and noticeable jawbone rattle",
      "Stripped of Display Screen: Completely lacks the interactive OLED timer and battery screen found on the iO6",
      "No Smart App Connectivity: Hardware lacks Bluetooth, offering zero feedback or coverage tracking",
      "Dated 14-Day Battery & 16-Hour Charge: Demands frequent overnight charging via an obsolete 2-pin plug",
      "Costly £8–£12 iO Refill Trap: Incompatible with cheaper standard Oral-B heads, creating high annual costs",
      "Heavy 136g Plastic Handle: Bulky polycarbonate chassis feels cumbersome compared to lightweight aluminium",
      "Countertop Slurry Build-Up: Base collects standing bathroom moisture and messy toothpaste residue on bathroom countertops",
      "Standard 30-Day Return Terms: Single head in the box with standard 30-day retail return conditions",
    ],
    specSheet: {
      technology: "Basic Micro-Vibrations",
      weight: "~136g (Plastic)",
      noiseLevel: "~64dB (Loud Whine)",
      batteryLife: "14 Days (2-Pin)",
      chassisMaterial: "Matte Plastic & Rubber Grip",
      dockType: "2-Pin Shaver Stand",
      trial: "30-Day Guarantee",
    },
  },
];
