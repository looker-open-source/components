import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["inline", "name", "label", "detail"];

import React from 'react';
import { FieldText } from '../..';
export default function Inline(props) {
  const {
      inline = true,
      name = 'firstName',
      label = 'First Name',
      detail = 'Your preferred salutation'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    inline: inline,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=Inline.js.map