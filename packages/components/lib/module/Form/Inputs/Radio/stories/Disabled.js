
import React from 'react';
import { Space } from '../../../../Layout';
import { Radio } from '../Radio';
export default function Disabled() {
  return React.createElement(Space, null, React.createElement(Radio, {
    disabled: true
  }), React.createElement(Radio, {
    disabled: true,
    checked: true
  }));
}
//# sourceMappingURL=Disabled.js.map