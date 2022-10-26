let _ = t => t,
    _t;

import { useMemo, useState } from 'react';
import { css } from 'styled-components';
export const focusVisibleCSSWrapper = styleFn => css(_t || (_t = _`
  &:focus-visible {
    ${0}
  }
  ${0}
`), styleFn, ({
  focusVisible
}) => focusVisible && styleFn);
export const useFocusVisible = ({
  onBlur,
  onKeyUp
}) => {
  const [isFocusVisible, setFocusVisible] = useState(false);
  return useMemo(() => {
    return {
      focusVisible: isFocusVisible,
      onBlur: e => {
        setFocusVisible(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      },
      onKeyUp: e => {
        if (e.currentTarget === e.target) {
          setFocusVisible(true);
        }

        onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(e);
      }
    };
  }, [isFocusVisible, onBlur, onKeyUp]);
};
//# sourceMappingURL=useFocusVisible.js.map