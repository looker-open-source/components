

import React, { useState } from 'react';
import { Button } from '../../../../Button';
import { Space, SpaceVertical } from '../../../../Layout';
import { InputDateRange } from '../InputDateRange';
export default function ExternalUpdates() {
  const [value, setValue] = useState({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  });
  return React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(Button, {
    onClick: () => setValue({
      from: new Date('January 1, 2012'),
      to: new Date('February 15, 2012')
    })
  }, "January 1 - February 15, 2012"), React.createElement(Button, {
    onClick: () => setValue({
      from: new Date('February 9, 2021')
    })
  }, "From: February 9, 2021"), React.createElement(Button, {
    onClick: () => setValue({
      to: new Date('February 9, 2021')
    })
  }, "To: February 9, 2021"), React.createElement(Button, {
    onClick: () => setValue({})
  }, "Clear")), React.createElement(InputDateRange, {
    value: value,
    onChange: setValue
  }));
}
//# sourceMappingURL=ExternalUpdates.js.map