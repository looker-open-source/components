const _excluded = ["name", "label", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { Button, Space, SpaceVertical } from '../../../../';
import { FieldTextArea } from '../';
export default function Basic(props) {
  const {
      name: _name,
      label: _label,
      value: valueProp = 'Initial Value'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const handleReset = () => setValue(valueProp);
  const handleClear = () => setValue('');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(Button, {
    onClick: handleReset
  }, "Reset"), React.createElement(Button, {
    onClick: handleClear
  }, "Clear")), React.createElement(FieldTextArea, _extends({
    width: "100%",
    label: "Controlled",
    value: value,
    onChange: handleChange
  }, restProps)));
}
//# sourceMappingURL=Controlled.js.map