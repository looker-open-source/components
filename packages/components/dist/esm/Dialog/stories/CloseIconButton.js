function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Dialog, DialogLayout, Button } from '../..';
export default function CloseIconButton(props) {
  return React.createElement(Dialog, _extends({}, props, {
    content: React.createElement(DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }), React.createElement(Button, null, "Open Dialog"));
}
//# sourceMappingURL=CloseIconButton.js.map