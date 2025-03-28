/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterInterval } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { ChangeEvent } from 'react';
import React from 'react';
import {
  useDateUnits,
  useFiscalIntervalUnits,
} from '../../../../../../constants';
import { showFiscalUnits } from '../../../../utils/show_fiscal_units';

import { GroupSelect } from '../../../GroupSelect';
import { GroupInput } from '../../../GroupInput';

interface IntervalParamProps {
  placement?: 'middle' | 'right';
  item: FilterInterval;
  suffix?: string;
  onChange: (item: FilterInterval) => void;
  field: ILookmlModelExploreField;
}

export const Interval = ({
  placement = 'right',
  item: { unit, value },
  onChange,
  field,
}: IntervalParamProps) => {
  const valueChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange({ value: Number(e.target.value), unit });

  const unitChange = (unit: string) => onChange({ value, unit });

  const fiscalIntervalUnits = useFiscalIntervalUnits();
  const dateUnits = useDateUnits();
  const options = showFiscalUnits(field) ? fiscalIntervalUnits : dateUnits;
  return (
    <>
      <GroupInput
        onChange={valueChange}
        value={String(value)}
        placement="middle"
        data-testid="interval-value"
      />
      <GroupSelect
        value={unit}
        options={options}
        onChange={unitChange}
        placement={placement}
        data-testid="interval-unit"
      />
    </>
  );
};
