import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "validationMessage"];

import React from 'react';
import { FieldTime } from '..';
export default function ValidationMessage(props) {
  const {
      label = 'Label',
      validationMessage = {
        message: 'validation Message',
        type: 'error'
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTime, _extends({
    label: label,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map