import { Box2, ChipButton, InputDateRange, Popover } from '@looker/components';
import React from 'react';
import { FILTERS_DATE_FORMAT, formatDate } from '../../utils/format_date';
export const DayRangeInput = ({
  value,
  onChange
}) => {
  const handleChange = (d = {}) => {
    const newFrom = d.from || new Date(Date.now());
    const newTo = d.to || new Date(Date.now());
    const newDateRange = {
      from: new Date(newFrom.getFullYear(), newFrom.getMonth(), newFrom.getDate()),
      to: new Date(newTo.getFullYear(), newTo.getMonth(), newTo.getDate())
    };
    onChange(newDateRange);
  };

  const formattedValue = `${formatDate(value.from)} \u2013 ${formatDate(value.to)}`;
  return React.createElement(Popover, {
    content: React.createElement(Box2, {
      p: "u3"
    }, React.createElement(InputDateRange, {
      onChange: handleChange,
      value: value,
      dateStringFormat: FILTERS_DATE_FORMAT
    })),
    placement: "bottom-start"
  }, React.createElement(ChipButton, null, formattedValue));
};
//# sourceMappingURL=DayRangeInput.js.map