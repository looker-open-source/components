function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { RangeSlider } from '..';
import { Label } from '../../../../';
export default function WithLabel(props) {
  return React.createElement(React.Fragment, null, React.createElement(Label, {
    id: "slider-label"
  }, "Slider:"), React.createElement(RangeSlider, _extends({
    "aria-labelledby": "slider-label"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map