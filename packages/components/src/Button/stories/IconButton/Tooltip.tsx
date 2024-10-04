/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton, Tooltip } from '../../..';

export default function TooltipExample() {
  return (
    <Tooltip content="A more descriptive tooltip">
      <IconButton icon={<MaterialIcons.Add />} label="Add" />
    </Tooltip>
  );
}