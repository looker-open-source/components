import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["inline", "options", "defaultValue"];

import React from 'react';
import { RadioGroup } from '../';
const mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
export default function Inline(props) {
  const {
      inline = true,
      options = mockOptions,
      defaultValue = 'cheddar'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RadioGroup, _extends({
    defaultValue: defaultValue,
    inline: inline,
    name: "group1",
    options: options
  }, restProps));
}
//# sourceMappingURL=Inline.js.map