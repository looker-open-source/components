import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["resize", "name", "label"];

import React from 'react';
import { FieldTextArea } from '../..';
export default function NoResize(props) {
  const {
      resize = false,
      name = 'firstName',
      label = 'First Name'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTextArea, _extends({
    name: name,
    label: label,
    resize: resize
  }, restProps));
}
//# sourceMappingURL=NoResize.js.map