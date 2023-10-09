/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type {
  LegendTypes,
  LegendValues,
  CPie,
  CAll,
  CPieLegend,
} from '@looker/visualizations-adapters';

import { FieldSelect, Fieldset } from '@looker/components';

export type LegendProps = {
  config: CPie;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
};

const legendTypes: LegendTypes[] = ['legend', 'labels'];
const legendValues: LegendValues[] = [
  'label',
  'label_percent',
  'label_value',
  'percent',
  'value',
];

export const LegendPie = ({ onConfigChange, config }: LegendProps) => {
  const { legend } = config;

  if (!legend) return null;

  const handleTypeChange = (newType: string) => {
    const draft: CPie = {
      ...(config as CPie),
      legend: {
        ...(legend as CPieLegend),
        type: newType as LegendTypes,
      },
    };
    onConfigChange(draft);
  };

  const handleValuesChange = (newVal: string) => {
    const draft: CPie = {
      ...(config as CPie),
      legend: {
        ...(legend as CPieLegend),
        value: newVal as LegendValues,
      },
    };
    onConfigChange(draft);
  };

  return (
    <Fieldset legend="Legend Options" accordion defaultOpen>
      {Object.prototype.hasOwnProperty.call(legend, 'type') && (
        <FieldSelect
          label="Legend Type"
          options={legendTypes.map(t => ({ value: t }))}
          value={(legend as CPieLegend).type}
          onChange={handleTypeChange}
        />
      )}
      {Object.prototype.hasOwnProperty.call(legend, 'value') && (
        <FieldSelect
          label="Legend Values"
          options={legendValues.map(v => ({ value: v }))}
          value={(legend as CPieLegend).value}
          onChange={handleValuesChange}
        />
      )}
    </Fieldset>
  );
};
