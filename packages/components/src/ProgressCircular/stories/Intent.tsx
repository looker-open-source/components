/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { ProgressCircular } from '../ProgressCircular';
import { Space } from '../../Layout';

export default function Intent() {
  return (
    <>
      <Space justify="center">
        <ProgressCircular intent="inform" />
        <ProgressCircular intent="warn" />
        <ProgressCircular intent="critical" />
        <ProgressCircular intent="positive" />
      </Space>
    </>
  );
}
