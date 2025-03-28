/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { ProgressDuetRow } from '../ProgressDuetRow';
import { MAX_ROWS } from './constants';

export const renderLoadingRow = ({
  rowNumber,
  columns,
}: {
  rowNumber: number;
  columns: string[];
}) => {
  const isEven = !(rowNumber % 2);

  return (
    <ProgressDuetRow
      columns={columns}
      key={rowNumber}
      mb={isEven && rowNumber !== MAX_ROWS ? 'small' : undefined}
    />
  );
};
