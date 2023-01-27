

import React from 'react';
import { SpaceVertical } from '../../../../Layout';
import { InputColor } from '../InputColor';
export default function Combined() {
  return React.createElement(SpaceVertical, null, React.createElement(InputColor, null), React.createElement(InputColor, {
    value: "green"
  }), React.createElement(InputColor, {
    defaultValue: "purple"
  }), React.createElement(InputColor, {
    disabled: true
  }), React.createElement(InputColor, {
    defaultValue: "green",
    disabled: true
  }), React.createElement(InputColor, {
    defaultValue: "green",
    readOnly: true
  }));
}
//# sourceMappingURL=Combined.js.map