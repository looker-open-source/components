import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label"];

import React from 'react';
import { FieldText } from '../..';
export default function Basic(props) {
  const {
      name = 'firstName',
      label = 'First Name'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label
  }, restProps));
}
//# sourceMappingURL=Basic.js.map