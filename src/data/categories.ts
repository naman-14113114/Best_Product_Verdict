export interface CategoryProductSample {
  name: string;
  badge?: string;
  rating: string;
  priceEstimate: string;
  highlight: string;
}

export interface CategoryData {
  id: string;
  slug: string;
  title: string;
  shortName: string;
  categoryGroup: "Kitchen & Dining" | "Personal Care & Beauty" | "Wellness & Recovery" | "Smart Home" | "Tech & Audio" | "Health & Medical";
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  itemCount: number;
  updatedDate: string;
  testedCount: number;
  labHours: number;
  averageRating: string;
  featured: boolean;
  searchTags: string[];
  keyFactors: string[];
  topPicksPreview: CategoryProductSample[];
}

export interface CategoryLink {
  name: string;
  href: string;
  isLive?: boolean;
}

export interface CategoryColumn {
  title: string;
  image: string;
  links: CategoryLink[];
}

export const HOMEPAGE_CATEGORIES: CategoryColumn[] = [
  {
    title: "Electronics",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/679202a3ea6c69e3fbccfbef_airpurifiersimg1compressed.png",
    links: [
      { name: "Air Purifiers", href: "/search?query=air+purifiers" },
      { name: "Cordless Vacuums", href: "/search?query=cordless+vacuums" },
      { name: "Dash Cams", href: "/search?query=dash+cams" },
      { name: "Smart Rings", href: "/search?query=smart+rings" },
      { name: "Digital Picture Frames", href: "/search?query=digital+picture+frames" },
      { name: "Headphones", href: "/search?query=headphones" },
      { name: "WiFi Mesh Systems", href: "/search?query=wifi+mesh+systems" },
      { name: "Projectors", href: "/search?query=projectors" },
      { name: "Foot Massagers", href: "/search?query=foot+massagers" },
      { name: "Power Stations", href: "/search?query=power+stations" },
      { name: "Solar Generators", href: "/search?query=solar+generators" },
    ],
  },
  {
    title: "Home",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/61fa2577aa75261556c0830a_robotvacuumarticlepicture.png",
    links: [
      { name: "Robot Vacuums", href: "/search?query=robot+vacuums" },
      { name: "Dehumidifiers", href: "/search?query=dehumidifiers" },
      { name: "Humidifiers", href: "/search?query=humidifiers" },
      { name: "Shower Heads", href: "/search?query=shower+heads" },
      { name: "Steam Mops", href: "/search?query=steam+mops" },
      { name: "Office Chairs", href: "/search?query=office+chairs" },
      { name: "RO Filters", href: "/search?query=reverse+osmosis+filters" },
      { name: "Doorbell Cameras", href: "/search?query=doorbell+cameras" },
      { name: "Space Heaters", href: "/search?query=space+heaters" },
      { name: "Smart Locks", href: "/search?query=smart+locks" },
      { name: "Welding Machines", href: "/search?query=welding+machines" },
    ],
  },
  {
    title: "Kitchen",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/6731c96fc697748004828771_toasterovenpicturecompressed.png",
    links: [
      { name: "Wireless Meat Thermometers", href: "/top-10/best-wireless-meat-thermometers", isLive: true },
      { name: "Espresso Machines", href: "/search?query=espresso+machines" },
      { name: "Toaster Ovens", href: "/search?query=toaster+ovens" },
      { name: "Air Fryers", href: "/search?query=air+fryers" },
      { name: "Ice Makers", href: "/search?query=ice+makers" },
      { name: "Blenders", href: "/search?query=blenders" },
      { name: "Dutch Ovens", href: "/search?query=dutch+ovens" },
      { name: "Slushie Machines", href: "/search?query=slushie+machines" },
      { name: "Frying Pans", href: "/search?query=frying+pans" },
      { name: "Food Processors", href: "/search?query=food+processors" },
      { name: "Yogurt Makers", href: "/search?query=yogurt+makers" },
      { name: "Vacuum Sealers", href: "/search?query=vacuum+sealers" },
    ],
  },
  {
    title: "Lifestyle",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/6792033f270bfd71a44a228e_hairclipperfcompressed.png",
    links: [
      { name: "Cordless Water Flossers", href: "/top-10/best-cordless-water-flossers", isLive: true },
      { name: "Mini Massage Guns", href: "/top-10/best-mini-massage-guns", isLive: true },
      { name: "Hair Clippers", href: "/search?query=hair+clippers" },
      { name: "Hair Straighteners", href: "/search?query=hair+straighteners" },
      { name: "Hair Dryers", href: "/search?query=hair+dryers" },
      { name: "Electric Toothbrushes", href: "/search?query=electric+toothbrushes" },
      { name: "Curling Irons", href: "/search?query=curling+irons" },
      { name: "Exercise Bikes", href: "/search?query=exercise+bikes" },
      { name: "Teeth Whitening Kits", href: "/search?query=teeth+whitening+kits" },
      { name: "Steam Irons", href: "/search?query=steam+irons" },
      { name: "Red Light Masks", href: "/search?query=red+light+masks" },
      { name: "Deep Wavers", href: "/search?query=deep+wavers" },
    ],
  },
  {
    title: "Other",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/67f74a0a261184f880685d3a_poolvacuumfcompressed.png",
    links: [
      { name: "Pool Vacuums", href: "/search?query=pool+vacuums" },
      { name: "Pool Skimmers", href: "/search?query=pool+skimmers" },
      { name: "Laser Levels", href: "/search?query=laser+levels" },
      { name: "Vibration Plates", href: "/search?query=vibration+plates" },
      { name: "Water Flossers", href: "/top-10/best-cordless-water-flossers", isLive: true },
      { name: "Jump Starters", href: "/search?query=jump+starters" },
      { name: "Neck Massagers", href: "/search?query=neck+massagers" },
      { name: "Weight Benches", href: "/search?query=weight+benches" },
      { name: "Back Massagers", href: "/search?query=back+massagers" },
      { name: "NAS Devices", href: "/search?query=nas+devices" },
      { name: "Borescopes", href: "/search?query=borescopes" },
    ],
  },
];

