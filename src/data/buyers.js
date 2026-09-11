// Mock buyer/demand data — addresses "buyer demand, quality specs, verified buyer credentials"
// from the problem statement. Replace with real buyer/CRM data source later.

export const buyers = [
  {
    id: "b1",
    name: "ITC Ltd. — Wheat Procurement",
    type: "Processor",
    verified: true,
    trustScore: 92,
    paymentReliability: "Excellent · avg 7 din mein payment",
    location: "Lucknow",
    distanceHint: "~75 km",
    demand: { crop: "wheat", quantity: "500–800 quintal/hafta", qualitySpec: "FAQ grade · nami <12% · bahari tatva <2%" },
  },
  {
    id: "b2",
    name: "Adani Wilmar — Bulk Sourcing",
    type: "Processor",
    verified: true,
    trustScore: 88,
    paymentReliability: "Achha · avg 10 din mein payment",
    location: "Kanpur",
    distanceHint: "~110 km",
    demand: { crop: "mustard", quantity: "300–500 quintal/hafta", qualitySpec: "Oil content >40% · nami <8%" },
  },
  {
    id: "b3",
    name: "Raebareli Kisan Producer Co. (FPO)",
    type: "FPO Aggregator",
    verified: true,
    trustScore: 95,
    paymentReliability: "Excellent · turant advance available",
    location: "Raebareli",
    distanceHint: "~4 km",
    demand: { crop: "wheat", quantity: "Koi bhi matra · pooling ke liye", qualitySpec: "Standard grade, sorting FPO khud karegi" },
  },
  {
    id: "b4",
    name: "HyperPure (Zomato) — Fresh Produce",
    type: "Institutional Buyer",
    verified: true,
    trustScore: 84,
    paymentReliability: "Theek-thaak · avg 14 din mein payment",
    location: "Lucknow",
    distanceHint: "~75 km",
    demand: { crop: "potato", quantity: "200–400 quintal/hafta", qualitySpec: "Uniform size 50-80mm · no green spots" },
  },
];

export function getBuyersForCrop(crop) {
  return buyers.filter((b) => b.demand.crop === crop);
}
