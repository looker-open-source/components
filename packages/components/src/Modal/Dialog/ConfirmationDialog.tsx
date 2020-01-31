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

import React, { FC, useCallback, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { SemanticColors } from '@looker/design-tokens'
import { Button, ButtonTransparent } from '../../Button'
import { ManagedModalProps } from '../Modal'
import { Dialog, ConfirmLayout } from '.'

export type ConfirmationCallback = (close: () => void) => void

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
  onCancel?: ConfirmationCallback
  /**
   * Function called when user clicks to confirm
   * close function is passed as an argument to control when to close the dialog
   */
  onConfirm: ConfirmationCallback
  /**
   * Dialog title text
   */
  title: string
}

export interface ConfirmationDialogProps extends ConfirmationProps {
  /**
   * For triggering close from within the dialog
   */
  close: () => void
  /**
   * Toggling this after mounting will trigger the animation
   * @default false
   */
  isOpen?: boolean
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  cancelLabel,
  close,
  confirmLabel,
  buttonColor = 'primary',
  cancelColor = 'neutral',
  isOpen = false,
  message,
  onCancel,
  onConfirm,
  title,
  ...props
}) => {
  const { t } = useTranslation()

  cancelLabel = cancelLabel || t('Cancel')
  confirmLabel = confirmLabel || t('Confirm')

  const confirm = useCallback(() => {
    onConfirm(close)
  }, [close, onConfirm])

  const cancel = useCallback(() => {
    if (onCancel) {
      onCancel(close)
    } else {
      close()
    }
  }, [close, onCancel])

  return (
    <Dialog isOpen={isOpen} onClose={cancel} {...props}>
      <ConfirmLayout
        title={title}
        message={message}
        primaryButton={
          <Button onClick={confirm} color={buttonColor}>
            {confirmLabel}
          </Button>
        }
        secondaryButton={
          <ButtonTransparent color={cancelColor} onClick={cancel}>
            {cancelLabel}
          </ButtonTransparent>
        }
      />
    </Dialog>
  )
}
