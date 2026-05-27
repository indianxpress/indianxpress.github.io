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
        "Broker and Port Handling Fee - $193.35"
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

  // ===================================================
  // ICN688AUS — Seoul → Vienna → Salzburg
  // ===================================================
  ICN688AUS: {
    id: "ICN688AUS",
    mode: "air",
    carrier: "Korean Air Cargo",
    origin: "Seoul, South Korea (ICN)",
    destination: "Salzburg, Austria",

    route: {
      from: { lat: 37.4602, lng: 126.4407 }, // ICN
      to: { lat: 47.8095, lng: 13.0550 },    // Salzburg
    },

    packageDetails: [
      "Luxurious 18K white gold diamond necklace",
      "Gold card membership",
    ],

    routeTimeline: {
      air: [
        "Shipment Received at Incheon Logistics Center",
        "Cleared by Korean Customs",
        "Departed Incheon Airport (ICN)",
        "In Air - En Route to Vienna International Airport (VIE)",
        "Arrived at Vienna International Airport (VIE)",
        "Customs Clearance Completed in Austria",
        "Transferred to Salzburg Regional Dispatch",
        "Out for Delivery in Salzburg",
        "Delivered",
      ],
    },

    images: [
      "/images/necklace.jpg",
    ],

    address: "Triebenbachstrasse 26/1, 5020 Salzburg, Austria",
    shipDate: "2026-05-27",
    estimatedDeliveryDate: "2026-06-10",
    stepDurationsDays: [2, 2, 1, 1, 2, 1, 1, 0],
    manualPauseStep: "Arrived at Vienna International Airport (VIE)",
    manualResumeDate: null,
    manualPauseReason: [
      "Shipment is on technical hold at Vienna International Airport (VIE)",
      "Tracking will resume after manual release is approved",
    ],
  },
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function formatDateLabel(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parseLocalDate(dateString));
}

function formatDateFromDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function addDays(date, days) {
  return new Date(date.getTime() + days * MS_PER_DAY);
}

function getCurrentStepIndex(stepStarts, now) {
  let index = 0;

  for (let i = 0; i < stepStarts.length; i += 1) {
    if (now >= stepStarts[i]) {
      index = i;
    } else {
      break;
    }
  }

  return index;
}

function getTimedTrackingState(item) {
  const steps = item.routeTimeline?.[item.mode];
  if (!item.shipDate || !item.estimatedDeliveryDate || !Array.isArray(steps)) {
    return null;
  }

  const shipDate = parseLocalDate(item.shipDate);
  const now = new Date();
  const durations = item.stepDurationsDays ?? [];
  const pauseIndex = item.manualPauseStep
    ? steps.indexOf(item.manualPauseStep)
    : -1;
  const resumeDate = item.manualResumeDate
    ? parseLocalDate(item.manualResumeDate)
    : null;

  if (now < shipDate) {
    return {
      percent: 3,
      currentStatus: steps[0],
      deliveryTimeLabel: `Begins ${formatDateLabel(item.shipDate)}`,
      arrivingLabel: `Estimated delivery ${formatDateLabel(item.estimatedDeliveryDate)}`,
    };
  }

  const stepStarts = [shipDate];
  for (let i = 1; i < steps.length; i += 1) {
    if (i === pauseIndex + 1) {
      break;
    }

    stepStarts[i] = addDays(
      stepStarts[i - 1],
      durations[i - 1] ?? 1
    );
  }

  if (
    pauseIndex >= 0 &&
    now >= stepStarts[pauseIndex] &&
    (!resumeDate || now < resumeDate)
  ) {
    return {
      percent: Math.round((pauseIndex / (steps.length - 1)) * 100),
      currentStatus: steps[pauseIndex],
      deliveryTimeLabel: "Paused at Vienna for manual release",
      arrivingLabel: resumeDate
        ? `Scheduled to resume ${formatDateLabel(item.manualResumeDate)}`
        : "Awaiting manual resume to continue to Salzburg",
      pausedReason: item.manualPauseReason,
    };
  }

  if (pauseIndex >= 0 && resumeDate) {
    stepStarts[pauseIndex + 1] = resumeDate;

    for (let i = pauseIndex + 2; i < steps.length; i += 1) {
      stepStarts[i] = addDays(
        stepStarts[i - 1],
        durations[i - 1] ?? 1
      );
    }
  } else {
    for (let i = stepStarts.length; i < steps.length; i += 1) {
      stepStarts[i] = addDays(
        stepStarts[i - 1],
        durations[i - 1] ?? 1
      );
    }
  }

  const deliveredAt = stepStarts[steps.length - 1];
  if (now >= deliveredAt) {
    return {
      percent: 100,
      currentStatus: "Delivered",
      deliveryTimeLabel: "Delivered",
      arrivingLabel: `Delivered ${formatDateFromDate(deliveredAt)}`,
    };
  }

  const currentIndex = getCurrentStepIndex(stepStarts, now);
  const percent = clamp(
    Math.round((currentIndex / (steps.length - 1)) * 100),
    8,
    99
  );
  const etaDate = deliveredAt;

  return {
    percent,
    currentStatus: steps[currentIndex],
    deliveryTimeLabel: `Estimated delivery ${formatDateFromDate(etaDate)}`,
    arrivingLabel: "Shipment is moving along the active route",
  };
}

// ================= DATA PROVIDER =================
export function getTrackingData(trackingId) {
  const item = shipmentsDB[trackingId];
  if (!item) return null;

  const timedState = getTimedTrackingState(item);
  if (timedState) {
    return {
      ...item,
      ...timedState,
    };
  }

  return {
    ...item,
    percent: item.paused ? item.pausedAtPercent : 100,
    currentStatus: item.paused ? item.pausedStatus : "Delivered",
    deliveryTimeLabel: item.paused ? "In Transit" : "Delivered",
    arrivingLabel: "Arriving shortly or delivered ✅",
  };
}

export { shipmentsDB };
