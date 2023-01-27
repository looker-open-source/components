import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "validationMessage"];

import React from 'react';
import { FieldTextArea } from '../';
export default function Validation(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      validationMessage = {
        message: 'Some extra information',
        type: 'error'
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTextArea, _extends({
    name: name,
    label: label,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map