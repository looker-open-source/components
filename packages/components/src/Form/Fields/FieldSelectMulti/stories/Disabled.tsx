/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { FieldSelectMulti } from '../../FieldSelectMulti';

export default function Disabled() {
  return (
    <FieldSelectMulti
      description="disabled"
      label="Label"
      options={[
        { label: 'Grape', value: 'grape' },
        { label: 'Banana', value: 'banana' },
        { label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
      disabled
    />
  );
}
