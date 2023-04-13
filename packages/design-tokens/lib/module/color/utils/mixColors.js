

import mix from 'polished/lib/color/mix';
export const mixColors = (mixAmount, foreground, background) => mixAmount === 100 ? foreground : mix(mixAmount / 100, foreground, background);
//# sourceMappingURL=mixColors.js.map