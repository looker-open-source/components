import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["format", "value"];

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