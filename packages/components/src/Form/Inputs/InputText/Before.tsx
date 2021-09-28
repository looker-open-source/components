/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC } from 'react'
import React, { useCallback, useContext } from 'react'
import { Span } from '../../../Text'
import { measureElement } from '../../../utils'
import { InputTextContext } from './InputTextContext'
import type { InputTextProps } from './types'
import { InputTextContent } from './InputTextContent'

const Measure: FC = ({ children }) => {
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
