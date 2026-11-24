import { media } from "./media";

export type Solution = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  body: string;
  benefits: string[];
  audience: string[];
};

export const solutions: Solution[] = [
  {
    slug: "precision-farming",
    title: "Precision farming",
    short:
      "We use data-driven insights and smart technology to help farmers monitor soil health.",
    image: media.precisionFarming,
    intro:
      "Precision farming is at the heart of the agricultural transformation we're driving. By combining technology, data, and deep agronomic insight, we help farmers manage their fields at a micro level, making every seed, drop of water, and hour of labor more effective than ever before.",
    body:
      "Our precision farming solution empowers growers to monitor, plan, and act with pinpoint accuracy, leading to improved productivity, resource efficiency, and long-term sustainability.",
    benefits: [
      "Reduce input costs through targeted application",
      "Improve yields by addressing crop needs at the right time, in the right place",
      "Save water and energy with optimized irrigation and fertilization",
      "Minimize environmental impact through responsible resource management",
      "Increase profitability and long-term resilience",
    ],
    audience: [
      "Commercial farms looking to scale up sustainably",
      "Smallholder farmers ready to adopt smarter tools",
      "Agri-cooperatives seeking better coordination and insights",
      "Organizations aiming for data-backed agricultural transformation",
    ],
  },
  {
    slug: "sustainable-irrigation",
    title: "Sustainable irrigation",
    short:
      "Our advanced irrigation systems reduce water waste and support efficient crop hydration.",
    image: media.sustainableIrrigation,
    intro:
      "Water is the single most contested input in modern agriculture. Our irrigation programmes pair soil-moisture sensing with drip and micro-sprinkler design so that every litre applied reaches the root zone rather than the atmosphere.",
    body:
      "We survey, design, and commission systems that fit the land as it is, then train the people who run them, so the savings hold up long after installation.",
    benefits: [
      "Cut water use by up to 40% against flood irrigation",
      "Stabilise yields through consistent root-zone moisture",
      "Lower pumping energy and running costs",
      "Reduce salinity build-up and nutrient run-off",
      "Qualify for water-stewardship certification",
    ],
    audience: [
      "Orchards and plantations on fixed water allocations",
      "Farms in water-stressed or monsoon-dependent districts",
      "Cooperatives modernising shared irrigation infrastructure",
      "Buyers requiring verified water-stewardship practice",
    ],
  },
  {
    slug: "supply-chain-support",
    title: "Supply chain support",
    short:
      "Smarter post-harvest logistics and digital tracking systems for fresher, better-quality products.",
    image: media.supplyChain,
    intro:
      "Most quality loss happens after harvest, not before it. We build the cold chain, handling protocol, and digital traceability that carry produce from field to port without losing grade.",
    body:
      "From pack-house layout to container booking and documentation, we operate the unglamorous middle of the journey so what arrives matches what was picked.",
    benefits: [
      "Reduce post-harvest loss through controlled handling",
      "Full batch-level traceability from field to buyer",
      "Faster, better-documented customs clearance",
      "Consistent grade and shelf life on arrival",
      "Live visibility of shipments in transit",
    ],
    audience: [
      "Exporters shipping perishable produce",
      "Importers and wholesalers needing reliable supply",
      "Supermarket chains with fixed quality specifications",
      "Producers moving from domestic to export markets",
    ],
  },
  {
    slug: "climate-resilient-program",
    title: "Climate-Resilient program",
    short:
      "Our team works closely with clients to implement scalable solutions that improve resilience and long-term productivity.",
    image: media.fieldWide,
    intro:
      "Growing seasons are becoming less predictable. Our climate-resilience programme helps farms absorb that volatility instead of being defined by it.",
    body:
      "We combine varietal selection, soil-carbon building, water buffering, and staggered planting calendars into a plan matched to a specific piece of land and its risk profile.",
    benefits: [
      "Protect yields against heat, drought, and unseasonal rain",
      "Build soil organic matter and water-holding capacity",
      "Diversify cropping to spread seasonal risk",
      "Access climate finance and resilience-linked premiums",
      "Plan with district-level climate projections",
    ],
    audience: [
      "Farms exposed to increasing weather volatility",
      "Long-horizon growers such as orchards and plantations",
      "Development programmes and agri-cooperatives",
      "Buyers securing supply continuity",
    ],
  },
  {
    slug: "technology-integration",
    title: "Technology integration",
    short:
      "We connect sensing, planning, and reporting tools into a single view of the farm.",
    image: media.plants,
    intro:
      "Farms rarely lack data, they lack one place to read it. We integrate the sensors, imagery, and record-keeping already in use into a single operating picture.",
    body:
      "The result is a working system your team actually opens: field-level dashboards, alerting that respects the season, and reporting that satisfies buyers and auditors without duplicate entry.",
    benefits: [
      "One dashboard across fields, inputs, and shipments",
      "Automated compliance and buyer reporting",
      "Early warning on irrigation, pest, and disease risk",
      "Fewer manual records and less duplicated effort",
      "Decisions based on current, shared numbers",
    ],
    audience: [
      "Multi-site operations needing consistent reporting",
      "Farms already running sensors without a unified view",
      "Cooperatives aggregating data across members",
      "Exporters with audit and traceability obligations",
    ],
  },
  {
    slug: "organic-practices",
    title: "Organic practices",
    short:
      "Certification-ready organic systems built on soil health rather than substitution.",
    image: media.organicPractices,
    intro:
      "Organic conversion fails when it is treated as swapping one input for another. We rebuild the system underneath, soil biology, rotation, and pest ecology, so the farm holds its yield through transition.",
    body:
      "We guide growers through the full conversion window, including the record-keeping and inspection cycles that certification depends on.",
    benefits: [
      "Structured conversion plan across the transition period",
      "Soil biology and rotation designed for your crops",
      "Non-chemical pest and disease strategy",
      "Certification documentation prepared and maintained",
      "Access to organic price premiums and buyers",
    ],
    audience: [
      "Conventional farms planning organic conversion",
      "Certified growers wanting stronger agronomy",
      "Producers targeting organic export markets",
      "Cooperatives pursuing group certification",
    ],
  },
];

