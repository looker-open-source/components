function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { InputTime } from '..';
import { Label, Space } from '../../../..';
export default function WithLabel(props) {
  return React.createElement(Space, null, React.createElement(Label, {
    htmlFor: "demo-id"
  }, "Label Text"), React.createElement(InputTime, _extends({
    id: "demo-id"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map