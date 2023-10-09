function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Dialog, ButtonOutline } from '../..';
export default function AnimationCallbacks(props) {
  return React.createElement(Dialog, _extends({}, props, {
    content: "Simple Content",
    onAfterClose: () => {
      alert('Close');
    },
    onAfterOpen: () => {
      alert('Open');
    }
  }), React.createElement(ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=AnimationCallbacks.js.map