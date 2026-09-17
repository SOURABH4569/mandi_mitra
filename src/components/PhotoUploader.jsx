import { useRef, useState } from "react";
import { analyzeImageQuality } from "../utils/qualityGrading";
import { useLanguage } from "../i18n/LanguageContext";

export default function PhotoUploader({ onGraded }) {
  const { t } = useLanguage();
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setAnalyzing(true);

    const img = new Image();
    img.onload = async () => {
      const result = await analyzeImageQuality(img);
      setAnalyzing(false);
      onGraded(result, url);
    };
    img.src = url;
  };

  return (
    <div className="photo-uploader">
      <div
        className={`photo-drop ${preview ? "has-preview" : ""}`}
        onClick={() => fileInputRef.current.click()}
      >
        {preview ? (
          <img src={preview} alt={t("photo.previewAlt")} />
        ) : (
          <div className="photo-drop-placeholder">
            <span className="photo-icon">📷</span>
            <span>{t("photo.uploadPrompt")}</span>
            <span className="photo-hint">{t("photo.hint")}</span>
          </div>
        )}

        {analyzing && (
          <div className="photo-analyzing">
            {t("photo.analyzing")}
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {preview && !analyzing && (
        <button
          className="btn secondary"
          style={{ marginTop: 10 }}
          onClick={() => fileInputRef.current.click()}
        >
          {t("photo.chooseAnother")}
        </button>
      )}
    </div>
  );
}