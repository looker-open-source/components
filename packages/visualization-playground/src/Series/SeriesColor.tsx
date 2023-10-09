/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ChangeEvent } from 'react';
import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CScatter,
  CSparkline,
  CSeriesBasic,
  CSingleValue,
  CPie,
} from '@looker/visualizations-adapters';
import has from 'lodash/has';
import { FieldColor } from '@looker/components';

/**
 * A list of relevant charts that access this configuration
 */
export type CColorSupported =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CPie
  | CScatter
  | CSparkline
  | CSingleValue;

const renderFor: Array<CColorSupported['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'pie',
  'scatter',
  'sparkline',
  'single_value',
];

export type SeriesColorProps = {
  chartType: CColorSupported['type'];
  series: CSeriesBasic;
  onSeriesChange: (series: CSeriesBasic) => void;
  disabled: boolean;
};

export const SeriesColor = (props: SeriesColorProps) => {
  const { chartType, series, onSeriesChange, ...restProps } = props;

  if (!renderFor.includes(chartType) && !has(series, 'color')) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleChange = (e: ChangeEvent) => {
    const draft = { ...series, color: (e.target as HTMLInputElement).value };
    onSeriesChange(draft);
  };

  return (
    <FieldColor
      label="Color"
      onChange={handleChange}
      value={series.color}
      {...restProps}
    />
  );
};
