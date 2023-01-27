import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placeholder", "summary"];

import React from 'react';
import { InputSearch } from '../';
export default function Summary(props) {
  const {
      placeholder = 'Type your search',
      summary = 'summary text'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    placeholder: placeholder,
    summary: summary
  }, restProps));
}
//# sourceMappingURL=Summary.js.map