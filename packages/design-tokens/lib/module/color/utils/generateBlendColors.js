

import { textBlends, uiBlends } from '../blendPoints';
import { mixColors } from './mixColors';
import { tintOrShadeUiColor } from './tintOrShadeUiColor';

export const generateBlendColors = ({
  background,
  text
}) => ({
  ui1: tintOrShadeUiColor(uiBlends[0], background),
  ui2: tintOrShadeUiColor(uiBlends[1], background),
  ui3: tintOrShadeUiColor(uiBlends[2], background),
  ui4: tintOrShadeUiColor(uiBlends[3], background),
  ui5: tintOrShadeUiColor(uiBlends[4], background),
  text1: mixColors(textBlends[0], text, background),
  text2: mixColors(textBlends[1], text, background),
  text3: mixColors(textBlends[2], text, background),
  text4: mixColors(textBlends[3], text, background),
  text5: mixColors(textBlends[4], text, background)
});
//# sourceMappingURL=generateBlendColors.js.map