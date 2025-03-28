/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { DialogFooter } from '../../..';

export function Basic() {
  return <DialogFooter>Footer Text</DialogFooter>;
}

export function Secondary() {
  return (
    <DialogFooter secondary={<button>Done</button>}>Footer Text</DialogFooter>
  );
}
