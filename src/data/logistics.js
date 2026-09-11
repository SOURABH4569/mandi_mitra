// Mock logistics/storage data — addresses "logistics, storage options" from problem statement.
// Replace with real warehouse/transport-union APIs later.

export const logisticsOptions = [
  {
    name: "UPSWC Warehouse, Raebareli",
    type: "Sarkari Godam (Dry Storage)",
    distanceHint: "5 km",
    capacity: "2,000 quintal khaali",
    rate: "₹6/quintal/mahina",
    goodFor: ["wheat", "paddy", "gram"],
  },
  {
    name: "Raebareli Cold Storage Co-op",
    type: "Cold Storage",
    distanceHint: "8 km",
    capacity: "1,200 quintal khaali",
    rate: "₹18/quintal/mahina",
    goodFor: ["potato", "onion"],
  },
  {
    name: "Kisan Transport Union",
    type: "Transport (Truck/Tempo/Tractor-trolley)",
    distanceHint: "Gaanv tak available",
    capacity: "1–10 tonne tak vehicles",
    rate: "₹2–3/km/quintal",
    goodFor: ["wheat", "mustard", "potato", "onion", "paddy", "gram"],
  },
];

export function getLogisticsForCrop(crop) {
  return logisticsOptions.filter((l) => l.goodFor.includes(crop));
}
