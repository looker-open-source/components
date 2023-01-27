/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ConfirmLayout, Button, ButtonTransparent } from '../../..'

export default function Layout() {
  function handleConfirm() {
    alert('Changes discarded')
  }
  function handleCancel() {
    alert('Went back')
  }
  return (
    <ConfirmLayout
      title="Discard Changes?"
      message="Are you sure you want to close the dialog? Unsaved changes will be lost."
      primaryButton={
        <Button onClick={handleConfirm} color="critical">
          Discard changes
        </Button>
      }
      secondaryButton={
        <ButtonTransparent onClick={handleCancel} color="neutral">
          Go back
        </ButtonTransparent>
      }
    />
  )
}
