import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "defaultValue"];

import React from 'react';
import { FieldTextArea } from '..';
export default function DefaultValue(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      defaultValue = 'Default value'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTextArea, _extends({
    name: name,
    label: label,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=DefaultValue.js.map