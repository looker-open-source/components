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

import React, { FC, FormEvent, ReactNode, useState } from 'react'
import { Button, ButtonTransparent } from '../../Button'
import { FieldText } from '../../Form'
import { Dialog, ModalContent, ModalFooter, ModalHeader } from '..'

export interface PromptBaseProps {
  /**
   * Callback that is triggered when submit button is pressed
   */
  onSave: (value: string) => void
  /**
   * Label above the rendered input
   */
  label: string
  /**
   * Title of the modal
   */
  title: string
  /**
   * Default value of the rendered input
   */
  defaultValue?: string
  /**
   * Text of the submit button
   */
  buttonText?: string
  /**
   * A React Element that is placed at the bottom left of the modal
   */
  secondaryOption?: ReactNode
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

export const PromptDialog: FC<PromptDialogProps> = ({
  onSave,
  label,
  title,
  buttonText = 'Save',
  secondaryOption,
  defaultValue = '',
  close,
  isOpen,
}) => {
  const [value, setValue] = useState(defaultValue)
  const hasValue = !!value.trim()

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const onSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault()
    onSave(value)
    close()
  }

  return (
    <Dialog width="30rem" isOpen={isOpen} onClose={close}>
      <form onSubmit={onSubmit}>
        <ModalHeader hideClose>{title}</ModalHeader>
        <ModalContent>
          <FieldText
            required
            label={label}
            onChange={onChange}
            width="100%"
            value={value}
          />
        </ModalContent>
        <ModalFooter secondary={secondaryOption}>
          <Button disabled={!hasValue} type="submit">
            {buttonText}
          </Button>
          <ButtonTransparent type="reset" color="neutral" onClick={close}>
            Cancel
          </ButtonTransparent>
        </ModalFooter>
      </form>
    </Dialog>
  )
}
