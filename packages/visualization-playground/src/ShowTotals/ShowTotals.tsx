/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { Dispatch, SetStateAction, ChangeEvent } from 'react';
import type { CAll, CTable } from '@looker/visualizations-adapters';
import { FieldCheckbox } from '@looker/components';

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = CTable;

type ShowtotalTotalsProps = {
  config: SupportedChartConfig;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};

const renderFor: Array<SupportedChartConfig['type']> = ['table'];

export const ShowTotals = (props: ShowtotalTotalsProps) => {
  const { config, onConfigChange } = props;

  const { show_totals } = config;

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleChange = (e: ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement;
    const draft = { ...config, show_totals: checked };
    onConfigChange(draft);
  };

  return (
    <FieldCheckbox
      label="Show totals"
      checked={show_totals}
      onChange={handleChange}
    />
  );
};
