function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function RenderProp() {
  return React.createElement(Tooltip, {
    content: "Start editing",
    placement: "right"
  }, tooltipProps => React.createElement(Button, _extends({
    m: "xxxlarge"
  }, tooltipProps), "Open Tooltip"));
}
//# sourceMappingURL=RenderProp.js.map