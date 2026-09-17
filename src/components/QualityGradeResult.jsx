import { useLanguage } from "../i18n/LanguageContext";

const GRADE_COLORS = {
  A: "var(--forest)",
  B: "var(--wheat)",
  C: "var(--clay)",
};

export default function QualityGradeResult({ result }) {
  const { t } = useLanguage();

  if (!result) return null;

  return (
    <div className="grade-result">
      <div
        className="grade-circle"
        style={{ borderColor: GRADE_COLORS[result.grade] }}
      >
        <span style={{ color: GRADE_COLORS[result.grade] }}>
          {result.grade}
        </span>
      </div>

      <div className="grade-details">
        <div className="grade-score">
          {t("quality.scoreLabel", { score: result.score })}
        </div>

        <ul>
          {result.reasons.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}