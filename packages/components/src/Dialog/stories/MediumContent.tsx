/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import { Dialog, DialogContext, DialogLayout } from '../../Dialog'
import { Button, ButtonTransparent, ButtonOutline } from '../../Button'

export default function MediumContent() {
  return (
    <Dialog content={<DialogExampleLayout />}>
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  )
}

const DialogExampleLayout = () => {
  const { closeModal } = useContext(DialogContext)

  return (
    <DialogLayout
      header="Simple header"
      footer={
        <>
          <Button onClick={closeModal}>Done Reading</Button>
          <ButtonTransparent color="neutral" onClick={closeModal}>
            Finish Later
          </ButtonTransparent>
        </>
      }
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry\' s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </DialogLayout>
  )
}
