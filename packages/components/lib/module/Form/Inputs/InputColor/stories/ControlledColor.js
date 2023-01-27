

import React, { useState } from 'react';
import { Select } from '../../Select';
import { Space } from '../../../../Layout';
import { Text } from '../../../../Text';
import { InputColor } from '../InputColor';
export default function ControlledColor() {
  const [color, setColor] = useState('red');
  function handleChange(value) {
    setColor(value);
  }
  function handleColorChange(e) {
    setColor(e.currentTarget.value);
  }
  return React.createElement(Space, null, React.createElement(Select, {
    options: [{
      value: 'green'
    }, {
      value: 'purple'
    }, {
      value: 'red'
    }],
    value: color,
    onChange: handleChange,
    autoResize: true
  }), React.createElement(InputColor, {
    value: color,
    onChange: handleColorChange
  }), React.createElement(Text, null, color));
}
//# sourceMappingURL=ControlledColor.js.map