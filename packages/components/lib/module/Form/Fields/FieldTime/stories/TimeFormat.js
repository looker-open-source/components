import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["defaultValue", "description", "detail", "label", "format"];

import React from 'react';
import { FieldTime } from '..';
export default function TimeFormat(props) {
  const {
      defaultValue = '14:34',
      description = 'set "format" prop to either `12h` or `24h`',
      detail = 'detail',
      label = 'Label',
      format = '24h'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldTime, _extends({
    format: format,
    label: label,
    defaultValue: defaultValue,
    description: description,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=TimeFormat.js.map