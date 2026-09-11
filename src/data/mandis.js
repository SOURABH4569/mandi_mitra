// Mock mandi dataset around Raebareli district, UP.
// price = current modal price (₹/quintal); trend = last 7 days modal price.
// 🔁 REPLACE THIS FILE's export with a real fetch() call to Agmarknet/eNAM API later.
// Keep the same shape { name, lat, lon, price, arrival, trend } so nothing else breaks.

export const farmerLocation = { lat: 26.2299, lon: 81.2334, name: "Raebareli" };

export const cropMeta = {
  wheat:   { label: "Gehun",  icon: "🌾" },
  mustard: { label: "Sarson", icon: "🟡" },
  potato:  { label: "Aloo",   icon: "🥔" },
  onion:   { label: "Pyaaz",  icon: "🧅" },
  paddy:   { label: "Dhaan",  icon: "🌾" },
  gram:    { label: "Chana",  icon: "🫘" },
};

export const mandis = [
  {
    name: "Raebareli Mandi (Dalmau Road)",
    lat: 26.2361, lon: 81.2445,
    price: 2180, arrival: "420 quintal/din", arrivalVolume: 420,
    trend: [2110, 2125, 2140, 2150, 2160, 2170, 2180],
    // trend: [100, 200, 300, 400, 1000, 1500, 2000],
    // trend: [1000, 800, 720, 600, 650, 500, 550],
  },
  {
    name: "Lalganj Mandi",
    lat: 26.0946, lon: 81.1889,
    price: 2195, arrival: "180 quintal/din", arrivalVolume: 180,
    trend: [2230, 2225, 2215, 2210, 2205, 2200, 2195],
  },
  {
    name: "Unchahar Mandi",
    lat: 25.9006, lon: 81.2939,
    price: 2230, arrival: "260 quintal/din", arrivalVolume: 260,
    trend: [2160, 2175, 2185, 2195, 2205, 2215, 2230],
  },
  {
    name: "Jais Mandi (Amethi)",
    lat: 26.2664, lon: 81.5432,
    price: 2205, arrival: "310 quintal/din", arrivalVolume: 310,
    trend: [2190, 2195, 2192, 2198, 2200, 2202, 2205],
  },
  {
    name: "Fatehpur Mandi",
    lat: 25.9307, lon: 80.8134,
    price: 2160, arrival: "150 quintal/din", arrivalVolume: 150,
    trend: [2200, 2190, 2180, 2175, 2168, 2163, 2160],
  },
  {
    name: "Amethi Mandi",
    lat: 26.1523, lon: 81.8043,
    price: 2250, arrival: "500 quintal/din", arrivalVolume: 500,
    trend: [2145, 2160, 2178, 2195, 2215, 2232, 2250],
  },
];
