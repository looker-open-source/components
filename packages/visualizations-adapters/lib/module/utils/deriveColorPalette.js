
import { hsv } from 'd3-hsv';
import { DEFAULT_SERIES_COLORS } from '../utils';
const colorTransformations = [{
  h: 0,
  s: 0,
  v: 0
},
{
  h: 45,
  s: -0.05,
  v: 0
},
{
  h: 90,
  s: 0,
  v: 0
},
{
  h: -60,
  s: 0,
  v: 0
},
{
  h: -90,
  s: 0,
  v: 0
},
{
  h: 180,
  s: 0,
  v: 0
},
{
  h: 0,
  s: 0.15,
  v: 0.15
},
{
  h: 0,
  s: 0.15,
  v: -0.25
},
{
  h: 0,
  s: -0.25,
  v: -0.25
},
{
  h: 180,
  s: -0.25,
  v: -0.25
}];

export const deriveColorPalette = (baseColors = DEFAULT_SERIES_COLORS) => {
  return colorTransformations.flatMap(t => {
    const {
      h: hueDiff,
      s: satDiff,
      v: valDiff
    } = t;
    return baseColors.map(color => {
      const {
        h,
        s,
        v
      } = hsv(color);
      const newHue = (h + hueDiff) % 360;
      const newSat = Math.max(Math.min(s + satDiff, 1), 0);
      const newVal = Math.max(Math.min(v + valDiff, 1), 0);
      return hsv(newHue, newSat, newVal).hex();
    });
  });
};
//# sourceMappingURL=deriveColorPalette.js.map