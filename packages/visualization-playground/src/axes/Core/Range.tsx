/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ChangeEvent, ChangeEventHandler } from 'react';
import React from 'react';
import { isNumeric } from '@looker/visualizations-adapters';
import type {
  YAxisConfig,
  YAxisEndpoint,
} from '@looker/visualizations-adapters';
import { FieldText, Fieldset } from '@looker/components';
import { FieldInfo } from '../../FieldInfo';

export type RangeEditorProps = {
  axis: YAxisConfig;
  onAxisChange: (axis: YAxisConfig) => void;
};

export const Range = (props: RangeEditorProps) => {
  const {
    axis,
    axis: { range = ['auto', 'auto'] },
    onAxisChange,
  } = props;

  const [yMin, yMax] = range;

  const deriveRangeValue = (e: ChangeEvent): YAxisEndpoint => {
    const { value } = e.target as HTMLInputElement;

    switch (true) {
      case isNumeric(value):
        return Number(value);
      case value === '-': // allow typing a negative number
        return value as unknown as number;
      default:
        return 'auto';
    }
  };

  const handleMinChange: ChangeEventHandler<HTMLInputElement> = e => {
    onAxisChange({ ...axis, range: [deriveRangeValue(e), yMax] });
  };

  const handleMaxChange: ChangeEventHandler<HTMLInputElement> = e => {
    onAxisChange({ ...axis, range: [yMin, deriveRangeValue(e)] });
  };

  return (
    <Fieldset inline>
      <FieldText
        label="Y-min"
        value={yMin}
        onChange={handleMinChange}
        detail={<FieldInfo content="Number or 'auto'" />}
      />
      <FieldText
        label="Y-max"
        value={yMax}
        onChange={handleMaxChange}
        detail={<FieldInfo content="Number or 'auto'" />}
      />
    </Fieldset>
  );
};
