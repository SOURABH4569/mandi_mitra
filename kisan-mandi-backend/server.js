// Kisan Mandi Sahayak — Backend
// Simple Express API with a JSON-file database (data/db.json). No real DB
// setup needed for the hackathon demo, but the read/write pattern is isolated
// in readDB()/writeDB() so swapping in Postgres/Mongo later only touches this
// one file.

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const buyers = require("./data/buyers");

const app = express();
app.use(cors({
  origin(origin, callback) {
    const isLocalDevelopment = !origin || /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
    const isProduction = origin === "https://mandi-mitra-umber.vercel.app";

    callback(null, isLocalDevelopment || isProduction);
  }
}));
app.use(express.json());

const DB_PATH = path.join(__dirname, "data", "db.json");

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = { lots: [], offers: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

const BASE_PRICE = { wheat: 2180, mustard: 5200, potato: 1200, onion: 1800, paddy: 2050, gram: 4800 };
const GRADE_MULTIPLIER = { A: 1.05, B: 1.0, C: 0.92 };

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.get("/api/buyers", (req, res) => {
  res.json(buyers);
});

app.get("/api/lots", (req, res) => {
  const db = readDB();
  res.json(db.lots);
});

app.post("/api/lots", (req, res) => {
  const { crop, quantity, harvestDate, grade, score, photoUrl, referencePrice } = req.body;
  if (!crop || !quantity || !harvestDate || !grade) {
    return res.status(400).json({ error: "crop, quantity, harvestDate, grade zaroori hain" });
  }

  const db = readDB();
  const lot = {
    id: "lot_" + Date.now(),
    crop,
    quantity,
    harvestDate,
    grade,
    score: score ?? null,
    photoUrl: photoUrl ?? null,
    status: "Buyers ko dikhaya ja raha hai",
    createdAt: new Date().toISOString(),
  };
  db.lots.unshift(lot);

  const basePrice = referencePrice || BASE_PRICE[crop] || 2000;
  const gradeMultiplier = GRADE_MULTIPLIER[grade] || 1.0;
  const matchingBuyers = buyers.filter((b) => b.demand.crop === crop);

  matchingBuyers.forEach((b) => {
    const variation = 0.95 + Math.random() * 0.1;
    const offer = {
      id: "offer_" + Date.now() + "_" + b.id,
      lotId: lot.id,
      buyerId: b.id,
      buyerName: b.name,
      buyerTrustScore: b.trustScore,
      buyerVerified: b.verified,
      pricePerQuintal: Math.round(basePrice * gradeMultiplier * variation),
      status: "pending",
      counterPrice: null,
      createdAt: new Date().toISOString(),
    };
    db.offers.push(offer);
  });

  writeDB(db);
  res.status(201).json(lot);
});

app.get("/api/lots/:id/offers", (req, res) => {
  const db = readDB();
  res.json(db.offers.filter((o) => o.lotId === req.params.id));
});

app.get("/api/offers", (req, res) => {
  const db = readDB();
  res.json(db.offers);
});

app.post("/api/offers/:id/respond", (req, res) => {
  const { action, counterPrice } = req.body;
  const db = readDB();
  const offer = db.offers.find((o) => o.id === req.params.id);
  if (!offer) return res.status(404).json({ error: "Offer nahi mila" });

  if (action === "accept") {
    offer.status = "accepted";
    const lot = db.lots.find((l) => l.id === offer.lotId);
    if (lot) lot.status = "Bik gaya (offer accepted)";
  } else if (action === "reject") {
    offer.status = "rejected";
  } else if (action === "counter") {
    if (!counterPrice) return res.status(400).json({ error: "counterPrice zaroori hai" });
    offer.status = "countered";
    offer.counterPrice = counterPrice;
  } else {
    return res.status(400).json({ error: "Invalid action" });
  }

  writeDB(db);
  res.json(offer);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Kisan Mandi Sahayak backend chal raha hai: http://localhost:${PORT}`);
});
