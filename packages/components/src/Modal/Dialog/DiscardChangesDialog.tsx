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

import React, { FC } from 'react'
import styled from 'styled-components'

import { ButtonTransparent } from '../../Button'
import { Paragraph } from '../../Text'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'
import { Dialog } from './Dialog'

interface DiscardChangesProps {
  closeDialog: () => void
  resetDialog: () => void
  isOpen: boolean
}

export const DiscardChangesDialog: FC<DiscardChangesProps> = ({
  closeDialog,
  resetDialog,
  isOpen,
}) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={closeDialog}
      width={'30rem'}
      testId="discard-changes-dialog"
    >
      <ModalHeader headerIcon="Warning" headerIconColor="palette.red500">
        Discard Changes?
      </ModalHeader>
      <ModalContent innerProps={{ py: 'none' }}>
        <MessageGrid>
          <Paragraph>
            Are you sure you want to close the dialog? Unsaved changes will be
            lost.
          </Paragraph>
        </MessageGrid>
      </ModalContent>
      <ModalFooter>
        <ButtonTransparent onClick={closeDialog} color="danger">
          Discard Changes
        </ButtonTransparent>
        <ButtonTransparent onClick={resetDialog} color="neutral">
          Go Back
        </ButtonTransparent>
      </ModalFooter>
    </Dialog>
  )
}

const MessageGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
`
