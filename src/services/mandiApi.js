// Live mandi price integration — data.gov.in "Agmarknet" daily price dataset.
//
// HOW TO GO LIVE:
// 1. Register free at https://data.gov.in and generate an API key from your profile page.
// 2. Copy .env.example to .env and paste your key into VITE_AGMARKNET_API_KEY.
// 3. Restart `npm run dev`. If the key is missing or the request fails, the app
//    automatically falls back to the mock data in data/mandis.js — the UI never breaks.
//
// LIMITATION (be upfront about this in the demo): the public daily-price endpoint
// gives one snapshot per market (min/modal/max price for the day), not a 7-day
// history or numeric arrival-quantity. So live rows show a flat trend line and a
// "Live" badge instead of a full 7-day sparkline until you build a small daily
// snapshot store (e.g. save today's fetch to localStorage/DB and accumulate over time).

const RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070"; // Agmarknet daily prices, data.gov.in
const API_KEY = import.meta.env.VITE_AGMARKNET_API_KEY;

// Small known-coordinates lookup so markers can be placed on the map instantly
// without waiting on a geocoding call for the mandis we already know about.
const KNOWN_MANDI_COORDS = {
  raebareli: { lat: 26.2361, lon: 81.2445 },
  lalganj: { lat: 26.0946, lon: 81.1889 },
  unchahar: { lat: 25.9006, lon: 81.2939 },
  jais: { lat: 26.2664, lon: 81.5432 },
  fatehpur: { lat: 25.9307, lon: 80.8134 },
  amethi: { lat: 26.1523, lon: 81.8043 },
  lucknow: { lat: 26.8467, lon: 80.9462 },
  unnao: { lat: 26.5464, lon: 80.4879 },
};

async function geocodeMandi(marketName) {
  const key = Object.keys(KNOWN_MANDI_COORDS).find((k) =>
    marketName.toLowerCase().includes(k)
  );
  if (key) return KNOWN_MANDI_COORDS[key];

  // Best-effort fallback via free OpenStreetMap geocoding (no key needed).
  // Some browsers/networks may block this due to CORS — that's fine, we just skip the mandi.
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
        marketName + ", Uttar Pradesh, India"
      )}`
    );
    const data = await res.json();
    if (data && data[0]) return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } catch (e) {
    // ignore — mandi will be dropped from the map-able list
  }
  return null;
}

export async function fetchLiveMandiPrices({ state = "Uttar Pradesh", commodity = "Wheat" } = {}) {
  if (!API_KEY) {
    const err = new Error("NO_API_KEY");
    err.code = "NO_API_KEY";
    throw err;
  }

  const params = new URLSearchParams({
    "api-key": API_KEY,
    format: "json",
    limit: "20",
    "filters[state]": state,
    "filters[commodity]": commodity,
  });

  const res = await fetch(`https://api.data.gov.in/resource/${RESOURCE_ID}?${params.toString()}`);
  if (!res.ok) {
    const err = new Error("API_ERROR");
    err.code = "API_ERROR";
    throw err;
  }
  const json = await res.json();
  const records = json.records || [];
  if (!records.length) {
    const err = new Error("NO_RECORDS");
    err.code = "NO_RECORDS";
    throw err;
  }

  const withCoords = await Promise.all(
    records.map(async (r) => {
      const coords = await geocodeMandi(r.market || "");
      if (!coords) return null;
      const modal = parseFloat(r.modal_price) || 0;
      const min = parseFloat(r.min_price) || modal;
      const max = parseFloat(r.max_price) || modal;
      return {
        name: `${r.market} Mandi`,
        lat: coords.lat,
        lon: coords.lon,
        price: modal,
        arrival: r.arrival_date || "Aaj",
        arrivalVolume: null, // not provided by this endpoint
        trend: [min, min, modal, modal, modal, max, max], // single-day snapshot, flattish line
        isLive: true,
      };
    })
  );

  const clean = withCoords.filter(Boolean);
  if (!clean.length) {
    const err = new Error("NO_GEOCODABLE_RECORDS");
    err.code = "NO_GEOCODABLE_RECORDS";
    throw err;
  }
  return clean;
}
