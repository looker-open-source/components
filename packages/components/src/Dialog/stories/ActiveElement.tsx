/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import {
  Dialog,
  Button,
  DialogLayout,
  InputText,
  Select,
  SpaceVertical,
} from '../..'

export default function ActiveElement() {
  return (
    <Dialog
      content={
        <DialogLayout>
          <SpaceVertical>
            <InputText />
            <Select
              options={[{ label: '1', value: '1' }]}
              placeholder="Choose value"
            />
            <select>
              <option>1</option>
            </select>
          </SpaceVertical>
        </DialogLayout>
      }
    >
      <Button>Open Dialog</Button>
    </Dialog>
  )
}
