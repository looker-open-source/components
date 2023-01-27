import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["hideSearchIcon", "placeholder"];

import React from 'react';
import { InputSearch } from '../';
export default function HideSearchIcon(props) {
  const {
      hideSearchIcon = false,
      placeholder = 'No search icon here'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    hideSearchIcon: hideSearchIcon,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=HideSearchIcon.js.map