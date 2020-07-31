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

/**
 * Advanced Use: Protect Unsaved User Changes
 *
 * If your dialog content includes form inputs it's entirely possible that the user
 * could unintentionally close the dialog and lose their unsaved changes. With careful
 * management of dialog and form state, you can add a second stage dialog to alert the
 * user to unsaved changes and protect them from losing their work.
 *
 **/

import isEqual from 'lodash/isEqual'
import React, { FormEvent, useState } from 'react'
import {
  useConfirm,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  Form,
  FieldText,
  Paragraph,
  DialogFooter,
  ButtonTransparent,
} from '@looker/components'

export default {
  title: 'Dialog/SaveChanges',
}

export const PreventLostChanges = () => {
  /**
   * Track form input state, and create helper function to compare updated state to default state
   */
  const defaultFormData = {
    name: '',
  }
  const [formData, setFormData] = useState(defaultFormData)

  const hasUnsavedChanges = () => {
    if (isEqual(formData, defaultFormData)) {
      return false
    } else {
      return true
    }
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setFormData({ ...formData, [name]: value })
  }

  /**
   * Track dialog state: open, close, or cancelling input
   */
  const [isCancellingInput, setIsCancellingInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  /**
   * Create callbacks for the various actions:
   * - save
   * - cancel
   * - confirm close (e.g. "Yes I want to discard my changes and close the dialog")
   * - reset form (e.g. "Don't close, let me continue editing")
   */

  const handleSave = () => {
    alert('Saved!') // dispatch side effect
    setIsOpen(false) // close dialog
    setFormData(defaultFormData) // reset form state
  }

  const handleConfirmClose = (close: () => void) => {
    // "Yes I want to discard my changes and close the dialog"
    setIsOpen(false) // close form
    setIsCancellingInput(false) // reset dialog state
    setFormData(defaultFormData) // reset form state
    close()
  }

  const handleDialogReset = (close: () => void) => {
    setIsCancellingInput(false) // take me back to dialog #1
    close()
  }

  const [confirm, openConfirmation] = useConfirm({
    buttonColor: 'critical',
    cancelLabel: 'Go Back',
    confirmLabel: 'Discard Changes',
    message:
      'Are you sure you want to close the dialog? Unsaved changes will be lost.',
    onCancel: handleDialogReset,
    onConfirm: handleConfirmClose,
    title: 'Discard Changes?',
    width: '500px',
  })

  const handleCancel = () => {
    if (hasUnsavedChanges()) {
      // has unsaved changes: keep dialog open and update state to reflect attempt at closing the form
      setIsCancellingInput(true)
      openConfirmation()
    } else {
      // no unsaved changes: close the dialog
      setIsOpen(false)
    }
  }

  return (
    <>
      <Button onClick={handleDialogOpen}>Open user form</Button>
      <Dialog
        isOpen={isOpen && !isCancellingInput}
        onClose={handleCancel}
        width="500px"
      >
        <DialogHeader>Edit Account Information </DialogHeader>
        <DialogContent>
          <Form>
            <FieldText
              name="name"
              label="Name"
              onChange={handleInputChange}
              value={formData.name}
            />
            <Paragraph>
              Click <strong>Cancel</strong> to trigger fallback dialog
            </Paragraph>
          </Form>
        </DialogContent>
        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
          <ButtonTransparent onClick={handleCancel}>Cancel</ButtonTransparent>
        </DialogFooter>
      </Dialog>
      {confirm}
    </>
  )
}
