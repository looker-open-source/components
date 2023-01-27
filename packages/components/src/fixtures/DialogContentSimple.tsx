/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import { DialogContext } from '../Dialog/DialogContext'

export const SimpleContent = () => {
  const { closeModal } = useContext(DialogContext)

  return (
    <>
      Dialog content
      <button onClick={closeModal}>Done</button>
    </>
  )
}
