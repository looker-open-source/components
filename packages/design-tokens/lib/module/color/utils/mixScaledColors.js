

import getLuminance from 'polished/lib/color/getLuminance';
import mix from 'polished/lib/color/mix';
import { scaleMixAmount } from './scaleMixAmount';
export const mixScaledColors = (mixAmount, foreground, background) => {
  const colorLuminance = getLuminance(background);

  const luminanceAdjustmentScale = {
    lower: 1.3,
    lowest: 1.7
  };

  let adjustment = mixAmount;
  if (colorLuminance < 0.16 && colorLuminance > 0.08) {
    adjustment = luminanceAdjustmentScale.lower;
  } else if (colorLuminance < 0.08) {
    adjustment = luminanceAdjustmentScale.lowest;
  }

  const mixAdjustment = colorLuminance > 0.3 ? mixAmount : scaleMixAmount(mixAmount, adjustment);
  return mix(mixAdjustment / 100, foreground, background);
};
//# sourceMappingURL=mixScaledColors.js.map