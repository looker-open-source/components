/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Box2 } from '@looker/components';
import type { FilterModel, FilterInterval } from '@looker/filter-expressions';
import type { ILookmlModelExploreField } from '@looker/sdk';
import React from 'react';
import { useTranslation } from '../../../../../../../utils';
import { GroupSelect } from '../../../GroupSelect';
import { MidInputLabel } from '../../../MidInputLabel';
import { Interval } from '../Interval';

const isInterval = (
  interval?: FilterInterval | string
): interval is FilterInterval => {
  return interval !== undefined && typeof interval !== 'string';
};

interface RelativeParamProps {
  item: FilterModel;
  field: ILookmlModelExploreField;
  onChange: (id: string, item: Partial<FilterModel>) => void;
}

export const Relative = ({ item, onChange, field }: RelativeParamProps) => {
  const { t } = useTranslation('Relative');
  const { id, intervalType, startInterval, endInterval } = item;
  const options = [
    { value: 'ago', label: t('ago') },
    { value: 'from now', label: t('from now') },
  ];

  const intervalTypeChange = (value: string) => {
    onChange(id, { intervalType: value });
  };

  const startChange = (interval: FilterInterval) => {
    onChange(id, { startInterval: interval });
  };

  const endChange = (interval: FilterInterval) => {
    onChange(id, { endInterval: interval });
  };

  if (!isInterval(startInterval) || !isInterval(endInterval)) return null;

  return (
    <Box2 display="flex" bg="field">
      <Interval
        placement="middle"
        item={startInterval}
        onChange={startChange}
        field={field}
      />
      <GroupSelect
        value={intervalType}
        options={options}
        onChange={intervalTypeChange}
        placement="middle"
        data-testid="relative-option"
      />
      <MidInputLabel>FOR</MidInputLabel>
      <Interval item={endInterval} onChange={endChange} field={field} />
    </Box2>
  );
};