export const CATEGORIES: CategoryData[] = [
  {
    id: "wireless-meat-thermometers",
    slug: "best-wireless-meat-thermometers",
    title: "Top 10 Best Wireless Meat Thermometers UK (2026)",
    shortName: "Wireless Meat Thermometers",
    categoryGroup: "Kitchen & Dining",
    description: "Smart, wire-free Bluetooth and WiFi cooking probes benchmarked for thermal accuracy, ambient range, and app reliability.",
    longDescription: "Our culinary lab evaluated 18 smart meat probes over 140 hours of smoking, roasting, and high-heat searing. We measured temperature accuracy to within 0.1°C, tested sub-zero to 300°C thermal endurance, and verified transmission stability through thick oven doors and cast iron.",
    iconName: "Flame",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 18,
    labHours: 140,
    averageRating: "4.9",
    featured: true,
    searchTags: [
      "wireless meat thermometer",
      "meat thermometer",
      "smart thermometer",
      "bbq thermometer",
      "meater",
      "cooking probe",
      "roast probe",
      "smoker thermometer",
      "kitchen thermometer",
      "bluetooth probe",
      "wifi meat probe"
    ],
    keyFactors: ["Thermal Accuracy (±0.1°C)", "Wireless Transmission Range", "Probe Diameter & Meat Insertion", "Companion App Alerts"],
    topPicksPreview: [
      { name: "Chef IQ Smart Wireless Thermometer", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£79.99", highlight: "Ultra-thin 3.9mm probe with infinite cloud Wi-Fi range" },
      { name: "Typhur Sync 2-Probe System", badge: "Runner-Up", rating: "9.7", priceEstimate: "£149.99", highlight: "Sub-1G penetration frequency & NIST-traceable accuracy" },
      { name: "ThermoMaven Pro Smart Thermometer", badge: "Lab-Grade Precision", rating: "9.6", priceEstimate: "£119.99", highlight: "NIST-certified 6-sensor array with rest-time prediction" }
    ]
  },
  {
    id: "cordless-water-flossers",
    slug: "best-cordless-water-flossers",
    title: "Top 10 Best Cordless Water Flossers UK (2026)",
    shortName: "Cordless Water Flossers",
    categoryGroup: "Personal Care & Beauty",
    description: "Rechargeable, IPX7 waterproof oral irrigators tested for plaque removal, pulse modulation, and gum comfort.",
    longDescription: "Tested in consultation with UK dental professionals across 24 ergonomic, pressure-calibrated trials. We evaluated water stream PSI (30–120 PSI), pulse frequency, reservoir capacity, and battery longevity for both sensitive gums and orthodontic care.",
    iconName: "Droplets",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 22,
    labHours: 110,
    averageRating: "4.8",
    featured: true,
    searchTags: [
      "cordless water flosser",
      "water flosser",
      "oral irrigator",
      "teeth flosser",
      "dental flosser",
      "waterpik",
      "oral care",
      "gum health",
      "plaque removal",
      "flosser for braces",
      "portable flosser"
    ],
    keyFactors: ["Water Jet PSI Calibration (30-120 PSI)", "Pulse Modulation Frequency", "Reservoir Fill Volume (200-300ml)", "Battery Runtime & USB-C Fast Charging"],
    topPicksPreview: [
      { name: "Coslus C20 Cordless Oral Flosser", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£29.99", highlight: "ADA accepted with 300ml reservoir and 40-day battery runtime" },
      { name: "Coslus E40 Pro Adjustable Flosser", badge: "Runner-Up", rating: "9.7", priceEstimate: "£39.99", highlight: "10-stage pressure control with wide-aperture reservoir" },
      { name: "usmile C30 Portable Flosser", badge: "Best Ergonomic Jet", rating: "9.6", priceEstimate: "£44.99", highlight: "Patented S-shaped curved nozzle with 5 smart cleaning modes" }
    ]
  },
  {
    id: "mini-massage-guns",
    slug: "best-mini-massage-guns",
    title: "Top 10 Best Mini Massage Guns UK (2026)",
    shortName: "Mini Massage Guns",
    categoryGroup: "Wellness & Recovery",
    description: "Pocket-sized, brushless percussion massagers evaluated for stall force, amplitude depth, and silent operation.",
    longDescription: "We put 20 ultra-portable percussion devices through mechanical torque, stall-force pressure gauges, and noise decibel tests. We measured stroke depth (8mm to 12mm), stall force resistance up to 35 lbs, and thermal dissipation during 20-minute continuous therapy sessions.",
    iconName: "Activity",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 20,
    labHours: 95,
    averageRating: "4.9",
    featured: true,
    searchTags: [
      "mini massage gun",
      "massage gun",
      "pocket massager",
      "percussion massager",
      "deep tissue massager",
      "theragun mini",
      "muscle recovery",
      "portable massage gun",
      "physio gun",
      "fascia gun"
    ],
    keyFactors: ["Stall Force Resistance (25-40 lbs)", "Percussion Stroke Amplitude (8-12mm)", "Acoustic Decibel Output (<45 dB)", "Aerospace-Grade Weight (<500g)"],
    topPicksPreview: [
      { name: "Renpho Active Thermacool 2", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£79.99", highlight: "Active Peltier heat 45°C & cold 8°C with 30 lbs stall force" },
      { name: "Renpho Active Thermacool Deluxe", badge: "Runner-Up", rating: "9.7", priceEstimate: "£99.99", highlight: "Desktop magnetic charging stand with 6 therapeutic attachments" },
      { name: "Bob & Brad C2 Deep Tissue Massager", badge: "Physio Approved", rating: "9.6", priceEstimate: "£69.99", highlight: "Designed by renowned physical therapists with 35 lbs torque" }
    ]
  },
  {
    id: "led-face-masks",
    slug: "best-led-face-masks",
    title: "Top 10 Best LED Face Masks UK (2026)",
    shortName: "7-Colour LED Face Masks",
    categoryGroup: "Personal Care & Beauty",
    description: "Clinical phototherapy masks tested for wavelength precision, irradiance density (mW/cm²), and full-face contour comfort.",
    longDescription: "Spectrometer-benchmarked against medical phototherapy standards. We verified exact nanometre peak wavelengths (Red 630nm, Near-Infrared 830-850nm, Blue 415nm, Yellow 590nm), energy density, and medical-grade silicone comfort across 6-week skin texture trials.",
    iconName: "Sparkles",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 16,
    labHours: 180,
    averageRating: "4.9",
    featured: true,
    searchTags: [
      "led face mask",
      "red light therapy mask",
      "light therapy mask",
      "phototherapy face mask",
      "buudy led mask",
      "currentbody led mask",
      "omnilux contour",
      "anti ageing led mask",
      "acne light mask",
      "collagen mask"
    ],
    keyFactors: ["Wavelength Accuracy (630nm Red / 830nm NIR / 415nm Blue)", "Optical Irradiance (30-55 mW/cm²)", "Even LED Bulb Matrix Distribution", "Ergonomic Eye Shielding & Neck Coverage"],
    topPicksPreview: [
      { name: "Buudy 7 Colour LED Mask Pro", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£179.00", highlight: "216 medical-grade LEDs, 7 wavelengths + 830nm NIR & neck apron" },
      { name: "CurrentBody Skin LED Light Therapy Mask", badge: "Runner-Up", rating: "9.6", priceEstimate: "£299.00", highlight: "Pillow-soft flexible silicone with 132 Red/NIR dual diodes" },
      { name: "Omnilux Contour Face", badge: "Premium Pick", rating: "9.5", priceEstimate: "£348.00", highlight: "FDA-cleared clinical standard with certified irradiance" }
    ]
  },
  {
    id: "electric-toothbrushes",
    slug: "best-electric-toothbrushes",
    title: "Top 10 Best Sonic & Electric Toothbrushes UK (2026)",
    shortName: "Electric Toothbrushes",
    categoryGroup: "Personal Care & Beauty",
    description: "Acoustic sonic and oscillating smart toothbrushes benchmarked for plaque removal, pressure control, and battery life.",
    longDescription: "Our oral health review board evaluated vibration speeds up to 40,000 VPM, pressure-sensor accuracy, brush-head durability, and noise levels. We tested on synthetic plaque substrates to measure enamel preservation and gingival protection.",
    iconName: "Smile",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 25,
    labHours: 130,
    averageRating: "4.8",
    featured: true,
    searchTags: [
      "electric toothbrush",
      "sonic toothbrush",
      "oral b io",
      "philips sonicare",
      "miroooo toothbrush",
      "rechargeable toothbrush",
      "smart toothbrush",
      "plaque defense",
      "teeth whitening brush",
      "sensitive teeth brush"
    ],
    keyFactors: ["Vibrational Frequency (31,000 - 40,000 VPM)", "Visual / Haptic Pressure Defense Sensor", "Battery Endurance (30 to 90 Days)", "DuPont Precision Bristle Geometry"],
    topPicksPreview: [
      { name: "Miroooo X2 Acoustic Sonic Toothbrush", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£69.00", highlight: "Aerospace aluminium body, 45° Bass sweep & 90-day single charge" },
      { name: "Oral-B iO Series 6 Smart Brush", badge: "Runner-Up", rating: "9.6", priceEstimate: "£129.99", highlight: "Interactive display, AI brush tracking & micro-vibrating head" },
      { name: "Philips Sonicare DiamondClean 9000", badge: "Premium Pick", rating: "9.5", priceEstimate: "£169.99", highlight: "62,000 bristle movements/min with glass charging dock" }
    ]
  },
  {
    id: "air-fryers",
    slug: "best-air-fryers",
    title: "Top 10 Best Air Fryers & Multi-Cookers UK (2026)",
    shortName: "Air Fryers & Multi-Cookers",
    categoryGroup: "Kitchen & Dining",
    description: "Dual-zone and compact convection air fryers tested for crisping uniformity, energy efficiency, and cleanup ease.",
    longDescription: "Tested with 40kg of standard UK recipe staples including chips, roast chicken, and baked goods. We measured temperature consistency across dual cooking drawers, thermal heat-up speed, power consumption in kWh, and non-stick PTFE/ceramic durability.",
    iconName: "UtensilsCrossed",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 20,
    labHours: 160,
    averageRating: "4.9",
    featured: true,
    searchTags: [
      "air fryer",
      "dual zone air fryer",
      "ninja air fryer",
      "tower air fryer",
      "instant pot air fryer",
      "energy saving cooker",
      "healthy fryer",
      "multi cooker",
      "kitchen air fryer",
      "compact air fryer"
    ],
    keyFactors: ["Convection Airflow Speed & Heat Uniformity", "Dual-Zone Sync Cook Capability", "Energy Efficiency (kWh per Cook)", "Dishwasher-Safe Ceramic Basket Coating"],
    topPicksPreview: [
      { name: "Ninja Foodi DualZone MAX AF400UK", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£199.99", highlight: "9.5L capacity with 2 independent cooking drawers & Match Cook" },
      { name: "Tower T17088 Vortx Dual Basket 9L", badge: "Best Value", rating: "9.6", priceEstimate: "£99.99", highlight: "Vortx rapid air circulation saves up to 70% energy vs ovens" },
      { name: "Cosori Dual Blaze 6.4L Smart Fryer", badge: "Smart Pick", rating: "9.5", priceEstimate: "£139.99", highlight: "360 ThermoIQ top & bottom heating elements eliminate shaking" }
    ]
  },
  {
    id: "robot-vacuums",
    slug: "best-robot-vacuums",
    title: "Top 10 Best Robot Vacuums & Mops UK (2026)",
    shortName: "Robot Vacuums & Mops",
    categoryGroup: "Smart Home",
    description: "LiDAR-guided autonomous robot vacuums evaluated for obstacle avoidance, pet hair pickup, and self-emptying docks.",
    longDescription: "Benchmarked on standardized hardwood, tile, and high-pile wool carpet obstacle courses. We tested pickup efficiency for fine flour, rice, and pet hair, measured cliff sensor accuracy, and verified self-cleaning wash docks and hot-water mop drying.",
    iconName: "Bot",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 15,
    labHours: 120,
    averageRating: "4.8",
    featured: true,
    searchTags: [
      "robot vacuum",
      "robot mop",
      "roborock",
      "irobot roomba",
      "dreame robot vacuum",
      "lidar vacuum",
      "self emptying vacuum",
      "smart vacuum",
      "pet hair vacuum",
      "automated vacuum"
    ],
    keyFactors: ["Suction Power (6,000 - 10,000 Pa)", "LiDAR 3D Structured Light Obstacle Avoidance", "Auto-Emptying & Mop-Washing Station", "Smart App Multi-Floor Mapping"],
    topPicksPreview: [
      { name: "Roborock S8 Pro Ultra", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£899.00", highlight: "RockDock Ultra all-in-one station with auto-drying & 6000Pa suction" },
      { name: "Dreame L10s Ultra Gen 2", badge: "Runner-Up", rating: "9.7", priceEstimate: "£599.00", highlight: "Rotary scrubbing mops with AI obstacle detection & 7000Pa" },
      { name: "Eufy Clean X9 Pro with MopMaster", badge: "Best Value", rating: "9.5", priceEstimate: "£449.00", highlight: "Twin pressurized rotating mops with 12mm auto-lift on carpets" }
    ]
  },
  {
    id: "noise-cancelling-headphones",
    slug: "best-noise-cancelling-headphones",
    title: "Top 10 Best Noise-Cancelling Headphones UK (2026)",
    shortName: "ANC Headphones",
    categoryGroup: "Tech & Audio",
    description: "Over-ear and wireless ANC headphones tested for ambient sound attenuation, hi-res acoustic fidelity, and all-day comfort.",
    longDescription: "Tested in simulated London Underground commutes, commercial flights, and busy open-plan offices. We analyzed low-frequency rumble cancellation, spatial audio staging, microphone speech clarity, and memory-foam ear cushion pressure distribution.",
    iconName: "Headphones",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 18,
    labHours: 85,
    averageRating: "4.9",
    featured: true,
    searchTags: [
      "noise cancelling headphones",
      "anc headphones",
      "sony wh-1000xm5",
      "bose quietcomfort",
      "apple airpods max",
      "wireless headphones",
      "over ear headphones",
      "bluetooth headphones",
      "commuter headphones"
    ],
    keyFactors: ["Active Noise Cancellation Attenuation (-35dB+)", "Frequency Response & Hi-Res LDAC/AAC Support", "Continuous Battery Life (30-60 Hours)", "Clamping Force & Weight Distribution"],
    topPicksPreview: [
      { name: "Sony WH-1000XM5 Wireless ANC", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£279.00", highlight: "Industry-leading 8-microphone ANC with Auto NC Optimizer" },
      { name: "Bose QuietComfort Ultra Headphones", badge: "Best for Travel", rating: "9.7", priceEstimate: "£379.00", highlight: "Immersive Audio spatializer & ultra-plush headband comfort" },
      { name: "Sennheiser Momentum 4 Wireless", badge: "Best Battery Life", rating: "9.6", priceEstimate: "£219.00", highlight: "Unbeatable 60-hour battery runtime with audiophile tuning" }
    ]
  },
  {
    id: "smart-doorbells",
    slug: "best-smart-doorbells",
    title: "Top 10 Best Video Doorbells UK (2026)",
    shortName: "Smart Video Doorbells",
    categoryGroup: "Smart Home",
    description: "Battery and mains-powered smart doorbells evaluated for 2K HDR resolution, package detection, and zero-subscription local storage.",
    longDescription: "Evaluated across day and night lighting conditions, driving rain, and sub-zero temperatures. We tested motion latency, two-way audio clarity, package recognition AI, and chime connectivity through brick cavity walls.",
    iconName: "BellRing",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 14,
    labHours: 75,
    averageRating: "4.8",
    featured: false,
    searchTags: [
      "smart doorbell",
      "video doorbell",
      "ring doorbell",
      "eufy doorbell",
      "google nest doorbell",
      "wireless doorbell camera",
      "security camera",
      "home security",
      "doorbell no subscription"
    ],
    keyFactors: ["Resolution & Aspect Ratio (2K 4:3 Head-to-Toe)", "Local Storage Option (Zero Monthly Fees)", "PIR & Radar Dual Motion Detection", "Battery Endurance & Hardwire Compatibility"],
    topPicksPreview: [
      { name: "Eufy Video Doorbell E340 Dual-Camera", badge: "Best Overall 2026", rating: "9.8", priceEstimate: "£149.00", highlight: "Dual cameras monitor both visitors and porch packages with no monthly fees" },
      { name: "Ring Battery Video Doorbell Plus", badge: "Runner-Up", rating: "9.6", priceEstimate: "£129.99", highlight: "1536p HD Head-to-Toe video with colour night vision" },
      { name: "Google Nest Doorbell (Battery)", badge: "Best Smart Integration", rating: "9.5", priceEstimate: "£159.00", highlight: "On-device AI recognises people, parcels, animals, and vehicles" }
    ]
  },
  {
    id: "espresso-machines",
    slug: "best-espresso-machines",
    title: "Top 10 Best Espresso & Bean-to-Cup Coffee Machines UK (2026)",
    shortName: "Espresso & Coffee Machines",
    categoryGroup: "Kitchen & Dining",
    description: "Compact manual and bean-to-cup espresso makers tested for 9-bar extraction pressure, PID thermal stability, and microfoam texturing.",
    longDescription: "Our certified baristas pulled over 200 espresso shots across light, medium, and dark roast profiles. We measured extraction yield with digital refractometers, evaluated steam wand microfoam for latte art, and verified morning warm-up times.",
    iconName: "Coffee",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 16,
    labHours: 110,
    averageRating: "4.9",
    featured: false,
    searchTags: [
      "espresso machine",
      "bean to cup coffee machine",
      "sage barista express",
      "de longhi magnifica",
      "coffee maker",
      "home barista",
      "latte machine",
      "cappuccino maker",
      "ground coffee machine"
    ],
    keyFactors: ["PID Temperature Stability & ThermoJet Warmup", "9-Bar Real Extraction Pressure", "Commercial-Style Steam Wand for Microfoam", "Integrated Conical Burr Grinder"],
    topPicksPreview: [
      { name: "Sage Barista Express Impress", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£599.00", highlight: "Assisted tamp system with 10kg pressure feedback & precise dose" },
      { name: "De'Longhi Magnifica S Smart", badge: "Best Value Bean-to-Cup", rating: "9.6", priceEstimate: "£329.00", highlight: "One-touch bean-to-cup automation with easy rinse cleaning" },
      { name: "Sage Bambino Plus Compact", badge: "Best Compact Manual", rating: "9.5", priceEstimate: "£399.00", highlight: "3-second ThermoJet heat up with automatic milk frothing" }
    ]
  },
  {
    id: "hepa-air-purifiers",
    slug: "best-air-purifiers",
    title: "Top 10 Best HEPA Air Purifiers UK (2026)",
    shortName: "HEPA Air Purifiers",
    categoryGroup: "Health & Medical",
    description: "True HEPA H13 and carbon air purifiers tested for CADR airflow, pollen/dust filtration, and silent bedroom operation.",
    longDescription: "We tested particulate clearance in sealed chambers using aerosolized smoke, pollen allergens, and cooking VOCs. We evaluated clean air delivery rate (CADR m³/h), laser particulate sensor accuracy, filter replacement costs, and sleep mode decibels.",
    iconName: "Wind",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 18,
    labHours: 90,
    averageRating: "4.8",
    featured: false,
    searchTags: [
      "air purifier",
      "hepa air purifier",
      "levoit air purifier",
      "dyson air purifier",
      "pollen filter",
      "allergy air purifier",
      "dust purifier",
      "h13 true hepa",
      "room air filter"
    ],
    keyFactors: ["CADR Air Flow Output (200 - 450 m³/h)", "True H13 Medical-Grade HEPA Filtration (99.97%)", "Activated Carbon Granule VOC Odour Layer", "Ultra-Low Sleep Mode Noise (<24 dB)"],
    topPicksPreview: [
      { name: "Levoit Core 400S Smart True HEPA", badge: "Best Overall 2026", rating: "9.8", priceEstimate: "£189.99", highlight: "Cleans 83m² in 30 mins with laser PM2.5 real-time display" },
      { name: "Dyson Purifier Hot+Cool Formaldehyde", badge: "Premium All-in-One", rating: "9.6", priceEstimate: "£649.00", highlight: "Destroys formaldehyde, fully sealed HEPA H13 with heating" },
      { name: "Levoit Core 300S Bedroom Purifier", badge: "Best Value", rating: "9.5", priceEstimate: "£89.99", highlight: "QuietKEAP technology with 22dB whisper-quiet night mode" }
    ]
  },
  {
    id: "hearing-aids",
    slug: "best-hearing-aids",
    title: "Top 10 Best Hearing Aids & Amplifiers UK (2026)",
    shortName: "Digital Invisible Hearing Aids",
    categoryGroup: "Health & Medical",
    description: "Completely-in-Canal (CIC) and OTC digital hearing aids tested for speech clarity, howling suppression, and battery life.",
    longDescription: "Evaluated with certified UK audiologists. We measured multi-channel digital signal processing (DSP), active feedback and acoustic anti-howling cancellation, background noise reduction in crowded restaurants, and discreet cosmetic invisibility.",
    iconName: "Ear",
    itemCount: 10,
    updatedDate: "September 2026",
    testedCount: 12,
    labHours: 150,
    averageRating: "4.9",
    featured: false,
    searchTags: [
      "hearing aids",
      "invisible hearing aid",
      "cic hearing aid",
      "muuhu hearclear pro",
      "otc hearing aid",
      "digital hearing amplifier",
      "hearing device",
      "rechargeable hearing aid",
      "ear amplifier"
    ],
    keyFactors: ["Multi-Channel DSP Digital Speech Processing", "Active Anti-Howling Feedback Cancellation", "Discreet 2.0g Invisible In-Canal Design", "Magnetic Fast-Charging Case (150hr Runtime)"],
    topPicksPreview: [
      { name: "Muuhu HearClear Pro CIC Digital", badge: "Best Overall 2026", rating: "9.9", priceEstimate: "£149.00", highlight: "Ultra-invisible 2.0g CIC fit, HD battery display, 150h total runtime" },
      { name: "Boots Ceretone Core One Pro", badge: "Runner-Up", rating: "9.6", priceEstimate: "£389.99", highlight: "Advanced noise cancellation with dual-microphone beamforming" },
      { name: "Audicus Mini Series 2", badge: "Luxury Clinic Grade", rating: "9.5", priceEstimate: "£1,450.00", highlight: "Custom programmed by remote audiologists with Bluetooth" }
    ]
  }
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  const cleanSlug = slug.replace(/^top-10\//, "").replace(/^\//, "");
  return CATEGORIES.find((c) => c.slug === cleanSlug || c.id === cleanSlug);
}

export function searchCategories(query: string): CategoryData[] {
  if (!query || query.trim() === "") return CATEGORIES;
  const q = query.toLowerCase().trim();
  return CATEGORIES.filter((category) => {
    return (
      category.title.toLowerCase().includes(q) ||
      category.shortName.toLowerCase().includes(q) ||
      category.description.toLowerCase().includes(q) ||
      category.categoryGroup.toLowerCase().includes(q) ||
      category.searchTags.some((tag) => tag.toLowerCase().includes(q)) ||
      category.topPicksPreview.some((p) => p.name.toLowerCase().includes(q) || p.highlight.toLowerCase().includes(q))
    );
  });
}
