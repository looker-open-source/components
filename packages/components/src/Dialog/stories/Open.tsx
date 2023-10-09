/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Dialog, ButtonOutline } from '../..';
import type { DialogProps } from '../Dialog';

export default function Open(props: DialogProps) {
  return (
    <Dialog {...props} defaultOpen={true} content="Simple Content">
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  );
}
