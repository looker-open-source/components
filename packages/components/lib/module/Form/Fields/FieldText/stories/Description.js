import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["name", "label", "description"];

import React from 'react';
import { FieldText } from '../..';
export default function Description(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldText, _extends({
    name: name,
    label: label,
    description: description
  }, restProps));
}
//# sourceMappingURL=Description.js.map