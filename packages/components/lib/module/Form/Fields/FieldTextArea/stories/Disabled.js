import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "defaultValue", "disabled"];

import React from 'react';
import { FieldTextArea } from '..';
export default function DisabledStory(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      defaultValue = 'Default value',
      disabled = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTextArea, _extends({
    name: name,
    label: label,
    defaultValue: defaultValue,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map