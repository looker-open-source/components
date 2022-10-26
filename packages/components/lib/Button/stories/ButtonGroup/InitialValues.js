import React, { useState } from 'react';
import { Box2, ButtonGroup, ButtonItem, Paragraph } from '../../..';
export default function Basic() {
  const [value, setValue] = useState(['CA', 'AK']);
  return React.createElement(Box2, null, React.createElement(ButtonGroup, {
    value: value,
    onChange: setValue
  }, React.createElement(ButtonItem, {
    value: "CA"
  }, "California"), React.createElement(ButtonItem, {
    value: "AK"
  }, "Alaska"), React.createElement(ButtonItem, {
    value: "UT"
  }, "Utah")), value.length > 0 ? React.createElement(Paragraph, {
    pl: "u3"
  }, "Current selection: ", value.join(', ')) : '');
}
//# sourceMappingURL=InitialValues.js.map