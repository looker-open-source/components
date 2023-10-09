const _excluded = ["value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { InputTime } from '..';
import { Code, Space, Paragraph } from '../../../..';
export default function Validation(props) {
  const {
      value: valueProp = 'Stardate 2004.14'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const [validationType, setValidationType] = useState();
  const handleValidationFail = () => {
    setValidationType('error');
  };
  return React.createElement(Space, null, React.createElement(InputTime, _extends({
    validationType: validationType,
    value: value,
    onValidationFail: handleValidationFail,
    onChange: setValue
  }, restProps)), validationType === 'error' && React.createElement(Paragraph, {
    color: "critical"
  }, "Error: ", React.createElement(Code, {
    fontSize: "small"
  }, value), " is not a valid 24-hour time string"));
}
//# sourceMappingURL=OnValidationFail.js.map