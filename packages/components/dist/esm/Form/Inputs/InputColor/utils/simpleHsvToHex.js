import { hsv } from 'd3-hsv';
export const simpleHsvToHex = color => hsv(color.h, color.s, color.v).rgb().hex();
//# sourceMappingURL=simpleHsvToHex.js.map