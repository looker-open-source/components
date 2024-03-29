/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper';
import type { CLineBase } from './';
import type {
  SupportedChartTypes,
  SDKRecord,
  Fields,
  ChartLayoutProps,
} from '../types';

export type CArea = {
  type?: SupportedChartTypes['area'];
} & CLineBase;

export type AreaProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[];
    fields: Fields;
    config: CArea;
  };
