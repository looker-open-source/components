import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "name", "id", "validationMessage"];

import React from 'react';
import { FieldToggleSwitch } from '..';
export default function ValidationMessage(props) {
  const {
      label = 'Toggle Switch',
      name = 'thumbsUp',
      id = 'id',
      validationMessage = {
        message: 'This is an error',
        type: 'error'
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldToggleSwitch, _extends({
    id: id,
    label: label,
    name: name,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map