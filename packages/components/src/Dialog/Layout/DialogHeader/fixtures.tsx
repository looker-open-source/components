/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { DialogHeader } from '../../..';

export function Basic() {
  return <DialogHeader>Heading</DialogHeader>;
}

export function Detail() {
  return <DialogHeader detail="Detail text">Heading</DialogHeader>;
}

export function HideClose() {
  return <DialogHeader hideClose>Heading</DialogHeader>;
}
