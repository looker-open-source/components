

import React, { useState } from 'react';
import { ButtonToggle, Fieldset } from '../../../../';
import { FieldTimeSelect } from '..';
export default function Controlled() {
  const [controlledTime, setControlledTime] = useState('09:00');
  const handleClick = value => setControlledTime(value);
  const options = [{
    label: '11:05a',
    value: '11:05'
  }, {
    label: '2:00pm',
    value: '14:00'
  }, {
    label: '3:15pm',
    value: '15:15'
  }, {
    label: '4:30pm',
    value: '16:30'
  }];
  return React.createElement(React.Fragment, null, React.createElement(ButtonToggle, {
    value: controlledTime,
    onChange: handleClick,
    options: options
  }), React.createElement(Fieldset, {
    inline: true
  }, React.createElement(FieldTimeSelect, {
    label: "Standard Time",
    value: controlledTime,
    onChange: setControlledTime,
    autoFocus: true
  }), React.createElement(FieldTimeSelect, {
    label: "Military Time",
    value: controlledTime,
    onChange: setControlledTime,
    format: "24h"
  })));
}
//# sourceMappingURL=Controlled.js.map