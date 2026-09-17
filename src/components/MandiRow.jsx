import { useState } from "react";
import Sparkline from "./Sparkline";
import DemandBadge from "./DemandBadge";
import { useLanguage } from "../i18n/LanguageContext";

export default function MandiRow({ mandi, econ, qty, isBest, demandStatus, onSelect }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const netClass = econ.netPricePerQuintal < 0 ? "negative" : "";

  return (
    <div
      className={["mandi-row", isBest ? "best" : "", open ? "open" : ""].join(" ")}
      onClick={() => {
        setOpen((o) => !o);
        onSelect(mandi);
      }}
    >
      <div className="mandi-row-top">
        <div>
          <div className="mandi-name">
            {mandi.name}
            {isBest && <span className="badge">{t("mandiRow.best")}</span>}
            {mandi.isLive && (
              <span className="badge live">🔴 {t("mandiRow.live")}</span>
            )}
          </div>

          <div className="mandi-dist">
            {t("mandiRow.distanceArrival", {
              km: econ.distance.toFixed(0),
              arrival: mandi.arrival,
            })}
          </div>

          {demandStatus && (
            <div style={{ marginTop: 6 }}>
              <DemandBadge status={demandStatus} />
            </div>
          )}
        </div>
      </div>

      <div className="mandi-figs">
        <div className="fig">
          <span>{t("mandiRow.mandiPrice")}</span>
          <strong>₹{mandi.price.toLocaleString("en-IN")}</strong>
        </div>

        <div className="fig">
          <span>{t("mandiRow.transport")}</span>
          <strong>−₹{econ.transportCostPerQuintal.toFixed(0)}</strong>
        </div>

        <div className="fig">
          <span>{t("mandiRow.commissionLabour")}</span>
          <strong>
            −₹{(econ.commissionPerQuintal + econ.labourPerQuintal).toFixed(0)}
          </strong>
        </div>

        <div className={`fig net ${netClass}`}>
          <span>{t("mandiRow.netPrice")}</span>
          <strong>₹{econ.netPricePerQuintal.toFixed(0)}</strong>
        </div>
      </div>

      <div className="trend-row">
        <Sparkline trend={mandi.trend} />
        <span className="trend-label">{t("mandiRow.trend7days")}</span>
      </div>

      <div className="breakdown">
        <div>
          <span>{t("mandiRow.totalProduce")}</span>
          <span>{qty} quintal</span>
        </div>

        <div>
          <span>{t("mandiRow.grossAmount")}</span>
          <span>₹{econ.grossTotal.toLocaleString("en-IN")}</span>
        </div>

        <div>
          <span>{t("mandiRow.transportCost")}</span>
          <span>−₹{(econ.transportCostPerQuintal * qty).toFixed(0)}</span>
        </div>

        <div>
          <span>{t("mandiRow.commissionLabourCost")}</span>
          <span>
            −₹
            {(
              (econ.commissionPerQuintal + econ.labourPerQuintal) *
              qty
            ).toFixed(0)}
          </span>
        </div>

        <div className="total">
          <span>{t("mandiRow.netEarning")}</span>
          <span>
            ₹
            {econ.netTotal.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
