import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function OfferCard({ offer, onRespond }) {
  const { t } = useLanguage();

  const [showCounter, setShowCounter] = useState(false);
  const [counterValue, setCounterValue] = useState("");

  const isPending = offer.status === "pending";

  return (
    <div className={`offer-card status-${offer.status}`}>
      <div className="offer-top">
        <span className="offer-buyer">
          {offer.buyerName}{" "}
          {offer.buyerVerified && (
            <span className="verified-tick">✓</span>
          )}
        </span>

        <span className="offer-trust">
          {offer.buyerTrustScore}
          {t("offer.trustSuffix")}
        </span>
      </div>

      <div className="offer-price">
        ₹{offer.pricePerQuintal.toLocaleString("en-IN")}
        {t("common.perQuintal")}
      </div>

      {offer.status === "countered" && (
        <div className="offer-counter-note">
          {t("offer.counterNote", {
            price: offer.counterPrice,
          })}
        </div>
      )}

      {offer.status === "accepted" && (
        <div className="offer-status-note accepted">
          {t("offer.accepted")}
        </div>
      )}

      {offer.status === "rejected" && (
        <div className="offer-status-note rejected">
          {t("offer.rejected")}
        </div>
      )}

      {isPending && !showCounter && (
        <div className="offer-actions">
          <button
            className="btn tiny accept"
            onClick={() => onRespond(offer.id, "accept")}
          >
            {t("offer.acceptBtn")}
          </button>

          <button
            className="btn tiny secondary"
            onClick={() => setShowCounter(true)}
          >
            {t("offer.counterBtn")}
          </button>

          <button
            className="btn tiny reject"
            onClick={() => onRespond(offer.id, "reject")}
          >
            {t("offer.rejectBtn")}
          </button>
        </div>
      )}

      {isPending && showCounter && (
        <div className="offer-counter-form">
          <input
            type="number"
            placeholder={t("offer.counterPlaceholder")}
            value={counterValue}
            onChange={(e) => setCounterValue(e.target.value)}
          />

          <button
            className="btn tiny accept"
            onClick={() => {
              if (counterValue) {
                onRespond(offer.id, "counter", counterValue);
              }

              setShowCounter(false);
              setCounterValue("");
            }}
          >
            {t("offer.sendBtn")}
          </button>

          <button
            className="btn tiny secondary"
            onClick={() => setShowCounter(false)}
          >
            {t("offer.cancelBtn")}
          </button>
        </div>
      )}
    </div>
  );
}