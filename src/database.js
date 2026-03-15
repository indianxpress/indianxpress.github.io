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
    route: [
      [126.4407, 37.4602], // Incheon Airport ICN
      [8.5706, 50.0333],   // Frankfurt Airport FRA
      [5.4432, 50.6374]    // Liège Airport LGG
    ],

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
    route: [
      [126.4407, 37.4602], // ICN
      [-118.4085, 33.9416], // Los Angeles LAX
      [-93.6607, 41.5340]   // Des Moines DSM
    ],

    // ⏸ PAUSED — LOS ANGELES (LAX)
    paused: true,
    pausedAtPercent: 83,

    pausedStatus:
      "Transferred to Domestic Connection, Preparing for Delivery",

    pausedReason:
      ["Aviation Clearance for Domestic Transport",
        "Broker and Port Handling Fee - cleared ✅ ",
        "Value Added Tax (VAT) Cash & Jewelries - $584",
        "$470 paid, $114 pending"
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

  ICN912TSV: {
    id: "ICN912TSV",
    mode: "air",
    carrier: "Turkish Airlines Cargo",
    origin: "Seoul, South Korea (ICN)",
    destination: "Tisovec, Slovak Republic",

    route: [
      [126.4407, 37.4602], // ICN
      [8.5706, 50.0333],   // Frankfurt FRA
      [16.5697, 48.1103],  // Vienna VIE
      [19.9436, 48.6776]   // Tisovec
    ],

    paused: true,
    pausedAtPercent: 55,

    pausedStatus: "Customs Inspection in Progress (FRA)",

    pausedReason: [
      "EU customs documentation verification",
      "Transit clearance required before Vienna connection",
    ],

    packageDetails: [
      "€45,000 Cash",
      "Louis Vuitton Luxury Bags (4)",
      "Gold Necklace",
      "Hanbok Traditional Wear",
      "Scandal Eau de Parfum",
    ],

    trackingHistory: [
      {
        date: "2026-03-14 09:15",
        location: "Seoul Logistics Center",
        status: "Package Received at Seoul Logistics Center",
      },
      {
        date: "2026-03-15 17:40",
        location: "Seoul, South Korea",
        status: "Export Cleared by Korean Customs",
      },
      {
        date: "2026-03-16 07:20",
        location: "Incheon International Airport (ICN)",
        status: "Departed Incheon International Airport (ICN)",
      },
      {
        date: "2026-03-17 01:10",
        location: "In Air",
        status: "In Air – En Route to Frankfurt",
      },
      {
        date: "2026-03-19 11:45",
        location: "Frankfurt International Airport (FRA)",
        status: "Arrived at Frankfurt International Airport (FRA)",
      },
      {
        date: "2026-03-19 14:10",
        location: "Frankfurt International Airport (FRA)",
        status: "Customs Inspection in Progress (FRA)",
      }
    ],

    routeTimeline: {
      air: [
        "Package Received at Seoul Logistics Center",
        "Export Cleared by Korean Customs",
        "Departed Incheon International Airport (ICN)",
        "In Air – En Route to Frankfurt",
        "Arrived at Frankfurt International Airport (FRA)",
        "Shipment Processing at Frankfurt Cargo Hub (FRA)",
        "Departed Frankfurt for Vienna",
        "Arrived at Vienna International Airport (VIE)",
        "Departed Vienna via Ground Transport",
        "Out for Delivery – Tisovec",
        "Delivered in Tisovec, Slovak Republic",
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

    address: "Ľudovíta Štúra 1136/11, 980 61 Tisovec, Slovak Republic",
  },
};
// ================= DATA PROVIDER =================
export function getTrackingData(trackingId) {

  const item = shipmentsDB[trackingId];
  if (!item) return null;

  if (!item.trackingHistory) {
    return {
      ...item,
      percent: item.paused ? item.pausedAtPercent : 100,
      currentStatus: item.paused ? item.pausedStatus : "Delivered",
      deliveryTimeLabel: item.paused ? "In Transit" : "Delivered",
      arrivingLabel: "Arriving shortly or delivered ✅",
    };
  }

  const now = new Date();

  let currentStatus = item.trackingHistory[0].status;
  let percent = 5;

  item.trackingHistory.forEach((event, index) => {

    const eventDate = new Date(event.date);

    if (now >= eventDate) {
      currentStatus = event.status;
      percent = Math.min((index + 1) * 12, item.pausedAtPercent);
    }

  });

  if (item.paused && percent >= item.pausedAtPercent) {
    currentStatus = item.pausedStatus;
    percent = item.pausedAtPercent;
  }

  return {
    ...item,
    percent,
    currentStatus,
    deliveryTimeLabel: "In Transit",
    arrivingLabel: "Shipment moving through network",
  };

}

export { shipmentsDB };
