// src/database.js

// ================= TRACKING DATABASE =================
const shipmentsDB = {
  // ===================================================
  // ICH634LGE — Seoul → Frankfurt → Liège
  // ===================================================
  ICH634LGE: {
    id: "ICH634LGE",
    mode: "air",
    carrier: "Turkish Airlines Cargo",
    origin: "Seoul, South Korea (ICN)",
    destination: "Liège, Belgium (LGG)",

    // 🌍 MAP ROUTE
    route: {
      from: { lat: 37.4602, lng: 126.4407 }, // ICN
      to: { lat: 50.6374, lng: 5.4432 },     // LGG
    },

    // ⏸ PAUSED — FRANKFURT (FRA)
    paused: true,
    pausedAtPercent: 90,

    pausedStatus:
      "Customs Inspection in Progress (FRA)",

    pausedReason: [
      "Awaiting proof of funds verification and jewelry appraisal by customs authorities",
      "Warehouse Storage Fee for 2 Months - €485",
    ],  

    packageDetails: [
      "€45,000 Cash",
      "Louis Vuitton Luxury Bags (4)",
      "Gold Necklace",
      "Hanbok Traditional Wear",
      "Scandal Eau de Parfum",
    ],

    routeTimeline: {
      air: [
        "Package Received at Seoul Logistics Center",
        "Cleared by Korean Customs",
        "Departed Incheon Airport (ICN)",
        "In Air – En Route to Frankfurt",
        "Arrived at Frankfurt International Airport (FRA)",
        "Customs Inspection in Progress (FRA)",
        "Transferred to Liège Connection Flight",
        "Arrived at Liège Airport (LGG)",
        "Delivered",
      ],
    },

    images: [
      "/images/money.jpeg",
      "/images/lv-bags.jpg",
      "/images/necklace.jpg",
      "/images/hanbok.jpg",
      "/images/scandal.jpeg",
      "/images/image.jpg",
    ],

    address: "Rue de Grâce 12, 4460 Grâce-Hollogne, Belgium",
  },

  // ===================================================
  // ICN874DSM — Seoul → LAX → Des Moines
  // ===================================================
  ICN874DSM: {
    id: "ICN874DSM",
    mode: "air",
    carrier: "Delta Air Cargo",
    origin: "Seoul, South Korea (ICN)",
    destination: "Des Moines, Iowa (DSM)",

    // 🌍 MAP ROUTE
    route: {
      from: { lat: 37.4602, lng: 126.4407 }, // ICN
      to: { lat: 41.5340, lng: -93.6607 },   // DSM
    },

    // ⏸ PAUSED — LOS ANGELES (LAX)
    paused: true,
    pausedAtPercent: 83,

    pausedStatus:
      "Transferred to Domestic Connection, Preparing for Delivery",

    pausedReason:
      ["Aviation Clearance for Domestic Transport",
        "Broker and Port Handling Fee - $135"
      ],

    packageDetails: [
      "$6,000 in Cash",
      "Louis Vuitton Luxury Bags (4)",
      "Gold Necklace",
      "Hanbok Traditional Wear",
      "Letter Envelope",
    ],

    routeTimeline: {
      air: [
        "Package Received at Seoul Logistics Center",
        "Cleared by Korean Customs",
        "Departed Incheon Airport (ICN)",
        "In Air – En Route to Los Angeles (LAX)",
        "Arrived at Los Angeles International Airport (LAX)",
        "Aviation Clearance in Progress",
        "Transferred to Domestic Connection, Preparing for Delivery",
        "Logistics Departure",
        "Out for Delivery",
        "Delivered",
      ],
    },

    images: [
      "/images/lv-bags.jpg",
      "/images/necklace.jpg",
      "/images/hanbok.jpg",
      "/images/image.jpg",
    ],

    address: "2010 South F Street, Oskaloosa, Iowa 52577-9502, USA",
  },
};

// ================= DATA PROVIDER =================
export function getTrackingData(trackingId) {
  const item = shipmentsDB[trackingId];
  if (!item) return null;

  return {
    ...item,
    percent: item.paused ? item.pausedAtPercent : 100,
    currentStatus: item.paused ? item.pausedStatus : "Delivered",
    deliveryTimeLabel: item.paused ? "In Transit" : "Delivered",
    arrivingLabel: "Arriving shortly or delivered ✅",
  };
}

export { shipmentsDB };
