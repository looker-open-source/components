

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldDate } from '..';
export default function Disabled(externalLabel = true) {
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldDate, {
    defaultValue: new Date('July 25, 2020'),
    label: 'Example',
    disabled: true
  }));
}
//# sourceMappingURL=Disabled.js.map