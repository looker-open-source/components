/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { FC, ReactElement, useEffect, useRef } from 'react'
import { SemanticColors } from '@looker/design-tokens'
import isFunction from 'lodash/isFunction'
import { Button, ButtonTransparent } from '../../Button'
import { Paragraph } from '../../Text'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'
import { ManagedModalProps } from '../Modal'
import { Dialog } from './Dialog'

export interface ConfirmationProps extends ManagedModalProps {
  /**
   * Cancel button text
   * @default 'Cancel'
   */
  cancelLabel?: string
  /**
   * Defines the color of the confirm button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  buttonColor?: keyof SemanticColors
  /**
   * Defines the color of the confirm button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "neutral"
   */
  cancelColor?: keyof SemanticColors
  /**
   * Confirmation button text
   * @default 'Confirm'
   */
  confirmLabel?: string
  /**
   * Additional information about the action requiring confirmation
   */
  message: ReactElement | string
  /**
   * Callback if user clicks Cancel button or closes the dialog
   */
  onCancel: () => void
  /**
   * Function called when user clicks to confirm
   * close function is passed as an argument to control when to close the dialog
   */
  onConfirm: () => void
  /**
   * Dialog title text
   */
  title: string
}

export interface ConfirmationDialogProps extends ConfirmationProps {
  /**
   * Toggling this after mounting will trigger the animation
   * @default false
   */
  isOpen?: boolean
  /**
   * Callback to fire if any form input children change.
   */
  onChange?: () => void
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  buttonColor = 'primary',
  cancelColor = 'neutral',
  isOpen = false,
  message,
  onCancel,
  onChange,
  onConfirm,
  title,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /**
     * watch for changes to any input elements within the dialog content
     */
    const changeListener = () => {
      if (isFunction(onChange)) {
        onChange()
      }
    }

    const inputs =
      ref.current !== null ? ref.current.querySelectorAll('input') : []

    inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('change', changeListener)
    })

    return () => {
      inputs.forEach((input: HTMLInputElement) => {
        input.removeEventListener('change', changeListener)
      })
    }
  }, [onChange, ref])

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onCancel}
      ref={ref}
      {...props}
      testId="confirmation-dialog"
    >
      <ModalHeader>{title}</ModalHeader>
      <ModalContent innerProps={{ py: 'none' }}>
        {typeof message === 'string' ? (
          <Paragraph>{message}</Paragraph>
        ) : (
          message
        )}
      </ModalContent>
      <ModalFooter>
        <Button onClick={onConfirm} color={buttonColor}>
          {confirmLabel}
        </Button>
        <ButtonTransparent color={cancelColor} onClick={onCancel}>
          {cancelLabel}
        </ButtonTransparent>
      </ModalFooter>
    </Dialog>
  )
}
