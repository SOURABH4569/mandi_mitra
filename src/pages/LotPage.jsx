import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PhotoUploader from "../components/PhotoUploader";
import QualityGradeResult from "../components/QualityGradeResult";
import LotCard from "../components/LotCard";
import { cropMeta } from "../data/mandis";
import { createLot, getLots } from "../services/backendApi";
import { useLanguage } from "../i18n/LanguageContext";

export default function LotPage() {
  const { farmer } = useOutletContext();
  const { t } = useLanguage();

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
          {t("lot.backendOfflineHint")}
          <br />
          <code>cd kisan-mandi-backend && npm start</code>
        </div>
      )}

      <div className="lot-page">
        <div className="panel lot-form-panel">
          <div className="panel-head">
            <h2>{t("lot.formTitle")}</h2>
          </div>

          <div className="lot-form-body">
            <div className="field">
              <label>{t("lot.cropLabel")}</label>

              <div className="crop-grid">
                {Object.entries(cropMeta).map(([key, meta]) => (
                  <div
                    key={key}
                    className={`crop-pill ${
                      crop === key ? "selected" : ""
                    }`}
                    onClick={() => setCrop(key)}
                  >
                    {meta.icon} {t(`crop.${key}`)}
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

        <div className="panel lot-list-panel">
          <div className="panel-head">
            <h2>{t("lot.yourLotsTitle")}</h2>

            <span className="count">
              {t("lot.lotCount", { count: lots.length })}
            </span>
          </div>

          <div className="lot-list">
            {lots.length === 0 && (
              <div className="lot-empty">
                {t("lot.noLots")}
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