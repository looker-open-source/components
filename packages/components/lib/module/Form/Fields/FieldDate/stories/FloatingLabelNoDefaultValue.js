

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldDate } from '..';
export default function FloatingLabelNoDefaultValue(externalLabel) {
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel
      }
    }
  }, React.createElement(FieldDate, {
    label: 'Example',
    externalLabel: false
  }));
}
//# sourceMappingURL=FloatingLabelNoDefaultValue.js.map