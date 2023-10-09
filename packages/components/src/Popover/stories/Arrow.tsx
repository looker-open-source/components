/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { Button } from '../../Button';
import { Box } from '../../Layout';
import { PopoverContent } from '../Layout';
import { Popover } from '../Popover';
import type { PopoverProps } from '../Popover';

export default function Arrow(props: PopoverProps) {
  return (
    <Box
      width={400}
      height={400}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Popover
        {...props}
        isOpen
        content={<PopoverContent>Some content</PopoverContent>}
        arrow
      >
        <Button>Open</Button>
      </Popover>
    </Box>
  );
}
