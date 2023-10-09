import { hsv } from 'd3-hsv';
export const stringToSimpleHsv = color => {
  let {
    h,
    s,
    v
  } = hsv(color);
  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  return {
    h,
    s,
    v
  };
};
//# sourceMappingURL=stringToSimpleHsv.js.map