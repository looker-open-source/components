import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["required", "name", "label", "validationMessage"];

import React from 'react';
import { FieldText } from '../..';
export default function ValidationMessage(props) {
  const {
      required = true,
      name = 'firstName',
      label = 'First Name',
      validationMessage = {
        message: 'This is an error',
        type: 'error'
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    required: required,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map