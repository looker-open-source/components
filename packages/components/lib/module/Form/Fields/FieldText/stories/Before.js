import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "before"];

import React from 'react';
import { FieldText } from '../..';
export default function Before(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      before = '$'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    before: before
  }, restProps));
}
//# sourceMappingURL=Before.js.map