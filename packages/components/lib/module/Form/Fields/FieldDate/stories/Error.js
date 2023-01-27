

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldDate } from '..';
export default function Error(externalLabel = true) {
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldDate, {
    defaultValue: new Date('July 25, 2020'),
    label: "Example",
    validationMessage: {
      message: 'Error Message',
      type: 'error'
    }
  }));
}
//# sourceMappingURL=Error.js.map