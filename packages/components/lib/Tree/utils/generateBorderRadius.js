let _ = t => t,
    _t;

import { css } from 'styled-components';
import { LkFieldItemLabel } from '../../LkFieldTree/LkFieldItemLabel';
import { TreeItemContent } from '../TreeItemContent';
export const generateBorderRadius = (borderRadius, theme) => {
  const {
    radii
  } = theme;
  return css(_t || (_t = _`
    ${0}, ${0} {
      border-radius: ${0};
    }
  `), TreeItemContent, LkFieldItemLabel, radii[borderRadius]);
};
//# sourceMappingURL=generateBorderRadius.js.map