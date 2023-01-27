

import React, { useState } from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import { FieldDate } from '..';
import { Button } from '../../../../Button';
export default function ControlledFloatingLabel() {
  const [today, setToday] = useState(new Date('04/07/1776'));
  const onClickSelectToday = () => setToday(new Date());
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(Button, {
    onClick: onClickSelectToday
  }, "Today"), React.createElement(FieldDate, {
    externalLabel: false,
    label: "Controlled",
    value: today,
    onChange: setToday
  }));
}
//# sourceMappingURL=ControlledFloatingLabel.js.map