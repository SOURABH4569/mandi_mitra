import { useEffect, useState } from "react";
import { getLots, getOffersForLot, respondToOffer } from "../services/backendApi";
import OfferCard from "../components/OfferCard";
import { CROP_KEYS } from "../data/cropMeta";
import { useLanguage } from "../i18n/LanguageContext";

export default function OffersPage() {
  const { t } = useLanguage();
  const [lotsWithOffers, setLotsWithOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backendOk, setBackendOk] = useState(true);

  const loadAll = async () => {
    setLoading(true);
    try {
      const lots = await getLots();
      const withOffers = await Promise.all(
        lots.map(async (lot) => ({
          lot,
          offers: await getOffersForLot(lot.id),
        }))
      );
      setLotsWithOffers(withOffers);
      setBackendOk(true);
    } catch (e) {
      setBackendOk(false);
      setLotsWithOffers([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleRespond = async (offerId, action, counterPrice) => {
    try {
      await respondToOffer(offerId, action, counterPrice);
      await loadAll();
    } catch (e) {
      alert(t("offers.connectError"));
    }
  };

  if (loading) {
    return <div className="coming-soon">{t("offers.loading")}</div>;
  }

  if (!backendOk) {
    return (
      <div className="coming-soon">
        <h2>{t("offers.backendOfflineTitle")}</h2>
        <p>
          {t("offers.backendOfflineDesc")}
          <br />
          <code>cd kisan-mandi-backend && npm start</code>,{" "}
          {t("offers.backendOfflineHint")}
        </p>
      </div>
    );
  }

  if (!lotsWithOffers.length) {
    return (
      <div className="coming-soon">
        <h2>{t("offers.noLotsTitle")}</h2>
        <p>{t("offers.noLotsDesc")}</p>
      </div>
    );
  }

  return (
    <div className="offers-page">
      {lotsWithOffers.map(({ lot, offers }) => (
        <div className="panel lot-offers-group" key={lot.id}>
          <div className="panel-head">
            <h2>
              {CROP_KEYS[lot.crop]?.icon}{" "}
              {CROP_KEYS[lot.crop] ? t(CROP_KEYS[lot.crop].labelKey) : lot.crop}{" "}
              · {lot.quantity} quintal
            </h2>
            <span className="count">
              Grade {lot.grade} · {lot.status}
            </span>
          </div>

          <div className="offer-grid">
            {offers.length === 0 && (
              <div className="lot-empty">{t("offers.noOffersForLot")}</div>
            )}

            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                onRespond={handleRespond}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}