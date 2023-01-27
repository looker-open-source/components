import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["placeholder", "width"];

import React from 'react';
import { InputSearch } from '../';
import { options1kGrouped } from '../../Select/stories/options1k';
export default function GroupedWindowing(props) {
  const {
      placeholder = 'Type your search',
      width = 400
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputSearch, _extends({
    placeholder: placeholder,
    options: options1kGrouped,
    width: width
  }, restProps));
}
//# sourceMappingURL=GroupedWindowing.js.map