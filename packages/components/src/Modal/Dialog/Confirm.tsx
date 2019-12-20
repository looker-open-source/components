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

import React, { FC, ReactNode, useState } from 'react'
import isFunction from 'lodash/isFunction'
import { useToggle } from '../../utils/useToggle'
import { ConfirmationDialog, ConfirmationProps } from './ConfirmationDialog'
import { DiscardChangesDialog } from './DiscardChangesDialog'

export interface ConfirmProps extends Omit<ConfirmationProps, 'onCancel'> {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (open: () => void) => ReactNode
  /**
   * If true, watch for child input changes. Prompt user to confirm cancel action if there are unsaved changes.
   * @default false
   */
  protectChanges?: boolean
  /**
   * Callback attached to any input elements within the modal.
   */
  onChange?: () => void
  /**
   * Callback fires if props.protectChanges === true and user closes modal without pressing confirm.
   */
  onCancel?: () => void
}

enum DialogStates {
  default = 'DEFAULT',
  unsaved = 'UNSAVED_CHANGES',
  confirmClose = 'CONFIRM_CLOSE',
}

export function useConfirm({
  protectChanges,
  onCancel,
  onConfirm,
  onChange,
  ...props
}: Omit<ConfirmProps, 'children'>): [ReactNode, () => void] {
  const [dialogState, setDialogState] = useState(DialogStates.default)
  const { value: isOpen, setOn: setOpen, setOff: setClosed } = useToggle()

  const resetDialog = () => {
    setDialogState(DialogStates.default)
  }

  const openModal = () => {
    resetDialog()
    setOpen()
  }

  const handleCancel = () => {
    if (protectChanges && dialogState === DialogStates.unsaved) {
      // User attempted to close without saving changes.
      // Update state to render Confirm Close message.
      setDialogState(DialogStates.confirmClose)
    } else {
      if (isFunction(onCancel)) {
        onCancel()
      }
      setClosed()
    }
  }

  const handleConfirm = () => {
    if (isFunction(onConfirm)) {
      onConfirm()
    }
    setClosed()
  }

  const handleChange = () => {
    setDialogState(DialogStates.unsaved)
    if (isFunction(onChange)) {
      onChange()
    }
  }

  const renderedDialog = (
    <>
      <ConfirmationDialog
        {...props}
        onChange={handleChange}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        isOpen={isOpen && dialogState !== DialogStates.confirmClose}
      />
      <DiscardChangesDialog
        resetDialog={resetDialog}
        closeDialog={handleCancel}
        isOpen={isOpen && dialogState === DialogStates.confirmClose}
      />
    </>
  )

  return [renderedDialog, openModal]
}

export const Confirm: FC<ConfirmProps> = ({ children, ...props }) => {
  const [confirmationDialog, openModal] = useConfirm(props)

  return (
    <>
      {children(openModal)}
      {confirmationDialog}
    </>
  )
}
