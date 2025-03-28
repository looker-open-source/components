/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Box, DialogLayout } from '../../..';

export function Basic() {
  return (
    <Box bg="ui1">
      <DialogLayout>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DialogLayout>
    </Box>
  );
}

export function HeaderCloseButton() {
  return (
    <Box bg="ui1">
      <DialogLayout
        footer="Footer text"
        header="Header text"
        headerCloseButton={true}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DialogLayout>
    </Box>
  );
}

export function HeaderDetail() {
  return (
    <Box bg="ui1">
      <DialogLayout
        footer="Footer text"
        header="Header text"
        headerDetail="Cancel"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </DialogLayout>
    </Box>
  );
}
