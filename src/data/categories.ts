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
    title: "Kitchen & Dining",
    image: "https://cdn.prod.website-files.com/5f7e8a87830b40158201fbd2/6731c96fc697748004828771_toasterovenpicturecompressed.png",
    links: [
      { name: "Top 10 Wireless Meat Thermometers", href: "/top-10/best-wireless-meat-thermometers", isLive: true },
      { name: "Smart Bluetooth Cooking Probes", href: "/top-10/best-wireless-meat-thermometers", isLive: true },
      { name: "WiFi Meat & Smoker Thermometers", href: "/top-10/best-wireless-meat-thermometers", isLive: true },
    ],
  },
  {
    title: "Personal Care & Dental",
    image: "https://m.media-amazon.com/images/I/51c0Wy9sXiL._SL250_.jpg",
    links: [
      { name: "Top 10 Cordless Water Flossers", href: "/top-10/best-cordless-water-flossers", isLive: true },
      { name: "Rechargeable Oral Irrigators", href: "/top-10/best-cordless-water-flossers", isLive: true },
      { name: "Portable Water Jet Flossers", href: "/top-10/best-cordless-water-flossers", isLive: true },
    ],
  },
  {
    title: "Wellness & Recovery",
    image: "https://m.media-amazon.com/images/I/41qZt+HtZxL._SL250_.jpg",
    links: [
      { name: "Top 10 Mini Massage Guns", href: "/top-10/best-mini-massage-guns", isLive: true },
      { name: "Pocket Percussion Massagers", href: "/top-10/best-mini-massage-guns", isLive: true },
      { name: "Deep Tissue Muscle Recovery Guns", href: "/top-10/best-mini-massage-guns", isLive: true },
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
