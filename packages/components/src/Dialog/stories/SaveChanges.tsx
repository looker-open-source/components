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

import React, { FormEvent, useState } from 'react'
import {
  useConfirm,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
} from '..'
import { Button, Form, FieldText, ButtonTransparent } from '../..'

/**
 * Advanced Use: Protect Unsaved User Changes
 *
 * If your dialog content includes form inputs it's entirely possible that the user
 * could unintentionally close the dialog and lose their unsaved changes. With careful
 * management of dialog and form state, you can add a second stage dialog to alert the
 * user to unsaved changes and protect them from losing their work.
 *
 **/
export const SaveChanges = () => {
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const hasUnsavedChanges = () => name !== ''

  // "Yes I want to discard my changes and close the dialog"
  const handleConfirm = (close: () => void) => {
    setName('') // reset form state
    close() // close confirmation
  }

  const [confirm, openConfirmation] = useConfirm({
    buttonColor: 'critical',
    cancelLabel: 'Go Back',
    confirmLabel: 'Discard Changes',
    message:
      'Are you sure you want to close the dialog? Unsaved changes will be lost.',
    onCancel: (close) => {
      close()
    },
    onConfirm: handleConfirm,
    title: 'Discard Changes?',
    width: '500px',
  })

  const handleSave = () => {
    // dispatch side effect (data would usually get saved here...)
    setName('') // reset form state
    setIsOpen(false) // Close dialog here
  }

  const handleCancel = () => {
    setIsOpen(false)

    // has unsaved changes: show confirmation
    if (hasUnsavedChanges()) {
      openConfirmation()
    }
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) =>
    setName(event.currentTarget.value)

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={handleCancel}
        content={
          <>
            <DialogHeader hideClose>Edit Name</DialogHeader>
            <DialogContent>
              <Form onSubmit={handleSave}>
                <FieldText
                  label="Name"
                  onChange={handleChange}
                  value={name}
                  description='Enter name, then click "Cancel" to trigger confirmation'
                />
              </Form>
            </DialogContent>
            <DialogFooter>
              <Button onClick={handleSave}>Save</Button>
              <ButtonTransparent onClick={handleCancel}>
                Cancel
              </ButtonTransparent>
            </DialogFooter>
          </>
        }
      />
      <button onClick={() => setIsOpen(true)}>Tell us your name...</button>
      {confirm}
    </>
  )
}

SaveChanges.parameters = {
  storyshots: { disable: true },
}
