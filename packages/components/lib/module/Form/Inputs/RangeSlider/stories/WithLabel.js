import _extends from "@babel/runtime/helpers/extends";

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