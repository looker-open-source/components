let _ = t => t,
  _t;

import darken from 'polished/lib/color/darken';
import getLuminance from 'polished/lib/color/getLuminance';
import lighten from 'polished/lib/color/lighten';
import { css } from 'styled-components';

export const generateIntentShade = color => {
  const intentColorLuminance = getLuminance(color);
  const adjustAmount = intentColorLuminance > 0.3 ? intentColorLuminance * 0.55 : 0.125;
  return css(_t || (_t = _`
    ${0}
  `), ({
    theme: {
      colors
    }
  }) => getLuminance(colors.background) > 0.5 ? darken(adjustAmount, color) : lighten(adjustAmount, color));
};
//# sourceMappingURL=generateIntentShade.js.map