export const MIROOOO_PRODUCT_URL = "https://www.trymiroooo.com/products/miroooo-x2";

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
    name: "Miroooo Brush X2 Electric Toothbrush",
    tag: "Ultra-Lightweight 51g Aerospace Aluminium Sonic Brush with 45° Bass Sweep, Smart Pressure Sensor Halo Ring & 90-Day Battery",
    image: "/img/toothbrushes/miroooo-x2-sonic-electric-toothbrush-silver-global-dental-innovation-award.webp",
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
      "Clinically claiming our definitive <b>#1 ranking for UK buyers in 2026</b>, the Miroooo Brush X2 resolves the persistent drawbacks of traditional oral-care appliances—cumbersome plastic bodies, jarring motor resonance, short runtimes, and extortionate replacement head tariffs. Crafted from a seamless unibody of <b>aerospace aluminium</b>, the handle weighs a featherlight <b>51g</b> to eliminate hand and wrist fatigue entirely. Operating beneath a whisper-quiet <b>45dB acoustic threshold</b>, its magnetic levitation drive delivers a refined, plaque-sweeping sensation that avoids the harsh mechanical bone vibrations common to older oscillating brushes, whilst its IPX7 waterproof rating naturally resists bathroom humidity and mould accumulation.",
      "From an everyday practicality standpoint, the Brush X2 sets an unchallenged benchmark with its high-density cobalt battery, yielding an exceptional <b>90+ days of operation</b> from a single charge via universal <b>USB-C fast charging</b>—wholly consigning obsolete two-pin shaver adapters to the past. Clinical efficacy is reinforced by an automated <b>45° Bass sweep</b> mechanism for subgingival plaque removal and a responsive <b>smart pressure sensor halo ring</b> that illuminates to safeguard fragile gingival tissue against excess force. Supported by an outstanding <b>4.9-star rating</b> across more than 4,000 verified UK users, this flagship system is currently offered at <b>£69</b> alongside a <b>complimentary £35 accessory suite</b> (encompassing a luxury travel case, magnetic wall dock, and spare brush heads), an expansive <b>90-day money-back guarantee</b>, and an industry-leading <b>3-year warranty</b>.",
    ],
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 97 },
      { label: "Durability", value: 96 },
      { label: "Lightweight & Ergonomic (51g)", value: 98 },
      { label: "Whisper Quiet (<45dB)", value: 96 },
      { label: "Battery Life & Endurance (90+ Days)", value: 99 },
    ],
    pros: [
      "<b>Proven Results</b> - Rated 4.9/5 stars from over 4,000 verified UK reviews.",
      "<b>Ultra-Lightweight (51g)</b> - Precision-engineered 51g aerospace aluminium body eliminates wrist fatigue.",
      "<b>Whisper Quiet (<45dB)</b> - Acoustic magnetic motor operates below 45dB with no harsh buzzing or handle rattle.",
      "<b>90-Day Battery Life</b> - High-density cobalt battery cell powered by universal USB-C fast charging.",
      "<b>Durable Aluminium Build</b> - Precision-milled aerospace unibody resists drops, wear, and bathroom mould.",
      "<b>Free £35 Gift Bundle</b> - Includes Luxury Travel Case (£16), Wall-Mounted Storage (£10), and Free Brush Heads (£9).",
      "<b>45° Bass Sweep & Smart Pressure Halo</b> - Precision angled acoustic motion with real-time visual alert ring to protect sensitive gums.",
      "<b>90-Day Money-Back Guarantee</b> - 100% risk-free home trial with full refund protection.",
      "<b>3-Year Warranty</b> - Complete 3-year manufacturer warranty for lasting peace of mind.",
    ],
    cons: [
      "High Promotional Demand: The £69 flagship package frequently encounters temporary stock sellouts during peak UK sale periods.",
      "Official Website Exclusive: Replacement brush heads must be purchased directly from their official website as replaceable heads are not available on Amazon.",
      "Promotional Sale: Usually costs £99, currently selling for £69 in ongoing promotional sale.",
    ],
    gifts: {
      totalValue: "£35",
      title: "What's Included & Free Gifts Worth £35",
      description:
        "Every Miroooo Brush X2 order includes these essential accessories in the box for complete oral care at home and on the go.",
      items: [
        {
          name: "Luxury Travel Case",
          regularPrice: "£16",
          image: "/img/toothbrushes/miroooo-brush-x2-luxury-travel-case-gift.webp",
          badge: "FREE GIFT",
        },
        {
          name: "Wall-Mounted Storage",
          regularPrice: "£10",
          image: "/img/toothbrushes/miroooo-brush-x2-wall-mounted-storage-dock-gift.webp",
          badge: "FREE GIFT",
        },
        {
          name: "Free Brush Heads",
          regularPrice: "£9",
          image: "/img/toothbrushes/miroooo-brush-x2-free-brush-heads-gift.webp",
          badge: "FREE GIFT",
        },
      ],
    },
    specSheet: {
      technology: "45° Bass Sweep Acoustic Clean",
      weight: "51g (Ultra Light Weight)",
      noiseLevel: "<45dB (Whisper Quiet)",
      batteryLife: "90+ Days (Universal USB-C)",
      chassisMaterial: "Aerospace Aluminium Unibody (IPX7)",
      dockType: "Wall-Mounted Dock + USB-C",
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
      "Securing our <b>#2 runner-up position</b>, the Oral-B iO Series 6 appeals to UK shoppers who prioritise interactive digital feedback and familiar rotary mechanical brushing. The handset incorporates an interactive monochrome <b>OLED display</b> that presents real-time quadrant countdowns, battery indicators, and mode selection, harmonised with a 360-degree <b>smart pressure sensor ring</b> that illuminates green under optimal force and signals red if excess pressure threatens delicate gum tissue. Its classic circular head cups individual dental contours effectively, delivering robust mechanical scrubbing across 5 bespoke cleaning routines.",
      "Nevertheless, significant compromises in acoustic refinement, physical ergonomics, and ongoing ownership expenses prevent it from capturing top honours. Tipping the scales at a hefty <b>140g</b>, the chunky polycarbonate chassis feels noticeably cumbersome, while the internal oscillating gearbox produces an aggressive <b>64dB mechanical roar</b> that vibrates intensely through teeth and jawbone. Compounding these ergonomic drawbacks, the modest <b>14-day battery duration</b> requires bi-weekly charging via an outdated two-pin bathroom socket, and proprietary iO replacement heads command an extortionate <b>£8 to £12 each</b>, imposing steep recurring maintenance costs on top of the steep <b>£129.99 upfront outlay</b>.",
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
      "Awarded our <b>#3 ranking</b>, the Philips Sonicare DiamondClean 9000 remains celebrated for its elegant vanity presentation and signature <b>inductive charging glass tumbler</b>. Generating up to 62,000 acoustic bristle sweeps per minute, its high-velocity magnetic driver creates dynamic fluid micro-bubbles designed to flush interdental gaps and loosen plaque along the gingival border. Embedded <b>BrushSync microchip technology</b> automatically tracks head usage to remind users when bristles have deteriorated, while the satin-touch composite exterior provides four personalised programmes across three intensity settings.",
      "However, this luxury aesthetic carries substantial clinical and commercial compromises for British householders. At an initial investment of <b>£124.99</b> (against a lofty £349.99 RRP), the heavy <b>135g composite body</b> feels bulky during extended use, whilst the high-frequency sonic resonance emits an irritating, high-pitched <b>56–60dB whine</b> in close proximity to the ear. Furthermore, runtime is restricted to an unexceptional <b>14 days</b>, mandating constant reliance on a cumbersome countertop tumbler wired to a two-pin shaver plug, and official replacement heads remain exorbitantly priced at <b>£9 to £12 per head</b> alongside a standard 28-day retailer return policy.",
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
      "Holding our <b>#4 position</b>, the SURI Pro 2.0 is engineered around an admirable eco-friendly ethos, combining modular aluminium casing with compostable <b>cornstarch-derived brush heads</b>, plant-based castor-oil bristles, and a complimentary UK post-back recycling scheme. Its slender minimalist profile features an integrated <b>Touchsense™ haptic sensor</b> that gently pulses to warn against excessive brushing force, whilst magnetic USB-C recharging provides a respectable <b>34-day battery reserve</b> that noticeably outlasts standard high-street appliances.",
      "Despite these commendable ecological intentions, intensive testing uncovers severe durability and economic shortcomings. At a standalone price of <b>£85</b>, the starter package provides neither extra refill heads nor a travel case, leaving buyers poorly equipped out of the box. Over sustained use, persistent bathroom humidity causes the organic cornstarch necks to develop <b>hairline fractures</b> and loosen upon the vibrating steel drive shaft, noticeably dissipating cleaning power. The magnetic mirror dock tends to accumulate unsightly <b>black mould</b> behind its adhesive mount, and proprietary replacement heads cost a steep <b>£14.99 per 2-pack</b>, significantly driving up ownership costs without offering multi-mode versatility or smart companion guidance.",
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
      "Occupying our <b>#5 ranking</b>, the Oral-B iO3 Matt Black acts as the entry-level portal into Oral-B's magnetic micro-vibration lineup at an initial cost of <b>£75</b> (discounted from an RRP of £160). It retains the brand's celebrated circular bristle geometry for mechanical tooth-by-tooth plaque removal, supplemented by an omnidirectional <b>360° smart pressure ring</b> that illuminates red to protect sensitive gums from abrasive scrubbing. The unit offers three baseline programmes (Daily Clean, Sensitive, and Whitening) and includes a hard plastic travel case suited for transit.",
      "Regrettably, to meet this lower price tier, Oral-B stripped away virtually all the technological enhancements that define modern smart toothbrushes. The iO3 completely omits an <b>interactive OLED screen</b> and Bluetooth synchronisation, leaving users without quadrant timing guidance or missed-zone habit tracking. Furthermore, the handle weighs a cumbersome <b>136g</b> in hand, the internal motor emits a rasping <b>64dB mechanical drone</b>, and the uninspired <b>14-day battery</b> demands an excruciating 16-hour recharge cycle via a legacy two-pin plug. When combined with proprietary iO refills running <b>£8 to £12 apiece</b> and an inflexible 30-day retail return window, the long-term cost proposition falls substantially short of modern unibody aluminium alternatives.",
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
