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
      { name: "Top 10 Massage Guns", href: "/top-10/best-mini-massage-guns", isLive: true },
      { name: "Compact and Full-Size Massagers", href: "/top-10/best-mini-massage-guns", isLive: true },
      { name: "Handheld Percussion Massagers", href: "/top-10/best-mini-massage-guns", isLive: true },
    ],
  },
];

export const CATEGORIES: CategoryData[] = [
  {
    "id": "wireless-meat-thermometers",
    "slug": "best-wireless-meat-thermometers",
    "title": "10 Wireless Meat Thermometer Options Compared for UK Buyers (2026)",
    "shortName": "Wireless Meat Thermometers",
    "categoryGroup": "Kitchen & Dining",
    "description": "A wireless thermometer can mean a cable-free probe or a wired sensor with a wireless controller. Those formats are not interchangeable. This guide sets out ten options and bundle alternatives to research, with attention to apps, probe counts and UK seller details. Numbered positions indicate reading order, not accuracy-test rankings.",
    "longDescription": "A wireless thermometer can mean a cable-free probe or a wired sensor with a wireless controller. Those formats are not interchangeable. This guide sets out ten options and bundle alternatives to research, with attention to apps, probe counts and UK seller details. Numbered positions indicate reading order, not accuracy-test rankings.",
    "iconName": "Flame",
    "itemCount": 10,
    "updatedDate": "30 September 2026",
    "featured": true,
    "searchTags": [
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
    "keyFactors": [
      "Probe format",
      "App and base",
      "Cooking limits",
      "Number of probes",
      "UK kit and seller"
    ],
    "topPicksPreview": [
      {
        "name": "CHEF iQ Smart Wireless Thermometer",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "CHEF iQ's Smart Thermometer family is now called iQ Sense by the manufacturer. The system combines a probe, hub and app. Compare which hub and probe generation is included, and check the kit's UK availability rather than treating every bundle as identical."
      },
      {
        "name": "Typhur Sync Dual Wireless Thermometer",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "Typhur Sync Dual is the two-probe option in the Sync family. A multi-probe setup can suit cooks who want separate readings for different foods. Check the base, supported app and local network requirements on the exact kit."
      },
      {
        "name": "ThermoMaven Wireless Thermometer",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "ThermoMaven offers several wireless models, including G1 and P2. Confirm the model on the seller's listing and compare its base display and phone requirements. Use the model-specific manual to check the operating limits."
      }
    ]
  },
  {
    "id": "cordless-water-flossers",
    "slug": "best-cordless-water-flossers",
    "title": "10 Water Flossers Compared for UK Buyers (2026)",
    "shortName": "Water Flossers",
    "categoryGroup": "Personal Care & Beauty",
    "description": "Start with the format you will actually use: a handheld flosser for portability, a home station for a fixed bathroom setup, or a combined brush and flosser. The list below explains what to check for ten options and includes countertop alternatives. The numbered order is not a clinical rating or a performance award.",
    "longDescription": "Start with the format you will actually use: a handheld flosser for portability, a home station for a fixed bathroom setup, or a combined brush and flosser. The list below explains what to check for ten options and includes countertop alternatives. The numbered order is not a clinical rating or a performance award.",
    "iconName": "Droplets",
    "itemCount": 10,
    "updatedDate": "30 September 2026",
    "featured": true,
    "searchTags": [
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
    "keyFactors": [
      "Pressure controls",
      "Tank and refill access",
      "Replacement tips",
      "Charging and travel",
      "Seller and returns"
    ],
    "topPicksPreview": [
      {
        "name": "COSLUS C20 Water Flosser",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "The C20 uses three preset modes and a 300ml tank, according to COSLUS. It is an option to compare if you prefer preset controls to a pressure dial. Check replacement-tip availability and the seller's exact bundle before choosing."
      },
      {
        "name": "COSLUS E40 Water Flosser",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "COSLUS lists the E40 with a 10-level pressure dial and a 300ml reservoir. The dial is a practical distinction from the C20's preset modes. Compare grip, refill access and the included tips; published specifications are not our own test measurements."
      },
      {
        "name": "usmile C30 Water Flosser",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "When researching the usmile C30, check the exact model code and charging accessories on the UK seller's listing. For a portable unit, access to the refill opening and replacement nozzles matters as much as the number of modes."
      }
    ]
  },
  {
    "id": "mini-massage-guns",
    "slug": "best-mini-massage-guns",
    "title": "10 Massage Guns Compared for UK Buyers: Compact and Full-Size Options (2026)",
    "shortName": "Massage Guns",
    "categoryGroup": "Wellness & Recovery",
    "description": "Choose a massage gun by its format, handling, controls and actual kit contents. This guide includes compact, full-size and bundle alternatives so those differences are clear. It does not make a medical recommendation or claim clinical testing. Numbered positions are guide order, not measured performance scores.",
    "longDescription": "Choose a massage gun by its format, handling, controls and actual kit contents. This guide includes compact, full-size and bundle alternatives so those differences are clear. It does not make a medical recommendation or claim clinical testing. Numbered positions are guide order, not measured performance scores.",
    "iconName": "Activity",
    "itemCount": 10,
    "updatedDate": "30 September 2026",
    "featured": true,
    "searchTags": [
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
    "keyFactors": [
      "Compact or full-size",
      "Controls and grip",
      "Attachments",
      "Charging and maintenance",
      "Instructions and seller terms"
    ],
    "topPicksPreview": [
      {
        "name": "RENPHO Active ThermaCool 2 Massage Gun",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "RENPHO lists Active ThermaCool 2 in its manuals catalogue. Compare the exact generation and included attachment kit before choosing. We do not make a tested pain-relief, clinical recovery or noise-level claim for this listing."
      },
      {
        "name": "RENPHO ThermaCool Bundle Options",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "ThermaCool bundles may differ in attachments and charging accessories. Treat these as kit alternatives within the RENPHO family, not proof of a separate superior model. Confirm any stand or thermal attachment on the seller's actual contents list."
      },
      {
        "name": "Bob and Brad C2 Massage Gun",
        "badge": "Comparison option",
        "rating": "",
        "priceEstimate": "Check UK seller",
        "highlight": "Bob and Brad describe C2 as a regular-size option compared with their Q2 mini family. It is a format to compare if handling matters more than pocket size. Check the version and attachment kit; the guide does not imply a physiotherapist's endorsement."
      }
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
