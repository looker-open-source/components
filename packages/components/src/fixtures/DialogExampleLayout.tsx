/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import type { ReactNode } from 'react'
import { DialogContext, DialogLayout, Button, ButtonTransparent } from '..'

export const DialogExampleLayout = ({
  header,
  children,
}: {
  header: string
  children?: ReactNode
}) => {
  const { closeModal } = useContext(DialogContext)

  return (
    <DialogLayout
      header={header}
      footer={
        <>
          <Button onClick={closeModal}>Done Reading</Button>
          <ButtonTransparent color="neutral" onClick={closeModal}>
            Finish Later
          </ButtonTransparent>
        </>
      }
    >
      {children}
    </DialogLayout>
  )
}
