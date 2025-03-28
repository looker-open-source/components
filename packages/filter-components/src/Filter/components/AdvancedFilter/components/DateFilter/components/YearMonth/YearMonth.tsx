/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { getMonths } from '@looker/filter-expressions';
import padStart from 'lodash/padStart';
import React from 'react';
import { useTranslation } from '../../../../../../../utils';
import type { FilterParamProps } from '../../../../../../types/filter_param_props';
import { createOptions } from '../../../../../../utils/option_utils';
import { GroupSelect } from '../../../GroupSelect';
import { Year } from '../Year';

export const YearMonth = ({ item, onChange }: FilterParamProps) => {
  const { id, month } = item;
  const { t } = useTranslation('get_months');
  const months = getMonths(t);
  if (!month) return null;

  const monthNumber =
    typeof month === 'string' ? Number.parseInt(month, 10) - 1 : month - 1;
  const monthString = months[monthNumber];

  const monthChange = (value: string) => {
    const monthValue = padStart(
      String(months.indexOf(value as string) + 1),
      2,
      '0'
    );
    onChange(id, {
      month: monthValue,
    });
  };

  return (
    <>
      <GroupSelect
        value={monthString}
        options={createOptions(months)}
        onChange={monthChange}
        placement="middle"
        data-testid="yearmonth-option"
      />
      <Year item={item} onChange={onChange} />
    </>
  );
};
