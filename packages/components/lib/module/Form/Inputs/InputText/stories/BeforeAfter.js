

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { SpaceVertical, Space } from '../../../../Layout';
import { Tooltip } from '../../../../Tooltip';
import { Span } from '../../../../Text';
import { InputText } from '../InputText';
export default function BeforeAfter() {
  return React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(InputText, {
    iconBefore: React.createElement(MaterialIcons.Settings, null)
  }), React.createElement(InputText, {
    iconAfter: React.createElement(MaterialIcons.Done, null)
  })), React.createElement(Space, null, React.createElement(InputText, {
    before: "$"
  }), React.createElement(InputText, {
    after: React.createElement(Tooltip, {
      placement: "top",
      content: "Try again"
    }, React.createElement(Span, {
      color: "critical",
      fontSize: "xsmall"
    }, "Oops!"))
  })));
}
//# sourceMappingURL=BeforeAfter.js.map