import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "placeholder"];

import React from 'react';
import { FieldText } from '../..';
export default function Detail(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      placeholder = 'Placeholder text here'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=Placeholder.js.map