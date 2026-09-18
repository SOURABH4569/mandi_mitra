import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";

import QuantityBar from "../components/QuantityBar";
import RecommendationBanner from "../components/RecommendationBanner";
import MandiList from "../components/MandiList";
import MapView from "../components/MapView";
import StatsBar from "../components/StatsBar";
import BuyerDemandPanel from "../components/BuyerDemandPanel";
import LogisticsPanel from "../components/LogisticsPanel";

import {
  mandis as mockMandis,
  farmerLocation,
  cropMeta,
} from "../data/mandis";

import { getBuyersForCrop } from "../data/buyers";
import { getLogisticsForCrop } from "../data/logistics";

import {
  computeEconomics,
  getRecommendation,
} from "../utils/economics";

import { fetchLiveMandiPrices } from "../services/mandiApi";
import { useLanguage } from "../i18n/LanguageContext";

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

  const buyers = useMemo(
    () => getBuyersForCrop(crop),
    [crop]
  );

  const logisticsOptions = useMemo(
    () => getLogisticsForCrop(crop),
    [crop]
  );

  const mandiEconomics = useMemo(() => {
    return mandis
      .map((mandi) => ({
        mandi,
        econ: computeEconomics(
          farmerLocation,
          mandi,
          qty
        ),
      }))
      .sort(
        (a, b) =>
          b.econ.netPricePerQuintal -
          a.econ.netPricePerQuintal
      );
  }, [mandis, qty]);

  const bestMandi = mandiEconomics[0] || null;

  const recommendation = useMemo(
    () => getRecommendation(mandis),
    [mandis]
  );

  const stats = useMemo(() => {
    if (!mandiEconomics.length) return [];

    const bestNet =
      mandiEconomics[0].econ.netPricePerQuintal;

    const avgTransport =
      mandiEconomics.reduce(
        (sum, item) =>
          sum + item.econ.transportCostPerQuintal,
        0
      ) / mandiEconomics.length;

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
  }, [mandis, mandiEconomics, buyers]);

  return (
    <>
      <div className={`data-source-note ${dataSource}`}>
        {dataSource === "loading" &&
          t("mandi.checkingLive")}

        {dataSource === "live" &&
          t("mandi.showingLive")}

        {dataSource === "mock" &&
          t("mandi.showingMock")}
      </div>

      {bestMandi && (
        <section className="best-mandi-card">
          <div className="best-mandi-main">
            <div className="best-mandi-icon">
              📍
            </div>

            <div>
              <div className="best-mandi-label">
                {t("mandi.bestForYou")}
              </div>

              <h2>{bestMandi.mandi.name}</h2>

              <p>
                {t("mandi.bestDistance", {
                  km: bestMandi.econ.distance.toFixed(0),
                })}
              </p>
            </div>
          </div>

          <div className="best-mandi-numbers">
            <div>
              <span>{t("mandi.bestMandiPrice")}</span>
              <strong>
                ₹
                {bestMandi.mandi.price.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div>
              <span>{t("mandi.bestNetEarning")}</span>
              <strong>
                ₹
                {bestMandi.econ.netTotal.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 0,
                  }
                )}
              </strong>
            </div>
          </div>
        </section>
      )}

      <StatsBar stats={stats} />

      <RecommendationBanner
        title={t(recommendation.titleKey)}
        text={t(
          recommendation.textKey,
          recommendation.vars
        )}
      />

      <QuantityBar
        qty={qty}
        onChange={setQty}
      />

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

      <div
        className="layout-grid"
        style={{ marginTop: 22 }}
      >
        <BuyerDemandPanel buyers={buyers} />
        <LogisticsPanel options={logisticsOptions} />
      </div>
    </>
  );
}