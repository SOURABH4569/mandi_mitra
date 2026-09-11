import { computeEconomics, getDemandSupplyStatus, getAverageArrivalVolume } from "../utils/economics";
import MandiRow from "./MandiRow";

import { useLanguage } from "../i18n/LanguageContext";

export default function MandiList({ mandis, farmerLocation, qty, onSelect }) {
  const {t} = useLanguage();
  const avgArrival = getAverageArrivalVolume(mandis);

  const enriched = mandis
    .map((m) => ({
      mandi: m,
      econ: computeEconomics(farmerLocation, m, qty),
      demandStatus: typeof m.arrivalVolume === "number" ? getDemandSupplyStatus(m, avgArrival) : null,
    }))
    .sort((a, b) => b.econ.netPricePerQuintal - a.econ.netPricePerQuintal);

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>{t("mandiList.title")}</h2>
        <span className="count">{t("mandiList.subtitle", { count: enriched.length, qty })}</span>
      </div>
      <div className="mandi-list">
        {enriched.map(({ mandi, econ, demandStatus }, idx) => (
          <MandiRow
            key={mandi.name}
            mandi={mandi}
            econ={econ}
            qty={qty}
            isBest={idx === 0}
            demandStatus={demandStatus}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
