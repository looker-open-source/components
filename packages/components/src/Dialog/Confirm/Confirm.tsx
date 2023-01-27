/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import { useToggle } from '../../utils/useToggle'
import type { ConfirmationProps } from './ConfirmationDialog'
import { ConfirmationDialog } from './ConfirmationDialog'

export interface ConfirmProps extends ConfirmationProps {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (open: () => void) => ReactNode
}

export function useConfirm(props: ConfirmationProps): [ReactNode, () => void] {
  const { value, setOn, setOff } = useToggle()

  const rendered = (
    <ConfirmationDialog {...props} isOpen={value} close={setOff} />
  )

  return [rendered, setOn]
}

export const Confirm = ({ children, ...props }: ConfirmProps) => {
  const [confirmation, confirm] = useConfirm(props)

  return (
    <>
      {children(confirm)}
      {confirmation}
    </>
  )
}
