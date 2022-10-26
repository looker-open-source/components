let _ = t => t,
    _t,
    _t2,
    _t3;

import { css } from 'styled-components';

const textTruncate = props => {
  const {
    truncateLines
  } = props;

  if (truncateLines && truncateLines > 1) {
    return css(_t || (_t = _`
      /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: ${0};
      overflow: hidden;
      /* stylelint-enable */
    `), truncateLines);
  }

  return css(_t2 || (_t2 = _`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `));
};

export const truncateCSS = props => css(_t3 || (_t3 = _`
    ${0}
  `), props.truncate || props.truncateLines ? textTruncate : null);
//# sourceMappingURL=truncate.js.map