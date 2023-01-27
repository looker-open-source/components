import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["required", "defaultValue", "interval", "label"];

import React from 'react';
import { FieldTimeSelect } from '..';
export default function Required(props) {
  const {
      required = true,
      defaultValue = '14:30',
      interval = 10,
      label = 'Select Time'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTimeSelect, _extends({
    interval: interval,
    required: required,
    label: label,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=Required.js.map