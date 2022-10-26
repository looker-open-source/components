import React, { useState } from 'react';
import { ButtonGroup } from '../../..';
export default function Options() {
  const options = [{
    value: 'CA'
  }, {
    value: 'AK'
  }, {
    value: 'UT'
  }];
  const [value, setValue] = useState([options[0].value]);
  return React.createElement(ButtonGroup, {
    options: options,
    value: value,
    onChange: setValue
  });
}
//# sourceMappingURL=Options.js.map