
import { hsv } from 'd3-hsv';
import { DEFAULT_SERIES_COLORS } from '.';

const fallbackVal = (v1, v2) => {
  if (isNaN(v1)) {
    return fallbackVal(v2, 0);
  }
  return v1;
};

export const deriveColorBlend = (baseColor = DEFAULT_SERIES_COLORS[0], targetColor = DEFAULT_SERIES_COLORS[1], steps = 5) => {
  const colorStops = Math.max(steps - 1, 1);

  const baseHSV = hsv(baseColor);
  const targetHSV = hsv(targetColor);
  const baseHue = fallbackVal(baseHSV.h, targetHSV.h);
  const targetHue = fallbackVal(targetHSV.h, baseHSV.h);
  const baseSat = fallbackVal(baseHSV.s, targetHSV.s);
  const targetSat = fallbackVal(targetHSV.s, baseHSV.s);
  const {
    v: baseVal
  } = baseHSV;
  const {
    v: targetVal
  } = targetHSV;
  const hPerStep = (targetHue - baseHue) / colorStops;
  const sPerStep = (targetSat - baseSat) / colorStops;
  const vPerStep = (targetVal - baseVal) / colorStops;
  return new Array(steps).fill('').map((_, i) => {
    return hsv(baseHue + hPerStep * i, baseSat + sPerStep * i, baseVal + vPerStep * i).hex();
  });
};
//# sourceMappingURL=deriveColorBlend.js.map