import { getMonths } from '@looker/filter-expressions';
import padStart from 'lodash/padStart';
import React from 'react';
import { useTranslation } from '../../../../../../../utils';
import { createOptions } from '../../../../../../utils/option_utils';
import { GroupSelect } from '../../../GroupSelect';
import { GroupInput } from '../../../GroupInput';
export const YearMonth = ({
  item: {
    id,
    month,
    year
  },
  onChange
}) => {
  const {
    t
  } = useTranslation('get_months');
  const months = getMonths(t);
  const monthNumber = Number.parseInt(month, 10) - 1;
  const monthString = months[monthNumber];

  const yearChange = e => {
    onChange(id, {
      year: e.target.value
    });
  };

  const monthChange = value => {
    const monthValue = padStart(String(months.indexOf(value) + 1), 2, '0');
    onChange(id, {
      month: monthValue
    });
  };

  return React.createElement(React.Fragment, null, React.createElement(GroupSelect, {
    value: monthString,
    options: createOptions(months),
    onChange: monthChange,
    placement: "middle"
  }), React.createElement(GroupInput, {
    onChange: yearChange,
    value: year,
    placement: "right"
  }));
};
//# sourceMappingURL=YearMonth.js.map