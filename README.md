# Kisan Mandi Sahayak — Prototype

Kisan Mandi Sahayak is a market-intelligence web application designed to help farmers make better selling decisions.

The application provides:

* Farmer login and profile
* Nearby mandi prices shown on a map
* Net profit calculation after transport costs
* Supply and demand information
* Sell or Hold recommendation
* Verified buyer demand and requirements
* Nearby storage and transportation options

The goal is to help farmers understand the current market situation and choose a suitable time and place to sell their produce.

---

## How to Run the Project

First, install all the required dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

Open the following address in your browser:

**http://localhost:5173**

---

## Using Live Mandi Data (Optional)

The application can run without an API key. In that case, it will use demo data, so the application will still work normally.

If you want to use real **Agmarknet** mandi price data:

### Step 1: Get an API Key

Create a free account on:

[data.gov.in](https://data.gov.in?utm_source=chatgpt.com)

After creating your account, generate an API key from your profile.

### Step 2: Create the Environment File

Copy the `.env.example` file and rename the copy to:

```text
.env
```

### Step 3: Add Your API Key

Open the `.env` file and add:

```env
VITE_AGMARKNET_API_KEY=your_key_here
```

Replace `your_key_here` with your actual API key.

### Step 4: Restart the Application

Run:

```bash
npm run dev
```

The dashboard will show one of the following badges:

* **Live Agmarknet data** — Real mandi data was successfully received from the API.
* **Demo data** — The API key is missing or the request to the API was unsuccessful.

### Important Note About Agmarknet Data

The Agmarknet daily-price API provides data for a single day, including:

* Minimum price
* Maximum price
* Modal price

It does not directly provide:

* 7-day price history
* Numerical arrival quantities

Because of this, the price sparkline may appear flat when using live data.

To show a real 7-day price history, the application will need to save daily mandi data and build the historical data over time.

---

## Production Build

To create a production version of the application, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

The project is organized into different folders based on their purpose:

```text
src/
│
├── data/
│   ├── mandis.js
│   │   └── Demo mandi price data used when live data is unavailable
│   │
│   ├── buyers.js
│   │   └── Verified buyer information, demand and quality requirements
│   │
│   └── logistics.js
│       └── Storage and transportation options
│
├── services/
│   └── mandiApi.js
│       └── Fetches live Agmarknet data,
│           handles location information,
│           and provides fallback data when needed
│
├── utils/
│   └── economics.js
│       └── Calculates transport costs,
│           net profit and supply-demand information
│
├── components/
│   ├── Header.jsx
│   ├── TabsNav.jsx
│   ├── QuantityBar.jsx
│   ├── RecommendationBanner.jsx
│   ├── MandiList.jsx
│   ├── MandiRow.jsx
│   ├── MapView.jsx
│   ├── Sparkline.jsx
│   ├── DemandBadge.jsx
│   │   └── Shows the supply-demand status
│   │
│   ├── StatsBar.jsx
│   │   └── Shows four important summary numbers
│   │
│   ├── BuyerDemandPanel.jsx
│   │   └── Shows verified buyers,
│   │       trust scores and quality requirements
│   │
│   └── LogisticsPanel.jsx
│       └── Shows nearby storage and transportation options
│
├── pages/
│   ├── Login.jsx
│   │   └── Login page
│   │
│   ├── Otp.jsx
│   │   └── OTP verification page
│   │
│   ├── Profile.jsx
│   │   └── Farmer profile page
│   │
│   └── Dashboard.jsx
│       └── Main dashboard
│           Loads live or demo data
│           and connects all dashboard sections
│
├── styles/
│   ├── global.css
│   ├── auth.css
│   └── dashboard.css
│
├── App.jsx
└── main.jsx
```

---

## How to Add New Features

The project is designed so that new features can be added easily.

### 1. Add a New Page

Create the new page inside:

```text
src/pages/
```

Then add its route in:

```text
App.jsx
```

### 2. Add a New Dashboard Tab

Add the new tab inside:

```text
src/components/TabsNav.jsx
```

Make sure the tab is enabled using:

```text
enabled: true
```

### 3. Add Photo-Based Quality Grading

A future feature can allow farmers to upload a photo of their crop and get an estimated quality grade.

This can be added by creating:

* A new component
* A new page
* The required image-processing or AI functionality

This feature is **not currently implemented**.

### 4. Add Real Buyer and Logistics Data

Currently, buyer and logistics information is stored in:

```text
src/data/buyers.js
src/data/logistics.js
```

In the future, these files can be replaced with real-time data services, similar to:

```text
src/services/mandiApi.js
```

The new services should return data in the same format so that the existing components can continue working without major changes.

---

## Future Scope

Some possible future improvements include:

* Photo-based crop quality grading
* Real-time buyer demand
* Real-time transportation availability
* More accurate supply-demand analysis
* Historical mandi price charts
* Price alerts for farmers
* Better profit predictions
* More mandi and crop coverage
* Integration with additional government and market-data sources
