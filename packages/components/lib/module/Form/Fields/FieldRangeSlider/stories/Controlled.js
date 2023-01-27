

import React, { useState } from 'react';
import { FieldRangeSlider } from '../';
import { Button } from '../../../../';
import { Space } from '../../../../Layout';
export default function Controlled() {
  const [controlledValue, setControlledValue] = useState([30, 40]);
  const handleChange = value => setControlledValue(value);
  return React.createElement(React.Fragment, null, React.createElement(FieldRangeSlider, {
    label: "Controlled Example",
    description: `${controlledValue[0]} – ${controlledValue[1]}`,
    min: 20,
    max: 50,
    value: controlledValue,
    onChange: handleChange
  }), React.createElement(Space, null, React.createElement(Button, {
    onClick: () => handleChange([25, 45])
  }, "25 \u2014 45"), React.createElement(Button, {
    onClick: () => handleChange([30, 37])
  }, "30 \u2014 37"), React.createElement(Button, {
    onClick: () => handleChange([39, 40])
  }, "39 \u2014 40")));
}
//# sourceMappingURL=Controlled.js.map