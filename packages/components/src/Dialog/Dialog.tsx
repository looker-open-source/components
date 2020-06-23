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

import React, { CSSProperties, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSObject } from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import { Portal } from '../Portal'
import { useFocusTrap, useScrollLock } from '../utils'
import { Backdrop } from './Backdrop'
import { DialogContext } from './DialogContext'
import { Surface } from './Surface'

export interface DialogProps {
  /**
   * When true, renders the Backdrop, Surface and it's contained content.
   * @default false
   */
  isOpen?: boolean

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Optional backdrop styles to merge with the Backdrop implementation. These
   * must be a CSSProperty compatible key / value paired object. For example
   * {backgroundColor: 'pink'}.
   */
  backdrop?: CSSProperties

  /**
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   */
  surfaceStyles?: CSSProperties

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of the specified width or the viewport width.
   * You can also specify `auto` if you want the Surface to auto-size to its content.
   * @default auto
   */
  width?: ResponsiveValue<string>
  maxWidth?: ResponsiveValue<string>
}

export const Dialog: FC<DialogProps> = ({
  backdrop,
  children,
  isOpen,
  onClose,
  maxWidth,
  surfaceStyles,
  width,
}) => {
  const {
    callbackRef: focusRef,
    disable: disableFocusTrap,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    trapRef: focusTrapRef,
  } = useFocusTrap(isOpen)
  const {
    callbackRef: scrollRef,
    disable: disableScrollLock,
    enable: enableScrollLock,
    isEnabled: scrollLockEnabled,
  } = useScrollLock(isOpen, false)

  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        disableScrollLock,
        enableFocusTrap,
        enableScrollLock,
        focusTrapEnabled,
        focusTrapRef,
        scrollLockEnabled,
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
          <Portal
            ref={(node) => {
              focusRef(node)
              scrollRef(node)
            }}
          >
            <Backdrop
              className={state}
              onClick={onClose}
              visible={backdrop === undefined ? true : !!backdrop}
              style={
                !!backdrop && backdrop !== true
                  ? (backdrop as CSSObject)
                  : undefined
              }
            />
            <Surface
              style={surfaceStyles}
              className={state}
              width={width}
              maxWidth={maxWidth}
            >
              {children}
            </Surface>
          </Portal>
        )}
      </CSSTransition>
    </DialogContext.Provider>
  )
}
