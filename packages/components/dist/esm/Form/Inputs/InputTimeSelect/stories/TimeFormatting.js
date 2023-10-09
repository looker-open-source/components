const _excluded = ["format", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { InputTimeSelect } from '..';
import { SpaceVertical, Space, Heading, Grid } from '../../../../';
export default function TimeFormatting(props) {
  const {
      format: _format,
      value: valueProp = '14:00'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  return React.createElement(Grid, null, React.createElement(SpaceVertical, {
    gap: "u2"
  }, React.createElement(Heading, {
    as: "h3"
  }, "12-hour"), React.createElement(Space, null, React.createElement(InputTimeSelect, _extends({
    format: "12h",
    value: value,
    onChange: setValue
  }, restProps)))), React.createElement(SpaceVertical, {
    gap: "u2"
  }, React.createElement(Heading, {
    as: "h3"
  }, "24-hour"), React.createElement(Space, null, React.createElement(InputTimeSelect, _extends({
    format: "24h",
    value: value,
    onChange: setValue
  }, restProps)))));
}
//# sourceMappingURL=TimeFormatting.js.map