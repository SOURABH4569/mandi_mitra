// Crop metadata is language-independent (icon + key); the display label is
// resolved at render time via t(`crop.${key}`) so it follows the active language.
export const CROP_KEYS = {
  wheat:   { icon: "🌾", labelKey: "crop.wheat" },
  mustard: { icon: "🟡", labelKey: "crop.mustard" },
  potato:  { icon: "🥔", labelKey: "crop.potato" },
  onion:   { icon: "🧅", labelKey: "crop.onion" },
  paddy:   { icon: "🌾", labelKey: "crop.paddy" },
  gram:    { icon: "🫘", labelKey: "crop.gram" },
};
