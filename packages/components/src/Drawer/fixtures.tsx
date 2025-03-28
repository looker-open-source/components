/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { ButtonOutline } from '../Button';
import { useDrawer } from '.';

export function UseDrawer() {
  const { dialog, setOpen } = useDrawer({
    content: 'Drawer content',
  });

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Drawer</ButtonOutline>
    </>
  );
}
