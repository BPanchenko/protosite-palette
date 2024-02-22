// @ts-check

export const accentKeys = Object.freeze(["A100", "A200", "A400", "A700"]);

export const toneKeys = Object.freeze([
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
]);

export const accentCorrelationByDefault = (t) => [t, t];

export const toneCorrelationByDefault = (t) => t;
