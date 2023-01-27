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

import type { FormEvent, KeyboardEvent, ReactNode } from 'react'
import React, { useState, useCallback, useEffect } from 'react'
import type { StatefulColor } from '@looker/design-tokens'
import { Button, ButtonTransparent } from '../../Button'
import { Label, InputText } from '../../Form'
import { useTranslation } from '../../utils'
import { VisuallyHidden } from '../../VisuallyHidden'
import { Dialog, DialogLayout } from '..'

export type PromptCallback = (close: () => void) => void

export interface PromptBaseProps {
  /**
   * Cancel button text
   * @default Cancel
   */
  cancelLabel?: string
  /**
   * Defines the color of the cancel button. Can be the string name of a color listed in the color theme, or a color object.
   * @default neutral
   */
  cancelColor?: StatefulColor
  /**
   * Callback if user clicks Cancel button or closes the dialog
   */
  onCancel?: (close: () => void) => void
  /**
   * Callback that is triggered when submit button is pressed
   */
  onSave: (value: string, close: () => void) => void
  /**
   * Label for the rendered input.
   * Rendered as placeholder and visually hidden label for screenreaders.
   */
  inputLabel: string
  /**
   * Title of the dialog
   */
  title: string
  /**
   * Default value of the rendered input
   */
  defaultValue?: string
  /**
   * Text of the submit button
   */
  saveLabel?: string
  /**
   * A React Element that is placed at the bottom left of the dialog
   */
  secondary?: ReactNode
  /**
   * clearOnCancel
   * @default false
   */
  clearOnCancel?: boolean
}

export interface PromptDialogProps extends PromptBaseProps {
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

export const PromptDialog = (props: PromptDialogProps) => {
  const { t } = useTranslation('PromptDialog')
  const cancelLabelText = t('Cancel')
  const saveLabelText = t('Save')
  const {
    cancelColor = 'neutral',
    cancelLabel = cancelLabelText,
    clearOnCancel,
    close,
    defaultValue = '',
    isOpen,
    inputLabel,
    onSave,
    onCancel,
    saveLabel = saveLabelText,
    secondary,
    title,
  } = props
  const [value, setValue] = useState(defaultValue)
  const hasValue = !!value.trim()

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleClose = useCallback(() => {
    close()
  }, [close])

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const onSubmit = useCallback(() => {
    onSave(value, handleClose)
  }, [handleClose, onSave, value])

  const cancel = useCallback(() => {
    if (onCancel) {
      onCancel(handleClose)
    } else {
      handleClose()
    }

    clearOnCancel && setValue('')
  }, [clearOnCancel, handleClose, onCancel])

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && hasValue) {
      onSubmit()
    } else if (event.key === 'Escape') {
      cancel()
    }
  }

  const footer = (
    <>
      <Button disabled={!hasValue} type="submit" onClick={onSubmit} color="key">
        {saveLabel}
      </Button>
      <ButtonTransparent type="reset" color={cancelColor} onClick={cancel}>
        {cancelLabel}
      </ButtonTransparent>
    </>
  )

  return (
    <Dialog width="30rem" isOpen={isOpen} onClose={cancel}>
      <DialogLayout header={title} footer={footer} footerSecondary={secondary}>
        <VisuallyHidden>
          <Label htmlFor="promptInput">{inputLabel}</Label>
        </VisuallyHidden>
        <InputText
          autoFocus
          onKeyDown={onKeyDown}
          id="promptInput"
          placeholder={inputLabel}
          onChange={onChange}
          width="100%"
          value={value}
        />
      </DialogLayout>
    </Dialog>
  )
}
