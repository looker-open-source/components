/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Debug } from '../Debug';

export default function Basic() {
  return (
    <Debug
      ok={false}
      error={{
        message: 'An error occurred',
        documentation_url: 'https://google.com',
      }}
      config={{
        show_totals: false,
        truncate_text: undefined,
        show_row_numbers: true,
      }}
    />
  );
}