export const stats = [
  {
    value: "98%",
    label: "On-time delivery rate",
    body: "Efficient distribution across regions, supporting supply chains with reliability and precision.",
  },
  {
    value: "15",
    label: "Countries reached",
    body: "Our agricultural solutions are trusted by partners and farmers in more than 15 countries worldwide.",
  },
  {
    value: "500k+",
    label: "Acres cultivated sustainably",
    body: "We promote responsible land use with eco-friendly practices across half a million acres of farmland.",
  },
];

export const values = [
  "Sustainable",
  "Innovative",
  "Global",
  "Reliable",
  "Efficient",
  "Impactful",
  "Adaptive",
  "Collaborative",
  "Visionary",
];

export const team = [
  { name: "James Der Linden", role: "Founder & CEO", image: media.team[0] },
  { name: "Amara Singh", role: "Head of Agronomy", image: media.team[1] },
  { name: "Tobias Lund", role: "Director of Operations", image: media.team[2] },
  { name: "Priya Nair", role: "Head of Sustainability", image: media.team[3] },
  { name: "Marcus Hale", role: "Export & Logistics Lead", image: media.team[4] },
  { name: "Elena Rossi", role: "Quality Assurance Lead", image: media.team[5] },
  { name: "Kwame Mensah", role: "Partnerships Manager", image: media.team[6] },
  { name: "Hannah Weber", role: "Data & Technology Lead", image: media.team[7] },
];

export const faqs = [
  {
    q: "What regions do you operate in?",
    a: "We work with growers across India and ship to importers, wholesalers, and supermarket chains in more than 15 countries, with established lanes into the Gulf, the UK, Europe, Singapore, and North America.",
  },
  {
    q: "Do you work with smallholder farms?",
    a: "Yes. A large share of our supply base is smallholder land, aggregated through cooperatives. Our programmes are designed to work at that scale rather than only on large commercial estates.",
  },
  {
    q: "How long does an organic conversion take?",
    a: "Certification bodies generally require a conversion period of three years. We support the full window, agronomy, record-keeping, and inspection cycles, so the farm holds its yield through the transition.",
  },
  {
    q: "Can you handle export documentation?",
    a: "We manage phytosanitary certification, certificates of origin, customs paperwork, and buyer-specific compliance documents as part of our supply chain support engagement.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most begin with a field assessment and a written plan covering agronomy, water, and post-harvest handling. Implementation follows the cropping calendar, with review points each season.",
  },
  {
    q: "How is pricing structured?",
    a: "Programmes are priced per hectare or per shipment depending on the service. We quote bespoke scopes on request.",
  },
];
