import _extends from "@babel/runtime/helpers/extends";

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