/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ButtonOutline, useDialog } from '../..'

export default function UseDialog() {
  const { dialog, setOpen } = useDialog({ content: 'My Neat Dialog' })

  return (
    <>
      {dialog}
      <ButtonOutline onClick={() => setOpen(true)}>Open Dialog</ButtonOutline>
    </>
  )
}
