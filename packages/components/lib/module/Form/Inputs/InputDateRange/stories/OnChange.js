

import React, { useState } from 'react';
import { Space, SpaceVertical } from '../../../../Layout';
import { DateFormat } from '../../DateFormat';
import { InputDateRange } from '../InputDateRange';
export default function OnChange() {
  const [selectedDate, setSelectedDate] = useState({
    from: new Date(),
    to: new Date()
  });
  const handleChange = dateRange => {
    setSelectedDate(dateRange);
  };
  return React.createElement(SpaceVertical, null, React.createElement(Space, {
    gap: "xsmall"
  }, React.createElement("strong", null, "Selected:"), React.createElement(DateFormat, null, selectedDate.from), React.createElement("span", null, "\u2013"), React.createElement(DateFormat, null, selectedDate.to)), React.createElement(InputDateRange, {
    onChange: handleChange,
    value: selectedDate
  }));
}
//# sourceMappingURL=OnChange.js.map