import { clearTimeFilterDateTimeModel, dateToFilterDateTimeModel, filterDateTimeModelToDate } from '@looker/filter-expressions';
import React from 'react';
import { DateInput } from '../DateInput';
export const OnDate = ({
  item,
  onChange
}) => {
  const {
    id,
    date
  } = item;

  const dateChange = newValue => {
    const newDateTimeModel = dateToFilterDateTimeModel(newValue);
    onChange(id, {
      date: clearTimeFilterDateTimeModel(newDateTimeModel)
    });
  };

  const actualDate = date ? filterDateTimeModelToDate(date) : new Date(Date.now());
  return React.createElement(DateInput, {
    date: actualDate,
    onChange: dateChange,
    placement: "right"
  });
};
//# sourceMappingURL=OnDate.js.map