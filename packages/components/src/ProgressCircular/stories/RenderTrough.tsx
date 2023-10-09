/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { ProgressCircular } from '../ProgressCircular';
import { Space } from '../../Layout';

export default function RenderTrough() {
  return (
    <Space justify="center">
      <ProgressCircular progress={0.2} intent="inform" renderTrough />
      <ProgressCircular progress={0.4} intent="warn" renderTrough />
      <ProgressCircular progress={0.6} intent="critical" renderTrough />
      <ProgressCircular progress={0.8} intent="positive" renderTrough />
    </Space>
  );
}
