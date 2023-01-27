/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react'
import React from 'react'
import { useToggle } from '../../utils'
import type { PromptBaseProps } from './PromptDialog'
import { PromptDialog } from './PromptDialog'

export interface PromptProps extends PromptBaseProps {
  /**
   * Render prop is passed the confirmation opener
   */
  children: (onClick: () => void) => ReactNode
}

export function usePrompt(props: PromptBaseProps): [ReactNode, () => void] {
  const { value, setOn, setOff } = useToggle()

  const rendered = <PromptDialog {...props} isOpen={value} close={setOff} />

  return [rendered, setOn]
}

export const Prompt = ({ children, ...props }: PromptProps) => {
  const [dialog, open] = usePrompt(props)

  return (
    <>
      {children(open)}
      {dialog}
    </>
  )
}
