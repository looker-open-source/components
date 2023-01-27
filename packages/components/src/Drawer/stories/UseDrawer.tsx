/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ButtonOutline, useDrawer } from '../..'

export default function UseDrawer() {
  const { dialog, setOpen } = useDrawer({
    content: 'Drawer content',
  })

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Drawer</ButtonOutline>
    </>
  )
}
