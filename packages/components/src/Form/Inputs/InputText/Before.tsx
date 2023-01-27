/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useContext } from 'react'
import { Span } from '../../../Text'
import { measureElement } from '../../../utils'
import { InputTextContext } from './InputTextContext'
import type { InputTextProps } from './types'
import { InputTextContent } from './InputTextContent'

const Measure = ({ children }: React.PropsWithChildren<unknown>) => {
  const { setBeforeWidth } = useContext(InputTextContext)
  const ref = useCallback(
    (element: HTMLElement | null) => {
      const { width } = measureElement(element)
      setBeforeWidth(width)
    },
    [setBeforeWidth]
  )
  return <span ref={ref}>{children}</span>
}

export const Before = ({
  iconBefore,
  before,
}: Pick<InputTextProps, 'before' | 'iconBefore'>) => {
  const iconBeforeWrapped = iconBefore && (
    <InputTextContent pl="u2">{iconBefore}</InputTextContent>
  )
  const beforeStringWrapped = typeof before === 'string' && (
    <Measure>
      <InputTextContent pl="u2">
        <Span fontSize="small">{before}</Span>
      </InputTextContent>
    </Measure>
  )
  const beforeWrapped = before && typeof before !== 'string' && (
    <Measure>{before}</Measure>
  )

  return iconBeforeWrapped || beforeStringWrapped || beforeWrapped || null
}
