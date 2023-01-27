import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["required", "name", "label"];

import React from 'react';
import { FieldText } from '../..';
export default function Required(props) {
  const {
      required = true,
      name = 'firstName',
      label = 'First Name'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    required: required
  }, restProps));
}
//# sourceMappingURL=Required.js.map