let _ = t => t,
  _t;

import { css } from 'styled-components';
import { uiBlends } from '../blendPoints';
import { mixScaledColors } from './mixScaledColors';

export const intentUIBlend = (intent, level) => css(_t || (_t = _`
  ${0}
`), ({
  theme: {
    colors
  }
}) => mixScaledColors(uiBlends[level], colors[intent], colors.background));
//# sourceMappingURL=intentUIBlend.js.map