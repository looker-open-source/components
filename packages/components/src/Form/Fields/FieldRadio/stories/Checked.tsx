/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { FieldRadio } from '../';

export default function Checked() {
  return (
    <FieldRadio
      id="fieldRadioId"
      label="Field Radio Example"
      name="thumbsUp"
      checked={true}
    />
  );
}
