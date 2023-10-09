/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import type { DialogProps } from '../Dialog';
import { ButtonOutline, useDialog } from '../..';

export default function UseDialog(props: DialogProps) {
  const { dialog, setOpen } = useDialog({
    ...props,
    content: 'My Neat Dialog',
  });

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Dialog</ButtonOutline>
    </>
  );
}
