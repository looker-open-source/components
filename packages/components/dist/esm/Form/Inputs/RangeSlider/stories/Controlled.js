const _excluded = ["value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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