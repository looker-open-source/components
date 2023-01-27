/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import {
  Dialog,
  DialogLayout,
  SpaceVertical,
  CopyToClipboard,
  Button,
} from '../..'

export default function MultiFunctionButton() {
  return (
    <Dialog
      content={
        <DialogLayout header="A Dialog Example">
          <SpaceVertical>
            <CopyToClipboard success="Copied" content="Copy content">
              <Button>Copy</Button>
            </CopyToClipboard>
          </SpaceVertical>
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  )
}
