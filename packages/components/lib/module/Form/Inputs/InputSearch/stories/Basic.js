import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placeholder"];

import React from 'react';
import { InputSearch } from '../';
export default function Basic(props) {
  const {
      placeholder = 'Type your search'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=Basic.js.map