/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Button } from '@looker/components';
import React from 'react';
import { Popover, PopoverLayout } from '..';

export default function PopoverWithLayoutNoFooter() {
  return (
    <Popover
      width={640}
      content={
        <PopoverLayout header="Header text" footer={false}>
          We the People of the United States
        </PopoverLayout>
      }
    >
      <Button>Open</Button>
    </Popover>
  );
}
