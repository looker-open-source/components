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

import React, {
  FC,
  useState,
  useCallback,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import {
  ConfirmationDialogContent,
  ButtonTransparent,
  Button,
  DialogManager,
  FieldCheckbox,
  FieldText,
  Icon,
  Heading,
} from '@looker/components'
import isEqual from 'lodash/isEqual'

interface FormData {
  name: string
  'chocolate-chip': boolean
  'peanut-butter': boolean
}

interface UserFormProps {
  onSave: () => void
  onCancel: () => void
  setFormData: Dispatch<SetStateAction<FormData>>
  formData: FormData
}

export const CanCloseDialogManagerDemo: React.FC = () => {
  const defaultFormData: FormData = {
    'chocolate-chip': false,
    name: '',
    'peanut-butter': false,
  }

  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [isCancellingInput, setIsCancellingInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const hasUnsavedChanges = useCallback(() => {
    if (isEqual(formData, defaultFormData)) {
      return false
    } else {
      return true
    }
  }, [defaultFormData, formData])

  const handleConfirmClose = () => {
    setIsOpen(false)
    setIsCancellingInput(false)
    setFormData(defaultFormData)
  }

  const handleDialogReset = () => {
    setIsCancellingInput(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  const handleSave = () => {
    alert('Saved!')
    setIsOpen(false)
    setFormData(defaultFormData)
  }

  const handleCancel = () => {
    if (hasUnsavedChanges()) {
      setIsCancellingInput(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Dialog state is more nuanced than usual, so we manage isOpen external to DialogManager */}
      <Button onClick={handleDialogOpen} m="large">
        Open Confirm form
      </Button>
      {/*
        Default user form dialog. I don't think DialogManager actually buys us anything here --
        this example is essentially equivalent to rendering Dialog directly.
      */}
      <DialogManager
        content={
          <UserForm
            onSave={handleSave}
            onCancel={handleCancel}
            setFormData={setFormData}
            formData={formData}
          />
        }
        width="500px"
        isOpen={isOpen && !isCancellingInput}
        onClose={handleCancel}
      />
      {/* Fallback "discard changes" dialog */}
      <DialogManager
        content={
          <ConfirmationDialogContent
            title="Discard Changes?"
            titleIcon={<Icon name="Warning" color="palette.red500" size={22} />}
            message="Are you sure you want to close the dialog? Unsaved changes will be
    lost."
            primaryButton={
              <ButtonTransparent onClick={handleConfirmClose} color="danger">
                Discard Changes
              </ButtonTransparent>
            }
            secondaryButton={
              <ButtonTransparent onClick={handleDialogReset} color="neutral">
                Go Back
              </ButtonTransparent>
            }
          />
        }
        width="500px"
        isOpen={isOpen && isCancellingInput}
        onClose={handleConfirmClose}
      />
    </>
  )
}

const UserForm: FC<UserFormProps> = ({
  onSave,
  onCancel,
  setFormData,
  formData,
}) => {
  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, checked } = e.target as HTMLInputElement
    setFormData({ ...formData, [name]: checked })
  }

  return (
    <ConfirmationDialogContent
      title="Edit Account Information"
      message={
        <form>
          <Heading as="h3" mb="small">
            User
          </Heading>
          <FieldText
            name="name"
            label="Full Name"
            onChange={handleInputChange}
            value={formData.name}
          />
          <Heading as="h3" mb="small">
            Cookie Preference
          </Heading>
          <FieldCheckbox
            name="chocolate-chip"
            label="Chocolate Chip"
            checked={formData['chocolate-chip']}
            onChange={handleCheckboxChange}
          />
          <FieldCheckbox
            name="peanut-butter"
            label="Peanut Butter"
            checked={formData['peanut-butter']}
            onChange={handleCheckboxChange}
          />
        </form>
      }
      primaryButton={<Button onClick={onSave}>Save</Button>}
      secondaryButton={
        <ButtonTransparent onClick={onCancel}>Cancel</ButtonTransparent>
      }
    />
  )
}
