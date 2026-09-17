import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import QuantityBar from "../components/QuantityBar";
import RecommendationBanner from "../components/RecommendationBanner";
import MandiList from "../components/MandiList";
import MapView from "../components/MapView";
import StatsBar from "../components/StatsBar";
import BuyerDemandPanel from "../components/BuyerDemandPanel";
import LogisticsPanel from "../components/LogisticsPanel";
import { mandis as mockMandis, farmerLocation, cropMeta } from "../data/mandis";
import { getBuyersForCrop } from "../data/buyers";
import { getLogisticsForCrop } from "../data/logistics";
import { computeEconomics, getRecommendation } from "../utils/economics";
import { fetchLiveMandiPrices } from "../services/mandiApi";
import { useLanguage } from "../i18n/LanguageContext";

// This page owns everything specific to the "Mandi Bhaav" tab: live/mock price
// loading, the map, the sorted mandi list, buyer demand, and logistics panels.
// It is rendered inside DashboardLayout's <Outlet/> at /dashboard/mandi-bhaav.
export default function MandiPricePage() {
  const { farmer } = useOutletContext();
  const { t } = useLanguage();

  const [qty, setQty] = useState(20);
  const [selectedMandi, setSelectedMandi] = useState(null);
  const [mandis, setMandis] = useState(mockMandis);
  const [dataSource, setDataSource] = useState("loading");

  const crop = farmer?.crop || "wheat";
  const cropLabel = cropMeta[crop].label;

  useEffect(() => {
    let cancelled = false;
    setDataSource("loading");

    fetchLiveMandiPrices({
      commodity: cropLabel === "Gehun" ? "Wheat" : cropLabel,
    })
      .then((liveData) => {
        if (cancelled) return;
        setMandis(liveData);
        setDataSource("live");
      })
      .catch(() => {
        if (cancelled) return;
        setMandis(mockMandis);
        setDataSource("mock");
      });

    return () => {
      cancelled = true;
    };
  }, [crop, cropLabel]);

  const recommendation = useMemo(
    () => getRecommendation(mandis),
    [mandis]
  );

  const buyers = useMemo(
    () => getBuyersForCrop(crop),
    [crop]
  );

  const logisticsOptions = useMemo(
    () => getLogisticsForCrop(crop),
    [crop]
  );

  const stats = useMemo(() => {
    if (!mandis.length) return [];

    const withEcon = mandis.map((m) =>
      computeEconomics(farmerLocation, m, qty)
    );

    const bestNet = Math.max(
      ...withEcon.map((e) => e.netPricePerQuintal)
    );

    const avgTransport =
      withEcon.reduce(
        (s, e) => s + e.transportCostPerQuintal,
        0
      ) / withEcon.length;

    return [
      {
        labelKey: "stats.bestNet",
        value: `₹${bestNet.toFixed(0)}`,
      },
      {
        labelKey: "stats.trackedMandis",
        value: mandis.length,
      },
      {
        labelKey: "stats.avgTransport",
        value: `₹${avgTransport.toFixed(0)}/quintal`,
      },
      {
        labelKey: "stats.verifiedBuyers",
        value: buyers.length,
      },
    ];
  }, [mandis, qty, buyers]);

  return (
    <>
      <div className={`data-source-note ${dataSource}`}>
        {dataSource === "loading" && t("mandi.checkingLive")}
        {dataSource === "live" && t("mandi.showingLive")}
        {dataSource === "mock" && t("mandi.showingMock")}
      </div>

      <StatsBar stats={stats} />

      <RecommendationBanner
        title={t(recommendation.titleKey)}
        text={t(recommendation.textKey, recommendation.vars)}
      />

      <QuantityBar qty={qty} onChange={setQty} />

      <div className="layout-grid">
        <MapView
          mandis={mandis}
          farmerLocation={farmerLocation}
          selected={selectedMandi}
        />

        <MandiList
          mandis={mandis}
          farmerLocation={farmerLocation}
          qty={qty}
          onSelect={setSelectedMandi}
        />
      </div>

      <div className="layout-grid" style={{ marginTop: 22 }}>
        <BuyerDemandPanel buyers={buyers} />
        <LogisticsPanel options={logisticsOptions} />
      </div>
    </>
  );
}
