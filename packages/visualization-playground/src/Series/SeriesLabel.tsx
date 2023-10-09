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
  CTable,
  CSeriesBasic,
  CSingleValue,
} from '@looker/visualizations-adapters';
import { FieldText } from '@looker/components';
import has from 'lodash/has';

/**
 * A list of relevant charts that access this configuration
 */
export type CLabelSupported =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CScatter
  | CTable
  | CSingleValue;

const renderFor: Array<CLabelSupported['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'scatter',
  'table',
  'single_value',
];

export type SeriesLabelProps = {
  chartType: CLabelSupported['type'];
  series: CSeriesBasic;
  onSeriesChange: (series: CSeriesBasic) => void;
};

export const SeriesLabel = (props: SeriesLabelProps) => {
  const { chartType, series, onSeriesChange } = props;

  if (!renderFor.includes(chartType) && !has(series, 'label')) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleChange = (e: ChangeEvent) => {
    const draft = { ...series, label: (e.target as HTMLInputElement).value };
    onSeriesChange(draft);
  };

  return (
    <FieldText label="Label" onChange={handleChange} value={series.label} />
  );
};
