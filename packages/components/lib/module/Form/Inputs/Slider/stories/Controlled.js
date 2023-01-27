import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "onChange"];

import React, { useState } from 'react';
import { Slider } from '..';
import { Paragraph, Space } from '../../../../';
export default function Controlled(props) {
  const {
      value: valueProp = 5,
      onChange: _onChange
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [sliderValue, setSliderValue] = useState(valueProp);
  const onChange = event => {
    setSliderValue(event.target.value);
  };
  return React.createElement(Space, null, React.createElement(Slider, _extends({
    onChange: onChange,
    value: sliderValue
  }, restProps)), React.createElement(Paragraph, null, React.createElement("strong", null, "Value:"), " ", sliderValue));
}
//# sourceMappingURL=Controlled.js.map