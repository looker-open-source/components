/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react'
import noop from 'lodash/noop'

export interface DialogContextProps {
  /**
   * Indicates currently animating when true
   */
  busy?: boolean
  closeModal: () => void
  /**
   * Used to connect the DialogHeader's title to the Dialog's `aria-labelledby`
   * @private
   */
  id: string
}

const dialogContext: DialogContextProps = {
  closeModal: () => noop,
  id: '',
}

export const DialogContext = createContext(dialogContext)
