

import React, { useState } from 'react';
import { FieldDate } from '..';
import { Button } from '../../../../Button';
import { Popover, PopoverContent } from '../../../../Popover';
export default function Controlled() {
  const [controlledDate, setControlledDate] = useState();
  function handleNextWeekClick() {
    setControlledDate(new Date());
  }
  return React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, React.createElement(Button, {
      onClick: handleNextWeekClick
    }, "Today"), React.createElement(FieldDate, {
      value: controlledDate,
      onChange: setControlledDate
    }))
  }, React.createElement(Button, null, controlledDate ? controlledDate.toString() : 'Select Dates'));
}
//# sourceMappingURL=Controlled.js.map