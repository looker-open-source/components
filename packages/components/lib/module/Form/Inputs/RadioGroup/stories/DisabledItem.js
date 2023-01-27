import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["options", "defaultValue"];

import React from 'react';
import { RadioGroup } from '..';
const mockOptions = [{
  disabled: true,
  label: 'Brie',
  value: 'brie'
}, {
  label: 'Cheddar',
  value: 'cheddar'
}, {
  disabled: true,
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Mozzarella',
  value: 'mozzarella'
}];
export default function DisabledItem(props) {
  const {
      options = mockOptions,
      defaultValue = 'cheddar'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(RadioGroup, _extends({
    name: "group1",
    options: options,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=DisabledItem.js.map