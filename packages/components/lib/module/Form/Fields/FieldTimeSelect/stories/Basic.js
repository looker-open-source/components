import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue", "interval", "label"];

import React from 'react';
import { FieldTimeSelect } from '../';
export default function Basic(props) {
  const {
      defaultValue = '14:30',
      interval = 10,
      label = 'Select Time'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTimeSelect, _extends({
    label: label,
    defaultValue: defaultValue,
    interval: interval
  }, restProps));
}
//# sourceMappingURL=Basic.js.map