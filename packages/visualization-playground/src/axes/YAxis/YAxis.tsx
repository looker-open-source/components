/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { Core } from '../Core';
import { Fieldset } from '@looker/components';
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CSparkline,
  CAll,
  YAxisConfig,
} from '@looker/visualizations-adapters';
import has from 'lodash/has';

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CScatter
  | CSparkline;

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
  'sparkline',
];

export type YAxisProps = {
  config: SupportedChartConfig;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};

export const YAxis = (props: YAxisProps) => {
  const {
    config,
    config: { y_axis = [] },
    onConfigChange,
  } = props;

  if (!renderFor.includes(config.type) && !has(config, 'y_axis')) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleConfigChange = (axisIndex: number, axis: YAxisConfig) => {
    const draftYAxis = [...y_axis];
    draftYAxis[axisIndex] = axis;
    onConfigChange({ ...config, y_axis: [...draftYAxis] });
  };

  return (
    <Fieldset legend="Y-Axis" defaultOpen accordion>
      <Core axisConfig={y_axis} onAxisChange={handleConfigChange} />
    </Fieldset>
  );
};
