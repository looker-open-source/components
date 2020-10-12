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

import React, { CSSProperties, FC, ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSObject } from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import { DrawerPlacements } from '../Drawer/useDrawer'
import { Portal } from '../Portal'
import { useControlWarn, useFocusTrap, useScrollLock } from '../utils'
import { Backdrop } from './Backdrop'
import { DialogContext } from './DialogContext'
import { DialogSurface } from './DialogSurface'

export type DialogPlacements = 'center'

export interface UseDialogProps {
  /**
   * Content to rendered within the Dialog surface.
   * @required
   */
  content: ReactNode

  /**
   * Dialog will be displayed immediately when rendered.
   * @default undefined
   */
  isOpen?: boolean

  /**
   * Dialog will be displayed immediately when rendered.
   * NOTE: Once rendered, changes to this value will be ignored. This property cannot
   * be used treat this component as "controlled"
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Optional, for a controlled version of the component
   */
  setOpen?: (open: boolean) => void

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Specify a callback to be called before trying to close the Popover. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Popover is closed
   */
  canClose?: () => boolean

  /**
   * Specify where the Dialog should be placed vertically
   * COMING SOON: 'center' | 'top' | 'bottom'
   * @default 'center'
   */
  placement?: DialogPlacements

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of
   * the specified width or the viewport width. Default / `auto` will cause
   * the Surface to auto-size to its content.
   * @default auto
   */
  width?: ResponsiveValue<string>

  maxWidth?: ResponsiveValue<string>

  /**
   * Explicitly specifying a height will set the Surface to be the lesser of
   * the specified height or the viewport height. Default / `auto` will cause
   * the Surface to auto-size to its content.
   * @default auto
   */
  height?: ResponsiveValue<string>

  // maxHeight?: ResponsiveValue<string>

  /**
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   * @deprecated - this is slated for removal
   */
  surfaceStyles?: CSSProperties

  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   * @deprecated - this is slated for removal
   */
  backdrop?: CSSProperties

  /**
   * Specify a custom surface to use for Dialog surface.
   * This is intended for internal components use only (specifically `Drawer`)
   * @private
   */
  Surface?: FC
}

export interface UseDialogPropsInternal
  extends Omit<UseDialogProps, 'placement'> {
  placement?: DialogPlacements | DrawerPlacements
}

export interface UseDialogResponseDom {
  onClick: () => void
  role: string
  'aria-expanded': boolean
}

export interface UseDialogResponse {
  isOpen: boolean
  setOpen: (open: boolean) => void
  dialog: ReactNode
  domProps: UseDialogResponseDom
}

export const useDialog = ({
  content,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  canClose,
  onClose,
  setOpen: controlledSetOpen,
  backdrop,
  maxWidth,
  width,
  surfaceStyles,
  Surface: CustomSurface,
}: UseDialogPropsInternal): UseDialogResponse => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen)
  const isControlled = useControlWarn({
    controllingProps: ['setOpen'],
    isControlledCheck: () => controlledSetOpen !== undefined,
    name: 'useDialog',
  })

  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    // eslint-disable-next-line no-console
    throw new Error(
      'useDialog does not support setting both `setOpen` and `onClose`. Use just `setOpen`'
    )
  }

  /**
   * LEGACY SUPPORT
   * Eventually we need to deprecate support for `isOpen` without specifying a `setOpen`
   * being explicitly so we can unwind this semi-controlled state.
   */
  const isPartiallyControlled = !!onClose && controlledIsOpen !== undefined

  const isOpen =
    isPartiallyControlled || isControlled
      ? controlledIsOpen || false
      : uncontrolledIsOpen

  const setOpen =
    isControlled && controlledSetOpen
      ? controlledSetOpen
      : setUncontrolledIsOpen

  const {
    callbackRef: focusRef,
    disable: disableFocusTrap,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    trapRef: focusTrapRef,
  } = useFocusTrap(isOpen)
  const [, portalRef] = useScrollLock(focusRef)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    if (canClose && !canClose()) return
    setOpen(false)
    onClose && onClose()
  }

  const RenderSurface = CustomSurface || DialogSurface

  const dialog = (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        enableFocusTrap,
        focusTrapEnabled,
        focusTrapRef,
      }}
    >
      <CSSTransition
        classNames="modal"
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 0, exit: 250 }}
      >
        {(state: string) => (
          <Portal ref={portalRef}>
            <Backdrop
              className={state}
              onClick={handleClose}
              visible={backdrop === undefined ? true : !!backdrop}
              style={
                !!backdrop && backdrop !== true
                  ? (backdrop as CSSObject)
                  : undefined
              }
            />
            <RenderSurface
              className={state}
              style={surfaceStyles}
              width={width}
              maxWidth={maxWidth}
            >
              {content}
            </RenderSurface>
          </Portal>
        )}
      </CSSTransition>
    </DialogContext.Provider>
  )

  return {
    dialog,
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button',
    },
    isOpen,
    setOpen,
  }
}
