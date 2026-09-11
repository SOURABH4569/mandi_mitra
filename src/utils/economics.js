export const TRANSPORT_RATE_PER_KM_PER_QUINTAL = 2.5; // ₹
export const COMMISSION_PCT = 0.02; // arhatiya commission
export const LABOUR_PER_QUINTAL = 15; // ₹ loading/unloading

export function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function computeEconomics(farmerLocation, mandi, qty) {
  const distance = haversineKm(
    farmerLocation.lat,
    farmerLocation.lon,
    mandi.lat,
    mandi.lon
  );

  const transportCostPerQuintal =
    distance * TRANSPORT_RATE_PER_KM_PER_QUINTAL;

  const commissionPerQuintal =
    mandi.price * COMMISSION_PCT;

  const netPricePerQuintal =
    mandi.price -
    transportCostPerQuintal -
    commissionPerQuintal -
    LABOUR_PER_QUINTAL;

  return {
    distance,
    transportCostPerQuintal,
    commissionPerQuintal,
    labourPerQuintal: LABOUR_PER_QUINTAL,
    netPricePerQuintal,
    netTotal: netPricePerQuintal * qty,
    grossTotal: mandi.price * qty,
  };
}

// Supply-demand heuristic: combines price trend direction with relative arrival volume.
// Real system would use actual daily arrival-quantity data; this mock uses the same
// signals the problem statement calls out (arrival volumes + price trend).
export function getDemandSupplyStatus(mandi, avgArrivalVolume) {
  const rising =
    mandi.trend[mandi.trend.length - 1] > mandi.trend[0];

  const arrivalVol =
    mandi.arrivalVolume ?? avgArrivalVolume;

  const highArrival =
    arrivalVol > avgArrivalVolume * 1.15;

  const lowArrival =
    arrivalVol < avgArrivalVolume * 0.85;

  if (rising && lowArrival) {
    return {
      labelKey: "demand.highDemandLowArrival",
      tone: "good",
    };
  }

  if (!rising && highArrival) {
    return {
      labelKey: "demand.highArrivalPressure",
      tone: "bad",
    };
  }

  if (rising && highArrival) {
    return {
      labelKey: "demand.strongDemand",
      tone: "neutral-good",
    };
  }

  if (!rising && lowArrival) {
    return {
      labelKey: "demand.lowArrivalStable",
      tone: "neutral",
    };
  }

  return {
    labelKey: "demand.balancedMarket",
    tone: "neutral",
  };
}

export function getAverageArrivalVolume(mandis) {
  const valid = mandis.filter(
    (m) => typeof m.arrivalVolume === "number"
  );

  if (!valid.length) return 0;

  return (
    valid.reduce(
      (s, m) => s + m.arrivalVolume,
      0
    ) / valid.length
  );
}

export function getRecommendation(mandis) {
  const avgStart =
    mandis.reduce(
      (s, m) => s + m.trend[0],
      0
    ) / mandis.length;

  const avgEnd =
    mandis.reduce(
      (s, m) =>
        s + m.trend[m.trend.length - 1],
      0
    ) / mandis.length;

  const pctChange =
    ((avgEnd - avgStart) / avgStart) * 100;

  if (pctChange > 1.5) {
    return {
      titleKey: "rec.risingTitle",
      textKey: "rec.risingText",
      vars: {
        pct: pctChange.toFixed(1),
      },
    };
  }

  if (pctChange < -1.5) {
    return {
      titleKey: "rec.fallingTitle",
      textKey: "rec.fallingText",
      vars: {
        pct: Math.abs(pctChange).toFixed(1),
      },
    };
  }

  return {
    titleKey: "rec.stableTitle",
    textKey: "rec.stableText",
    vars: {},
  };
}