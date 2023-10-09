/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import type {
  CAll,
  CLine,
  CArea,
  CScatter,
  CSparkline,
} from '@looker/visualizations-adapters';
import { FieldCheckbox } from '@looker/components';

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CLine | CArea | CScatter | CSparkline;

type RenderNullValuesProps = {
  config: SupportedChartConfig;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'line',
  'scatter',
  'sparkline',
];

export const RenderNullValues = (props: RenderNullValuesProps) => {
  const { config, onConfigChange } = props;
  const { render_null_values } = config;

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleChange = (e: ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement;
    const draft = { ...config, render_null_values: checked };
    onConfigChange(draft);
  };

  return (
    <FieldCheckbox
      label="Render Null Values"
      checked={render_null_values}
      onChange={handleChange}
    />
  );
};
