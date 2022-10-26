import React from 'react';
import { Box2, Button, DateFormat, InputDateRange, Popover } from '../../../../..';
export default (() => {
  const [selectedDateRange, setSelectedDateRange] = React.useState({
    from: new Date(2022, 1, 1),
    to: new Date(2022, 1, 2)
  });
  return React.createElement(Popover, {
    content: React.createElement(Box2, {
      p: "u3"
    }, React.createElement(InputDateRange, {
      value: selectedDateRange,
      onChange: setSelectedDateRange
    }))
  }, React.createElement(Button, null, React.createElement(DateFormat, null, selectedDateRange.from), " \u2014", React.createElement(DateFormat, null, selectedDateRange.to)));
});
//# sourceMappingURL=Popover.js.map