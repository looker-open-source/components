/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Dialog } from '../..'

export default function ClickOutside() {
  return (
    <>
      <input
        type="text"
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          zIndex: 100,
        }}
      />
      <Dialog
        content={
          <>
            <button>button 1</button>
            <button>button 2</button>
          </>
        }
      >
        <button>Open Dialog</button>
      </Dialog>
    </>
  )
}
