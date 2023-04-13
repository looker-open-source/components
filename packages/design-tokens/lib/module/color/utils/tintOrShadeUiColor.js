

import getLuminance from 'polished/lib/color/getLuminance';
import shade from 'polished/lib/color/shade';
import tint from 'polished/lib/color/tint';
import { scaleMixAmount } from './scaleMixAmount';

export const tintOrShadeUiColor = (mixAmount, color) => {
  const isBright = getLuminance(color) > 0.5;
  const mixAdjustment = isBright ? mixAmount : scaleMixAmount(mixAmount, 1.5);

  const mixPercent = mixAdjustment > 100 ? 1 : mixAdjustment / 100;
  return (isBright ? shade : tint)(mixPercent, color);
};
//# sourceMappingURL=tintOrShadeUiColor.js.map