import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placeholder", "defaultValue"];

import React from 'react';
import { InputSearch } from '..';
export default function DefaultValue(props) {
  const {
      placeholder = 'Type your search',
      defaultValue = 'test search 0'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    placeholder: placeholder,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=DefaultValue.js.map