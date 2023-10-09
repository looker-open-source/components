const _excluded = ["value", "options"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { RadioGroup } from '../';
import { Paragraph, Space, Heading } from '../../../../';
const mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
export default function Controlled(props) {
  const {
      value: valueProp = 'cheddar',
      options = mockOptions
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  return React.createElement(Space, {
    align: "start"
  }, React.createElement(RadioGroup, _extends({
    name: "cheeses",
    value: value,
    onChange: setValue,
    options: options
  }, restProps)), React.createElement("div", null, React.createElement(Heading, null, "Current Selection:"), React.createElement(Paragraph, null, value)));
}
//# sourceMappingURL=Controlled.js.map