import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["isVisible"];

import React, { forwardRef } from 'react';
import { Box } from '../../../../Layout';
export const ComboboxWrapper = forwardRef((_ref, ref) => {
  let {
      isVisible
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Box, _extends({}, rest, {
    ref: ref,
    role: rest.role ? rest.role : 'combobox',
    "aria-haspopup": "true",
    "aria-owns": isVisible ? `listbox-${rest.id}` : undefined,
    "aria-label": `${rest.wrapperAriaLabel || ''} combobox`,
    "aria-expanded": isVisible
  }));
});
//# sourceMappingURL=ComboboxWrapper.js.map