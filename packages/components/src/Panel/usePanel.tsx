/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { useState } from 'react'
import { useAnimationState, useControlWarn } from '../utils'
import { PanelHeader } from './PanelHeader'
import { PanelSurface } from './PanelSurface'
import { UsePanelProps, UsePanelResponse } from './types'

export const usePanel = ({
  canClose,
  content,
  defaultOpen = false,
  direction = 'left',
  isOpen: controlledIsOpen,
  onClose,
  setOpen: controlledSetOpen,
  title,
}: UsePanelProps): UsePanelResponse => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen)
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'usePanel',
  })

  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    // eslint-disable-next-line no-console
    throw new Error(
      'usePanel does not support setting both `setOpen` and `onClose`. Use just `setOpen`'
    )
  }

  const isOpen = isControlled ? controlledIsOpen || false : uncontrolledIsOpen

  const { busy, className, renderDOM } = useAnimationState(
    isOpen,
    defaultOpen ? 'none' : undefined
  )

  const setOpen =
    isControlled && controlledSetOpen
      ? controlledSetOpen
      : setUncontrolledIsOpen

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const panel = renderDOM && (
    <PanelSurface
      aria-busy={busy ? true : undefined}
      className={className}
      direction={direction}
    >
      <PanelHeader
        direction={direction}
        handleClose={handleClose}
        title={title}
      />
      <div>{content}</div>
    </PanelSurface>
  )

  return {
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button',
    },
    isOpen,
    panel,
    setOpen,
  }
}
