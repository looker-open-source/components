import { dateToFilterDateTimeModel, filterDateTimeModelToDate } from '@looker/filter-expressions';
import React, { useMemo } from 'react';
import { useBeforeOrAfterUnits, useFiscalBeforeOrAfterUnits } from '../../../../../../constants';
import { useTranslation } from '../../../../../../../utils';
import { showFiscalUnits } from '../../../../utils/show_fiscal_units';
import { GroupSelect } from '../../../GroupSelect';
import { DateInput } from '../DateInput';
import { TimeInput } from '../TimeInput';
import { GroupInput } from '../../../GroupInput';
export const BeforeAfter = ({
  item,
  onChange,
  showTime,
  field
}) => {
  const {
    t
  } = useTranslation('BeforeAfter');
  const options = [{
    value: 'absolute',
    label: t('absolute')
  }, {
    value: 'relative',
    label: t('relative')
  }];
  const {
    id,
    range,
    date,
    unit,
    value,
    fromnow
  } = item;

  const rangeChange = value => {
    onChange(id, {
      range: value
    });
  };

  const valueChange = e => onChange(id, {
    value: Number(e.target.value)
  });

  const unitChange = value => {
    const option = unitOptions.find(option => option.value === value);
    onChange(id, {
      unit: option === null || option === void 0 ? void 0 : option.unit,
      fromnow: option === null || option === void 0 ? void 0 : option.fromnow
    });
  };

  const dateChange = newDate => {
    const newDateTimeModel = dateToFilterDateTimeModel(newDate);
    onChange(id, {
      date: newDateTimeModel
    });
  };

  const actualDate = date ? filterDateTimeModelToDate(date) : new Date();
  const selectedValue = fromnow ? `f_${unit}` : `${unit}`;
  const fiscalBeforeOrAfterUnits = useFiscalBeforeOrAfterUnits();
  const beforeOrAfterUnits = useBeforeOrAfterUnits();
  const unitOptions = showFiscalUnits(field) ? fiscalBeforeOrAfterUnits : beforeOrAfterUnits;
  const formattedUnitOptions = useMemo(() => unitOptions.map(({
    label,
    value
  }) => ({
    label,
    value
  })), [unitOptions]);
  return React.createElement(React.Fragment, null, React.createElement(GroupSelect, {
    placement: "middle",
    value: range,
    options: options,
    onChange: rangeChange
  }), range === 'relative' && React.createElement(React.Fragment, null, selectedValue !== 'now' && React.createElement(GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle",
    "data-testid": "number-value"
  }), React.createElement(GroupSelect, {
    placement: "right",
    value: selectedValue,
    options: formattedUnitOptions,
    onChange: unitChange
  })), range === 'absolute' && React.createElement(React.Fragment, null, React.createElement(DateInput, {
    date: actualDate,
    onChange: dateChange,
    placement: showTime ? 'middle' : 'right'
  }), showTime && React.createElement(TimeInput, {
    date: actualDate,
    onChange: dateChange,
    placement: "right"
  })));
};
export default BeforeAfter;
//# sourceMappingURL=BeforeAfter.js.map