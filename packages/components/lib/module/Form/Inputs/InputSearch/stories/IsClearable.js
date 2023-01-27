import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placeholder", "defaultValue", "isClearable"];

import React from 'react';
import { InputSearch } from '../';
export default function IsClearable(props) {
  const {
      placeholder = 'Type your search',
      defaultValue = 'test search 1',
      isClearable = false
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    placeholder: placeholder,
    defaultValue: defaultValue,
    isClearable: isClearable
  }, restProps));
}
//# sourceMappingURL=IsClearable.js.map