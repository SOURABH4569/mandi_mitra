# Kisan Mandi Sahayak — Prototype

Market-intelligence prototype: farmer login -> nearby mandi prices on a map ->
net-profit calculator -> supply-demand indicator -> sell/hold recommendation ->
verified buyer demand + logistics/storage options.

## Run karne ke liye

```bash
npm install
npm run dev
```
Browser mein http://localhost:5173 khol lo.

## Live mandi data chalu karne ke liye (optional)

Bina API key ke bhi app chalega (mock data dikhega, koi crash nahi hoga).
Real Agmarknet data chahiye to:

1. https://data.gov.in par free account banao, profile se API key generate karo.
2. `.env.example` ko `.env` naam se copy karo.
3. `.env` mein apni key daalo: `VITE_AGMARKNET_API_KEY=your_key_here`
4. `npm run dev` restart karo. Dashboard ke upar ek badge dikhega:
   - "Live Agmarknet data" — agar API se data mil gaya
   - "Demo data" — agar key missing hai ya request fail hui

Note: Agmarknet ka daily-price endpoint sirf ek din ka snapshot deta hai (min/modal/max
price), 7-din ki history ya numeric arrival-quantity nahi deta. Isliye live rows mein
sparkline flat dikhegi jab tak aap roz ka data save karke history banana shuru na karo.

## Production build

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  data/
    mandis.js     -> mock mandi price data (fallback jab live API na chale)
    buyers.js      -> verified buyer profiles, demand, quality specs
    logistics.js   -> storage/transport options
  services/
    mandiApi.js    -> live Agmarknet fetch + geocoding + fallback logic
  utils/economics.js -> transport cost, net profit, supply-demand heuristic
  components/
    Header.jsx, TabsNav.jsx, QuantityBar.jsx, RecommendationBanner.jsx
    MandiList.jsx / MandiRow.jsx, MapView.jsx, Sparkline.jsx
    DemandBadge.jsx      -> supply-demand colored badge
    StatsBar.jsx          -> top 4-number summary strip
    BuyerDemandPanel.jsx  -> verified buyers with trust score + quality specs
    LogisticsPanel.jsx    -> nearby storage/transport options
  pages/
    Login.jsx -> /
    Otp.jsx -> /otp
    Profile.jsx -> /profile
    Dashboard.jsx -> /dashboard  (loads live/mock data, wires all panels together)
  styles/global.css, auth.css, dashboard.css
  App.jsx, main.jsx
```

## Agla feature kaise jodein

1. Naya page -> src/pages/, route App.jsx mein.
2. Naya tab -> src/components/TabsNav.jsx mein enabled: true.
3. Photo-based quality grading -> naya component + page banao (abhi nahi bana).
4. Real buyer/logistics data -> data/buyers.js aur data/logistics.js ko
   mandiApi.js jaisi async service se replace karo, format wahi rakho.
