import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled", "defaultValue", "interval", "label"];

import React from 'react';
import { FieldTimeSelect } from '..';
export default function Disabled(props) {
  const {
      disabled = true,
      defaultValue = '14:30',
      interval = 10,
      label = 'Select Time'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTimeSelect, _extends({
    disabled: disabled,
    label: label,
    defaultValue: defaultValue,
    interval: interval
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map