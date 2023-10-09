const _excluded = ["value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { InputTime } from '..';
import { Button, Space, Paragraph } from '../../../..';
export default function Controlled(props) {
  const {
      value: valueProp = '14:34'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  const handle1400Click = () => setValue('14:00');
  const handle1515Click = () => setValue('15:15');
  const handle1632Click = () => setValue('16:32');
  return React.createElement(Space, null, React.createElement(Button, {
    onClick: handle1400Click
  }, "2:00pm"), React.createElement(Button, {
    onClick: handle1515Click
  }, "3:15pm"), React.createElement(Button, {
    onClick: handle1632Click
  }, "4:32pm"), React.createElement(InputTime, _extends({
    value: value
  }, restProps)), React.createElement(Paragraph, null, "Selected: ", value));
}
//# sourceMappingURL=Controlled.js.map