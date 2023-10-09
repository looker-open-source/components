/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Density, List, ListItem } from '../..';

export default function Negative1() {
  return (
    <Density scale={-1}>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density>
  );
}
