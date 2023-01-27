import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["on", "onChange", "label"];

import React, { useState } from 'react';
import { FieldToggleSwitch } from '..';
export default function Controlled(props) {
  const {
      on: _on,
      onChange: _onChange,
      label = 'Development Mode'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [on, setOn] = useState(false);
  const onChange = e => {
    setOn(e.target.checked);
  };
  return React.createElement(FieldToggleSwitch, _extends({
    label: label,
    onChange: onChange,
    on: on
  }, restProps));
}
//# sourceMappingURL=Controlled.js.map