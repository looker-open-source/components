/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { OrderedList } from '../OrderedList';

export default function Letter() {
  return (
    <OrderedList type={'letter'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </OrderedList>
  );
}
