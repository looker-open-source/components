/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Dialog, DialogLayout, ButtonOutline, Checkbox } from '../..'

export default function WithCheckbox() {
  return (
    <Dialog
      content={
        <DialogLayout footer="Footer" header="Header">
          The top line & bottom shadow should not be there.
          <Checkbox checked />
        </DialogLayout>
      }
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  )
}
