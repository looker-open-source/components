/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { DividerVertical, Space, Box } from '../../..';

export default function Appearance() {
  return (
    <Space around>
      <Box bg="white " p="u8">
        light appearance
        <DividerVertical mt="u4" appearance="light" />
      </Box>
      <Box bg="ui1" p="u8">
        dark appearance
        <DividerVertical mt="u4" appearance="dark" />
      </Box>
      <Box bg="ui5" p="u8">
        onDark appearance
        <DividerVertical mt="u4" appearance="onDark" />
      </Box>
    </Space>
  );
}
