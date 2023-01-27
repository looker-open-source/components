import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["required", "defaultValue", "description", "detail", "label"];

import React from 'react';
import { FieldTime } from '..';
export default function Required(props) {
  const {
      required = true,
      defaultValue = '14:34',
      description = 'this is the description',
      detail = 'detail',
      label = 'Label'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTime, _extends({
    label: label,
    defaultValue: defaultValue,
    description: description,
    detail: detail,
    required: required
  }, restProps));
}
//# sourceMappingURL=Required.js.map