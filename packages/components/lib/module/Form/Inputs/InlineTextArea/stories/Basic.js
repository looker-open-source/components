

import React from 'react';
import { SpaceVertical } from '../../../../';
import { InlineTextArea } from '../';
export default function Basic() {
  return React.createElement(SpaceVertical, null, React.createElement(InlineTextArea, {
    placeholder: "Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
  }), React.createElement(InlineTextArea, {
    value: "Type here and keep typing to see multiple lines effect of this component it will wrap to a next line..."
  }));
}
//# sourceMappingURL=Basic.js.map