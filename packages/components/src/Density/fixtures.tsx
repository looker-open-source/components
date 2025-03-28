/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Density, List, ListItem } from '../..';

export function Basic() {
  return (
    <Density scale={0}>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density>
  );
}

export function Positive1() {
  return (
    <Density scale={1}>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density>
  );
}

export function Negative3() {
  return (
    <Density scale={-3}>
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        <ListItem>Swiss</ListItem>
      </List>
    </Density>
  );
}
