/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Flex } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import pick from 'lodash/pick';
import type { ChangeEvent } from 'react';
import React from 'react';
import { GroupInput } from '../../../GroupInput';
import { GroupSelect } from '../../../GroupSelect';
import { LocationExact } from '../LocationExact';
import { useUnitOptions } from '../../../../utils';

interface LocationCircleProps {
  onChange: (id: string, value: any) => void;
  item: FilterModel;
}

export const LocationCircle = ({ item, onChange }: LocationCircleProps) => {
  const unitOptions = useUnitOptions();

  const distanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) >= 0) {
      onChange?.(item.id, {
        distance: event.currentTarget.value,
        unit: item.unit || 'miles',
      });
    }
  };
  const unitChange = (value: string) => {
    onChange?.(item.id, { unit: value });
  };

  return (
    <Flex flexDirection="row">
      <GroupInput
        value={String(item.distance || '')}
        type="number"
        onChange={distanceChange}
        minWidth="4.5em"
        data-testid="location-circle-distance"
      />
      <GroupSelect
        placement="middle"
        value={item.unit || 'miles'}
        options={unitOptions}
        onChange={unitChange}
        data-testid="location-circle-unit"
      />
      <LocationExact
        item={pick(item, ['id', 'is', 'lat', 'lon', 'type'])}
        onChange={onChange}
        latString="FROM LATITUDE"
      />
    </Flex>
  );
};
