import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["disabled", "name", "label", "description", "defaultValue"];

import React from 'react';
import { FieldText } from '../..';
export default function Disabled(props) {
  const {
      disabled = true,
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field',
      defaultValue = 'My name'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    disabled: disabled,
    defaultValue: defaultValue,
    name: name,
    label: label,
    description: description
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map