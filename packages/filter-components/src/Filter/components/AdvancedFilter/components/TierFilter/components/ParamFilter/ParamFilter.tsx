/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel, TierFilterType } from '@looker/filter-expressions';
import React from 'react';
import type { Option } from '../../../../../../types/option';
import { GroupSelect } from '../../../GroupSelect';

interface ParamFilterProps {
  item: FilterModel<TierFilterType>;
  onChange?: (id?: string, props?: any) => void;
  enumerations?: Option[];
  validationMessage?: ValidationMessageProps;
}

export const ParamFilter = ({
  item,
  onChange,
  enumerations,
  validationMessage,
}: ParamFilterProps) => {
  const handleChange = (value: string) => {
    onChange?.(item.id, { value: [value] });
  };

  return (
    <GroupSelect
      placement="right"
      value={item.value && item.value[0]}
      onChange={handleChange}
      options={enumerations || []}
      validationType={validationMessage?.type}
      data-testid="param-option"
    />
  );
};
