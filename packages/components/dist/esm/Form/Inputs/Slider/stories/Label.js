function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Slider } from '..';
import { Label } from '../../../';
export default function LabeledSlider(props) {
  return React.createElement(React.Fragment, null, React.createElement(Label, {
    id: "slider-label"
  }, "Slider:"), React.createElement(Slider, _extends({
    "aria-labelledby": "slider-label"
  }, props)));
}
//# sourceMappingURL=Label.js.map