/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { FieldColor } from '../../FieldColor';

export default function Required() {
  const [value, setValue] = useState('purple');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <FieldColor
      label="required"
      value={value}
      onChange={handleChange}
      required={true}
    />
  );
}
