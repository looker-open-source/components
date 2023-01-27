import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "detail"];

import React from 'react';
import { FieldText } from '../..';
export default function Detail(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      detail = 'Your preferred salutation'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=Detail.js.map