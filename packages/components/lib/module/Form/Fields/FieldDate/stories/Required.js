

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldDate } from '..';
export default function Required(externalLabel = true) {
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldDate, {
    defaultValue: new Date('July 25, 2020'),
    label: 'Example',
    required: true
  }));
}
//# sourceMappingURL=Required.js.map