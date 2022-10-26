import { Flex } from '@looker/components';
import { addDays, dateToFilterDateTimeModel, filterDateTimeModelToDate } from '@looker/filter-expressions';
import React from 'react';
import { MidInputLabel } from '../../../MidInputLabel';
import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { useTranslation } from '../../../../../../../utils';
export const DateRange = ({
  item,
  onChange,
  placement,
  showTime
}) => {
  const {
    id,
    start,
    end
  } = item;
  const startDate = start ? filterDateTimeModelToDate(start) : new Date(Date.now());
  const endDate = end ? filterDateTimeModelToDate(end) : new Date(Date.now());

  const startChange = newStart => {
    if (newStart > endDate) {
      const newEnd = addDays(newStart, 1);
      onChange(id, {
        start: dateToFilterDateTimeModel(newStart),
        end: dateToFilterDateTimeModel(newEnd)
      });
    } else {
      onChange(id, {
        start: dateToFilterDateTimeModel(newStart)
      });
    }
  };

  const endChange = newEnd => {
    if (newEnd < startDate) {
      const newStart = addDays(newEnd, -1);
      onChange(id, {
        start: dateToFilterDateTimeModel(newStart),
        end: dateToFilterDateTimeModel(newEnd)
      });
    } else {
      onChange(id, {
        end: dateToFilterDateTimeModel(newEnd)
      });
    }
  };

  const {
    t
  } = useTranslation('DateRange');
  return React.createElement(Flex, null, React.createElement(DateInput, {
    date: startDate,
    onChange: startChange,
    placement: placement === 'right' ? 'middle' : 'left'
  }), showTime && React.createElement(TimeInput, {
    date: startDate,
    onChange: startChange,
    placement: "middle"
  }), React.createElement(MidInputLabel, null, t('until (before)')), React.createElement(DateInput, {
    date: endDate,
    onChange: endChange,
    placement: showTime ? 'middle' : 'right'
  }), showTime && React.createElement(TimeInput, {
    date: endDate,
    onChange: endChange,
    placement: "right"
  }));
};
//# sourceMappingURL=DateRange.js.map