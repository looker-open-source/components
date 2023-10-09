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

type TruncateTextProps = {
  config: SupportedChartConfig;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};

const renderFor: Array<SupportedChartConfig['type']> = ['table'];

export const TruncateText = (props: TruncateTextProps) => {
  const { config, onConfigChange } = props;

  const { truncate_text } = config;

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null;
  }

  const handleChange = (e: ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement;
    const draft = { ...config, truncate_text: checked };
    onConfigChange(draft);
  };

  return (
    <FieldCheckbox
      label="Truncate text"
      checked={truncate_text}
      onChange={handleChange}
    />
  );
};
