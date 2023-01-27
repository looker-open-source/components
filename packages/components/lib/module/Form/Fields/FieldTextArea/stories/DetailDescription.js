import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "description", "detail"];

import React from 'react';
import { FieldTextArea } from '..';
export default function DetailDescription(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'This is a description',
      detail = '0/50'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTextArea, _extends({
    name: name,
    label: label,
    description: description,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=DetailDescription.js.map