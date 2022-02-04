/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { VisuallyHidden } from '../VisuallyHidden'
import { useAnimationState, useControlWarn, useTrapStack } from '../utils'
import { PanelHeader } from './PanelHeader'
import { PanelsContext } from './Panels'
import { PanelSurface } from './PanelSurface'
import { PanelWindow } from './PanelWindow'
import type { UsePanelProps, UsePanelResponse } from './types'

export const usePanel = ({
  canClose,
  content,
  defaultOpen = false,
  direction = 'left',
  isOpen: controlledIsOpen,
  onAfterClose,
  onAfterOpen,
  onClose,
  setOpen: controlledSetOpen,
  disableAnimation,
  ...headerProps
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

  const firstRender = useRef(true)
  const { busy, className, renderDOM } = useAnimationState({
    enter:
      disableAnimation || (isOpen && firstRender.current) ? 'none' : undefined,
    exit: disableAnimation ? 'none' : undefined,
    isOpen,
    onAfterEntered: onAfterOpen,
    onAfterExited: onAfterClose,
  })
  firstRender.current = false

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

  // Place focus on the surface when the panel opens
  const setInitialFocus = useCallback((element: HTMLDivElement | null) => {
    element?.focus({ preventScroll: true })
  }, [])

  // The visibilityTrigger uses TrapStackContext to toggle visibility: visible
  // on the topmost panel and visibility: hidden on the container to avoid
  // focusing on content underneath the panel
  // Sync with 'entered' so that content underneath doesn't disappear during animation
  const [, ref] = useTrapStack({ context: PanelsContext })
  const visibilityTrigger = className === 'entered' && (
    <VisuallyHidden ref={ref} />
  )

  const panel = renderDOM && (
    <PanelWindow>
      <PanelSurface
        aria-busy={busy ? true : undefined}
        className={className}
        direction={direction}
        data-panel
        tabIndex={-1}
        ref={setInitialFocus}
      >
        {visibilityTrigger}
        <PanelHeader onClose={handleClose} {...headerProps} />
        <PanelContent>{content}</PanelContent>
      </PanelSurface>
    </PanelWindow>
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

const PanelContent = styled.div`
  flex: 1;
  overflow: auto;
`
