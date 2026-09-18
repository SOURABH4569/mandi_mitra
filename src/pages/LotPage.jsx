import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PhotoUploader from "../components/PhotoUploader";
import QualityGradeResult from "../components/QualityGradeResult";
import LotCard from "../components/LotCard";
import { CROP_KEYS } from "../data/cropMeta";
import { createLot, getLots } from "../services/backendApi";
import { useLanguage } from "../i18n/LanguageContext";

export default function LotPage() {
  const { t } = useLanguage();
  const { farmer } = useOutletContext();

  const [crop, setCrop] = useState(farmer?.crop || "wheat");
  const [quantity, setQuantity] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [gradeResult, setGradeResult] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [lots, setLots] = useState([]);
  const [error, setError] = useState("");
  const [backendOk, setBackendOk] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getLots()
      .then((data) => {
        setLots(data);
        setBackendOk(true);
      })
      .catch(() => setBackendOk(false));
  }, []);

  const handleGraded = (result, url) => {
    setGradeResult(result);
    setPhotoUrl(url);
  };

  const handleSubmit = async () => {
    if (!quantity || !harvestDate) {
      setError(t("lot.errorFields"));
      return;
    }

    if (!gradeResult) {
      setError(t("lot.errorPhoto"));
      return;
    }

    setError("");
    setSubmitting(true);

    const payload = {
      crop,
      quantity,
      harvestDate,
      grade: gradeResult.grade,
      score: gradeResult.score,
      photoUrl,
    };

    try {
      const savedLot = await createLot(payload);
      setLots((prev) => [savedLot, ...prev]);
      setBackendOk(true);
    } catch (e) {
      setBackendOk(false);

      const localLot = {
        id: "local_" + Date.now(),
        ...payload,
        status: t("lot.localModeStatus"),
      };

      setLots((prev) => [localLot, ...prev]);
    }

    setSubmitting(false);
    setQuantity("");
    setHarvestDate("");
    setGradeResult(null);
    setPhotoUrl(null);
  };

  return (
    <div>
      {!backendOk && (
        <div className="data-source-note mock">
          {t("lot.backendOfflineNote")}
          <br />
          <code>cd kisan-mandi-backend && npm start</code>{" "}
          {t("lot.backendOfflineHint")}
        </div>
      )}

      <div className="lot-page">
        {/* Create Lot */}
        <div className="panel lot-form-panel">
          <div className="panel-head">
            <div>
              <h2>{t("lot.formTitle")}</h2>
              <p className="panel-subtext">
                {farmer?.name
                  ? `${farmer.name} · ${farmer.village || ""}`
                  : ""}
              </p>
            </div>
          </div>

          <div className="lot-steps">
            <div className={`lot-step ${crop ? "active" : ""}`}>
              <span className="lot-step-number">1</span>
              <span>{t("lot.cropLabel")}</span>
            </div>

            <div className={`lot-step ${quantity ? "active" : ""}`}>
              <span className="lot-step-number">2</span>
              <span>{t("lot.quantityLabel")}</span>
            </div>

            <div className={`lot-step ${harvestDate ? "active" : ""}`}>
              <span className="lot-step-number">3</span>
              <span>{t("lot.harvestDateLabel")}</span>
            </div>

            <div className={`lot-step ${photoUrl ? "active" : ""}`}>
              <span className="lot-step-number">4</span>
              <span>{t("lot.photoLabel")}</span>
            </div>
          </div>

          <div className="lot-form-body">
            <div className="field">
              <label>{t("lot.cropLabel")}</label>

              <div className="crop-grid">
                {Object.entries(CROP_KEYS).map(([key, meta]) => (
                  <div
                    key={key}
                    className={`crop-pill ${crop === key ? "selected" : ""}`}
                    onClick={() => setCrop(key)}
                  >
                    {meta.icon} {t(meta.labelKey)}
                  </div>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="quantity">
                {t("lot.quantityLabel")}
              </label>

              <input
                id="quantity"
                type="number"
                min="1"
                placeholder={t("lot.quantityPlaceholder")}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="harvestDate">
                {t("lot.harvestDateLabel")}
              </label>

              <input
                id="harvestDate"
                type="date"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
              />
            </div>

            <div className="field">
              <label>{t("lot.photoLabel")}</label>

              <PhotoUploader onGraded={handleGraded} />

              <QualityGradeResult result={gradeResult} />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              className="btn"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting
                ? t("lot.submitting")
                : t("lot.submitButton")}
            </button>
          </div>
        </div>

        {/* Existing Lots */}
        <div className="panel lot-list-panel">
          <div className="panel-head">
            <div>
              <h2>{t("lot.yourLotsTitle")}</h2>
              <p className="panel-subtext">
                {t("lot.lotCount", { count: lots.length })}
              </p>
            </div>

            <span className="lot-count-badge">
              {lots.length}
            </span>
          </div>

          <div className="lot-list">
            {lots.length === 0 && (
              <div className="lot-empty">
                <div className="lot-empty-icon">🌾</div>
                <div>{t("lot.noLots")}</div>
              </div>
            )}

            {lots.map((lot) => (
              <LotCard key={lot.id} lot={lot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}