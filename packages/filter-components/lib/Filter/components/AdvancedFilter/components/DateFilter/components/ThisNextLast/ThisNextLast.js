import React from 'react';
import { useFiscalThisNextUnits, useFiscalLastUnits, useThisNextUnits, useLastUnits } from '../../../../../../constants';
import { showFiscalUnits } from '../../../../utils/show_fiscal_units';
import { GroupSelect } from '../../../GroupSelect';

const useOptions = ({
  type
}, field) => {
  const showFiscal = showFiscalUnits(field);
  const lastUnits = useLastUnits();
  const fiscalLastUnits = useFiscalLastUnits();
  const thisNextUnits = useThisNextUnits();
  const fiscalThisNextUnits = useFiscalThisNextUnits();

  if (type === 'last') {
    return showFiscal ? fiscalLastUnits : lastUnits;
  }

  return showFiscal ? fiscalThisNextUnits : thisNextUnits;
};

export const ThisNextLast = ({
  item,
  onChange,
  field
}) => {
  const {
    id,
    unit
  } = item;

  const unitChange = value => onChange(id, {
    unit: value
  });

  const options = useOptions(item, field);
  return React.createElement(GroupSelect, {
    value: unit,
    options: options,
    onChange: unitChange,
    placement: "right"
  });
};
//# sourceMappingURL=ThisNextLast.js.map