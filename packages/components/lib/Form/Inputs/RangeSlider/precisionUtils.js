export const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  const n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
};
export const getPrecision = number => {
  if (!isFinite(number)) return 0;
  let e = 1;
  let p = 0;

  while (Math.round(number * e) / e !== number) {
    e *= 10;
    p++;
  }

  return p;
};
//# sourceMappingURL=precisionUtils.js.map