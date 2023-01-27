import _extends from "@babel/runtime/helpers/extends";
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