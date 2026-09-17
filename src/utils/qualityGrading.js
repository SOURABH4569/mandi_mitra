// PROTOTYPE QUALITY GRADING — this is a heuristic, not a trained ML model.
// It analyzes the uploaded photo's brightness and color uniformity as a rough
// stand-in for "how clean/uniform does this produce look". For a real product,
// replace `analyzeImageQuality` with a call to a trained CV model (e.g. a
// TensorFlow.js model fine-tuned on a produce-defect dataset, or a backend API).
// Keep the same return shape { grade, score, reasons } so nothing else breaks.

export async function analyzeImageQuality(imageElement) {
  const canvas = document.createElement("canvas");
  const size = 200; // downscale for fast, consistent analysis
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imageElement, 0, 0, size, size);
  const { data } = ctx.getImageData(0, 0, size, size);

  let sum = 0;
  let sumSq = 0;
  let satSum = 0;
  const n = size * size;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2];

    const brightness = (r + g + b) / 3;
    sum += brightness;
    sumSq += brightness * brightness;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    satSum += max === 0 ? 0 : (max - min) / max;
  }

  const avgBrightness = sum / n;
  const variance = sumSq / n - avgBrightness * avgBrightness;
  const uniformity = Math.max(0, 100 - Math.sqrt(variance));
  const avgSaturation = (satSum / n) * 100;

  // Simple scoring: reward uniform surface + healthy brightness range + reasonable saturation.
  const brightnessScore =
    avgBrightness > 60 && avgBrightness < 220 ? 100 : 60;

  const score = Math.round(
    uniformity * 0.5 +
      brightnessScore * 0.3 +
      Math.min(avgSaturation, 100) * 0.2
  );

  let grade, reasons;

  if (score >= 75) {
    grade = "A";
    reasons = [
      "quality.reasonA1",
      "quality.reasonA2",
      "quality.reasonA3",
    ];
  } else if (score >= 55) {
    grade = "B";
    reasons = [
      "quality.reasonB1",
      "quality.reasonB2",
      "quality.reasonB3",
    ];
  } else {
    grade = "C";
    reasons = [
      "quality.reasonC1",
      "quality.reasonC2",
      "quality.reasonC3",
    ];
  }

  return { grade, score, reasons };
}