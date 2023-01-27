import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "name", "id", "disabled"];

import React from 'react';
import { FieldToggleSwitch } from '..';
export default function Checked(props) {
  const {
      label = 'Toggle Switch',
      name = 'thumbsUp',
      id = 'id',
      disabled = true
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldToggleSwitch, _extends({
    id: id,
    label: label,
    name: name,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map