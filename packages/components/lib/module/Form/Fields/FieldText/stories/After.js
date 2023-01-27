import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "after"];

import React from 'react';
import { FieldText } from '../..';
export default function After(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      after = '%'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    after: after
  }, restProps));
}
//# sourceMappingURL=After.js.map