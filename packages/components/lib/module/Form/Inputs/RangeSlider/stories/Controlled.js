import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value"];

import React, { useState } from 'react';
import { Button, Heading, Space } from '../../../../';
import { RangeSlider } from '..';
export default function Disabled(props) {
  const {
      value: valueProp = [3, 7]
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [sliderValue, setSliderValue] = useState(valueProp);
  return React.createElement(React.Fragment, null, React.createElement(Heading, null, React.createElement("strong", null, "Value:"), " ", sliderValue[0], " \u2014 ", sliderValue[1]), React.createElement(RangeSlider, _extends({
    onChange: setSliderValue,
    value: sliderValue
  }, restProps)), React.createElement(Space, {
    mt: "small"
  }, React.createElement(Button, {
    onClick: () => setSliderValue([0, 10])
  }, "0 \u2014 10"), React.createElement(Button, {
    onClick: () => setSliderValue([2, 8])
  }, "2 \u2014 8"), React.createElement(Button, {
    onClick: () => setSliderValue([4, 6])
  }, "4 \u2014 6")));
}
//# sourceMappingURL=Controlled.js.map