import React, { useMemo } from 'react';
import { useFiscalPastUnits, usePastUnits } from '../../../../../../constants';
import { showFiscalUnits } from '../../../../utils/show_fiscal_units';
import { GroupSelect } from '../../../GroupSelect';
import { GroupInput } from '../../../GroupInput';
export const Past = ({
  item,
  onChange,
  field
}) => {
  const {
    id,
    value,
    unit,
    complete
  } = item;

  const valueChange = e => {
    const newValue = String(e.target.value).split(',').map(Number);
    onChange(id, {
      value: newValue
    });
  };

  const unitChange = value => {
    const option = options.find(option => option.value === value);
    onChange(item.id, {
      unit: option === null || option === void 0 ? void 0 : option.unit,
      complete: option === null || option === void 0 ? void 0 : option.complete
    });
  };

  const selectedUnit = complete ? `c_${unit}` : `${unit}`;
  const fiscalPastUnits = useFiscalPastUnits();
  const pastUnits = usePastUnits();
  const options = showFiscalUnits(field) ? fiscalPastUnits : pastUnits;
  const formattedOptions = useMemo(() => options.map(({
    label,
    value
  }) => ({
    label,
    value
  })), []);
  return React.createElement(React.Fragment, null, React.createElement(GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle"
  }), React.createElement(GroupSelect, {
    value: selectedUnit,
    options: formattedOptions,
    onChange: unitChange,
    placement: "right"
  }));
};
//# sourceMappingURL=Past.js.map