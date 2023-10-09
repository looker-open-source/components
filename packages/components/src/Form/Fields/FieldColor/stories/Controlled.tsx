/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { FieldColor } from '../../FieldColor';
import { Space } from '../../../../Layout';
import { Button } from '../../../../';

export default function Controlled() {
  const [value, setValue] = useState('white');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Space>
      <Button onClick={() => setValue('blue')} value="blue">
        Blue
      </Button>
      <FieldColor label="Controlled" value={value} onChange={handleChange} />
    </Space>
  );
}
