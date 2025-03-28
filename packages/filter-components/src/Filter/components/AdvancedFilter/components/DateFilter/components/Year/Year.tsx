/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import type { FilterParamProps } from '../../../../../../types/filter_param_props';
import { GroupInput } from '../../../GroupInput';
import { validateYear } from '../../utils/validateYear';

export const Year = ({
  item: { id, year },
  onChange,
}: Pick<FilterParamProps, 'item' | 'onChange'>) => {
  const [value, setValue] = useState(String(year));
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (validateYear(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validateYear(newValue)) {
      setIsValid(true);
      if (String(year) !== newValue) {
        onChange(id, { year: newValue });
      }
    }
  };

  return (
    <GroupInput
      onChange={valueChange}
      value={value}
      placement="right"
      onBlur={handleBlur}
      validationType={isValid ? undefined : 'error'}
      date-testid="year-value"
    />
  );
};
