/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Dialog, DialogLayout, Button } from '../..'

export default function CloseIconButton() {
  return (
    <Dialog
      content={
        <DialogLayout header="Has a close icon button">
          Some content
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  )
}
