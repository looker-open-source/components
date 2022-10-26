let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

import rgba from 'polished/lib/color/rgba';
import lighten from 'polished/lib/color/lighten';
import mix from 'polished/lib/color/mix';
import { css } from 'styled-components';
export const buttonShadow = (color = 'key') => css(_t || (_t = _`
    box-shadow: 0 0 0 0.15rem ${0};
  `), ({
  theme
}) => rgba(theme.colors[color], 0.25));
export const iconButtonColorDerivation = () => css(_t2 || (_t2 = _`
  color: ${0};
`), ({
  theme
}) => lighten(0.14, theme.colors.neutral));
export const tabShadowColor = () => css(_t3 || (_t3 = _`
  box-shadow: 0 0 0 0.15rem ${0};
`), ({
  theme
}) => rgba(theme.colors.keyFocus, 0.25));
export const calendarMixColor = () => css(_t4 || (_t4 = _`
  color: ${0};
`), ({
  theme: {
    colors
  }
}) => mix(0.65, colors.keyAccent, colors.neutralInteractive));
//# sourceMappingURL=helpers.js.map