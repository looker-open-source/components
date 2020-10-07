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
import { Surface } from './Surface'

export type DialogPlacements = 'center'

export interface UseDialogProps {
  /**
   * Content to rendered within the Dialog surface.
   * @required
   */
  content: ReactNode

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

  /**
   * Specify where the Dialog should be placed vertically
   * COMING SOON: 'center' | 'top' | 'bottom'
   * @default 'center'
   */
  placement?: DialogPlacements

  /**
   * Dialog will be displayed immediately when rendered.
   * NOTE: Once rendered, changes to this value will be ignored. This property cannot
   * be used treat this component as "controlled"
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Dialog will be displayed immediately when rendered.
   * @default undefined
   */
  isOpen?: boolean

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
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   */
  surfaceStyles?: CSSProperties

  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
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

export const useDialog = ({
  content,
  defaultOpen = false,
  canClose,
  onClose,
  backdrop,
  maxWidth,
  width,
  surfaceStyles,
  Surface: CustomSurface,
  ...props
}: UseDialogPropsInternal) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen)
  const isControlled = useControlWarn({
    controllingProps: ['isOpen'],
    isControlledCheck: () => props.isOpen !== undefined,
    name: 'useDialog',
  })

  const isOpen = isControlled ? props.isOpen : uncontrolledIsOpen

  const {
    callbackRef: focusRef,
    disable: disableFocusTrap,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    trapRef: focusTrapRef,
  } = useFocusTrap(isOpen)
  const [, portalRef] = useScrollLock(focusRef)

  const handleOpen = () => {
    !isControlled && setUncontrolledIsOpen(true)
  }

  const handleClose = () => {
    if (canClose && !canClose()) return
    !isControlled && setUncontrolledIsOpen(false)
    onClose && onClose()
  }

  const RenderSurface = CustomSurface || Surface

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
    isOpen,
    open: handleOpen,
  }
}
