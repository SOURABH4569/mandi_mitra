export default function RecommendationBanner({ title, text }) {
  return (
    <div className="rec-banner">
      <div className="icon">📈</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
