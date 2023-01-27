import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["autoResize", "placeholder"];

import React from 'react';
import { InputSearch } from '../';
export default function AutoResize(props) {
  const {
      autoResize = true,
      placeholder = 'Start typing to resize'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    autoResize: autoResize,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=AutoResize.js.map