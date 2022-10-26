import React, { useState } from 'react';
import { Box2, ButtonGroup, ButtonItem } from '../../..';
export default function Disabled() {
  const [value, setValue] = useState([]);
  return React.createElement(Box2, null, React.createElement(ButtonGroup, {
    value: value,
    onChange: setValue,
    disabled: true
  }, React.createElement(ButtonItem, {
    value: "CA"
  }, "California"), React.createElement(ButtonItem, {
    value: "AK"
  }, "Alaska"), React.createElement(ButtonItem, {
    value: "UT"
  }, "Utah")));
}
//# sourceMappingURL=Disabled.js.map