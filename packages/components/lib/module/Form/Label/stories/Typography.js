import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "color", "fontSize", "fontWeight"];

import React from 'react';
import { Label } from '..';
export default function Typography(props) {
  const {
      children = 'Label Text',
      color = 'key',
      fontSize = 'xlarge',
      fontWeight = 'normal'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Label, _extends({
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  }, restProps), children);
}
//# sourceMappingURL=Typography.js.map