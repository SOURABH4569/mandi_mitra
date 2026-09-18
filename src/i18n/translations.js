// Central translation dictionary. Add a new language by adding one more
// key (e.g. "bn") to every entry below — nothing else needs to change.
export const LANGUAGES = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
  { code: "mr", label: "मराठी" },
];

export const DEFAULT_LANG = "hi";

export const translations = {
  "app.name": { hi: "किसान मंडी सहायक", en: "Kisan Mandi Sahayak", mr: "किसान मंडी" },

  // Login
  "login.heading": { hi: "अपनी उपज का सही दाम, सही मंडी में", en: "The right price for your produce, in the right mandi", mr: "तुमच्या शेतमालाचा योग्य भाव, योग्य बाजारात" },
  "login.subtitle": { hi: "अपना मोबाइल नंबर डालें और नज़दीकी मंडियों के लाइव भाव देखें।", en: "Enter your mobile number and see live prices of nearby mandis.", mr: "तुमचा मोबाइल नंबर टाका आणि जवळच्या बाजारांचे लाइव्ह भाव पाहा." },
  "login.mobileLabel": { hi: "मोबाइल नंबर", en: "Mobile Number", mr: "मोबाइल नंबर" },
  "login.otpButton": { hi: "OTP भेजें", en: "Send OTP", mr: "OTP पाठवा" },
  "login.newAccount": { hi: "नया खाता?", en: "New account?", mr: "नवीन खाते?" },
  "login.startHere": { hi: "यहीं से शुरू करें", en: "Start here", mr: "इथूनच सुरुवात करा" },

  // OTP
  "otp.title": { hi: "OTP वेरीफाई करें", en: "Verify OTP", mr: "OTP सत्यापित करा" },
  "otp.subtitle": { hi: "4-अंकों का कोड भेजा गया {phone} पर। (प्रोटोटाइप: कोई भी 4 अंक डालें)", en: "A 4-digit code has been sent to {phone}. (Prototype: enter any 4 digits)", mr: "4-अंकी कोड {phone} वर पाठवला आहे. (प्रोटोटाइप: कोणतेही 4 अंक टाका)" },
  "otp.subtitleDefault": { hi: "आपके नंबर", en: "your number", mr: "तुमच्या नंबरवर" },
  "otp.verifyButton": { hi: "वेरीफाई करें", en: "Verify", mr: "सत्यापित करा" },
  "otp.back": { hi: "वापस जाएं", en: "Go back", mr: "मागे जा" },

    "otp.resendIn": {
    hi: "{seconds} सेकंड में फिर से भेजें",
    en: "Resend in {seconds}s",
    mr: "{seconds} सेकंदात पुन्हा पाठवा"
  },

  "otp.resend": {
    hi: "OTP फिर से भेजें",
    en: "Resend OTP",
    mr: "OTP पुन्हा पाठवा"
  },

  "otp.demoNote": {
    hi: "प्रोटोटाइप मोड: कोई भी 4 अंकों का OTP स्वीकार किया जाएगा।",
    en: "Prototype mode: any 4-digit OTP is accepted.",
    mr: "प्रोटोटाइप मोड: कोणताही 4 अंकी OTP स्वीकारला जाईल."
  },


  // Profile
  "profile.title": { hi: "अपनी जानकारी भरें", en: "Fill Your Details", mr: "तुमची माहिती भरा" },
  "profile.subtitle": { hi: "इससे हम आपके लिए सही मंडी और सही दाम ढूंढ पाएंगे।", en: "This helps us find the right mandi and the right price for you.", mr: "यामुळे आम्ही तुमच्यासाठी योग्य बाजार आणि योग्य भाव शोधू शकू." },
  "profile.nameLabel": { hi: "नाम", en: "Name", mr: "नाव" },
  "profile.villageLabel": { hi: "गांव / तहसील", en: "Village / Tehsil", mr: "गाव / तालुका" },
  "profile.cropLabel": { hi: "फसल चुनें", en: "Select Crop", mr: "पीक निवडा" },
  "profile.openDashboard": { hi: "डैशबोर्ड खोलें", en: "Open Dashboard", mr: "डॅशबोर्ड उघडा" },
  "profile.defaultName": { hi: "किसान भाई", en: "Farmer", mr: "शेतकरी मित्र" },

    "profile.step": {
    hi: "चरण 1 / 2",
    en: "Step 1 of 2",
    mr: "चरण 1 / 2"
  },

  "profile.otpHint": {
    hi: "OTP इसी नंबर पर भेजा जाएगा",
    en: "OTP will be sent to this number",
    mr: "OTP या नंबरवर पाठवला जाईल"
  },

  "profile.security": {
    hi: "🔒 आपका मोबाइल नंबर सिर्फ लॉगिन वेरिफिकेशन के लिए इस्तेमाल होगा।",
    en: "🔒 Your mobile number is used only for login verification.",
    mr: "🔒 तुमचा मोबाइल नंबर फक्त लॉगिन पडताळणीसाठी वापरला जाईल."
  },
  "profile.invalidPhone": {
  hi: "कृपया 10 अंकों का सही मोबाइल नंबर डालें।",
  en: "Please enter a valid 10-digit mobile number.",
  mr: "कृपया 10 अंकी योग्य मोबाइल नंबर टाका."
},

    // Dashboard welcome
  "dashboard.greeting": {
    hi: "नमस्ते {name} जी 👋",
    en: "Namaste {name} 👋",
    mr: "नमस्कार {name} जी 👋"
  },

  "dashboard.subtitle": {
    hi: "आज अपनी उपज के लिए सही भाव और सही मंडी देखें।",
    en: "Find the right price and mandi for your produce today.",
    mr: "आज तुमच्या शेतमालासाठी योग्य भाव आणि योग्य बाजार पहा."
  },

  "dashboard.crop": {
    hi: "फसल",
    en: "Crop",
    mr: "पीक"
  },

  "dashboard.village": {
    hi: "गांव",
    en: "Village",
    mr: "गाव"
  },

  "dashboard.mandiAction": {
    hi: "मंडी भाव देखें",
    en: "View Mandi Prices",
    mr: "बाजार भाव पहा"
  },

  "dashboard.lotAction": {
    hi: "लॉट बनाएं",
    en: "Create Lot",
    mr: "लॉट तयार करा"
  },

  "dashboard.offerAction": {
    hi: "ऑफर देखें",
    en: "View Offers",
    mr: "ऑफर पहा"
  },

  "dashboard.logout": {
    hi: "लॉगआउट",
    en: "Logout",
    mr: "लॉगआउट"
  },

  // Tabs
  "tabs.mandiBhaav": { hi: "मंडी भाव", en: "Mandi Prices", mr: "बाजार भाव" },
  "tabs.lot": { hi: "लॉट बनाएं", en: "Create Lot", mr: "लॉट तयार करा" },
  "tabs.offers": { hi: "खरीदार ऑफर", en: "Buyer Offers", mr: "खरेदीदार ऑफर" },
  "tabs.transactions": { hi: "लेन-देन स्थिति", en: "Transaction Status", mr: "व्यवहार स्थिती" },

  // Coming soon
  "comingSoon.transactionsDesc": { hi: "ट्रांजेक्शन ट्रैकिंग और विवाद-समाधान प्रक्रिया यहां आएगी।", en: "Transaction tracking and dispute-resolution flow will appear here.", mr: "व्यवहार ट्रॅकिंग आणि तक्रार निवारण प्रक्रिया इथे येईल." },
  "comingSoon.defaultDesc": { hi: "यह फीचर हैकाथॉन प्रोटोटाइप के अगले चरण में बनेगा।", en: "This feature will be built in the next phase of the hackathon prototype.", mr: "हे वैशिष्ट्य हॅकेथॉन प्रोटोटाइपच्या पुढील टप्प्यात तयार होईल." },

  // Mandi price page — data source banner
  "mandi.checkingLive": { hi: "⏳ लाइव मंडी डेटा जांचा जा रहा है…", en: "⏳ Checking live mandi data…", mr: "⏳ लाइव्ह बाजार डेटा तपासला जात आहे…" },
  "mandi.showingLive": { hi: "🔴 लाइव एगमार्कनेट डेटा दिखाया जा रहा है", en: "🔴 Showing live Agmarknet data", mr: "🔴 लाइव्ह अ‍ॅगमार्कनेट डेटा दाखवला जात आहे" },
  "mandi.showingMock": { hi: "🟡 डेमो डेटा दिखाया जा रहा है (लाइव API-key सेट नहीं है — .env देखें)", en: "🟡 Showing demo data (live API key not set — check .env)", mr: "🟡 डेमो डेटा दाखवला जात आहे (लाइव्ह API-key सेट नाही — .env पहा)" },

  // Stats
  "stats.bestNet": { hi: "सबसे बेहतरीन नेट भाव", en: "Best Net Price", mr: "सर्वोत्तम नेट भाव" },
  "stats.trackedMandis": { hi: "ट्रैक की गई मंडियां", en: "Mandis Tracked", mr: "ट्रॅक केलेले बाजार" },
  "stats.avgTransport": { hi: "औसत ट्रांसपोर्ट लागत", en: "Avg Transport Cost", mr: "सरासरी वाहतूक खर्च" },
  "stats.verifiedBuyers": { hi: "वेरिफाइड खरीदार", en: "Verified Buyers", mr: "सत्यापित खरेदीदार" },

  // Quantity bar
  "qty.label": { hi: "आपकी उपज (क्विंटल में):", en: "Your produce (in quintals):", mr: "तुमचा शेतमाल (क्विंटलमध्ये):" },
  "qty.assumption": { hi: "अनुमान: ₹2.50/किमी/क्विंटल ट्रांसपोर्ट · 2% मंडी कमीशन · ₹15/क्विंटल लोडिंग-लेबर", en: "Assumption: ₹2.50/km/quintal transport · 2% mandi commission · ₹15/quintal loading-labour", mr: "गृहीतक: ₹2.50/किमी/क्विंटल वाहतूक · 2% बाजार कमिशन · ₹15/क्विंटल लोडिंग-मजुरी" },

    // Best mandi highlight
  "mandi.bestForYou": {
    hi: "आपके लिए सबसे बेहतर मंडी",
    en: "Best mandi for you",
    mr: "तुमच्यासाठी सर्वोत्तम बाजार"
  },

  "mandi.bestDistance": {
    hi: "{km} किमी दूर",
    en: "{km} km away",
    mr: "{km} किमी दूर"
  },

  "mandi.bestMandiPrice": {
    hi: "मंडी भाव",
    en: "Mandi Price",
    mr: "बाजार भाव"
  },

  "mandi.bestNetEarning": {
    hi: "आपकी अनुमानित नेट कमाई",
    en: "Your estimated net earning",
    mr: "तुमची अंदाजे निव्वळ कमाई"
  },

  // Recommendation banner
  "rec.risingTitle": { hi: "भाव बढ़ रहे हैं — थोड़ा रुककर बेचें", en: "Prices are rising — consider waiting a little", mr: "भाव वाढत आहेत — थोडं थांबून विका" },
  "rec.risingText": { hi: "पिछले 7 दिनों में औसत मंडी भाव {pct}% बढ़ा है। अगर स्टोरेज की सुविधा है, तो 2-3 दिन और इंतज़ार करना फायदेमंद हो सकता है।", en: "Average mandi price has risen {pct}% in the last 7 days. If you have storage, waiting 2-3 more days may be beneficial.", mr: "गेल्या 7 दिवसांत सरासरी बाजार भाव {pct}% वाढला आहे. साठवणुकीची सोय असल्यास आणखी 2-3 दिवस थांबणे फायद्याचे ठरू शकते." },
  "rec.fallingTitle": { hi: "भाव गिर रहे हैं — जल्द बेचना बेहतर", en: "Prices are falling — better to sell soon", mr: "भाव घसरत आहेत — लवकर विकणे चांगले" },
  "rec.fallingText": { hi: "पिछले 7 दिनों में औसत मंडी भाव {pct}% गिरा है। ज़्यादा इंतज़ार करने से मुनाफा कम हो सकता है।", en: "Average mandi price has fallen {pct}% in the last 7 days. Waiting longer may reduce your profit.", mr: "गेल्या 7 दिवसांत सरासरी बाजार भाव {pct}% घसरला आहे. जास्त थांबल्यास नफा कमी होऊ शकतो." },
  "rec.stableTitle": { hi: "भाव स्थिर हैं — अपनी ज़रूरत के हिसाब से फैसला लें", en: "Prices are stable — decide based on your needs", mr: "भाव स्थिर आहेत — तुमच्या गरजेनुसार निर्णय घ्या" },
  "rec.stableText": { hi: "पिछले 7 दिनों में भाव में ज़्यादा बदलाव नहीं हुआ। नीचे दी गई सूची में ट्रांसपोर्ट-लागत के बाद सबसे ज़्यादा मुनाफा देने वाली मंडी देखें।", en: "Prices haven't changed much in the last 7 days. Check the list below for the mandi with the best profit after transport cost.", mr: "गेल्या 7 दिवसांत भावात फारसा बदल झाला नाही. खाली दिलेल्या यादीत वाहतूक-खर्चानंतर सर्वाधिक नफा देणारा बाजार पहा." },

  // Demand-supply badge
  "demand.highDemandLowArrival": { hi: "ज़्यादा मांग, कम आवक", en: "High Demand, Low Arrival", mr: "जास्त मागणी, कमी आवक" },
  "demand.highArrivalPressure": { hi: "ज़्यादा आवक, दबाव में भाव", en: "High Arrival, Price Under Pressure", mr: "जास्त आवक, भावावर दबाव" },
  "demand.strongDemand": { hi: "मांग मजबूत", en: "Strong Demand", mr: "मागणी मजबूत" },
  "demand.lowArrivalStable": { hi: "आवक कम, भाव स्थिर", en: "Low Arrival, Stable Price", mr: "आवक कमी, भाव स्थिर" },
  "demand.balancedMarket": { hi: "संतुलित बाज़ार", en: "Balanced Market", mr: "संतुलित बाजार" },

  // Mandi list / row
  "mandiList.title": { hi: "नेट मुनाफे के हिसाब से मंडियां", en: "Mandis Ranked by Net Profit", mr: "नेट नफ्यानुसार बाजार" },
  "mandiList.subtitle": { hi: "{count} मंडियां · {qty} क्विंटल के लिए", en: "{count} mandis · for {qty} quintals", mr: "{count} बाजार · {qty} क्विंटलसाठी" },
  "mandiRow.best": { hi: "सबसे बेहतर", en: "Best", mr: "सर्वोत्तम" },
  "mandiRow.live": { hi: "लाइव", en: "Live", mr: "लाइव्ह" },
  "mandiRow.distanceArrival": { hi: "{km} किमी दूर · आवक: {arrival}", en: "{km} km away · Arrival: {arrival}", mr: "{km} किमी दूर · आवक: {arrival}" },
  "mandiRow.mandiPrice": { hi: "मंडी भाव", en: "Mandi Price", mr: "बाजार भाव" },
  "mandiRow.transport": { hi: "ट्रांसपोर्ट", en: "Transport", mr: "वाहतूक" },
  "mandiRow.commissionLabour": { hi: "कमीशन+मजदूरी", en: "Commission+Labour", mr: "कमिशन+मजुरी" },
  "mandiRow.netPrice": { hi: "नेट भाव", en: "Net Price", mr: "नेट भाव" },
  "mandiRow.trend7days": { hi: "पिछले 7 दिन का ट्रेंड", en: "Last 7-day trend", mr: "गेल्या 7 दिवसांचा कल" },
  "mandiRow.totalProduce": { hi: "कुल उपज", en: "Total Produce", mr: "एकूण शेतमाल" },
  "mandiRow.grossAmount": { hi: "सकल राशि (Gross)", en: "Gross Amount", mr: "एकूण रक्कम (Gross)" },
  "mandiRow.transportCost": { hi: "ट्रांसपोर्ट लागत", en: "Transport Cost", mr: "वाहतूक खर्च" },
  "mandiRow.commissionLabourCost": { hi: "कमीशन + मजदूरी", en: "Commission + Labour", mr: "कमिशन + मजुरी" },
  "mandiRow.netEarning": { hi: "आपकी कुल कमाई (Net)", en: "Your Total Earning (Net)", mr: "तुमची एकूण कमाई (Net)" },

  // Map
  "map.title": { hi: "आस-पास की मंडियां", en: "Nearby Mandis", mr: "जवळपासचे बाजार" },
  "map.subtitle": { hi: "{count} मंडियां मिलीं", en: "{count} mandis found", mr: "{count} बाजार सापडले" },
  "map.youAreHere": { hi: "आप यहां हैं", en: "You are here", mr: "तुम्ही इथे आहात" },

  // Buyer panel
  "buyer.title": { hi: "वेरिफाइड खरीदार और मांग", en: "Verified Buyers & Demand", mr: "सत्यापित खरेदीदार आणि मागणी" },
  "buyer.subtitle": { hi: "{count} खरीदार मिले", en: "{count} buyers found", mr: "{count} खरेदीदार सापडले" },
  "buyer.verifiedTitle": { hi: "वेरिफाइड खरीदार", en: "Verified buyer", mr: "सत्यापित खरेदीदार" },

  // Logistics panel
  "logistics.title": { hi: "नज़दीकी स्टोरेज और ट्रांसपोर्ट", en: "Nearby Storage & Transport", mr: "जवळपासची साठवण आणि वाहतूक" },
  "logistics.subtitle": { hi: "{count} विकल्प मिले", en: "{count} options found", mr: "{count} पर्याय सापडले" },

  // Common
  "common.quintal": { hi: "क्विंटल", en: "quintal", mr: "क्विंटल" },
  "common.perQuintal": { hi: "/क्विंटल", en: "/quintal", mr: "/क्विंटल" },
  "common.trustScore": { hi: "{score}/100 विश्वास स्कोर", en: "{score}/100 trust score", mr: "{score}/100 विश्वास गुण" },
  "common.arrivalPerDay": { hi: "{qty} क्विंटल/दिन", en: "{qty} quintal/day", mr: "{qty} क्विंटल/दिवस" },
  "common.today": { hi: "आज", en: "Today", mr: "आज" },
  "common.gradeLabel": { hi: "ग्रेड {grade}", en: "Grade {grade}", mr: "ग्रेड {grade}" },
  "common.harvestLabel": { hi: "📅 कटाई: {date}", en: "📅 Harvest: {date}", mr: "📅 कापणी: {date}" },
  "common.statusLabel": { hi: "स्थिति: {status}", en: "Status: {status}", mr: "स्थिती: {status}" },

  // Lot page
  "lot.backendOfflineNote": { hi: "🟡 बैकएंड से कनेक्ट नहीं हो पाया — लॉट सिर्फ इस ब्राउज़र सेशन में सेव हो रहे हैं।", en: "🟡 Could not connect to backend — lots are only saved in this browser session.", mr: "🟡 बॅकएंडशी कनेक्ट होऊ शकले नाही — लॉट फक्त या ब्राउझर सत्रात सेव्ह होत आहेत." },
  "lot.backendOfflineHint": { hi: "(टर्मिनल में कोड चलाएं और पेज रीफ्रेश करें)", en: "(run the command in a terminal and refresh the page)", mr: "(टर्मिनलमध्ये कमांड चालवा आणि पेज रिफ्रेश करा)" },
  "lot.formTitle": { hi: "नया लॉट बनाएं", en: "Create New Lot", mr: "नवीन लॉट तयार करा" },
  "lot.cropLabel": { hi: "फसल", en: "Crop", mr: "पीक" },
  "lot.quantityLabel": { hi: "मात्रा (क्विंटल में)", en: "Quantity (in quintals)", mr: "प्रमाण (क्विंटलमध्ये)" },
  "lot.quantityPlaceholder": { hi: "जैसे: 25", en: "e.g. 25", mr: "उदा: 25" },
  "lot.harvestDateLabel": { hi: "कटाई की तारीख", en: "Harvest Date", mr: "कापणीची तारीख" },
  "lot.photoLabel": { hi: "उपज की फोटो (क्वालिटी ग्रेडिंग के लिए)", en: "Photo of produce (for quality grading)", mr: "मालाचा फोटो (गुणवत्ता तपासणीसाठी)" },
  "lot.errorFields": { hi: "कृपया मात्रा और कटाई की तारीख भरें।", en: "Please fill quantity and harvest date.", mr: "कृपया प्रमाण आणि कापणीची तारीख भरा." },
  "lot.errorPhoto": { hi: "कृपया उपज की फोटो अपलोड करें ताकि ग्रेडिंग हो सके।", en: "Please upload a photo of the produce so it can be graded.", mr: "कृपया मालाचा फोटो अपलोड करा जेणेकरून प्रतवारी करता येईल." },
  "lot.submitting": { hi: "सबमिट हो रहा है…", en: "Submitting…", mr: "सबमिट होत आहे…" },
  "lot.submitButton": { hi: "लॉट सबमिट करें", en: "Submit Lot", mr: "लॉट सबमिट करा" },
  "lot.yourLotsTitle": { hi: "आपके लॉट", en: "Your Lots", mr: "तुमचे लॉट" },
  "lot.lotCount": { hi: "{count} लॉट", en: "{count} lot(s)", mr: "{count} लॉट" },
  "lot.noLots": { hi: "अभी कोई लॉट नहीं बना है।", en: "No lots created yet.", mr: "अजून कोणताही लॉट तयार केलेला नाही." },
  "lot.localModeStatus": { hi: "खरीदारों को दिखाया जा रहा है (लोकल मोड)", en: "Being shown to buyers (local mode)", mr: "खरेदीदारांना दाखवले जात आहे (लोकल मोड)" },

  // Offers page
  "offers.loading": { hi: "ऑफर लोड हो रहे हैं…", en: "Loading offers…", mr: "ऑफर लोड होत आहेत…" },
  "offers.connectError": { hi: "बैकएंड से कनेक्ट नहीं हो पाया। पहले बैकएंड चलाएं: cd kisan-mandi-backend && npm start", en: "Could not connect to backend. Start the backend first: cd kisan-mandi-backend && npm start", mr: "बॅकएंडशी कनेक्ट होऊ शकले नाही. आधी बॅकएंड सुरू करा: cd kisan-mandi-backend && npm start" },
  "offers.backendOfflineTitle": { hi: "बैकएंड से कनेक्ट नहीं हो पाया", en: "Could not connect to backend", mr: "बॅकएंडशी कनेक्ट होऊ शकले नाही" },
  "offers.backendOfflineDesc": { hi: "खरीदारों के ऑफर देखने के लिए बैकएंड चालू होना ज़रूरी है।", en: "The backend must be running to see buyer offers.", mr: "खरेदीदारांचे ऑफर पाहण्यासाठी बॅकएंड सुरू असणे आवश्यक आहे." },
  "offers.backendOfflineHint": { hi: "टर्मिनल में यह कमांड चलाएं, फिर पेज रीफ्रेश करें।", en: "Run this command in a terminal, then refresh this page.", mr: "टर्मिनलमध्ये ही कमांड चालवा, नंतर पेज रिफ्रेश करा." },
  "offers.noLotsTitle": { hi: "अभी कोई लॉट नहीं बना", en: "No lots created yet", mr: "अजून कोणताही लॉट तयार केलेला नाही" },
  "offers.noLotsDesc": { hi: "पहले \"लॉट बनाएं\" टैब से एक लॉट बनाएं — खरीदार तुरंत ऑफर भेजेंगे।", en: "First create a lot from the \"Create Lot\" tab — buyers will send offers instantly.", mr: "आधी \"लॉट तयार करा\" टॅबमधून एक लॉट तयार करा — खरेदीदार लगेच ऑफर पाठवतील." },
  "offers.noOffersForLot": { hi: "इस लॉट के लिए अभी कोई ऑफर नहीं आया।", en: "No offers have come in for this lot yet.", mr: "या लॉटसाठी अजून कोणताही ऑफर आलेला नाही." },

  // Offer card
  "offer.trustSuffix": { hi: "/100 विश्वास", en: "/100 trust", mr: "/100 विश्वास" },
  "offer.counterNote": { hi: "आपका काउंटर: ₹{price}/क्विंटल — खरीदार के जवाब का इंतज़ार", en: "Your counter: ₹{price}/quintal — waiting for buyer's response", mr: "तुमचा काउंटर: ₹{price}/क्विंटल — खरेदीदाराच्या उत्तराची वाट पाहत आहे" },
  "offer.accepted": { hi: "✅ स्वीकार किया गया", en: "✅ Accepted", mr: "✅ स्वीकारले" },
  "offer.rejected": { hi: "❌ अस्वीकार किया गया", en: "❌ Rejected", mr: "❌ नाकारले" },
  "offer.acceptBtn": { hi: "स्वीकार करें", en: "Accept", mr: "स्वीकारा" },
  "offer.counterBtn": { hi: "काउंटर करें", en: "Counter", mr: "काउंटर करा" },
  "offer.rejectBtn": { hi: "अस्वीकार करें", en: "Reject", mr: "नाकारा" },
  "offer.counterPlaceholder": { hi: "अपना भाव (₹/क्विंटल)", en: "Your price (₹/quintal)", mr: "तुमचा भाव (₹/क्विंटल)" },
  "offer.sendBtn": { hi: "भेजें", en: "Send", mr: "पाठवा" },
  "offer.cancelBtn": { hi: "रद्द करें", en: "Cancel", mr: "रद्द करा" },

  // Photo uploader
  "photo.previewAlt": { hi: "उपज का प्रीव्यू", en: "Produce preview", mr: "मालाचा प्रीव्ह्यू" },
  "photo.uploadPrompt": { hi: "उपज की फोटो अपलोड करें", en: "Upload a photo of your produce", mr: "मालाचा फोटो अपलोड करा" },
  "photo.hint": { hi: "साफ बैकग्राउंड और अच्छी रोशनी में खींचें", en: "Take it with a clean background and good light", mr: "स्वच्छ पार्श्वभूमी आणि चांगल्या प्रकाशात काढा" },
  "photo.analyzing": { hi: "ग्रेड जांचा जा रहा है…", en: "Checking grade…", mr: "प्रतवारी तपासली जात आहे…" },
  "photo.chooseAnother": { hi: "दूसरी फोटो चुनें", en: "Choose Another Photo", mr: "दुसरा फोटो निवडा" },

  // Quality grade
  "quality.scoreLabel": { hi: "क्वालिटी स्कोर: {score}/100", en: "Quality Score: {score}/100", mr: "गुणवत्ता गुण: {score}/100" },
  "quality.reasonA1": { hi: "सतह एकसमान दिख रही है", en: "Surface looks uniform", mr: "पृष्ठभाग एकसमान दिसत आहे" },
  "quality.reasonA2": { hi: "रंग स्वस्थ दायरे में है", en: "Colour is in a healthy range", mr: "रंग निरोगी श्रेणीत आहे" },
  "quality.reasonA3": { hi: "कोई बड़ा दाग/खराबी नहीं दिखी", en: "No major spots/defects seen", mr: "कोणताही मोठा डाग/दोष दिसला नाही" },
  "quality.reasonB1": { hi: "सतह में हल्का फर्क है", en: "Slight variation on the surface", mr: "पृष्ठभागावर थोडा फरक आहे" },
  "quality.reasonB2": { hi: "कुछ हिस्सों में रंग असमान है", en: "Colour is uneven in some parts", mr: "काही भागांत रंग असमान आहे" },
  "quality.reasonB3": { hi: "कुल मिलाकर ठीक-ठाक क्वालिटी", en: "Overall decent quality", mr: "एकंदरीत ठीकठाक गुणवत्ता" },
  "quality.reasonC1": { hi: "सतह में ज़्यादा बदलाव है", en: "High variation on the surface", mr: "पृष्ठभागावर जास्त फरक आहे" },
  "quality.reasonC2": { hi: "रोशनी/एंगल सही नहीं था या उपज में दाग हो सकते हैं", en: "Lighting/angle wasn't ideal, or produce may have spots", mr: "प्रकाश/कोन योग्य नव्हता किंवा मालावर डाग असू शकतात" },
  "quality.reasonC3": { hi: "बेहतर फोटो (साफ बैकग्राउंड, अच्छी रोशनी) दोबारा लें", en: "Try a better photo (clean background, good light) again", mr: "अधिक चांगला फोटो (स्वच्छ पार्श्वभूमी, चांगला प्रकाश) पुन्हा घ्या" },

    // Role selection
  "role.heading": {
    hi: "आप कौन हैं?",
    en: "Who are you?",
    mr: "तुम्ही कोण आहात?"
  },

  "role.subtitle": {
    hi: "अपनी भूमिका चुनें और आगे बढ़ें",
    en: "Choose your role to continue",
    mr: "तुमची भूमिका निवडा आणि पुढे जा"
  },

  "role.farmer": {
    hi: "किसान",
    en: "Farmer",
    mr: "शेतकरी"
  },

  "role.farmerDesc": {
    hi: "अपनी उपज का सही भाव पाएं",
    en: "Find the right price for your produce",
    mr: "तुमच्या शेतमालाचा योग्य भाव मिळवा"
  },

  "role.buyer": {
    hi: "खरीदार",
    en: "Buyer",
    mr: "खरेदीदार"
  },

  "role.buyerDesc": {
    hi: "किसानों से उपज खरीदें",
    en: "Buy produce from farmers",
    mr: "शेतकऱ्यांकडून शेतमाल खरेदी करा"
  },

  "role.admin": {
    hi: "एडमिन",
    en: "Admin",
    mr: "अ‍ॅडमिन"
  },

  "role.adminDesc": {
    hi: "प्लेटफॉर्म को मैनेज करें",
    en: "Manage the platform",
    mr: "प्लॅटफॉर्म व्यवस्थापित करा"
  },

  "role.footer": {
    hi: "किसान मंडी सहायक — सही भाव, सही मंडी",
    en: "Kisan Mandi Sahayak — Right price, right mandi",
    mr: "किसान मंडी सहायक — योग्य भाव, योग्य बाजार"
  },

    "role.buyerLogin": {
    hi: "खरीदार लॉगिन",
    en: "Buyer Login",
    mr: "खरेदीदार लॉगिन"
  },

  "role.buyerLoginSubtitle": {
    hi: "अपने मोबाइल नंबर से लॉगिन करें",
    en: "Login using your mobile number",
    mr: "तुमच्या मोबाइल नंबरने लॉगिन करा"
  },

  "role.adminLogin": {
    hi: "एडमिन लॉगिन",
    en: "Admin Login",
    mr: "अ‍ॅडमिन लॉगिन"
  },

  "role.adminLoginSubtitle": {
    hi: "प्लेटफॉर्म मैनेज करने के लिए लॉगिन करें",
    en: "Login to manage the platform",
    mr: "प्लॅटफॉर्म व्यवस्थापित करण्यासाठी लॉगिन करा"
  },

  "role.adminId": {
    hi: "एडमिन आईडी",
    en: "Admin ID",
    mr: "अ‍ॅडमिन आयडी"
  },

  "role.adminPassword": {
    hi: "पासवर्ड",
    en: "Password",
    mr: "पासवर्ड"
  },

  "role.adminLoginButton": {
    hi: "लॉगिन करें",
    en: "Login",
    mr: "लॉगिन करा"
  },

  "role.adminFieldsRequired": {
    hi: "कृपया एडमिन आईडी और पासवर्ड भरें।",
    en: "Please enter admin ID and password.",
    mr: "कृपया अ‍ॅडमिन आयडी आणि पासवर्ड भरा."
  },

  "role.switchRole": {
    hi: "दूसरी भूमिका चुननी है?",
    en: "Want to choose another role?",
    mr: "दुसरी भूमिका निवडायची आहे?"
  },

  "role.backHome": {
    hi: "भूमिका बदलें",
    en: "Change role",
    mr: "भूमिका बदला"
  },

  "role.invalid": {
    hi: "अमान्य भूमिका",
    en: "Invalid role",
    mr: "अवैध भूमिका"
  },


  // Crops
  "crop.wheat": { hi: "गेहूं", en: "Wheat", mr: "गहू" },
  "crop.mustard": { hi: "सरसों", en: "Mustard", mr: "मोहरी" },
  "crop.potato": { hi: "आलू", en: "Potato", mr: "बटाटा" },
  "crop.onion": { hi: "प्याज़", en: "Onion", mr: "कांदा" },
  "crop.paddy": { hi: "धान", en: "Paddy", mr: "भात" },
  "crop.gram": { hi: "चना", en: "Gram", mr: "हरभरा" },

  // Language switcher
  "lang.choose": { hi: "भाषा चुनें", en: "Choose Language", mr: "भाषा निवडा" },
};

export function translate(lang, key, vars) {
  const entry = translations[key];
  if (!entry) return key;
  let str = entry[lang] || entry[DEFAULT_LANG] || entry.en || key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      str = str.replaceAll(`{${k}}`, vars[k]);
    });
  }
  return str;
}
