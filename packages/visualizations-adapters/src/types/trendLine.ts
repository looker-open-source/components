/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export type TrendLine = {
  color: string;
  label_position: 'left' | 'right' | 'center';
  order: number;
  period: number;
  regression_type:
    | 'average'
    | 'linear'
    | 'exponential'
    | 'logarithmic'
    | 'power'
    | 'polynomial';
  series_index: number;
  show_label: boolean;
  label_type?: 'r2' | 'equation' | 'string';
  label?: string;
};
