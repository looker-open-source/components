

import React, { useState } from 'react';
import { SpaceVertical, Paragraph, Space, Button } from '../../../../';
import { FieldTime } from '..';
export default function Controlled() {
  const [controlledTime, setControlledTime] = useState('12:00');
  return React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Selected: ", controlledTime), React.createElement(Space, null, React.createElement(Button, {
    onClick: () => {
      setControlledTime('14:00');
    }
  }, "2:00pm"), React.createElement(Button, {
    onClick: () => {
      setControlledTime('15:15');
    }
  }, "3:15pm"), React.createElement(Button, {
    onClick: () => {
      setControlledTime('16:32');
    }
  }, "4:32pm")), React.createElement(FieldTime, {
    label: "Controlled",
    value: controlledTime,
    onChange: setControlledTime
  }));
}
//# sourceMappingURL=Controlled.js.map