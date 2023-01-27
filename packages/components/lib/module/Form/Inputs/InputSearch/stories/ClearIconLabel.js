import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["clearIconLabel", "value"];

import React from 'react';
import { InputSearch } from '../';
export default function ClearIconLabel(props) {
  const {
      clearIconLabel = 'Reset this seach field',
      value = 'my query'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    clearIconLabel: clearIconLabel,
    value: value
  }, restProps));
}
//# sourceMappingURL=ClearIconLabel.js.map