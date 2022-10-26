import React from 'react';
import { useDateUnits, useFiscalIntervalUnits } from '../../../../../../constants';
import { showFiscalUnits } from '../../../../utils/show_fiscal_units';
import { GroupSelect } from '../../../GroupSelect';
import { GroupInput } from '../../../GroupInput';
export const Interval = ({
  placement: _placement = 'right',
  item: {
    unit,
    value
  },
  onChange,
  field
}) => {
  const valueChange = e => onChange({
    value: Number(e.target.value),
    unit
  });

  const unitChange = unit => onChange({
    value,
    unit
  });

  const fiscalIntervalUnits = useFiscalIntervalUnits();
  const dateUnits = useDateUnits();
  const options = showFiscalUnits(field) ? fiscalIntervalUnits : dateUnits;
  return React.createElement(React.Fragment, null, React.createElement(GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle"
  }), React.createElement(GroupSelect, {
    value: unit,
    options: options,
    onChange: unitChange,
    placement: _placement
  }));
};
//# sourceMappingURL=Interval.js.map