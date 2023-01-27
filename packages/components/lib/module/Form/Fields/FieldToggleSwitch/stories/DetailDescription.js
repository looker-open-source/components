import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "name", "id", "description", "detail"];

import React from 'react';
import { FieldToggleSwitch } from '..';
export default function DetailDescription(props) {
  const {
      label = 'Toggle Switch',
      name = 'thumbsUp',
      id = 'id',
      description = 'describe something here.',
      detail = '4/20'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldToggleSwitch, _extends({
    id: id,
    label: label,
    name: name,
    detail: detail,
    description: description
  }, restProps));
}
//# sourceMappingURL=DetailDescription.js.map