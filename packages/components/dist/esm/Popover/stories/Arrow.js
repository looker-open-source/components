function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Button } from '../../Button';
import { Box } from '../../Layout';
import { PopoverContent } from '../Layout';
import { Popover } from '../Popover';
export default function Arrow(props) {
  return React.createElement(Box, {
    width: 400,
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, React.createElement(Popover, _extends({}, props, {
    isOpen: true,
    content: React.createElement(PopoverContent, null, "Some content"),
    arrow: true
  }), React.createElement(Button, null, "Open")));
}
//# sourceMappingURL=Arrow.js.map